export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white text-sm font-bold">Н</span>
        </div>
        <span className="text-lg font-bold tracking-tight">НАДПО</span>
      </div>
    </div>
  )
}
