
interface Props {
    cb: () => void
}

export default class OnUpdate extends React.Component<Props> {
    public componentDidUpdate() {
        this.props.cb()
    }

    public render() {
        return null
    }
}
