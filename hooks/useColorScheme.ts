import { useThemeStore } from '@/store/useThemeStore'
import { useColorScheme as useRNColorScheme } from 'react-native'

export function useColorScheme() {
  const themeMode = useThemeStore((s) => s.themeMode)
  const rnColorScheme = useRNColorScheme()

  if (themeMode === 'system') {
    return rnColorScheme ?? 'light'
  }

  return themeMode // 'light' or 'dark'
}
