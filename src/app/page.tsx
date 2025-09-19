"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#ffffff]">
      {/* Header Section */}
      <div className="relative z-10 pt-24 pb-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 text-[#000000]">
          Eric Sullivan - Inglês para Profissionais.
        </h1>
        <p className="text-2xl text-[#333] max-w-3xl mx-auto mb-8">
          Bem-vindo ao curso que vai transformar sua relação com o inglêsssss!
          Você está preparado para finalmente mudar a sua vida com o inglês ou
          vai apenas assistir a gente mudando a nossa?
        </p>
        <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 text-40 transition-all duration-300 hover:from-purple-600 hover:to-purple-800 active:animate-glow">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 rounded-2xl shadow-xl p-8 mb-16 border-2 border-[#bfdbfe]">
          <h2 className="text-3xl font-bold mb-8 text-[#000000] text-center">Quem Sou</h2>
          <p className="text-xl mb-6 text-[#000000]">
            Sou professor de inglês com formação em Letras - Inglês e Engenharia de Software, unindo teoria acadêmica a uma sólida experiência prática em ambientes técnicos e profissionais. Ao longo dos anos, lecionei tanto presencialmente quanto online, atendendo profissionais das áreas de T.I., turismo, administração e comércio exterior. Meu maior propósito é transformar a trajetória de cada aluno por meio do inglês, impulsionando suas carreiras, ampliando suas oportunidades e contribuindo diretamente para seu crescimento profissional e sucesso financeiro.
          </p>
        </section>

        {/* Why Our Course Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-2 border-[#bfdbfe]">
          <h2 className="text-3xl font-bold mb-8 text-[#000000] text-center">
            Por Que Escolher Nosso Curso?
          </h2>
          <p className="text-xl mb-6 text-[#000000] text-center max-w-3xl mx-auto">
            Aqui, o inglês não é apenas estudado, é vivido. Desde o primeiro mês, nossos alunos ganham confiança para se comunicar no dia a dia e no ambiente profissional, graças a uma metodologia que vai além do tradicional. Usamos metodologias ativas, tecnologia de ponta e aplicativos que acompanham você durante toda a semana, com técnicas de memorização, prática constante e ferramentas digitais que geram resultados reais. Nosso objetivo é que você pense em inglês, se comunique com naturalidade e alcance a fluência. Você não está apenas começando um curso — está dando o primeiro passo para uma transformação na sua vida pessoal e profissional.
          </p>
        </section>

        {/* Tools Section */}
        <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 rounded-2xl shadow-xl p-8 mb-16 border-2 border-[#bfdbfe]">
          <h2 className="text-3xl font-bold mb-8 text-[#000000] text-center">
            Ferramentas que Potencializam o Aprendizado
          </h2>
          <div className="text-xl text-[#000000] max-w-4xl mx-auto space-y-5">
            <p>📱 Aplicativos de memorização com revisão espaçada (Spaced Repetition)</p>
            <p>🤖 Chatbots com IA para praticar conversação a qualquer hora</p>
            <p>🌍 Plataformas de intercâmbio linguístico para falar com nativos</p>
            <p>🎧 Podcasts e vídeos interativos com transcrição e glossário</p>
            <p>🧠 Jogos e desafios semanais para testar e fixar o conteúdo</p>
          </div>
        </section>

        {/* Public & Methodology */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#bfdbfe] hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8">Meu Público</h2>
            <ul className="list-disc pl-6 text-xl space-y-4">
              <li>Profissionais de T.I</li>
              <li>Engenheiros de Software</li>
              <li>Profissionais de Saúde</li>
              <li>Engenheiros e Técnicos</li>
              <li>Comissários de Bordo</li>
              <li>Profissionais Offshore</li>
              <li>Advogados e Empreendedores</li>
              <li>Estudantes Internacionais</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#bfdbfe] hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8">Metodologia</h2>
            <div className="space-y-5 text-xl">
              <p>✅ Foco em conversação e fluência</p>
              <p>✅ Situações reais do ambiente profissional</p>
              <p>✅ Vocabulário técnico por área de atuação</p>
              <p>✅ Aulas 100% online com flexibilidade</p>
              <p>✅ Ferramentas digitais de memorização</p>
              <p>✅ Contato com falantes nativos</p>
              <p>✅ Material didático personalizado</p>
            </div>
          </div>
        </div>

        {/* Planos Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-2 border-[#bfdbfe]">
          <h2 className="text-3xl font-bold mb-12 text-[#000000] text-center">Planos de Estudo</h2>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Plano Turma */}
            <div className="border-2 border-[#bfdbfe] rounded-xl p-8 bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:scale-105 transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6">Turma</h3>
              <div className="text-4xl font-bold mb-6">R$ 200/mês</div>
              <ul className="list-disc pl-6 space-y-4 text-xl mb-8 flex-1">
                <li>2 horas semanais em grupo</li>
                <li>Material didático digital</li>
                <li>simulações de conversas reais para praticar a fluência</li>
                <li>Aplicativos de memorização</li>
                <li>Atividades de conversação com estrangeiros</li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-xl transition-all duration-300 group-hover:bg-yellow-300 group-hover:text-black mt-auto">
                Inscreva-se
              </button>
            </div>

            {/* Plano Individual */}
            <div className="border-2 border-[#bfdbfe] rounded-xl p-8 bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:scale-105 transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6">Individual</h3>
              <div className="text-4xl font-bold mb-6">R$ 300/mês</div>
              <ul className="list-disc pl-6 space-y-4 text-xl mb-8 flex-1">
                <li>Todos benefícios do Plano Turma</li>
                <li>Aulas 1:1 personalizadas</li>
                <li>Atividades de conversação com estrangeiros</li>
                <li>Conteúdos com filmes, séries & Podcasts</li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-xl transition-all duration-300 group-hover:bg-green-300 group-hover:text-black mt-auto">
                Inscreva-se
              </button>
            </div>

            {/* Plano Diamante */}
            <div className="border-2 border-[#bfdbfe] rounded-xl p-8 bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:scale-105 transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6">Diamante</h3>
              <div className="text-4xl font-bold mb-6">R$ 500/mês</div>
              <ul className="list-disc pl-6 space-y-4 text-xl mb-8 flex-1">
                <li>4 horas semanais individuais (2 horas cada aula)</li>
                <li>Materiais premium internacionais</li>
                <li>Atividades de conversação com estrangeiros</li>
                <li>Mentoria e suporte prioritário</li>
                <li>Conteúdo extra para estudar durante a semana</li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-xl transition-all duration-300 group-hover:bg-sky-300 group-hover:text-black mt-auto">
                Inscreva-se
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
