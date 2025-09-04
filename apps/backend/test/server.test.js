import request from 'supertest'
import app from '../src/server.js'
import { describe, it, expect } from 'vitest'


describe('GET /api/hello', () => {
it('returns hello message', async () => {
const res = await request(app).get('/api/hello')
expect(res.status).toBe(200)
expect(res.body).toEqual({ message: 'Hello from backend' })
})
})