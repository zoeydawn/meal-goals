import { Pressable, Text, View } from 'react-native'
import { DateObject } from '@/types/calendarTypes'
import { isToday } from '@/constants/calendar'
import { MealItem } from '@/types/FoodEmoji'
import { DayState } from 'react-native-calendars/src/types'

type DayViewProps = {
  setViewedDay: (day: DateObject) => void
  date: DateObject
  state: DayState | undefined
  mealItems: MealItem[]
}

export default function DayView({
  date,
  state,
  mealItems,
  setViewedDay,
}: DayViewProps) {
  if (!date) return null

  const emojis = mealItems.map((item) => item.emoji).join('')
  const dateIsToday = isToday(date)

  return (
    <Pressable onPress={() => setViewedDay(date)}>
      <View className="items-center p-1 h-20">
        <View
          className={
            dateIsToday
              ? 'bg-blue-500 rounded-full w-6 h-6 items-center flex'
              : ''
          }
        >
          <Text
            className={
              dateIsToday
                ? 'text-white'
                : state === 'disabled'
                  ? 'text-gray-400'
                  : 'text-black dark:text-white'
            }
          >
            {date.day}
          </Text>
        </View>
        {emojis && <Text>{emojis}</Text>}
      </View>
    </Pressable>
  )
}
