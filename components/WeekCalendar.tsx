import { WeekCalendar as RNWeekCalendar } from 'react-native-calendars'
import { Text, View } from 'react-native'

type EmojiDays = Record<string, string>

const emojiDays: EmojiDays = {
  '2025-08-17': '🍎🍊',
  '2025-08-18': '🍜',
  '2025-08-19': '🍉🍇',
  '2025-08-20': '🥐☕',
  '2025-08-21': '🍤🍚',
  '2025-08-22': '🥩🍷',
  '2025-08-23': '🍩',
}

export default function WeekCalendar() {
  return (
    <RNWeekCalendar
      current={new Date().toISOString().split('T')[0]}
      firstDay={0} // Sunday
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
