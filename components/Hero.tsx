import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-6 md:text-5xl lg:text-6xl">
            Cuidando da sua
            <br />
            <span className="text-indigo-200">saúde mental</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-indigo-100 mb-8 md:text-xl">
            Atendimento psicanalítico profissional com foco em autoconhecimento, 
            bem-estar emocional e qualidade de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendamento"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 shadow-lg"
            >
              Agendar Consulta
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/20 border border-white/20"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

