"use client"

import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import { ICategory } from "@/interface/ICategory";
import { useState } from "react";

interface ICategorias {
  categorias: ICategory[]
}



export const Navbar: React.FC<ICategorias> = ({ categorias }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300 shadow-sm bg-white">
      <div className="max-w-8xl mx-auto flex items-center justify-between p-6">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-gray-800">FGM</span>
          <span className="text-sm text-gray-500">Materiales y soluciones</span>
        </Link>

        <div className="hidden md:flex gap-10 text-gray-700 font-medium text-m items-center">
          <Link href="/">INICIO</Link>
          <div
            className="relative"
            onMouseEnter={() => setIsDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsDesktopDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 px-2 py-1">
              CATEGORIAS <span className="text-xs">▼</span>
            </button>
            {isDesktopDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md rounded-md z-50 min-w-[220px]">
                {categorias.map(cat => (
                  <Link
                    key={cat.id}
                    href={`/categorias/${cat.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/catalogos">CATÁLOGOS</Link>
          <Link href="/about">ABOUT</Link>
        </div>

        <div className="hidden md:flex items-center border border-gray-400 rounded-full px-4 py-2 gap-2 w-72">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="flex-grow focus:outline-none text-sm text-gray-700"
          />
          <IoSearchSharp className="text-gray-600" size={20} />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
          />
          <Link href="/" className="block text-gray-700">INICIO</Link>
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full text-gray-700"
            >
              <span>CATEGORIAS</span>
              <span className="text-xs">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <div className="mt-1 pl-3 space-y-1">
                {categorias.map(cat => (
                  <Link
                    key={cat.id}
                    href={`/categorias/${cat.id}`}
                    className="block text-sm text-gray-600"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/catalogos" className="block text-gray-700">CATÁLOGOS</Link>
          <Link href="/about" className="block text-gray-700">ABOUT</Link>
        </div>
      )}
    </nav>
  );
};
