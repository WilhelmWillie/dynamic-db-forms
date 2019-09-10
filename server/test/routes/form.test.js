import request from "supertest";

import app from "../../app";

describe("API form", () => {
  it("GET /api/v1/form returns array of fields", done => {
    request(app)
      .get("/api/v1/form")
      .expect(200)
      .end((err, res) => {
        const data = res.body;
        expect(data.length).toEqual(0);
        done();
      });
  });
});
