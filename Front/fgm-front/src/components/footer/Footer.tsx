"use client";


import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Gracias por suscribirte: ${email}`);
        setEmail("");
    };

    return (
        <footer className="bg-[#f6f5f3] border-t border-gray-300 mt-12">
            <div className="max-w-8xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="text-sm text-gray-700 flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-gray-800">FGM</h2>
                    <p className="text-gray-600 mt-2">
                        Materiales y soluciones para tu hogar y proyectos.
                    </p>
                    <p>📍 Cruz Espacio, Cordoba</p>
                    <p>📞 +54 9 11 1234 5678</p>
                    <p>📧 contacto@fgm.com</p>
                </div>


                <div className="flex flex-col gap-3">
                    <h3 className="text-gray-800 font-semibold">Seguinos en redes!</h3>
                    <div className="flex gap-4 text-gray-600 text-xl">
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="hover:text-pink-600 transition" />
                        </Link>
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF className="hover:text-blue-600 transition" />
                        </Link>
                        <Link href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp className="hover:text-green-600 transition" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-gray-800">NEWSLETTER</h3>
                    <p className="text-sm text-gray-700">Recibí todas las ofertas</p>
                    <p className="text-sm text-gray-600">¡Suscribite gratis y empezá a recibir todas las novedades y descuentos exclusivos!</p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2">
                        <input
                            type="email"
                            required
                            placeholder="Tu correo electrónico"
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto flex-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition"
                        >
                            Suscribirse
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200 px-4">
                © {new Date().getFullYear()} FGM. Todos los derechos reservados.
            </div>
        </footer>
    );
}
