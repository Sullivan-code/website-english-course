"use client"

import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";

const FaleConosco: React.FC = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-white">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Fale Conosco
        </h1>

        {/* Description */}
        <p className="text-xl mb-8 max-w-2xl text-gray-600">
          Estamos aqui para ajudar! Entre em contato conosco através das nossas redes sociais ou WhatsApp.
        </p>

        {/* Email Form for Logged-in Users */}
        {isSignedIn && (
          <div className="w-full max-w-md bg-pink-100 p-8 rounded-lg shadow-2xl mb-12 transition-all duration-300 hover:shadow-3xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Envie-nos um Email</h2>
            <form action="mailto:grupogesdi@gmail.com" method="post" encType="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white py-3 px-6 rounded-md font-bold transition-all duration-500"
                style={{
                  background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #0000ff, #8000ff)',
                  backgroundSize: '400% 400%',
                  animation: 'rainbow 8s linear infinite'
                }}
              >
                Enviar
              </button>
            </form>
          </div>
        )}

        {/* Social Media Icons */}
        <div className="flex space-x-8">
          <a href="https://www.instagram.com/gesdiuerj/?igsh=MWx2N3lram1qZG42OA%3D%3D#" target="_blank" rel="noopener noreferrer" className="p-6 rounded-full bg-pink-500 hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <FaInstagram size={50} className="text-white" />
          </a>
          <a href="https://www.facebook.com/gesdi1?rdid=ljJOZP5hiZ3dfLit&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BGUtcS9We%2F#" target="_blank" rel="noopener noreferrer" className="p-6 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <FaFacebook size={50} className="text-white" />
          </a>
          <a href="https://wa.me/5521972883178" target="_blank" rel="noopener noreferrer" className="p-6 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <FaWhatsapp size={50} className="text-white" />
          </a>
        </div>

        {/* Large space before next section */}
        <div className="h-48"></div>

        {/* Parcerias Section */}
        <h1 className="text-5xl font-bold mb-12 text-gray-800">PARCERIAS</h1>

        <div className="text-xl text-gray-600 flex flex-col space-y-10">
          <a
            href="https://ole.uff.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
          >
            Observatório da Laicidade na Educação
          </a>

          <a
            href="https://www.proped.pro.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
          >
            Programa de Pós-Graduação em Educação Faculdade de Educação
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default FaleConosco;
