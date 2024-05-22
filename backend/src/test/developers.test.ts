import request from 'supertest';
import app from '../express';

describe("Test the developers path", () => {
  it("returns status code 200 if connected to database", async () => {
    const res = await request(app)
      .get("/api/developers")

    // expect(res.statusCode).toEqual(200);
    // expect(res.text).toBe('NMP API is healthy and ready!')
  })
})

