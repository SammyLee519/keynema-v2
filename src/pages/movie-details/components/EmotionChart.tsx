import type { Emotions } from '@/mocks/review'

import { GlassContentBox } from '@/components'

type EmotionChartProps = {
  emotion: Emotions[]
}

export default function EmotionChart({ emotion }: EmotionChartProps) {
  const totalEmotionCount = emotion.reduce(
    (sum, current) => sum + current.count,
    0
  )

  const getPercent = (count: number) => {
    if (totalEmotionCount <= 0) return 0

    return (count / totalEmotionCount) * 100
  }

  return (
    <GlassContentBox>
      <h3 className="flex flex-col font-semibold text-body text-white/70">
        관람 감정
      </h3>
      <div>
        {emotion.map((value) => {
          const percent = getPercent(value.count)

          return (
            <div className="flex items-center gap-1" key={value.emoji}>
              <span>{value.emoji}</span>
              <span className="w-20 shrink-0 text-xsmall whitespace-nowrap">
                {value.description}
              </span>

              <div className="flex h-2 w-full gap-1 overflow-hidden rounded-sm bg-gray-800">
                <div
                  className="h-full rounded-sm bg-primary transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="w-10 shrink-0 text-xs text-white/70">
                {percent.toFixed(0)}%
              </p>
            </div>
          )
        })}
      </div>
    </GlassContentBox>
  )
}
