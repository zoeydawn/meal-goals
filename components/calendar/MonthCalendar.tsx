import { Calendar } from 'react-native-calendars'
import { useColorScheme } from '@/hooks/useColorScheme'
import { DateObject, MealItemsByDate } from '@/types/calendarTypes'
import DayView from './DayView'

// type EmojiDays = Record<string, string> // YYYY-MM-DD -> emoji string

// const emojiDays: EmojiDays = {
//   '2025-08-10': '🍎🍌',
//   '2025-08-11': '🍕',
//   '2025-08-12': '🍔🍟',
//   '2025-08-13': '🍣',
//   '2025-08-14': '🥗',
//   '2025-08-15': '🍪🍫🥩🍷🍉🍇',
//   '2025-08-16': '🍷',
//   '2025-08-17': '🍎🍊',
//   '2025-08-18': '🍜',
//   '2025-08-19': '🍉🍇',
//   '2025-08-20': '🥐☕',
//   '2025-08-21': '🍤🍚',
//   '2025-08-22': '🥩🍷',
//   '2025-08-23': '🍩',
// }

type MonthCalendarProps = {
  setViewedDay: (day: DateObject) => void
  mealItems: MealItemsByDate
}

export default function MonthCalendar(props: MonthCalendarProps) {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <Calendar
      key={`month-calendar-${colorScheme}`}
      theme={{
        calendarBackground: isDark ? '#000' : '#fff', // dark/light background
      }}
      dayComponent={({ date, state }) => {
        if (!date) return null

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
  )
}
