import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeState {
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      // start with system theme
      themeMode: 'system',
      setThemeMode: (mode) => set({ themeMode: mode }),
    }),
    { name: 'theme-preference' }, // storage key
  ),
)
