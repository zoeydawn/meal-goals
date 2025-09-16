import React from 'react'
import MonthCalendar from '@/components/calendar/MonthCalendar'
import WeekCalendar from '@/components/calendar/WeekCalendar'
import { View } from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import DayCalendar from '@/components/calendar/DayCalendar'
import { DateObject } from '@/types/calendarTypes'
import { getToday } from '@/constants/calendar'
import { useMealDiaryItems } from '@/hooks/useMealDiaryItems'

const Page = () => {
  const [calendarView, setCalendarView] = React.useState<
    'month' | 'week' | 'day'
  >('month')
  const today = getToday()
  const [viewedDay, setViewedDay] = React.useState<DateObject>(today)

  const mealItems = useMealDiaryItems()

  const selectDay = (day: DateObject) => {
    setCalendarView('day')
    setViewedDay(day)
  }

  return (
    <View className="flex-1 justify-center">
      {calendarView === 'month' && (
        <MonthCalendar mealItems={mealItems} setViewedDay={selectDay} />
      )}
      {calendarView === 'week' && (
        <WeekCalendar mealItems={mealItems} setViewedDay={selectDay} />
      )}
      {calendarView === 'day' && (
        <DayCalendar mealItems={mealItems} selectedDay={viewedDay} />
      )}

      <View className="flex flex-row justify-between p-4">
        {calendarView === 'day' && (
          <Button
            size="md"
            variant="solid"
            action="primary"
            // disabled={calendarView === 'month'}
            onPress={() => setCalendarView('month')}
          >
            <ButtonText>Back</ButtonText>
          </Button>
        )}
        {/*<Button
          size="md"
          variant="solid"
          action="primary"
          disabled={calendarView === 'week'}
          onPress={() => setCalendarView('week')}
        >
          <ButtonText>Week</ButtonText>
        </Button>
        <Button
          size="md"
          variant="solid"
          action="primary"
          disabled={calendarView === 'day'}
          onPress={() => setCalendarView('day')}
        >
          <ButtonText>Day</ButtonText>
        </Button>*/}
      </View>
    </View>
  )
}

export default Page
