import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'
import { loggerError } from '#/config/logger'
import * as R from 'ramda'
import Stack from 'react-bootstrap/esm/Stack'
import { ButtonWithTooltip } from '#/components/ButtonWithTooltip'
import { downloadFilename } from '#/config/config'

export const Download = ({ eleId }: { eleId: string }) => {
    const downloadAsMimeType = (canvas: HTMLCanvasElement, mimeType: string) => {
        const dataURL = canvas.toDataURL(`image/${mimeType}`)
        downloadjs(dataURL, `${downloadFilename}.${mimeType}`, `image/${mimeType}`)
    }

    const downloadIt = async (t: string) => {
        try {
            const board = document.getElementById(eleId)
            if (!board) {
                return
            }
            const affirm = confirm('Press OK to download')

            if (!affirm) {
                return
            }

            const canvas = await html2canvas(board)
            downloadAsMimeType(canvas, t)
        } catch (e) {
            loggerError(e)
        }
    }

    const dlTypes = [
        'webp', 'png', 'jpg',
    ]

    return <>
        <h3>Download as mimeType</h3>
        <p>Download a couple of mimietypres and check the difference in file size.</p>
        <Stack direction='horizontal' gap={3}>
            {R.map((t: string) => {
                return (
                    <ButtonWithTooltip placement='top' tipText={`download as ${t}`} key={t}
                        onClick={() => void downloadIt(t)}
                    >
                        {t}
                    </ButtonWithTooltip>
                )
            }, dlTypes)}
        </Stack>
    </>
}
