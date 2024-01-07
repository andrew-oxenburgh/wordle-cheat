import { ReactNode } from 'react'
import Button, { ButtonProps } from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

type ButtonWithTooltipProps = {
    tipText: string | ReactNode
    children?: string | JSX.Element | JSX.Element[]
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto'
} & ButtonProps

export const ButtonWithTooltip: React.FC<ButtonWithTooltipProps> = (
    { placement = 'bottom', tipText, children, ...args }) => {

    const tooltip = (
        <Tooltip id="tooltip">
            {tipText}
        </Tooltip>
    )

    return <OverlayTrigger placement={placement} overlay={tooltip}>
        <Button
            {...args}
        >
            {children}
        </Button>
    </OverlayTrigger>
}
