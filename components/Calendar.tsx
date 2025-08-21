import { Calendar } from 'react-native-calendars'
import { Text, View } from 'react-native'

export default function CalendarView() {
  const emojiDays = {
    '2025-08-17': '🍎',
    '2025-08-18': '🍕🍔',
    '2025-08-19': '🥗',
  }

  return (
    <Calendar
      dayComponent={({ date, state }) => {
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
