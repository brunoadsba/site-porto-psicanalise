import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serviços | Atendimento Psicanalítico",
  description: "Conheça os serviços oferecidos: terapia individual, terapia de casal e atendimento online.",
};

export default function ServicosPage() {
  const services = [
    {
      title: "Terapia Individual",
      description: "Atendimento personalizado focado no desenvolvimento pessoal e no bem-estar emocional.",
      features: [
        "Exploração do mundo interno e processos inconscientes",
        "Trabalho com questões emocionais, traumas e conflitos",
        "Desenvolvimento do autoconhecimento",
        "Processo terapêutico personalizado",
        "Sessões semanais ou conforme necessidade",
      ],
      duration: "50 minutos por sessão",
      icon: "🧘",
    },
    {
      title: "Terapia de Casal",
      description: "Trabalho conjunto para fortalecer relacionamentos e melhorar a comunicação.",
      features: [
        "Melhoria na comunicação e diálogo",
        "Resolução de conflitos relacionais",
        "Fortalecimento do vínculo afetivo",
        "Compreensão de dinâmicas relacionais",
        "Espaço para ambas as partes se expressarem",
      ],
      duration: "60 minutos por sessão",
      icon: "💑",
    },
    {
      title: "Atendimento Online",
      description: "Sessões à distância com a mesma qualidade e profissionalismo do atendimento presencial.",
      features: [
        "Atendimento via videoconferência",
        "Flexibilidade de horário e localização",
        "Mesma qualidade do atendimento presencial",
        "Plataforma segura e confidencial",
        "Ideal para quem tem dificuldades de locomoção",
      ],
      duration: "50 minutos por sessão",
      icon: "💻",
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Nossos Serviços
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos diferentes modalidades de atendimento para melhor atender às suas necessidades
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-indigo-600 mr-3 mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center mb-4">
                    Duração: {service.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Informações Importantes
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Primeira Consulta
                </h3>
                <p className="leading-relaxed">
                  A primeira consulta é uma oportunidade para conhecermos melhor suas necessidades 
                  e expectativas. Durante esse encontro, discutimos questões práticas, dúvidas sobre 
                  o processo terapêutico e estabelecemos uma base para o trabalho conjunto.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Confidencialidade
                </h3>
                <p className="leading-relaxed">
                  Todo o conteúdo das sessões é tratado com absoluto sigilo profissional, conforme 
                  o código de ética da psicologia. Seus dados e informações são mantidos em 
                  total confidencialidade.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Agendamento e Cancelamento
                </h3>
                <p className="leading-relaxed">
                  Sessões devem ser agendadas com antecedência. Em caso de necessidade de 
                  cancelamento, solicitamos aviso prévio de pelo menos 24 horas. 
                  Para mais informações sobre valores e formas de pagamento, entre em contato.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/agendamento"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

