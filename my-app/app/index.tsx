import { View, Text } from 'react-native'
import '@/global.css'
import { Avatar, AvatarImage } from '@/components/Avatar'

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Avatar className="h-20 w-20">
        <AvatarImage
          source={{ uri: 'https://github.com/Gabriel-Aguiar-Reis.png' }}
        />
      </Avatar>
      <Text className="text-white font-bold text-2xl mt-4">
        Hello Native World!
      </Text>
    </View>
  )
}
