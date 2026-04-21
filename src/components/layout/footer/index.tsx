import logoIcon from '@/assets/keynema-logo.svg'
import logo from '@/assets/keynema-text.svg'

export default function Footer() {
  return (
    <footer className="relative mt-24 w-full overflow-hidden border-t border-border-subtle">
      <div className="bg-gradient-overlay pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-300 px-6 py-16">
        <div className="animate-fadeInUp mb-16 max-w-120">
          <div className="mb-4 flex items-center gap-2">
            <img src={logoIcon} alt="키네마 로고 아이콘" className="h-5 w-5" />
            <img src={logo} alt="키네마 로고" className="h-5" />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="animate-fadeInUp delay-100">
            <h3 className="mb-3 font-semibold text-small">KINEMA</h3>
            <p className="text-xsmall leading-relaxed text-text-secondary">
              영화 기록 & 추천 플랫폼
            </p>
          </div>

          <div className="animate-fadeInUp delay-200">
            <h3 className="mb-3 text-small">Product</h3>
            <ul className="space-y-2 text-xsmall text-text-secondary">
              {['Explore', 'My List'].map((item) => (
                <li
                  key={item}
                  className="group flex cursor-pointer items-center gap-1 transition"
                >
                  <span className="transition group-hover:translate-x-1">
                    {item}
                  </span>
                  <span className="translate-x-0 text-primary opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fadeInUp delay-300">
            <h3 className="mb-3 text-small">Company</h3>
            <ul className="space-y-2 text-xsmall text-text-secondary">
              {['About', 'Careers'].map((item) => (
                <li
                  key={item}
                  className="group flex cursor-pointer items-center gap-1 transition"
                >
                  <span className="transition group-hover:translate-x-1">
                    {item}
                  </span>
                  <span className="translate-x-0 text-primary opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fadeInUp delay-400">
            <h3 className="mb-3 text-small">Support</h3>
            <ul className="space-y-2 text-xsmall text-text-secondary">
              {['Help Center', 'FAQ'].map((item) => (
                <li
                  key={item}
                  className="group flex cursor-pointer items-center gap-1 transition"
                >
                  <span className="transition group-hover:translate-x-1">
                    {item}
                  </span>
                  <span className="translate-x-0 text-primary opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-fadeInUp flex flex-col items-center justify-between gap-6 border-t border-border-subtle pt-6 delay-500 md:flex-row">
          <p className="text-xsmall text-text-disabled">
            © 2026 KINEMA. All rights reserved.
          </p>

          <div className="flex gap-3">
            {['G', 'I', 'T'].map((item, idx) => (
              <div
                key={idx}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-bg-input transition-all duration-300 hover:scale-110 hover:bg-primary"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
