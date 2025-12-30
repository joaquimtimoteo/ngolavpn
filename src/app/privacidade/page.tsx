import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react'

export default function Privacidade() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
            <Shield className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-gray-400">
            Última atualização: Dezembro de 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl p-8 md:p-12 space-y-8">
          {/* Introdução */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="w-5 h-5 text-secondary" />
              1. Introdução
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A NgolaVPN ("nós", "nosso" ou "aplicativo") está comprometida em proteger sua privacidade. 
              Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações 
              quando você usa nosso aplicativo de VPN gratuito.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Ao usar o NgolaVPN, você concorda com a coleta e uso de informações de acordo com esta política.
            </p>
          </section>

          {/* Dados Coletados */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="w-5 h-5 text-secondary" />
              2. Informações que Coletamos
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              O NgolaVPN foi projetado para coletar o mínimo de dados possível. Coletamos apenas:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-white">Estatísticas de uso anônimas:</strong> Tempo de conexão, quantidade de dados transferidos (para exibir na interface do app).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-white">Créditos e preferências:</strong> Seus créditos acumulados e configurações do app, salvos localmente no seu dispositivo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-white">Interações com anúncios:</strong> O Google AdMob pode coletar informações para exibir anúncios relevantes.</span>
              </li>
            </ul>
          </section>

          {/* O que NÃO coletamos */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="w-5 h-5 text-secondary" />
              3. O que NÃO Coletamos
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Valorizamos sua privacidade. <strong className="text-white">NÃO coletamos:</strong>
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Seu histórico de navegação ou sites visitados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Suas mensagens, e-mails ou comunicações</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Senhas, dados bancários ou informações financeiras</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Sua localização GPS precisa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Contatos, fotos ou arquivos do seu dispositivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Logs de conexão que identifiquem você pessoalmente</span>
              </li>
            </ul>
          </section>

          {/* Anúncios */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              4. Anúncios e Terceiros
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              O NgolaVPN usa o Google AdMob para exibir anúncios. O Google pode coletar:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Identificadores de publicidade do dispositivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Informações sobre interações com anúncios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Dados para personalização de anúncios (se permitido)</span>
              </li>
            </ul>
            <p className="text-gray-400 mt-4 text-sm">
              Para mais informações, consulte a{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Política de Privacidade do Google
              </a>.
            </p>
          </section>

          {/* Segurança */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="w-5 h-5 text-secondary" />
              5. Segurança dos Dados
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
            </p>
            <ul className="space-y-3 text-gray-300 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Conexões criptografadas entre seu dispositivo e nossos servidores</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Dados de créditos armazenados apenas localmente no seu dispositivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span>Nenhum registro de atividade de navegação em nossos servidores</span>
              </li>
            </ul>
          </section>

          {/* Seus Direitos */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-secondary" />
              6. Seus Direitos
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Você tem direito a:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-white">Acesso:</strong> Solicitar informações sobre os dados que temos sobre você.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-white">Exclusão:</strong> Desinstalar o app para remover todos os dados locais.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-white">Opt-out:</strong> Desativar anúncios personalizados nas configurações do seu dispositivo.</span>
              </li>
            </ul>
          </section>

          {/* Menores */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              7. Uso por Menores
            </h2>
            <p className="text-gray-300 leading-relaxed">
              O NgolaVPN não é destinado a menores de 13 anos. Não coletamos intencionalmente 
              informações de crianças. Se você é pai/mãe e acredita que seu filho nos forneceu 
              informações, entre em contato conosco.
            </p>
          </section>

          {/* Alterações */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              8. Alterações nesta Política
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
              alterações significativas através do aplicativo ou por outros meios apropriados. 
              Recomendamos revisar esta política regularmente.
            </p>
          </section>

          {/* Contato */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary" />
              9. Contato
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:
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
