import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())


const PORT = process.env.PORT || 3000
const VERSION = process.env.GIT_SHA || process.env.npm_package_version || 'dev'


app.get('/api/hello', (req, res) => {
res.json({ message: 'Hello from backend' })
})


app.get('/health', (req, res) => res.send('ok'))
app.get('/api/version', (req, res) => res.send(String(VERSION)))


if (process.env.NODE_ENV !== 'test') {
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
}


export default app