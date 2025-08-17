import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeMode = 'light' | 'dark'

type AppState = {
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      themeMode: 'light',
      setThemeMode: (mode) => set({ themeMode: mode }),
    }),
    { name: 'simple-food-diary-app' }, // AsyncStorage key
  ),
)
