"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { db, auth } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Pause, Play, RotateCcw, Volume2, ChevronDown, ChevronUp, X } from "lucide-react";

const listenItems = [
  { 
    key: "pancakes", 
    label: "", 
    image: "/images/pancakes-and-butter.jpg", 
    correctAnswer: "I eat pancakes and butter. And you?" 
  },
  { 
    key: "bread-ham", 
    label: "", 
    image: "/images/breadandham-image.jpg", 
    correctAnswer: "I eat bread and ham. And you?" 
  },
  { 
    key: "cookies", 
    label: "", 
    image: "/images/cookies-image.jpg", 
    correctAnswer: "You eat cookies." 
  },
  { 
    key: "tea", 
    label: "", 
    image: "/images/tea-image.jpg", 
    correctAnswer: "I drink tea." 
  },
  { 
    key: "coffee", 
    label: "", 
    image: "/images/coffeewithmilk-image.jpg", 
    correctAnswer: "I drink coffee with milk." 
  },
  { 
    key: "bread-butter", 
    label: "", 
    image: "/images/breadandbutter-image.jpg", 
    correctAnswer: "I eat bread and butter." 
  },
];

interface AudioPlayerProps {
  src: string;
  compact?: boolean;
}

const AudioPlayer = ({ src, compact = false }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current || new Audio(src);
    if (!audioRef.current) audioRef.current = audio;
    else audio.src = src;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, [src]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Audio error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const resetAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !progressBarRef.current) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;
    const percent = offsetX / width;
    audio.currentTime = percent * audio.duration;
    setProgress(percent * 100);
  };

  return (
    <div className={`flex items-center gap-2 ${compact ? "ml-2" : ""}`}>
      <button 
        onClick={togglePlayPause} 
        className={`${compact ? "p-1" : "p-2"} bg-blue-500 text-white rounded-full hover:bg-blue-600`}
      >
        {isPlaying ? <Pause size={compact ? 12 : 16} /> : <Play size={compact ? 12 : 16} />}
      </button>
      <button 
        onClick={resetAudio} 
        className={`${compact ? "p-1" : "p-2"} bg-gray-500 text-white rounded-full hover:bg-gray-600`}
      >
        <RotateCcw size={compact ? 12 : 16} />
      </button>
      
      {!compact && (
        <div 
          ref={progressBarRef}
          className="w-20 h-1 bg-gray-300 rounded-full overflow-hidden cursor-pointer"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full bg-blue-500 transition-all duration-200" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      )}
      
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  );
};

interface DragExercise {
  id: number;
  sentence: string;
  blank: string;
  options: string[];
  correctAnswers: string[];
  userAnswer: string | null;
}

export default function LessonFoodAndDrink() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});
  const [dialogues, setDialogues] = useState([
    { speaker: "waiter", text: "May I take your order?", fixed: true },
    { speaker: "customer", text: "", fixed: false },
    { speaker: "waiter", text: "", fixed: false },
    { speaker: "customer", text: "", fixed: false },
    { speaker: "waiter", text: "", fixed: false }
  ]);
  const [dragExercises, setDragExercises] = useState<DragExercise[]>([]);
  const [draggedItem, setDraggedItem] = useState<{ id: number; option: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [usedOptions, setUsedOptions] = useState<Set<string>>(new Set());
  const [mobileSelectedOption, setMobileSelectedOption] = useState<string | null>(null);
  
  // Estados para controle de expansão/recolhimento das seções
  const [sections, setSections] = useState({
    listen: true,
    speak: true,
    story: true,
    negative: true,
    pronoun: true
  });

  // Exercícios de arrastar e soltar para negativas (CORRIGIDOS)
  const negativeExercises: DragExercise[] = [
    {
      id: 1,
      sentence: "I ______ drink coffee.",
      blank: "______",
      options: ["don't", "do not"],
      correctAnswers: ["don't", "do not"],
      userAnswer: null
    },
    {
      id: 2,
      sentence: "He ______ eat meat.",
      blank: "______",
      options: ["doesn't", "does not"],
      correctAnswers: ["doesn't", "does not"],
      userAnswer: null
    },
    {
      id: 3,
      sentence: "We ______ want juice.",
      blank: "______",
      options: ["don't", "do not"],
      correctAnswers: ["don't", "do not"],
      userAnswer: null
    },
    {
      id: 4,
      sentence: "She ______ like tea.",
      blank: "______",
      options: ["doesn't", "does not"],
      correctAnswers: ["doesn't", "does not"],
      userAnswer: null
    }
  ];

  // Exercícios de arrastar e soltar para pronomes
  const pronounExercises: DragExercise[] = [
    {
      id: 6,
      sentence: "My father ______ bread every morning.",
      blank: "______",
      options: ["eats", "has", "enjoys", "loves", "likes", "prefers"],
      correctAnswers: ["eats", "has", "enjoys", "loves", "likes", "prefers"],
      userAnswer: null
    },
    {
      id: 7,
      sentence: "The cat ______ milk.",
      blank: "______",
      options: ["drinks", "loves", "prefers", "enjoys", "likes", "wants"],
      correctAnswers: ["drinks", "loves", "prefers", "enjoys", "likes", "wants"],
      userAnswer: null
    },
    {
      id: 8,
      sentence: "John ______ green tea.",
      blank: "______",
      options: ["prefers", "likes", "drinks", "enjoys", "loves", "has"],
      correctAnswers: ["prefers", "likes", "drinks", "enjoys", "loves", "has"],
      userAnswer: null
    }
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        
        // Carregar notas dos exercícios de escuta
        const newNotes: Record<string, string> = {};
        for (const item of listenItems) {
          const ref = doc(db, "userNotes", `${user.uid}_${item.key}`);
          const snap = await getDoc(ref);
          newNotes[item.key] = snap.exists() ? snap.data().text : "";
        }
        setNotes(newNotes);
        
        // Carregar história salva
        const storyRef = doc(db, "userStories", `${user.uid}_lesson2`);
        const storySnap = await getDoc(storyRef);
        if (storySnap.exists() && storySnap.data().dialogues) {
          setDialogues(storySnap.data().dialogues);
        }
      }
    });
    
    // Inicializar exercícios de arrastar
    setDragExercises([...negativeExercises, ...pronounExercises]);
    
    return () => unsubscribe();
  }, []);

  const handleChange = (key: string, value: string) => {
    setNotes((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheck = (key: string) => {
    setShowAnswers((prev) => ({ ...prev, [key]: true }));
    
    if (userId) {
      const ref = doc(db, "userNotes", `${userId}_${key}`);
      setDoc(ref, { text: notes[key] }, { merge: true })
        .catch(error => console.error("Error saving note: ", error));
    }
  };

  const handleDialogueTextChange = (index: number, value: string) => {
    const newDialogues = [...dialogues];
    newDialogues[index] = { ...newDialogues[index], text: value };
    setDialogues(newDialogues);
  };

  const handleDialogueSpeakerChange = (index: number, value: string) => {
    const newDialogues = [...dialogues];
    newDialogues[index] = { ...newDialogues[index], speaker: value };
    setDialogues(newDialogues);
  };

  const saveStory = async () => {
    if (userId) {
      const ref = doc(db, "userStories", `${userId}_lesson2`);
      await setDoc(ref, { dialogues });
      alert("História salva com sucesso!");
    }
  };

  // Funções para arrastar e soltar
  const handleDragStart = (id: number, option: string) => {
    setDraggedItem({ id, option });
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (exerciseId: number) => {
    if (draggedItem) {
      const updatedExercises = dragExercises.map(exercise => {
        if (exercise.id === exerciseId) {
          return { ...exercise, userAnswer: draggedItem.option };
        }
        return exercise;
      });
      setDragExercises(updatedExercises);
      
      // Marcar a opção como usada se estiver correta
      const exercise = dragExercises.find(e => e.id === exerciseId);
      if (exercise && exercise.correctAnswers.includes(draggedItem.option)) {
        setUsedOptions(prev => new Set(prev).add(draggedItem.option));
      }
      
      setDraggedItem(null);
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedItem(null);
  };

  const resetDragExercise = (id: number) => {
    const updatedExercises = dragExercises.map(exercise => {
      if (exercise.id === id) {
        // Remover da lista de opções usadas
        if (exercise.userAnswer) {
          setUsedOptions(prev => {
            const newSet = new Set(prev);
            newSet.delete(exercise.userAnswer!);
            return newSet;
          });
        }
        return { ...exercise, userAnswer: null };
      }
      return exercise;
    });
    setDragExercises(updatedExercises);
  };

  // Função para seleção móvel
  const handleMobileSelect = (option: string) => {
    setMobileSelectedOption(option);
  };

  const handleMobileDrop = (exerciseId: number) => {
    if (mobileSelectedOption) {
      const updatedExercises = dragExercises.map(exercise => {
        if (exercise.id === exerciseId) {
          return { ...exercise, userAnswer: mobileSelectedOption };
        }
        return exercise;
      });
      setDragExercises(updatedExercises);
      
      // Marcar a opção como usada se estiver correta
      const exercise = dragExercises.find(e => e.id === exerciseId);
      if (exercise && exercise.correctAnswers.includes(mobileSelectedOption)) {
        setUsedOptions(prev => new Set(prev).add(mobileSelectedOption));
      }
      
      setMobileSelectedOption(null);
    }
  };

  // Função para alternar expansão de seções
  const toggleSection = (section: keyof typeof sections) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Dividir a frase em partes para renderização
  const renderSentence = (exercise: DragExercise) => {
    const parts = exercise.sentence.split(exercise.blank);
    return (
      <>
        {parts[0]}
        {exercise.userAnswer ? (
          <span className="font-bold text-purple-600">{exercise.userAnswer}</span>
        ) : (
          <span 
            className="inline-block min-w-[60px] h-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded mx-1 cursor-pointer"
            onClick={() => mobileSelectedOption && handleMobileDrop(exercise.id)}
          >
            {mobileSelectedOption && (
              <span className="text-xs text-gray-400 flex items-center justify-center h-full">
                Clique para soltar
              </span>
            )}
          </span>
        )}
        {parts[1]}
      </>
    );
  };

  return (
    <div className="min-h-screen rounded-2xl py-16 px-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/images/lesson1-86.jpg')` }}>
      <div className="max-w-5xl mx-auto bg-white bg-opacity-95 rounded-[40px] p-10 shadow-lg">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0c4a6e] mb-6">Lesson 2 - Food & Drink</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            🎧 Esta lição foi feita para treinar a escuta em inglês. Ouça com atenção e escreva exatamente o que você ouviu.
          </p>
        </div>

        {/* LISTEN AND PRACTICE */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-[30px] shadow-lg mb-10 overflow-hidden">
          <div className="bg-orange-500 text-white py-4 px-8 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">🔊 LISTEN AND PRACTICE</h2>
              <button 
                onClick={() => toggleSection('listen')}
                className="ml-4 p-2 rounded-full hover:bg-orange-600 transition"
              >
                {sections.listen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
            <AudioPlayer src="/audios/l2_listenandpractice.mp3" />
          </div>

          {sections.listen && (
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
              {listenItems.map((item) => (
                <div key={item.key} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-orange-200">
                  <div className="w-[180px] h-[180px] relative mb-4">
                    <Image 
                      src={item.image} 
                      alt={item.label} 
                      fill
                      className="rounded-lg object-cover border-2 border-orange-300"
                    />
                  </div>

                  <div className="w-full mb-3">
                    <textarea
                      placeholder="Escreva aqui o que ouviu..."
                      value={notes[item.key] || ""}
                      onChange={(e) => handleChange(item.key, e.target.value)}
                      className="w-full h-[80px] resize-none p-3 border border-orange-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex gap-3 w-full">
                    <button
                      onClick={() => handleCheck(item.key)}
                      className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition font-medium"
                    >
                      Verificar
                    </button>
                    
                    <button
                      onClick={() => {
                        handleChange(item.key, "");
                        setShowAnswers(prev => ({ ...prev, [item.key]: false }));
                      }}
                      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                    >
                      Limpar
                    </button>
                  </div>

                  {showAnswers[item.key] && (
                    <div className="mt-3 w-full p-3 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-sm text-green-700">
                        ✅ <span className="font-medium">Resposta correta:</span> {item.correctAnswer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SPEAK RIGHT NOW */}
        <div className="bg-red-50 border-2 border-red-200 rounded-[30px] shadow-lg mb-10 overflow-hidden">
          <div className="bg-red-500 text-white py-4 px-8 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">SPEAK RIGHT NOW</h2>
              <button 
                onClick={() => toggleSection('speak')}
                className="ml-4 p-2 rounded-full hover:bg-red-600 transition"
              >
                {sections.speak ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
          </div>

          {sections.speak && (
            <div className="p-8">
              <div className="mb-6 p-4 rounded-xl bg-white shadow">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-lg">— I eat bread and ham. And you?</p>
                    <AudioPlayer src="/audios/I_eat_bread_and_ham.and_you.mp3" compact />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg">— I eat bread and cheese.</p>
                    <AudioPlayer src="/audios/I_eat_bread_and_cheese.mp3" compact />
                  </div>
                </div>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-white shadow">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-lg">— I eat bread and I drink milk. And you?</p>
                    <AudioPlayer src="/audios/I_eat_bread_and_i_drink_milk.and_you.mp3" compact />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg">— I eat crackers and I drink juice.</p>
                    <AudioPlayer src="/audios/ieatcrackersandidrinkjuice.mp3" compact />
                  </div>
                </div>
              </div>

              <div className="bg-red-100 border-2 border-red-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4">Vocabulary Options:</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    "bread", "crackers", "pancakes", "cheese", "ham",
                    "juice", "water", "milk", "tea", "coffee"
                  ].map((item) => (
                    <div key={item} className="relative group">
                      <button
                        onClick={() => new Audio(`/audios/${item}.mp3`).play()}
                        className="w-full bg-red-200 hover:bg-red-300 text-red-800 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <Volume2 size={16} />
                        {item}
                      </button>
                      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        Clique para ouvir
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BUILD YOUR OWN STORY */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-[30px] shadow-lg overflow-hidden mb-10">
          <div className="bg-yellow-500 text-white py-4 px-8 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">🟨 BUILD YOUR OWN STORY</h2>
              <button 
                onClick={() => toggleSection('story')}
                className="ml-4 p-2 rounded-full hover:bg-yellow-600 transition"
              >
                {sections.story ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
          </div>

          {sections.story && (
            <div className="p-8">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/images/l1_buildastory.png" 
                  alt="Cena de restaurante" 
                  width={600}
                  height={400}
                  className="rounded-xl border-2 border-yellow-300"
                />
              </div>

              <div className="space-y-3">
                {dialogues.map((dialogue, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-xl shadow-md ${
                      index % 2 === 0 
                        ? "bg-blue-50 border-2 border-blue-200" 
                        : "bg-green-50 border-2 border-green-200"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                      <div className="flex-1 min-w-[120px]">
                        <label className="block text-xs font-semibold text-gray-500 mb-1">
                          Nome do Personagem:
                        </label>
                        <input
                          value={dialogue.speaker}
                          onChange={(e) => handleDialogueSpeakerChange(index, e.target.value)}
                          className="w-full p-2 border rounded-md font-bold bg-white text-sm"
                          placeholder="Digite o nome"
                        />
                      </div>
                    </div>
                    
                    {dialogue.fixed ? (
                      <p className="text-gray-700 mt-2 text-sm">{dialogue.text}</p>
                    ) : (
                      <textarea
                        value={dialogue.text}
                        onChange={(e) => handleDialogueTextChange(index, e.target.value)}
                        placeholder={`Escreva a fala do ${dialogue.speaker || 'personagem'}...`}
                        className="w-full h-14 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent mt-2 text-sm"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-100 border-2 border-yellow-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">Dicas para sua história:</h3>
                <ul className="list-disc pl-5 space-y-2 text-yellow-700 text-sm">
                  <li>Sinta-se livre para usar o tradutor ou ChatGPT para auxiliar no exercício.</li>
                  <li>Inclua alimentos e bebidas que você aprendeu nesta lição</li>
                  <li>Tente fazer perguntas como "And you?" para continuar a conversa</li>
                  <li>Use "I eat..." para comidas e "I drink..." para bebidas</li>
                  <li>Sequência sugerida: Pedido → Pergunta sobre acompanhamentos → Resposta → Confirmação</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <button 
                  onClick={saveStory}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                >
                  Salvar Minha História
                </button>
              </div>
            </div>
          )}
        </div>

        {/* NEGATIVE SENTENCES DRILLS (CORRIGIDO) */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-[30px] shadow-lg overflow-hidden mb-10">
          <div className="bg-purple-600 text-white py-4 px-8 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">🧠 NEGATIVE SENTENCES DRILLS</h2>
              <button 
                onClick={() => toggleSection('negative')}
                className="ml-4 p-2 rounded-full hover:bg-purple-700 transition"
              >
                {sections.negative ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
          </div>

          {sections.negative && (
            <div className="p-8">
              <p className="text-purple-700 mb-6 italic">
                Pratique a construção de frases negativas usando "don't" e "doesn't". 
                Arraste as palavras corretas para completar as frases.
              </p>
              
              <div className="mb-6 bg-purple-100 border-2 border-purple-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Regras de uso:</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-700 text-sm">
                  <li><strong>Don't</strong> = Do not (usado com I, you, we, they)</li>
                  <li><strong>Doesn't</strong> = Does not (usado com he, she, it)</li>
                  <li>Com doesn't, o verbo principal fica na forma base, sem "s"</li>
                  <li>Exemplo: She <span className="font-bold">doesn't eat</span> (não "doesn't eats")</li>
                </ul>
              </div>
              
              {mobileSelectedOption && (
                <div className="mb-4 p-3 bg-purple-200 rounded-lg flex items-center justify-between">
                  <span className="font-medium text-purple-800">Selecionado: {mobileSelectedOption}</span>
                  <button 
                    onClick={() => setMobileSelectedOption(null)}
                    className="p-1 bg-purple-500 text-white rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Opções para arrastar */}
                <div className="bg-white p-4 rounded-xl border-2 border-purple-300">
                  <h3 className="text-lg font-bold text-purple-700 mb-3">Opções:</h3>
                  <div className="flex flex-wrap gap-2">
                    {["don't", "do not", "doesn't", "does not"]
                      .filter(option => !usedOptions.has(option))
                      .map((option, idx) => (
                        <div
                          key={`option-${idx}`}
                          className={`px-4 py-2 bg-purple-200 text-purple-800 rounded-lg cursor-move transition-all ${
                            draggedItem?.option === option ? 'opacity-50 scale-95 shadow-lg' : 'opacity-100'
                          }`}
                          draggable
                          onDragStart={() => handleDragStart(0, option)}
                          onDragEnd={handleDragEnd}
                          onClick={() => handleMobileSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                  </div>
                </div>
                
                {/* Frases para completar */}
                <div className="space-y-4">
                  {dragExercises
                    .filter(ex => ex.id <= 4)
                    .map((exercise) => (
                      <div 
                        key={exercise.id}
                        className="p-4 bg-white rounded-xl border border-purple-200 shadow-sm"
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(exercise.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-lg font-medium text-gray-800">
                            {renderSentence(exercise)}
                          </p>
                          {exercise.userAnswer && (
                            <button 
                              onClick={() => resetDragExercise(exercise.id)}
                              className="text-sm text-purple-600 hover:text-purple-800"
                            >
                              Redefinir
                            </button>
                          )}
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          {exercise.userAnswer && (
                            <span>
                              {exercise.correctAnswers.includes(exercise.userAnswer) ? (
                                <span className="text-green-600">✅ Correto!</span>
                              ) : (
                                <span className="text-red-600">❌ Respostas corretas: {exercise.correctAnswers.join(' ou ')}</span>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PRONOUN PRACTICE DRILLS */}
        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-[30px] shadow-lg overflow-hidden">
          <div className="bg-indigo-600 text-white py-4 px-8 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">💬 PRONOUN PRACTICE DRILLS</h2>
              <button 
                onClick={() => toggleSection('pronoun')}
                className="ml-4 p-2 rounded-full hover:bg-indigo-700 transition"
              >
                {sections.pronoun ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
          </div>

          {sections.pronoun && (
            <div className="p-8">
              <p className="text-indigo-700 mb-6 italic">
                Pratique o uso de pronomes (he, she, it) com verbos no presente simples. 
                Arraste as formas verbais corretas para completar as frases.
              </p>
              
              <div className="mb-6 bg-indigo-100 border-2 border-indigo-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Regras de uso:</h3>
                <ul className="list-disc pl-5 space-y-2 text-indigo-700 text-sm">
                  <li><strong>He/She/It</strong> = Requerem verbo com "s" no final no presente simples</li>
                  <li>Exemplo: He <span className="font-bold">drinks</span>, she <span className="font-bold">eats</span>, it <span className="font-bold">tastes</span></li>
                  <li>Exceções: Verbos terminados em -ss, -sh, -ch, -x, -o → adicionam "es"</li>
                  <li>Exemplo: She <span className="font-bold">goes</span>, he <span className="font-bold">watches</span></li>
                </ul>
              </div>
              
              {mobileSelectedOption && (
                <div className="mb-4 p-3 bg-indigo-200 rounded-lg flex items-center justify-between">
                  <span className="font-medium text-indigo-800">Selecionado: {mobileSelectedOption}</span>
                  <button 
                    onClick={() => setMobileSelectedOption(null)}
                    className="p-1 bg-indigo-500 text-white rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Opções para arrastar */}
                <div className="bg-white p-4 rounded-xl border-2 border-indigo-300">
                  <h3 className="text-lg font-bold text-indigo-700 mb-3">Opções:</h3>
                  <div className="flex flex-wrap gap-2">
                    {["drinks", "eats", "prefers", "loves", "enjoys", "has", "likes", "wants"]
                      .filter(option => !usedOptions.has(option))
                      .map((option, idx) => (
                        <div
                          key={`option-${idx}`}
                          className={`px-4 py-2 bg-indigo-200 text-indigo-800 rounded-lg cursor-move transition-all ${
                            draggedItem?.option === option ? 'opacity-50 scale-95 shadow-lg' : 'opacity-100'
                          }`}
                          draggable
                          onDragStart={() => handleDragStart(0, option)}
                          onDragEnd={handleDragEnd}
                          onClick={() => handleMobileSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                  </div>
                </div>
                
                {/* Frases para completar */}
                <div className="space-y-4">
                  {dragExercises
                    .filter(ex => ex.id > 4)
                    .map((exercise) => (
                      <div 
                        key={exercise.id}
                        className="p-4 bg-white rounded-xl border border-indigo-200 shadow-sm"
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(exercise.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-lg font-medium text-gray-800">
                            {renderSentence(exercise)}
                          </p>
                          {exercise.userAnswer && (
                            <button 
                              onClick={() => resetDragExercise(exercise.id)}
                              className="text-sm text-indigo-600 hover:text-indigo-800"
                            >
                              Redefinir
                            </button>
                          )}
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          {exercise.userAnswer && (
                            <span>
                              {exercise.correctAnswers.includes(exercise.userAnswer) ? (
                                <span className="text-green-600">✅ Correto!</span>
                              ) : (
                                <span className="text-red-600">❌ Respostas possíveis: {exercise.correctAnswers.join(', ')}</span>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          )}
        </div>
                <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => router.push("https://website-english-course.vercel.app/cursos/lesson1")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            &larr; Lição Anterior
          </button>
          <button
            onClick={() => router.push("/cursos/lesson3")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Próxima Lição &rarr;
          </button>
        </div>
      </div>
    </div>

    
  );
}