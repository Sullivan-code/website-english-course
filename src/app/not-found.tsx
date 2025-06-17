import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            {/* Large, colorful text */}
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                Não Encontrado
            </h1>

            <p className="mt-4 text-lg text-black mt-2">
                Não foi possível encontrar o recurso solicitado.
            </p>

            {/* Texto em preto */}
            <p className="text-black mt-2">
                Esta é a nossa página de erro 404.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:opacity-90 transition"
            >
                Voltar para a página inicial
            </Link>
        </div>
    );
}