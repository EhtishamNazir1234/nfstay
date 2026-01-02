import type { LucideIcon } from "lucide-react"

interface BlockchainFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function BlockchainFeatureCard({ icon: Icon, title, description }: BlockchainFeatureCardProps) {
  return (
    <div className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-[#9945FF] to-[#20E19F] transition-all duration-300 hover:shadow-[0_0_20px_rgba(32,225,159,0.2)]">
      <div className="bg-white rounded-[15px] p-8 h-full flex flex-col gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9945FF] to-[#20E19F] flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  )
}
