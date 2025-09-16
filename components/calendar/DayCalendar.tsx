import { Text, View } from 'react-native'
import { DateObject, MealItemsByDate } from '@/types/calendarTypes'

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
        {props.selectedDay.dateString}
      </Text>

      {emojis && <Text className="text-5xl">{emojis}</Text>}
    </View>
  )
}
