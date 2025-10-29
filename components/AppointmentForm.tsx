"use client";

import { useState } from "react";

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  modality: string;
  reason: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  preferredDate?: string;
  preferredTime?: string;
  modality?: string;
  reason?: string;
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentData>({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    modality: "",
    reason: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Data preferencial é obrigatória";
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = "A data não pode ser no passado";
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Horário preferencial é obrigatório";
    }

    if (!formData.modality) {
      newErrors.modality = "Modalidade de atendimento é obrigatória";
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Motivo da consulta é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Aqui você pode integrar com uma API ou serviço de agendamento
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Formulário de agendamento enviado:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        modality: "",
        reason: "",
        notes: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Seu nome"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="seu@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="(11) 99999-9999"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
            Data preferencial *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={getMinDate()}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.preferredDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredDate}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
            Horário preferencial *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.preferredTime ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Selecione o horário</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="modality" className="block text-sm font-medium text-gray-700 mb-2">
          Modalidade de atendimento *
        </label>
        <select
          id="modality"
          name="modality"
          value={formData.modality}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.modality ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Selecione a modalidade</option>
          <option value="presencial">Presencial</option>
          <option value="online">Online</option>
          <option value="indiferente">Indiferente</option>
        </select>
        {errors.modality && <p className="mt-1 text-sm text-red-600">{errors.modality}</p>}
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
          Motivo da consulta *
        </label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.reason ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Conte brevemente o motivo que o trouxe até aqui..."
        />
        {errors.reason && <p className="mt-1 text-sm text-red-600">{errors.reason}</p>}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
          Observações (opcional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Informações adicionais que considera importante..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            Solicitação de agendamento enviada com sucesso! Entraremos em contato em até 24 horas para confirmar o horário.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800">
            Ocorreu um erro ao enviar a solicitação. Tente novamente ou entre em contato por telefone.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Solicitar Agendamento"}
      </button>
    </form>
  );
}

