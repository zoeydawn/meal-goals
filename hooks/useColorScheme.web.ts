import { useThemeStore } from '@/store/useThemeStore'
import { useEffect, useState } from 'react'
import { useColorScheme as useRNColorScheme } from 'react-native'

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  const rnColorScheme = useRNColorScheme()
  const themeMode = useThemeStore((s) => s.themeMode)

  // TODO: check if this is needed
  if (!hasHydrated) {
    return 'light'
  }

  if (themeMode === 'system') {
    return rnColorScheme
  }

  return themeMode
}
