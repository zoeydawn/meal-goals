import { WeekCalendar as RNWeekCalendar } from 'react-native-calendars'
import { View } from 'react-native'
import { DateObject, MealItemsByDate } from '@/types/calendarTypes'
import { useColorScheme } from '@/hooks/useColorScheme'
import DayView from './calendar/DayView'

// type EmojiDays = Record<string, string>
//
// const emojiDays: EmojiDays = {
//   '2025-08-17': '🍎🍊',
//   '2025-08-18': '🍜',
//   '2025-08-19': '🍉🍇',
//   '2025-08-20': '🥐☕',
//   '2025-08-21': '🍤🍚',
//   '2025-08-22': '🥩🍷',
//   '2025-08-23': '🍩',
// }

type WeekCalendarProps = {
  setViewedDay: (day: DateObject) => void
  mealItems: MealItemsByDate
}

export default function WeekCalendar(props: WeekCalendarProps) {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <View className="h-40">
      <RNWeekCalendar
        key={`week-calendar-${colorScheme}`}
        style={{ height: 1000 }}
        current={new Date().toISOString().split('T')[0]}
        theme={{
          calendarBackground: isDark ? '#000' : '#fff', // dark/light background
        }}
        firstDay={0} // Sunday
        dayComponent={(dayProps) => {
          if (!dayProps?.date) return null

          const { date, state } = dayProps

          const todayEmojis = props.mealItems[date.dateString] || []

          return (
            <DayView
              setViewedDay={props.setViewedDay}
              date={date}
              state={state}
              mealItems={todayEmojis}
            />
          )
        }}
      />
    </View>
  )
}
