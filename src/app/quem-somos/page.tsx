"use client"

import React from 'react';
import { motion } from "framer-motion";


const QuemSomos: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800">
      <motion.h1
        className="text-6xl font-bold mb-6 text-center" // Changed from text-3xl to text-6xl
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FFDDC1, #FFAAAA, #D4A5FF, #A0C4FF, #B5EAD7)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Quem Somos
      </motion.h1>
      <p className="text-lg mb-8 text-gray-700">
      O GESDI (Grupo de Estudos e Pesquisa, Gêneros, Sexualidades e Diferenças nos Vários EspaçosTempos da História e dos Cotidianos), é um grupo de pesquisa dedicado à combater  práticas misóginas, machistas e LGBTQIAPNfóbicas. Nossa equipe é composta por pesquisadoras, pesquisadores, professoras, professores, gestoras, gestores, alunas e alunos da graduação engajados em investigar como se processam as práticas de exclusão nos vários espaçostempos históricos e dos cotidianos, sejam os dos cursos de formações de professoras, os das escolas ou de outros espaços sociais que estejam relacionados com a história das mulheres, com as questões dos gêneros, das sexualidades e com a laicidade do Estado, pois somente num Estado Laíco as maiorias minorizadas serão respeitada…
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Nossa Equipe</h2>
      <ul className="space-y-6">
      <li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="/images/2.1DenizeSepulveda.jpg" 
      alt="Denize Sepulveda" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Denize Sepulveda</strong> - Líder do GESDI<br />
    <span className="text-gray-600">Professora Associada da Faculdade de Educação da UERJ, do PROPED e do PPGEDU.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/9823519245400422" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:denizesepulveda@hotmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

        {/* José Antonio Sepulveda */}
        <li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.2JoséAntonioSepulveda.jpg" 
      alt="José Antonio Sepulveda" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">José Antonio Sepulveda</strong> - Vice-líder do GESDI<br />
    <span className="text-gray-600">Professor Associado da Faculdade de Educação da UFF e do PPG em Educação.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/6594616768887294" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:josesepulveda@id.uff.br" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

        {/* Amanda Mendonça */}
        <li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.3AmandaMendonça.jpg" 
      alt="Amanda Mendonça" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Amanda Mendonça</strong> - Coordenadora do GESDI<br />
    <span className="text-gray-600">Professora Adjunta da Faculdade de Formação de Professores da UERJ e do PPGEDU.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/7666060740151928" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:amandademendonca@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

        {/* Alexandre Campos Duarte */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.4AlexandreCampos.jpeg" 
      alt="Alexandre Campos Duarte" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Alexandre Campos Duarte</strong> - Pesquisador do GESDI<br />
    <span className="text-gray-600">Mestrando em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/1399516105425528" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:acamposduarte83@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Alexandre Mérida */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.5AlexandreMérida.jpg" 
      alt="Alexandre Mérida" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Alexandre Mérida</strong> - Pesquisador do GESDI<br />
    <span className="text-gray-600">Doutorando em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/3932560830557767" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:alexandremerida@yahoo.com.br" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

       {/* Anna Clara Granado */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.6AnnaClaraGranado.jpg" 
      alt="Anna Clara Granado" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Anna Clara Granado</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Doutoranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/7686366039128027" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:annaclaragranado@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

       {/* Brunna Santana Ribas */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.7BrunnaSantana.jpg" 
      alt="Brunna Santana Ribas" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Brunna Santana Ribas</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Mestranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/7172410089757446" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:brunnasantanaribas@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

        {/* Carolina Manoel */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.8CarolineManoel.jpg" 
      alt="Carolina Manoel" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Carolina Manoel</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Mestranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/2453773348555960" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:carolinedecassiamanoel@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

       {/* Daniella Anatalicio */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.9DaniellaAnatalicio.jpg" 
      alt="Daniella Anatalicio" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Daniella Anatalicio</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Graduanda em Pedagogia na Faculdade de Formação de Professores/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/3634254240009251" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:anatalicio96@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

      {/* Domingos Neto */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.10Domingosneto.jpg" 
      alt="Domingos Neto" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Domingos Neto</strong> - Pesquisador do GESDI<br />
    <span className="text-gray-600">Doutorando em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/1745843005823969" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:domingosnetoj82@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Eurídice Hespanhol */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.11EuridiceHespanhol.jpg" 
      alt="Eurídice Hespanhol" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Eurídice Hespanhol</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Doutoranda do PROPED/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/4650510230480031" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:ehm.pessoa@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Iasmin Carvalho */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.12IasminCarvalho.jpg" 
      alt="Iasmin Carvalho" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Iasmin Carvalho</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Graduanda em História UFF e Bolsista de Iniciação Científica.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/8043364539348837" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:iasmin.rc1@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Izadora Montenegro */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.13IsadoraMontenegro.jpg" 
      alt="Izadora Montenegro" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Izadora Montenegro</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Mestranda em Educação PROPED/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/6493841196346170" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:isamontped@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>
        {/* Joana Bispo */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.15JoanaNély.jpg" 
      alt="Joana Bispo" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Joana Bispo</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Doutoranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/6936804170054508" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:bisjoana@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Lívia Martins */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.16LiviaMartins.jpg" 
      alt="Lívia Martins" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Lívia Martins</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Doutoranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/1027008848981790" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:liviambpereira24@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Luciana Khun */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.17LucianaKuhn.jpg" 
      alt="Luciana Khun" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Luciana Khun</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Mestranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/3754038235782229" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:lucianakuhn2004@yahoo.com.br" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

        {/* Maria Priscila de Jesus */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.14MariaPriscila.jpg" 
      alt="Maria Priscila de Jesus" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Maria Priscila de Jesus</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Doutoranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/3134230769559151" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:pri_aiye@yahoo.com.br" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Nathalia Neves */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.18NathaliaNeves.jpg" 
      alt="Nathalia Neves" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Nathalia Neves</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Graduanda em Pedagogia na Faculdade de Formação de Professores/UERJ e Bolsista de Iniciação Científica.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/8066388256058665" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:nathalianevespinho@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Priscila Vasconcelos */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.19PriscilaVasconcellos.jpg" 
      alt="Priscila Vasconcelos" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Priscila Vasconcelos</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Mestranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/1046686092525820" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:priscila.vbraga@yahoo.com.br" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Saulo Quintanilha */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.20SauloQuintanilha.jpg" 
      alt="Saulo Quintanilha" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Saulo Quintanilha</strong> - Pesquisador do GESDI<br />
    <span className="text-gray-600">Graduando em Pedagogia na Faculdade de Formação de Professores/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/1536916386284163" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:sauloquin.app@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Renan Corrêa */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.21Renan Correa.jpg" 
      alt="Renan Corrêa" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Renan Corrêa</strong> - Pesquisador do GESDI<br />
    <span className="text-gray-600">Mestre em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/6024484066696308" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:naner_rj@hotmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Thales Couto */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="/images/ThallesCouto.jpg" 
      alt="Thales Couto" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Thalles Gustavo Leite Couto</strong> - Pesquisador do GESDI<br />
    <span className="text-gray-600">Bolsista de Iniciação Científica pela CNPQ. Graduando em história pela UERJ FFP.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/5764104512075788" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:thallescouto360@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Thaya Pereira */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.22ThayaPereira.jpg" 
      alt="Thaya Pereira" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Thaya Pereira</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Mestranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/1980614090349648" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:thaya.gr@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Teresa Vitória Alves */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.23TeresaVit.jpeg" 
      alt="Teresa Vitória Alves" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Teresa Vitória Alves</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Doutora PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/2217655483474385" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:teresavalves@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Welma Mafra */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.24WelmaMafra.jpg" 
      alt="Welma Mafra" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Welma Mafra</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Doutoranda em Educação PROPED/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/5613079347968598" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:welma.mafra@ibc.gov.br" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Yuri Sepulveda */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.25YuriSepulveda.jpg" 
      alt="Yuri Sepulveda" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Yuri Sepulveda</strong> - Pesquisador do GESDI<br />
    <span className="text-gray-600">Doutorando da Faculdade de Letras na Universidade de Lisboa.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="https://lattes.cnpq.br/0972299128690561" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:yurisepulveda1@hotmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>

{/* Maria Leão */}
<li className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
    <img 
      src="images/2.26MariaLeão.jpg" 
      alt="Maria Leão" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div>
    <strong className="text-xl font-medium text-gray-900">Maria Leão</strong> - Pesquisadora do GESDI<br />
    <span className="text-gray-600">Doutoranda em Educação PPGEDU/UERJ.</span><br />
    <div className="flex space-x-4 mt-2">
      <a 
        href="http://lattes.cnpq.br/4165705965583820" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Lattes
      </a>
      <a 
        href="mailto:marialasilveira@gmail.com" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        Email
      </a>
    </div>
  </div>
</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">Nossas Funções</h2>
      <p className="text-lg text-gray-700">
        O GESDI tem como principais funções:<br />
        - Promover pesquisas na área de Gêneros e Sexualidade;<br />
        - Fomentar o diálogo entre pesquisadores e instituições;<br />
        - Publicar artigos e trabalhos científicos;<br />
        - Organizar eventos e workshops relacionados à educação e pesquisa.
      </p>
    </div>
  );
};

export default QuemSomos;