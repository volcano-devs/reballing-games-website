export interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function FeatureCard({
  description,
  icon,
  title,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
      <div className="inline-flex rounded-lg bg-white/10 p-3 text-amber-300 backdrop-blur-md">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 text-pretty text-gray-200">{description}</p>
    </div>
  )
}
