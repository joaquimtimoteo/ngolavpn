'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F0A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {!imgError ? (
              <Image 
                src="/images/logo.png" 
                alt="NgolaVPN" 
                width={40} 
                height={40}
                className="w-10 h-10"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            )}
            <span className="logo-text text-white">NgolaVPN</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-400 hover:text-white transition-colors text-sm">
              Recursos
            </Link>
            <Link href="/#download" className="text-gray-400 hover:text-white transition-colors text-sm">
              Download
            </Link>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
              Como Funciona
            </Link>
            <Link href="/#developers" className="text-gray-400 hover:text-white transition-colors text-sm">
              Desenvolvedor
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contato" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contato
            </Link>
            <Link 
              href="/#download"
              className="btn-primary text-sm"
            >
              Baixar Grátis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/#features" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link 
                href="/#download" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
              <Link 
                href="/#how-it-works" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </Link>
              <Link 
                href="/#developers" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Desenvolvedor
              </Link>
              <Link 
                href="/#download"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Baixar Grátis
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}