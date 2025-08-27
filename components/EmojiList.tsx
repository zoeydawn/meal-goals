import { foodEmojis } from '@/constants/emojis'
import { Text } from './ui/text'
import { Pressable } from './ui/pressable'
import { View } from 'react-native'
import { FoodEmoji } from '@/types/FoodEmoji'

const EmojiList = () => {
  const handlePress = (emoji: FoodEmoji) => {
    console.log('pressed:', emoji.emoji)
  }

  return (
    <View className="flex-row flex-wrap gap-2">
      {foodEmojis.map((emoji) => (
        <Pressable onPress={() => handlePress(emoji)} key={emoji.name}>
          <Text className="text-2xl">{emoji.emoji}</Text>
        </Pressable>
      ))}
    </View>
  )
}

export default EmojiList
