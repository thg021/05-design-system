import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@thgsdev-ui/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,

  args: {
    children: 'This is a title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
  },
}
