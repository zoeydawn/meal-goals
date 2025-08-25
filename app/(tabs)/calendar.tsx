import React from 'react'
import MonthCalendar from '@/components/MonthCalendar'
import WeekCalendar from '@/components/WeekCalendar'
import { View } from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import DayCalendar from '@/components/DayCalendar'
import { DateObject } from '@/types/calendarTypes'

const today: DateObject = {
  dateString: '2025-08-25',
  day: 25,
  month: 8,
  timestamp: 1756080000000,
  year: 2025,
}

const Page = () => {
  const [calendarView, setCalendarView] = React.useState<
    'month' | 'week' | 'day'
  >('month')
  const [viewedDay, setViewedDay] = React.useState<DateObject>(today)
  const selectDay = (day: DateObject) => {
    // console.log('viewed day', day)
    // console.log('type', typeof day)
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
