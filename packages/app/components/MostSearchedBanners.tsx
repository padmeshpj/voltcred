import { XStack, YStack, H4, H2, H5, H3 } from '@my/ui'
import { SolitoImage } from 'solito/image'
import { Button, Card, Paragraph } from 'tamagui'
import GWagon from '../assets/gwagon.jpg'

export function MostSearchedBanners() {
  return (
    <YStack
      flex={1}
      borderWidth={2}
      borderColor="black"
      borderRadius="$10"
      maxWidth={300}
      overflow="hidden"
    >
      <SolitoImage src={GWagon} alt="product_image" style={{ width: '100%', height: 'auto' }} />
      <YStack py="$2">
        <H5 color="black" textAlign="center">
          Mercedes-Benz G-Class
        </H5>
        <H4 color="black" textAlign="center">
          Rs11.25 - 17.60 Lakh*
        </H4>
      </YStack>
      <Button m="$6">Buy Now</Button>
    </YStack>
  )
}
