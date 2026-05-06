import { cn } from '@/utils/cn'

export type Tab<T extends string> = {
  label: string
  value: T
}

type TabMenuProps<T extends string> = {
  tabs: Tab<T>[]
  value: T
  onValueChange: (value: T) => void
  className?: string
}

export function TabMenu<T extends string>({
  tabs,
  value,
  onValueChange,
  className,
}: TabMenuProps<T>) {
  return (
    <div role="tablist" className="flex">
      {tabs.map((tab) => {
        const isSelected = value === tab.value

        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onValueChange(tab.value)}
            className={cn(
              // 모바일 기본
              'mr-2 rounded-full border border-border-subtle px-4 py-2 text-xs transition-colors',
              // 데스크탑
              'md:mr-0 md:h-10 md:w-35 md:rounded-none md:border-0 md:border-b-1 md:text-lg',
              // 활성&비활성
              isSelected
                ? 'border-primary bg-primary text-white md:border-white md:bg-transparent md:font-extrabold md:text-white'
                : 'text-gray-400 md:border-transparent md:text-white/30',
              className
            )}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
