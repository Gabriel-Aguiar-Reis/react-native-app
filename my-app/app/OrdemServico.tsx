import { View, Text } from 'react-native'
import { Avatar, AvatarImage } from '@/components/Avatar'
import NavigationBar from '@/components/NavigationBar'

export default function Page() {
  return (
    <View className="flex-1 bg-slate-900 justify-center">
      <NavigationBar section={'OrdemServico'} />
      <Avatar className="h-20 w-20 self-center">
        <AvatarImage
          source={{ uri: 'https://github.com/Gabriel-Aguiar-Reis.png' }}
        />
      </Avatar>
      <Text className="text-center text-white font-bold text-2xl mt-4">
        Hello, OrdemServico World!
      </Text>
    </View>
  )
}
