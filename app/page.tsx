import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = [
    {
      title: "Terapia Individual",
      description: "Atendimento personalizado focado no autoconhecimento e bem-estar emocional.",
      icon: "🧘",
    },
    {
      title: "Terapia de Casal",
      description: "Trabalho conjunto para fortalecer relacionamentos e melhorar a comunicação.",
      icon: "💑",
    },
    {
      title: "Atendimento Online",
      description: "Sessões à distância com a mesma qualidade e profissionalismo do atendimento presencial.",
      icon: "💻",
    },
  ];

  const values = [
    {
      title: "Acolhimento",
      description: "Um espaço seguro e acolhedor para você expressar seus sentimentos.",
    },
    {
      title: "Confidencialidade",
      description: "Total comprometimento com a privacidade e sigilo profissional.",
    },
    {
      title: "Profissionalismo",
      description: "Atendimento baseado em técnicas comprovadas e formação sólida.",
    },
  ];

  return (
    <>
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos diferentes modalidades de atendimento para melhor atender às suas necessidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e definem nossa abordagem terapêutica
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Agende sua primeira consulta e dê o primeiro passo em direção ao autoconhecimento e bem-estar emocional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendamento"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Agendar Consulta
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center rounded-full border border-indigo-600 px-8 py-3 text-base font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
            >
              Conheça mais sobre mim
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
