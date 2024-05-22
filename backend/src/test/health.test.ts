import request from 'supertest';
import app from '../express';

describe("Test the root path", () => {
  it("returns status ocde 200 if healthy", async () => {
    const res = await request(app)
      .get("/api/health")

    expect(res.statusCode).toEqual(200);
  })
})

