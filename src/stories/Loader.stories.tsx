import type { Meta, StoryObj } from '@storybook/react'

import Loader from '../components/Loader'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Loader> = {
  title: 'Sketches/Loader',
  component: Loader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Button stories expect a label arg
  },
}

export default meta
type Story = StoryObj<typeof Loader>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'button',
    // label: 'Button',
  },
  render: () => (<>
    <Loader />
  </>),
}
