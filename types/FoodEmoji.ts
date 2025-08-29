import { DateData } from 'react-native-calendars'

type EmojiCategory =
  | 'fruits_vegetables'
  | 'grains_starches'
  | 'meat'
  | 'protein'
  | 'seafood'
  | 'dairy'
  | 'fast_food'
  | 'prepared_meals'
  | 'sweets_desserts'
  | 'non_alcoholic_drinks'
  | 'alcoholic_drinks'
  | 'misc'

export type FoodEmoji = {
  emoji: string
  name: string
  categories: EmojiCategory[]
}

export type MealItem = {
  dateAdded: DateData
} & FoodEmoji
