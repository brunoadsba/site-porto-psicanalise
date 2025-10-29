import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Psicanalista Profissional",
  description: "Conheça mais sobre a psicanalista, sua formação, experiência e abordagem terapêutica.",
};

export default function SobrePage() {
  return (
    <div className="bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Sobre Mim
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma jornada dedicada ao cuidado da saúde mental e ao autoconhecimento
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl text-white">
                P
              </div>
              <p className="text-xl text-gray-700 mb-6 text-center leading-relaxed">
                Sou uma psicanalista dedicada ao cuidado emocional e ao desenvolvimento pessoal. 
                Minha paixão pela psicanálise me levou a buscar constantemente aprimoramento e 
                profundidade no acompanhamento terapêutico.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Formação Acadêmica
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>Graduação em Psicologia pela [Universidade]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>Especialização em Psicanálise pelo [Instituto]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>Formação Contínua em [Área Específica]</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Experiência Profissional
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Com mais de [X] anos de experiência clínica, já atendi centenas de pacientes 
                  em diferentes contextos e situações. Trabalho tanto com atendimento individual 
                  quanto com terapia de casal, sempre priorizando um ambiente acolhedor e respeitoso.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>Atendimento clínico privado desde [ano]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>Experiência em [instituições/hospitais se aplicável]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>Participação em grupos de estudo e supervisão</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Filosofia de Trabalho
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Acredito que a psicanálise oferece um espaço único de escuta e compreensão, 
                  onde o paciente pode explorar suas vivências, conflitos e desejos. Minha 
                  abordagem é baseada no respeito, acolhimento e na construção de uma aliança 
                  terapêutica sólida.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cada pessoa é única e merece um tratamento personalizado, considerando suas 
                  particularidades e necessidades. O processo terapêutico é uma jornada de 
                  autoconhecimento, onde juntos trabalhamos para promover mudanças significativas 
                  e duradouras na vida do paciente.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Abordagem Terapêutica
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Utilizo técnicas psicanalíticas para ajudar meus pacientes a compreenderem 
                  melhor seus processos mentais, emoções e comportamentos. O foco está em criar 
                  um ambiente seguro onde questões profundas possam ser exploradas, sempre 
                  respeitando o ritmo e os limites de cada indivíduo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

