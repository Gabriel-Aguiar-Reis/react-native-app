import { Pressable } from 'react-native'
import { Link } from 'expo-router'

type IconProps = {
  section: string
  icon: React.ElementType
  actualSection: string
}

const IconButton = ({ section, icon: Icon, actualSection }: IconProps) => {
  const color = section === actualSection ? 'white' : '#475569'
  return (
    <Link href={'/' + section} asChild>
      <Pressable>
        <Icon color={color} size="35" />
      </Pressable>
    </Link>
  )
}

export default IconButton
