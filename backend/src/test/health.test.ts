import request from 'supertest';
import app from '../express';

describe("Test the health path", () => {
  it("returns status code 200 if healthy", async () => {
    const res = await request(app)
      .get("/api/health")

    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('NMP API is healthy and ready!')
  })
})

