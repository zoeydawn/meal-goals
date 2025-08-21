import React from 'react'
import MonthCalendar from '@/components/MonthCalendar'
import WeekCalendar from '@/components/WeekCalendar'
import { View } from 'react-native'

const Page = () => {
  const [calendarView, setCalendarView] = React.useState('month')
  const setViewedDay = (view: string) => {
    console.log('viewed day', view)
    // setCalendarView('day')
  }

  return (
    <View className="flex-1 justify-center">
      {calendarView === 'month' && (
        <MonthCalendar setViewedDay={setViewedDay} />
      )}
      {calendarView === 'week' && <WeekCalendar />}
    </View>
  )
}

export default Page
