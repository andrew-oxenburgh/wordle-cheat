import * as R from 'ramda'
import Stack from 'react-bootstrap/esm/Stack'
import { ButtonWithTooltip } from '#/components/ButtonWithTooltip'
import { downloadIt } from './config'

export const DownloadPanel = ({ eleId }: { eleId: string }) => {
    const dlTypes = [
        'webp', 'png', 'jpg',
    ]

    return <>
        <h3>Download as mimeType</h3>
        <p>Download a couple of mimietypres and check the difference in file size.</p>
        <Stack direction='horizontal' gap={3}>
            {R.map((mimeType: string) => {
                return (
                    <ButtonWithTooltip placement='top' tipText={`download as ${mimeType}`} key={mimeType}
                        onClick={() => void downloadIt(document, eleId, mimeType)}
                    >
                        {mimeType}
                    </ButtonWithTooltip>
                )
            }, dlTypes)}
        </Stack>
    </>
}
