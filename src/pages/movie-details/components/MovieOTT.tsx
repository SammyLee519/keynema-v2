import type { TMDBWatchProvider, TMDBWatchProviders } from '@/types/tmdb'

import PageSection from '@/components/layout/PageSection'
import { OTT_PROVIDER_MAP } from '@/constants/ottProviders'
import { TMDB_IMAGE_SIZE } from '@/constants/tmdbImg'
import { getTMDBImageUrl } from '@/utils/getTMDBImageUrl'

import OTTCard from './OTTCard'

type MovieOTTProps = {
  provider?: TMDBWatchProviders
}

export default function MovieOTT({ provider }: MovieOTTProps) {
  const DEFAULT_REGION = 'KR'
  const streamingByRegion = provider?.results[DEFAULT_REGION]

  const providerMap = new Map<number, TMDBWatchProvider>()

  for (const item of [
    ...(streamingByRegion?.flatrate ?? []),
    ...(streamingByRegion?.buy ?? []),
    ...(streamingByRegion?.rent ?? []),
  ]) {
    if (item.provider_id in OTT_PROVIDER_MAP) {
      providerMap.set(item.provider_id, item)
    }
  }

  const allProviders = Array.from(providerMap.values())

  if (allProviders.length === 0) {
    return (
      <PageSection className="flex items-center justify-center">
        <p className="mt-4 text-right text-sm text-white/40">
          이용 가능한 제휴사가 없습니다.
        </p>
      </PageSection>
    )
  }

  return (
    <PageSection>
      <div className="flex flex-col py-4">
        {allProviders.map((item) => {
          const providerInfo = OTT_PROVIDER_MAP[item.provider_id]

          return (
            <div key={item.provider_id}>
              <OTTCard
                name={item.provider_name}
                logoPath={getTMDBImageUrl(item.logo_path, TMDB_IMAGE_SIZE.LOGO)}
                href={providerInfo?.href ?? streamingByRegion?.link ?? ''}
                price={`이용권 ${providerInfo?.price}원~`}
              />

              <div className="w-full border-b border-white/10" />
            </div>
          )
        })}
        <p className="mt-4 text-right text-sm text-white/40">
          정확한 정보는 제휴사 페이지에서 확인 후 이용바랍니다.
        </p>
      </div>
    </PageSection>
  )
}
