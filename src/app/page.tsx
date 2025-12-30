'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { 
  Shield, 
  Wifi, 
  Zap, 
  Clock, 
  Gift, 
  Smartphone,
  Play,
  ChevronDown,
  Download,
  CheckCircle,
  Globe,
  Lock,
  Tv
} from 'lucide-react'
import Globe3D from '@/components/Globe3D'
import NetworkBackground from '@/components/NetworkBackground'

// Screenshots do app
const screenshots = [
  '/images/screenshot_1.png',
  '/images/screenshot_2.png',
  '/images/screenshot_3.png',
]

export default function Home() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  // Auto-rotate screenshots every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Abstract Network Background */}
      <NetworkBackground />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*                         HERO SECTION                            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 relative overflow-hidden hero-gradient z-10">
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-wider">
            Navegue sem limites
            <br />
            <span className="gradient-text">Internet Grátis</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Acesse a internet sem gastar dados móveis. Funciona na Unitel mesmo sem saldo!
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <a href="#download" className="btn-primary text-lg px-10 py-4">
              <Download className="w-5 h-5" />
              Baixar Grátis
            </a>
            <span className="text-gray-500 text-sm">100% grátis, sem necessidade de cartão</span>
          </div>

          {/* 3D Globe */}
          <div className="relative mt-10 mb-8">
            <Globe3D />
          </div>

          {/* Trust Badges / Partners */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-400 partner-logo">
              <Smartphone className="w-5 h-5" />
              <span>Android</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 partner-logo">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>iOS (Em breve)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 partner-logo">
              <Globe className="w-5 h-5" />
              <span>Unitel</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 partner-logo">
              <Shield className="w-5 h-5" />
              <span>100% Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*                       FEATURES SECTION                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Recursos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Tudo que você precisa
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              O NgolaVPN foi desenvolvido especialmente para angolanos que querem navegar sem preocupações
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Wifi className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Internet Grátis</h3>
              <p className="text-gray-400 leading-relaxed">
                Navegue sem gastar seus dados móveis. Funciona mesmo sem saldo na Unitel!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Super Rápido</h3>
              <p className="text-gray-400 leading-relaxed">
                Velocidades de até 24 Mbps para streaming, redes sociais e navegação.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Gift className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ganhe Créditos</h3>
              <p className="text-gray-400 leading-relaxed">
                Assista vídeos curtos e ganhe 30 minutos de internet grátis por anúncio!
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Seguro</h3>
              <p className="text-gray-400 leading-relaxed">
                Sua conexão é protegida. Navegue com tranquilidade e privacidade.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Acumule Tempo</h3>
              <p className="text-gray-400 leading-relaxed">
                Seus créditos ficam salvos. Saia do app e continue de onde parou!
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Tv className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Tudo Liberado</h3>
              <p className="text-gray-400 leading-relaxed">
                WhatsApp, YouTube, TikTok, Facebook, Instagram - use tudo sem limites!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*                     HOW IT WORKS SECTION                        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Simples</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Como funciona?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Em apenas 3 passos simples você já está navegando de graça
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white glow-green">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Baixe o App</h3>
              <p className="text-gray-400">
                Faça o download gratuito do NgolaVPN
              </p>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-secondary/50 to-transparent" />
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-background">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Assista um Vídeo</h3>
              <p className="text-gray-400">
                Veja um breve anúncio e ganhe 30 minutos
              </p>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-background">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Navegue Grátis!</h3>
              <p className="text-gray-400">
                Pronto! Use a internet à vontade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*                      DOWNLOAD SECTION                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="download" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Baixe agora e comece a
                  <span className="gradient-text"> navegar grátis</span>
                </h2>
                
                <p className="text-gray-400 text-lg mb-8 max-w-lg">
                  Junte-se a milhares de angolanos que já estão economizando dados móveis todos os dias.
                </p>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  {/* Play Store */}
                  <a 
                    href="#" 
                    className="bg-white/20 text-white/60 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 cursor-not-allowed"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-60">Em breve no</div>
                      <div className="font-bold">Google Play</div>
                    </div>
                  </a>

                  {/* APK Direct Download */}
                  <a 
                    href="/images/ngolavpn-v1.0.0.apk"
                    download="NgolaVPN-v1.0.0.apk"
                    className="border-2 border-secondary bg-secondary/10 hover:bg-secondary/20 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Download className="w-7 h-7 text-secondary" />
                    <div className="text-left">
                      <div className="text-xs opacity-60">Download direto</div>
                      <div className="font-bold text-secondary">APK v1.0.0 (59MB)</div>
                    </div>
                  </a>
                </div>

                {/* Trust */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Sem vírus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Grátis para sempre</span>
                  </div>
                </div>
              </div>

              {/* Right - Phone Mockup with Carousel */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-3 border-4 border-gray-800 shadow-2xl">
                    <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />
                      {/* Screen Content - Carousel */}
                      {screenshots.map((src, index) => (
                        <img
                          key={src}
                          src={src}
                          alt={`App Screenshot ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            index === currentScreenshot ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-secondary/30 blur-[40px] rounded-full" />
                </div>

                {/* Carousel Indicators */}
                <div className="flex gap-2 mt-6">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentScreenshot 
                          ? 'bg-secondary w-6' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*                    DEVELOPERS SECTION                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="developers" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Equipe</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Sobre os Desenvolvedores
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Feito em Angola, para Angolanos, por Angolanos
            </p>
          </div>

          {/* Developers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Developer 1 - Joaquim */}
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Photo */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-secondary to-primary p-1 mb-6">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-card">
                    <img 
                      src="/images/joaquim.png" 
                      alt="Joaquim Timóteo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-2">
                  Joaquim Timóteo
                </h3>
                <p className="text-secondary font-medium text-sm mb-3">
                  Senior Software Engineer & Cybersecurity Specialist
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  Software Engineer & Data Scientist at @reborntechnology
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {['Python', 'Docker', 'AWS', 'Kubernetes', 'MySQL', 'OSINT'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/joaquim-tim%C3%B3teo-619957227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>

                {/* Certifications */}
                <div className="mt-6 pt-4 border-t border-white/10 w-full">
                  <div className="flex flex-wrap gap-3 justify-center text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      PCEP™
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      Oracle Cloud
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      Data Governance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer 2 - Jacob */}
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Photo */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 mb-6">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-card">
                    <img 
                      src="/images/jacob.png" 
                      alt="Jacob Larte"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-2">
                  Jacob Larte
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  FullStack & Mobile Engineer
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  Mobile & Backend Developer
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {['Node.js', 'Spring Boot', 'Dart', 'Kotlin', 'Java'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/jacob-lartes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>

                {/* Expertise */}
                <div className="mt-6 pt-4 border-t border-white/10 w-full">
                  <div className="flex flex-wrap gap-3 justify-center text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      Mobile Apps
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      Backend APIs
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      FullStack
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*                         FAQ SECTION                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Perguntas frequentes
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {[
              {
                q: "O app é realmente grátis?",
                a: "Sim! O NgolaVPN é 100% grátis. Você ganha créditos assistindo pequenos vídeos e pode navegar à vontade."
              },
              {
                q: "Funciona na Unitel?",
                a: "Sim! O NgolaVPN foi desenvolvido especialmente para funcionar na rede Unitel, mesmo sem saldo de dados."
              },
              {
                q: "Quanto tempo ganho por vídeo?",
                a: "Cada vídeo assistido dá 30 minutos de internet grátis. Você pode acumular tempo ilimitado!"
              },
              {
                q: "Meus dados ficam seguros?",
                a: "Sim! Não coletamos informações pessoais e sua navegação é protegida através de nossa conexão segura."
              },
              {
                q: "Posso usar WhatsApp, YouTube e redes sociais?",
                a: "Sim! Você pode usar qualquer app ou site: WhatsApp, Facebook, Instagram, YouTube, TikTok e muito mais."
              },
              {
                q: "O que acontece quando meus créditos acabam?",
                a: "A VPN desconecta automaticamente. Basta reconectar e assistir outro vídeo para ganhar mais 30 minutos!"
              }
            ].map((faq, i) => (
              <details 
                key={i} 
                className="glass-card group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <span className="text-white font-medium pr-8">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-secondary chevron transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*                        FINAL CTA                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para navegar
            <span className="gradient-text"> sem limites</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Baixe o NgolaVPN agora e junte-se a milhares de angolanos navegando grátis!
          </p>
          <a 
            href="#download"
            className="btn-primary text-lg px-12 py-5 inline-flex"
          >
            <Download className="w-6 h-6" />
            Baixar Grátis Agora
          </a>
        </div>
      </section>
    </>
  )
}