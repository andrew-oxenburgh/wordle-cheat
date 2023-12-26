import type { Meta, StoryObj } from '@storybook/react'

import CopyableText from '../components/CopyableText'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CopyableText> = {
  title: 'Sketches/CopyableText',
  component: CopyableText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Button stories expect a label arg
    text: {
      control: 'text',
      description: 'Overwritten description',
    },
    warning: {
      control: 'text',
      description: 'Adds a title to the tooptip.',
    },
    time: {
      control: 'number',
      description: 'How long does the dialog show for, in ms.',
    },
  },
}

export default meta
type Story = StoryObj<typeof CopyableText>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'button',
    // label: 'Button',
  },
  render: () => (<>
    <p>kjkjhkjhkhkh</p>
    <CopyableText text="jjgjjgjhgh" />
  </>),
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Warning: Story = {
  args: {
    text: 'lljlkjbuttonljlk',
    warning: 'be careful',
    time: 5000,
  },
  parameters: {
    backgrounds: {
      time: [
        1000, 10000, 100000,
      ],
    },
  },

}
