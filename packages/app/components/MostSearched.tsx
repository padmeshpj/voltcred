import { XStack, YStack, H4, H2, H5, H3 } from '@my/ui'
import { SolitoImage } from 'solito/image'
import { Button, Card, Paragraph } from 'tamagui'
import GWagon from '../assets/gwagon.jpg'
import { MostSearchedBanners } from './MostSearchedBanners'

export function MostSearched() {
  return (
    <XStack width={1500} height={500} padding="$2" margin="$5" alignSelf="center" space>
      <XStack
        flex={1}
        borderWidth={2}
        borderColor="black"
        borderRadius="$6"
        padding="$2"
        justifyContent="center"
      >
        <XStack flex={1} p="$4" style={{ display: 'inline' }}>
          <XStack mb="$4">
            <H2 color="black">The Most Searched Cars</H2>
          </XStack>
          <XStack gap="$5" justifyContent='center'>
            <MostSearchedBanners />
            <MostSearchedBanners />
            <MostSearchedBanners />
            <MostSearchedBanners />
          </XStack>
        </XStack>
      </XStack>
    </XStack>
  )
}
