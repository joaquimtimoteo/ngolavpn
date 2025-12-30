import { FileText, AlertTriangle, CheckCircle, XCircle, Scale } from 'lucide-react'

export default function Termos() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
            <FileText className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-gray-400">
            Última atualização: Dezembro de 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl p-8 md:p-12 space-y-8">
          {/* Aceitação */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary" />
              1. Aceitação dos Termos
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ao baixar, instalar ou usar o aplicativo NgolaVPN, você concorda em cumprir e estar 
              vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
              não deve usar o aplicativo.
            </p>
          </section>

          {/* Descrição do Serviço */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. Descrição do Serviço
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              O NgolaVPN é um aplicativo que fornece serviço de proxy/VPN gratuito, permitindo que 
              usuários em Angola acessem a internet. O serviço funciona através de um sistema de 
              créditos, onde os usuários ganham tempo de navegação assistindo a anúncios.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Cada anúncio assistido concede 30 minutos de internet grátis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Os créditos podem ser acumulados sem limite</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>O serviço está sujeito à disponibilidade da rede e servidores</span>
              </li>
            </ul>
          </section>

          {/* Uso Permitido */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary" />
              3. Uso Permitido
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Você pode usar o NgolaVPN para:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Navegação pessoal na internet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Acesso a redes sociais e aplicativos de mensagem</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Streaming de vídeos e músicas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Pesquisas e acesso a informações</span>
              </li>
            </ul>
          </section>

          {/* Uso Proibido */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <XCircle className="w-5 h-5 text-red-400" />
              4. Uso Proibido
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              É estritamente proibido usar o NgolaVPN para:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Atividades ilegais ou fraudulentas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Distribuição de malware, vírus ou código malicioso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Hacking, invasão de sistemas ou redes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Spam, phishing ou golpes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Violação de direitos autorais ou propriedade intelectual</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Conteúdo ilegal, abusivo ou que viole leis de Angola</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Tentativas de burlar o sistema de anúncios ou créditos</span>
              </li>
            </ul>
            <p className="text-yellow-400/80 mt-4 text-sm flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Violações podem resultar em suspensão permanente do acesso ao serviço.</span>
            </p>
          </section>

          {/* Anúncios */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. Sistema de Anúncios
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              O NgolaVPN é financiado por anúncios. Ao usar o aplicativo, você concorda que:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>É necessário assistir anúncios para ganhar créditos de internet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Os anúncios são fornecidos por parceiros terceiros (Google AdMob)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Não temos controle sobre o conteúdo específico dos anúncios</span>
              </li>
            </ul>
          </section>

          {/* Limitação de Responsabilidade */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              6. Limitação de Responsabilidade
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              O serviço é fornecido "como está", sem garantias de qualquer tipo. Não somos responsáveis por:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Interrupções ou indisponibilidade do serviço</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Velocidade de conexão ou desempenho</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Perda de dados ou créditos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Danos diretos ou indiretos decorrentes do uso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Conteúdo acessado através do serviço</span>
              </li>
            </ul>
          </section>

          {/* Modificações */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              7. Modificações do Serviço
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto do 
              serviço a qualquer momento, sem aviso prévio. Isso inclui alterações no sistema de 
              créditos, quantidade de tempo por anúncio, ou funcionalidades do aplicativo.
            </p>
          </section>

          {/* Alterações nos Termos */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              8. Alterações nos Termos
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Podemos atualizar estes Termos de Uso periodicamente. Alterações significativas serão 
              comunicadas através do aplicativo. O uso continuado do serviço após as alterações 
              constitui aceitação dos novos termos.
            </p>
          </section>

          {/* Lei Aplicável */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Scale className="w-5 h-5 text-secondary" />
              9. Lei Aplicável
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República de Angola. Qualquer disputa 
              relacionada a estes termos será resolvida nos tribunais competentes de Angola.
            </p>
          </section>

          {/* Contato */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              10. Contato
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Para dúvidas sobre estes Termos de Uso:
            </p>
            <div className="bg-background/50 rounded-xl p-6">
              <p className="text-white font-semibold">NgolaVPN</p>
              <p className="text-gray-400 mt-2">
                Email:{' '}
                <a href="mailto:suporte@ngolavpn.com" className="text-secondary hover:underline">
                  suporte@ngolavpn.com
                </a>
              </p>
              <p className="text-gray-400">
                País: Angola 🇦🇴
              </p>
            </div>
          </section>

          {/* Declaração Final */}
          <section className="bg-secondary/10 rounded-xl p-6 border border-secondary/30">
            <p className="text-gray-300 text-center">
              Ao usar o NgolaVPN, você confirma que leu, entendeu e concorda com estes Termos de Uso 
              e nossa{' '}
              <a href="/privacidade" className="text-secondary hover:underline">
                Política de Privacidade
              </a>.
            </p>
          </section>
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
