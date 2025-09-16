import { Text, View } from 'react-native'
import { DateObject, MealItemsByDate } from '@/types/calendarTypes'
import { formatDateObject } from '@/constants/calendar'

type DayCalendarProps = {
  selectedDay: DateObject
  setSelectedDay: (day: DateObject) => void
  mealItems: MealItemsByDate
}

export default function DayCalendar(props: DayCalendarProps) {
  if (!props.selectedDay) return null

  const todayEmojis = props.mealItems[props.selectedDay.dateString] || []
  const emojis = todayEmojis.map((item) => item.emoji).join('')

  return (
    <View>
      <Text className="text-black dark:text-white">
        {formatDateObject(props.selectedDay)}
      </Text>

      {emojis && <Text className="text-5xl">{emojis}</Text>}
    </View>
  )
}
