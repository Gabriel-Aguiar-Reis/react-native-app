import { View } from 'react-native'
import {
  ClipboardPenLine,
  Contact,
  FileSpreadsheet,
  Home,
  PackageSearch
} from 'lucide-react-native'
import IconButton from '@/components/IconButton'

export default function NavigationBar({ section }: { section: string }) {
  const sections = [
    { sec: 'Clientes', icon: Contact },
    { sec: 'Produtos', icon: PackageSearch },
    { sec: '', icon: Home },
    { sec: 'Roteiro', icon: FileSpreadsheet },
    { sec: 'OrdemServico', icon: ClipboardPenLine }
  ]

  return (
    <View className="flex flex-row h-16 w-80 absolute bottom-5 rounded-lg bg-slate-800 self-center items-center justify-evenly">
      {sections.map(({ sec, icon }) => (
        <IconButton
          key={sec}
          section={sec}
          icon={icon}
          actualSection={section}
        />
      ))}
    </View>
  )
}
