"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type SectionKey = 'pinpoint' | 'assessment';

export default function ReviewLessonFoodDrink() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<SectionKey>('pinpoint');

  const playAudio = (word: string) => {
    const formattedWord = word
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^\w\s]/g, '');
    
    const audio = new Audio(`/audios/${formattedWord}.mp3`);
    audio.play().catch(e => console.error("Erro ao reproduzir áudio:", e));
  };

  const sections = {
    pinpoint: {
      title: "📖 PINPOINT - Sentences and Examples",
      content: [
        { english: "I eat bread and butter.", portuguese: "Eu como pão com manteiga" },
        { english: "I drink coffee with milk.", portuguese: "Eu bebo café com leite" },
        { english: "I like crackers.", portuguese: "Eu gosto de biscoitos salgados" },
        { english: "I like to eat granola.", portuguese: "Eu gosto de comer granola" },
        { english: "I drink juice.", portuguese: "Eu bebo suco" },
        { english: "I want to drink coffee.", portuguese: "Eu quero beber café" },
        { english: "I prefer yogurt.", portuguese: "Eu prefiro iogurte" },
        { english: "I prefer to eat eggs.", portuguese: "Eu prefiro comer ovos" },
        { english: "I don't eat chicken.", portuguese: "Eu não como frango" },
        { english: "I don't drink milk.", portuguese: "Eu não bebo leite" },
        { english: "I don't like honey.", portuguese: "Eu não gosto de mel" },
        { english: "I drink juice for breakfast.", portuguese: "Eu bebo suco no café da manhã" },
        { english: "I don't want to eat chicken for lunch.", portuguese: "Eu não quero comer frango no almoço" },
        { english: "I want to eat beef and salad for dinner.", portuguese: "Eu quero comer carne e salada no jantar" },
        { english: "I want a slice of apple pie, please.", portuguese: "Eu quero uma fatia de torta de maçã, por favor" },
        { english: "I want to drink a cup of coffee.", portuguese: "Eu quero beber uma xícara de café" },
        { english: "I don't want a glass of water, thanks.", portuguese: "Eu não quero um copo de água, obrigado" },
        // Questions from conversation section
        { english: "Do you like pancakes?", portuguese: "Você gosta de panquecas?" },
        { english: "Do you like to eat vegetables?", portuguese: "Você gosta de comer legumes?" },
        { english: "Do you want to drink soda?", portuguese: "Você quer beber refrigerante?" },
        { english: "What do you eat for breakfast?", portuguese: "O que você come no café da manhã?" },
        { english: "What do you like to drink?", portuguese: "O que você gosta de beber?" },
        // Answers from conversation section
        { english: "Yes, I do.", portuguese: "Sim, eu gosto." },
        { english: "No, I don't.", portuguese: "Não, eu não gosto." },
        { english: "I love rice and beans. And you?", portuguese: "Eu amo arroz e feijão. E você?" },
        { english: "I like to eat tomatoes.", portuguese: "Eu gosto de comer tomates." },
        { english: "I want to eat chocolate cookies.", portuguese: "Eu quero comer biscoitos de chocolate." },
        { english: "I don't want orange juice.", portuguese: "Eu não quero suco de laranja." },
        // Greetings from conversation section
        { english: "Good morning.", portuguese: "Bom dia." },
        { english: "Good afternoon.", portuguese: "Boa tarde." },
        { english: "Good evening.", portuguese: "Boa noite." },
        { english: "Good night.", portuguese: "Boa noite." },
        { english: "See you later.", portuguese: "Até mais tarde." },
        { english: "Bye. See you.", portuguese: "Tchau. Até mais." }
      ]
    },
    assessment: {
      title: "📊 Self-assessment",
      content: [
        "I can use some expressions to say hello.",
        "I can use some expressions to say goodbye.",
        "I can name some kinds of food and drink.",
        "I can say what I prefer to eat and drink for breakfast.",
        "I can say what I want to eat for lunch.",
        "I can say what I love to eat for dinner.",
        "I can ask people what they like to eat.",
        "I can say the kinds of food I don't eat.",
        "I can say what I like to eat and drink."
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-400 mb-6">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              📖 REVIEW 1 – Food & Drink
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Practice and reinforce what you've learned!
            </p>
            <div className="w-48 h-48 mx-auto relative">
              <Image
                src="/images/review-food-drink.jpg"
                alt="Food and Drink Review"
                fill
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key as SectionKey)}
              className={`py-4 px-2 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeSection === key
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-blue-200">
          
          {/* PINPOINT Section */}
          {activeSection === 'pinpoint' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                📖 Sentences and Examples
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.pinpoint.content.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-100 to-green-100 p-6 rounded-2xl shadow-lg border-2 border-blue-200">
                    <div className="flex items-start space-x-4">
                      <button 
                        onClick={() => playAudio(item.english)}
                        className="flex-shrink-0 text-blue-600 hover:text-blue-800 transition-colors mt-1"
                        aria-label="Play audio"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      </button>
                      <div>
                        <div className="text-xl font-bold text-blue-700 mb-2">{item.english}</div>
                        <div className="text-lg text-gray-600">{item.portuguese}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Assessment Section */}
          {activeSection === 'assessment' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
                📊 Self-assessment
              </h2>
              
              <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                <p className="text-lg text-purple-700 mb-6 text-center">
                  <strong>I can... (Eu consigo...)</strong>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sections.assessment.content.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border-2 border-purple-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <span className="text-purple-800">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 text-center">
                  <p className="text-yellow-800 font-bold">
                    ✅ Rate yourself: Excellent | Good | Needs Practice
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-yellow-300 text-center">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-gray-600">85% Complete</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-blue-300 text-center">
            <div className="text-4xl mb-2">⭐</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mastery Level</h3>
            <div className="text-3xl font-bold text-blue-600">Advanced</div>
            <p className="text-gray-600">Great progress!</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-green-300 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Next Steps</h3>
            <p className="text-gray-600">Practice daily conversations</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => router.push("/cursos/lesson6")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors text-lg"
          >
            ↞ Previous Lesson
          </button>
          <button
            onClick={() => router.push("/cursos/lesson7")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors text-lg"
          >
            Next Lesson ↠
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors text-lg">
            Save Progress 💾
          </button>
        </div>

        {/* Celebration Message */}
        <div className="text-center">
          <div className="bg-yellow-100 border-4 border-yellow-400 rounded-3xl p-6 inline-block">
            <p className="text-2xl font-bold text-yellow-700">
              🎉 Excellent work! You're mastering Food & Drink vocabulary! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}