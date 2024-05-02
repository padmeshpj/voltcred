import { SelectSeparator, SizableText, Text, ThemeableStack, XStack, YStack } from '@my/ui'
import { Theme } from 'tamagui'
import { SolitoImage } from 'solito/image'
import { Link } from 'solito/link'
import VoltCred from '../assets/voltcred.png'
import User from '../assets/user.svg'

export function NavBar() {
  return (
    <>
      <XStack ai="center" flex={1} jc="flex-start" py="$2" $sm={{ px: '$3' }} $gtSm={{ px: '$8' }}>
        <XStack>
          <Link href="/">
            <SolitoImage src={VoltCred} alt="voltcred" height={60} />
          </Link>
        </XStack>
        <XStack gap="$20" flex={1} jc="flex-end">
          <Link href="/user">
            <XStack gap="$3" ai="center">
              <SolitoImage src={User} alt="usericon" height={30} />
              <Text color="black">Login / Register</Text>
            </XStack>
          </Link>
        </XStack>
      </XStack>
      <SelectSeparator />
      <XStack
        ai="center"
        flex={1}
        jc="space-evenly"
        py="$2"
        $sm={{ px: '$3' }}
        $gtSm={{ px: '$8' }}
      >
        <XStack gap="$20">
          <Link href="/user">
            <XStack gap="$3" ai="center">
              <SizableText size="$3" color="black">
                NEW CARS
              </SizableText>
            </XStack>
          </Link>
          <Link href="/buy">
            <XStack gap="$3" ai="center">
              <SizableText size="$3" color="black">
                BUY & SELL USED CARS
              </SizableText>
            </XStack>
          </Link>
          <Link href="/news">
            <XStack gap="$3" ai="center">
              <SizableText size="$3" color="black">
                NEWS, REVIEWS & VIDEOS
              </SizableText>
            </XStack>
          </Link>
          <Link href="/news">
            <XStack gap="$3" ai="center">
              <SizableText size="$3" color="black">
                CAR SERVICES
              </SizableText>
            </XStack>
          </Link>
        </XStack>
      </XStack>
      <SelectSeparator />
    </>
  )
}
