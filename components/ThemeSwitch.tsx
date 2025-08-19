// component for switching themes
import React from 'react'
import { useThemeStore } from '@/store/useThemeStore'
import { Button, ButtonIcon } from './ui/button'
import { MoonIcon, SunIcon } from './ui/icon'
import { useColorScheme } from 'react-native'

const ThemeSwitch = () => {
  const colorScheme = useColorScheme()
  const { setThemeMode } = useThemeStore()

  const handleToggle = () => {
    console.log('themeMode', colorScheme)
    setThemeMode(colorScheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button onPress={handleToggle} size="lg" className="rounded-full p-3.5">
      {colorScheme === 'dark' && <ButtonIcon as={MoonIcon} />}
      {colorScheme === 'light' && <ButtonIcon as={SunIcon} />}
    </Button>
  )
}

export default ThemeSwitch
