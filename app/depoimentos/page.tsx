import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Depoimentos | Avaliações de Pacientes",
  description: "Conheça o que nossos pacientes têm a dizer sobre o atendimento psicológico e os resultados alcançados.",
};

const testimonials = [
  {
    name: "Maria Silva",
    testimonial:
      "O atendimento foi fundamental para minha jornada de autoconhecimento. Encontrei um espaço acolhedor onde pude me sentir ouvida e compreendida. A terapia me ajudou a lidar melhor com minhas ansiedades e a ter mais clareza sobre minhas escolhas.",
    rating: 5,
  },
  {
    name: "João Santos",
    testimonial:
      "Profissional extremamente qualificada e empática. O processo terapêutico me ajudou a superar questões que eu carregava há anos. Recomendo sem hesitação!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    testimonial:
      "Experiência transformadora! A terapia de casal nos ajudou a melhorar nossa comunicação e a fortalecer nosso relacionamento. Estamos muito gratos pelo apoio recebido.",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    testimonial:
      "Atendimento online de excelente qualidade. Mesmo à distância, consegui estabelecer uma conexão profunda e trabalhar questões importantes. O profissionalismo é evidente em cada sessão.",
    rating: 5,
  },
  {
    name: "Carla Ferreira",
    testimonial:
      "Encontrei um espaço seguro onde pude explorar meus sentimentos sem julgamento. A abordagem psicanalítica me proporcionou insights valiosos sobre minha própria vida.",
    rating: 5,
  },
  {
    name: "Roberto Alves",
    testimonial:
      "Processo terapêutico muito bem conduzido. Senti-me acolhido desde a primeira sessão e pude trabalhar questões profundas com total confiança no profissional.",
    rating: 5,
  },
];

export default function DepoimentosPage() {
  return (
    <div className="bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Depoimentos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a experiência de pessoas que fizeram terapia conosco
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compartilhe sua experiência
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Se você já foi atendido por nós e gostaria de compartilhar sua experiência, 
              entre em contato. Sua opinião é muito valiosa para nós!
            </p>
            <p className="text-sm text-gray-500">
              Todos os depoimentos são publicados com o consentimento explícito dos pacientes, 
              respeitando sempre a privacidade e sigilo profissional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

