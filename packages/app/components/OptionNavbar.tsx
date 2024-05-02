import React from 'react'
import { X } from '@tamagui/lucide-icons'
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Sheet,
  TooltipSimple,
  Unspaced,
  XStack,
  YStack,
  ZStack,
  H3,
  H2,
  Select,
} from 'tamagui'
import { SelectDemo } from './Dropdown'

function DialogDemo() {
  return (
    <XStack width={400} height={300} padding="$2" margin="$5" alignSelf="center" space>
      <XStack
        flex={1}
        borderWidth={2}
        borderColor="black"
        borderRadius="$6"
        padding="$2"
        justifyContent="center"
      >
        <YStack p="$5" flex={1}>
          <XStack>
            <H2 color="black">Find Your Car</H2>
          </XStack>
          <XStack>
            <SelectDemo />
          </XStack>
        </YStack>
      </XStack>
    </XStack>
  )
}

export default DialogDemo
