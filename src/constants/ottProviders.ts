type OTTProviderInfo = {
  href: string
  price?: string
}

export const OTT_PROVIDER_MAP: Record<number, OTTProviderInfo> = {
  8: {
    href: 'https://www.netflix.com',
    price: '5,500',
  },
  337: {
    href: 'https://www.disneyplus.com',
    price: '9,900',
  },
  356: {
    href: 'https://www.wavve.com',
    price: '7,900',
  },
  1883: {
    href: 'https://www.tving.com',
    price: '7,900',
  },
  3: {
    href: 'https://play.google.com/store/movies',
  },
  97: {
    href: 'https://watcha.com',
    price: '7,900',
  },
}
