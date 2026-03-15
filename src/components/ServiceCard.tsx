import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-brand-white border border-brand-gray-200 rounded-2xl p-6 sm:p-8 hover:border-brand-gold hover:shadow-lg transition-all duration-200"
    >
      {icon && (
        <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="font-sans text-lg font-bold text-brand-black mb-2 group-hover:text-brand-gold-dark transition-colors">
        {title}
      </h3>
      <p className="text-brand-gray-600 text-sm leading-relaxed">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-brand-gold-dark font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
