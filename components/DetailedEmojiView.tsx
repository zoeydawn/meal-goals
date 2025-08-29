import { Pressable, View } from 'react-native'
import { Text } from './ui/text'
import { FoodEmoji } from '@/types/FoodEmoji'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, Icon } from './ui/icon'

interface DetailedEmojiViewProps {
  emoji: FoodEmoji
}

const DetailedEmojiView = (props: DetailedEmojiViewProps) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      <View className="flex-row items-center">
        <Text className="text-5xl">{props.emoji.emoji}</Text>
        <Text className="capitalize pl-2">{props.emoji.name}</Text>
        <Text> x {quantity}</Text>
      </View>

      <View className="flex-row justify-between p-8">
        <Pressable onPress={() => setQuantity(quantity - 1)}>
          <Icon as={ChevronLeftIcon} />
        </Pressable>
        <Text>{quantity}</Text>
        <Pressable onPress={() => setQuantity(quantity + 1)}>
          <Icon as={ChevronRightIcon} />
        </Pressable>
      </View>
    </>
  )
}

export default DetailedEmojiView
