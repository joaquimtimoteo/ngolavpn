import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react'

export default function Contato() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tem alguma dúvida, sugestão ou problema? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-card rounded-2xl p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:suporte@ngolavpn.com" 
                    className="text-secondary hover:underline"
                  >
                    suporte@ngolavpn.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Respondemos em até 24 horas
                  </p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-card rounded-2xl p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Horário de Suporte</h3>
                  <p className="text-gray-300">Segunda a Sexta</p>
                  <p className="text-gray-500 text-sm">9:00 - 18:00 (Hora de Luanda)</p>
                </div>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-card rounded-2xl p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Localização</h3>
                  <p className="text-gray-300">Angola 🇦🇴</p>
                  <p className="text-gray-500 text-sm">Feito com ❤️ para Angolanos</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Rápido */}
          <div className="bg-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              <div className="border-b border-inactive/20 pb-4">
                <h3 className="text-white font-medium mb-2">O app parou de funcionar, o que faço?</h3>
                <p className="text-gray-400 text-sm">
                  Tente reiniciar o app ou o celular. Se persistir, desinstale e instale novamente.
                </p>
              </div>

              <div className="border-b border-inactive/20 pb-4">
                <h3 className="text-white font-medium mb-2">Perdi meus créditos, posso recuperar?</h3>
                <p className="text-gray-400 text-sm">
                  Os créditos são salvos localmente. Se desinstalar o app ou limpar dados, eles são perdidos.
                </p>
              </div>

              <div className="border-b border-inactive/20 pb-4">
                <h3 className="text-white font-medium mb-2">Os anúncios não carregam, o que fazer?</h3>
                <p className="text-gray-400 text-sm">
                  Verifique sua conexão. Se estiver usando VPN externa, desative-a e tente novamente.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="text-white font-medium mb-2">Posso usar em outros países?</h3>
                <p className="text-gray-400 text-sm">
                  O NgolaVPN foi otimizado para Angola/Unitel. Pode não funcionar corretamente em outros países.
                </p>
              </div>
            </div>

            <a 
              href="/#faq"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors mt-4"
            >
              Ver todas as perguntas frequentes →
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-card rounded-2xl p-8 gradient-border">
          <h2 className="text-xl font-bold text-white mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-gray-400 mb-6">
            Envie-nos um email detalhando seu problema ou sugestão.
          </p>
          <a 
            href="mailto:suporte@ngolavpn.com?subject=Suporte NgolaVPN"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Enviar Email
          </a>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <a 
            href="/"
            className="inline-flex items-center text-secondary hover:text-primary transition-colors"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  )
}
