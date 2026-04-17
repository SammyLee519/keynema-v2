import { useEffect, useState } from 'react'

export default function useHeaderScroll() {
  const [hasBackdropFilter, setHasBackdropFilter] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setHasBackdropFilter(window.scrollY > 50)
      }, 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return hasBackdropFilter
}
