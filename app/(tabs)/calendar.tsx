import React from 'react'
import MonthCalendar from '@/components/MonthCalendar'
import WeekCalendar from '@/components/WeekCalendar'
import { View } from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import DayCalendar from '@/components/DayCalendar'
import { DateObject } from '@/types/calendarTypes'
import { getToday } from '@/constants/calendar'

const Page = () => {
  const [calendarView, setCalendarView] = React.useState<
    'month' | 'week' | 'day'
  >('month')
  const today = getToday()
  const [viewedDay, setViewedDay] = React.useState<DateObject>(today)
  const selectDay = (day: DateObject) => {
    setCalendarView('day')
    setViewedDay(day)
  }

  return (
    <View className="flex-1 justify-center">
      {calendarView === 'month' && <MonthCalendar setViewedDay={selectDay} />}
      {calendarView === 'week' && <WeekCalendar />}
      {calendarView === 'day' && <DayCalendar selectedDay={viewedDay} />}

      <View className="flex flex-row justify-between p-4">
        <Button
          size="md"
          variant="solid"
          action="primary"
          disabled={calendarView === 'month'}
          onPress={() => setCalendarView('month')}
        >
          <ButtonText>Month</ButtonText>
        </Button>
        <Button
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
        </Button>
      </View>
    </View>
  )
}

export default Page
