import { Text, View } from 'react-native'
import { DateObject } from '@/types/calendarTypes'

type DayCalendarProps = {
  selectedDay: DateObject
}

export default function DayCalendar(props: DayCalendarProps) {
  if (!props.selectedDay) return null

  return (
    <View>
      <Text className="text-black dark:text-white">
        {props.selectedDay.dateString}
      </Text>
    </View>
  )
}
