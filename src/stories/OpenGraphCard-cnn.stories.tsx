import type { Meta, StoryObj } from '@storybook/react'

import OpenGraphCard from '../components/OpenGraphCard'
import examples from './example-open-graph'
import { normalise } from '../pages/open-graph-page/open-graph.utils'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof OpenGraphCard> = {
    title: 'Sketches/OpenGraphCard/websites/cnn',
    component: OpenGraphCard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        normalisedGraph: {
            control: 'text',
        },
        loading: {
            control: 'boolean',
        },
        // 👇 All Button stories expect a label arg
    },
}

export default meta
type Story = StoryObj<typeof OpenGraphCard>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Initial: Story = {
    render: () => (
        <OpenGraphCard normalisedGraph={null} loading={false} />
    ),
}
export const Loading: Story = {
    render: () => (
        <OpenGraphCard normalisedGraph={null} loading={true} />
    ),
}
export const CnnRoot: Story = {
    name: 'cnn.com - home',
    render: () => (
        <OpenGraphCard normalisedGraph={normalise(examples['cnn-home'].graph, 'https://www.cnn.com')} loading={false} />
    ),
}
export const CnnStory: Story = {
    name: 'cnn.com - story',
    render: () => (
        <>
            <i>a cnn story</i>
            <OpenGraphCard normalisedGraph={normalise(examples['cnn-story'].graph, 'https://www.cnn.com')} loading={false} />
        </>
    ),
}
