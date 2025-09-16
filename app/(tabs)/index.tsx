import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Card } from '@/components/ui/card'
import { useMealDiaryItems } from '@/hooks/useMealDiaryItems'
import {
  filterMealsThisMonth,
  filterMealsThisWeek,
  getToday,
} from '@/constants/calendar'
import { useMealDiaryStore } from '@/store/useMealDiaryStore'

export default function HomeScreen() {
  const mealItemsByDate = useMealDiaryItems()
  const { mealItems } = useMealDiaryStore()
  const today = getToday()

  const thisWeeksMealItems = filterMealsThisWeek(mealItems)
  const thisMonthsMealItems = filterMealsThisMonth(mealItems)

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <Card size="md" variant="elevated" className="m-3">
        <Heading>Today:</Heading>
        <Text>
          {mealItemsByDate[today.dateString]
            ?.map((item) => item.emoji)
            .join('')}
        </Text>
      </Card>
      <Card size="md" variant="elevated" className="m-3">
        <Heading>This week:</Heading>
        <Text>{thisWeeksMealItems.map((item) => item.emoji).join('')}</Text>
      </Card>
      <Card size="md" variant="elevated" className="m-3">
        <Heading>This month:</Heading>
        <Text>{thisMonthsMealItems.map((item) => item.emoji).join('')}</Text>
      </Card>{' '}
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
