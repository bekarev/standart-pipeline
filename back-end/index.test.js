import request from 'supertest'
import { app, server } from './index.js'

describe('GET /note', () => {
    afterAll(async () => {
        await server.close()
    })

    it('should return note', async () => {
        return request(app)
            .get('/note')
            .expect(200)
            .then((res) => {
                expect(res.text).toBe('"note form server"')
            })
    })
})
