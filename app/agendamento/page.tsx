import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Agendamento | Marque sua Consulta",
  description: "Agende sua consulta de forma rápida e prática. Preencha o formulário e entraremos em contato para confirmar o horário.",
};

export default function AgendamentoPage() {
  return (
    <div className="bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Agendar Consulta
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato para confirmar o horário da sua consulta
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <AppointmentForm />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Informações Importantes
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">•</span>
                <span>
                  Após o envio do formulário, entraremos em contato em até 24 horas para confirmar o agendamento.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">•</span>
                <span>
                  A primeira consulta é uma oportunidade para nos conhecermos e esclarecer dúvidas sobre o processo terapêutico.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">•</span>
                <span>
                  Para cancelar ou reagendar, entre em contato com pelo menos 24 horas de antecedência.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">•</span>
                <span>
                  Oferecemos atendimento presencial e online, de acordo com sua preferência.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

