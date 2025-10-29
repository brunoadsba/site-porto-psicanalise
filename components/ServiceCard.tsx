interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl px-10 py-9 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-300">
      <div className="text-5xl mb-6 text-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-loose">
        {description}
      </p>
    </div>
  );
}

