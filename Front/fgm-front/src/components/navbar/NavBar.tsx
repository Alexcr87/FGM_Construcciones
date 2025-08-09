"use client"

import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { ICategory, IProduct } from "@/interface/ICategory";
import { useState } from "react";
import { ProductSearchCard } from "@/components/productSearchCard/ProductSearchCard";

interface ICategorias {
  categorias: ICategory[]
}

export const Navbar: React.FC<ICategorias> = ({ categorias }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Buscar productos en el backend
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setShowResults(true);

    if (value.length > 1) {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/product?search=${encodeURIComponent(value)}`);
        const data = await res.json();
        setResults(data);
      } catch {
        setResults([]);
      }
      setLoading(false);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  return (
    <nav className="w-full border-b border-gray-300 shadow-sm bg-white">
      <div className="max-w-8xl mx-auto flex items-center justify-between p-6">
        <Link href="/" className="flex flex-col items-center">
          <Image src="/assets/logo.png" alt="Logo FGM" width={60} height={60} className="h-15 w-auto mb-1" />
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

        <div className="hidden md:flex items-center border border-gray-400 rounded-full px-4 py-2 gap-2 w-72 relative">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="flex-grow focus:outline-none text-sm text-gray-700"
            value={search}
            onChange={handleSearch}
          />
          <IoSearchSharp className="text-gray-600" size={20} />
          {loading && <div className="absolute top-full left-0 w-full bg-white text-center text-xs py-2">Buscando...</div>}
          {results.length > 0 && showResults && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded shadow z-50 mt-2">
              {results.map((p) => (
                <ProductSearchCard key={p.id} product={p} onClick={() => setShowResults(false)} />
              ))}
            </div>
          )}
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