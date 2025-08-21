import { Calendar } from 'react-native-calendars'
import { Text, View } from 'react-native'

type EmojiDays = Record<string, string> // YYYY-MM-DD -> emoji string

const emojiDays: EmojiDays = {
  '2025-08-10': '🍎🍌',
  '2025-08-11': '🍕',
  '2025-08-12': '🍔🍟',
  '2025-08-13': '🍣',
  '2025-08-14': '🥗',
  '2025-08-15': '🍪🍫🥩🍷🍉🍇',
  '2025-08-16': '🍷',
  '2025-08-17': '🍎🍊',
  '2025-08-18': '🍜',
  '2025-08-19': '🍉🍇',
  '2025-08-20': '🥐☕',
  '2025-08-21': '🍤🍚',
  '2025-08-22': '🥩🍷',
  '2025-08-23': '🍩',
}

export default function CalendarView() {
  return (
    <Calendar
      dayComponent={({ date, state }) => {
        if (!date) return null

        const emojis = emojiDays[date.dateString]

        return (
          <View className="items-center justify-center p-1">
            <Text
              className={state === 'disabled' ? 'text-gray-400' : 'text-black'}
            >
              {date.day}
            </Text>
            {emojis && <Text>{emojis}</Text>}
          </View>
        )
      }}
    />
  )
}
