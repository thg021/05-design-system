import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, expedita. Fugiat aliquid, mollitia commodi rem blanditiis facere tempore iure distinctio non nulla consequuntur accusamus voluptatem similique excepturi amet, pariatur nemo!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
