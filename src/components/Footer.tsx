'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Shield } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [imgError, setImgError] = useState(false)

  return (
    <footer className="border-t border-white/5 bg-[#0A0F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
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
            <p className="text-gray-500 mb-6 max-w-md leading-relaxed">
              Internet grátis para todos os Angolanos. Navegue sem gastar dados móveis com o app feito em Angola para Angolanos.
            </p>
          
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Produto</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#features" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/#download" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacidade" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} NgolaVPN. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="mailto:suporte@ngolavpn.com" className="text-gray-600 hover:text-secondary text-sm transition-colors">
              suporte@ngolavpn.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}