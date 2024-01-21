/* eslint @typescript-eslint/no-empty-function: "off" */
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import InfoThing from '#/components/InfoThing'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof InfoThing> = {
    title: 'Sketches/InfoThing',
    component: InfoThing,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        height: {
            control: 'text',
            description: 'height. May be a percentage',
        },
        show: {
            control: 'boolean',
        },
        onHide: {
            control: 'function',
        },
        // 👇 All Button stories expect a label arg
    },
}

export default meta
type Story = StoryObj<typeof InfoThing>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        height: '50%',
        show: false,
    },
    render: (args) => {
        const [{ show }, updateArgs] = useArgs()

        const onHide = () => {
            updateArgs({ show: !show })
        }

        return (<>
            <InfoThing  {...args} onHide={onHide}>
                <p>some kiddies</p>
            </InfoThing >
        </>)
    },
}
