import { Pressable, View } from 'react-native'
import { Text } from './ui/text'
import { FoodEmoji } from '@/types/FoodEmoji'
import { ChevronLeftIcon, ChevronRightIcon, Icon } from './ui/icon'
import { DateObject } from '@/types/calendarTypes'
import { formatDateObject, getRelativeDateObject } from '@/constants/calendar'

interface DetailedEmojiViewProps {
  emoji: FoodEmoji
  selectedDate: DateObject
  setSelectedDate: (date: DateObject) => void
}

const DetailedEmojiView = (props: DetailedEmojiViewProps) => {
  return (
    <>
      <View className="flex-row items-center">
        <Text className="text-5xl">{props.emoji.emoji}</Text>
        <Text className="capitalize pl-2">{props.emoji.name}</Text>
      </View>

      <View className="flex-row justify-between p-8">
        <Pressable
          onPress={() =>
            props.setSelectedDate(getRelativeDateObject(-1, props.selectedDate))
          }
        >
          <Icon as={ChevronLeftIcon} />
        </Pressable>
        <Text>{formatDateObject(props.selectedDate)}</Text>
        <Pressable
          onPress={() =>
            props.setSelectedDate(getRelativeDateObject(1, props.selectedDate))
          }
        >
          <Icon as={ChevronRightIcon} />
        </Pressable>
      </View>
    </>
  )
}

export default DetailedEmojiView
