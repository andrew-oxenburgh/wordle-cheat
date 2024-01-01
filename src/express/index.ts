import express from 'express'
import ogGraph from './ogGraph'
export const app = express()
app.get('/api/test', (_, res) =>
    res.json({ greeting: 'Hello' }
    ))

app.get('/api/graph', (req, res) => {
    const r = async () => {
        const { url } = req.query
        if (!url) {
            res.status(400).json({ error: 'No url provided' })
            res.end()
            return
        }

        const g = await ogGraph.graph(url as string)
        if (g.success) {
            res.json(g)
            res.end()
            return
        }

        res.status(500).json({ error: `failed to get ${url as string}` })
        res.end()

    }
    void r()
})
