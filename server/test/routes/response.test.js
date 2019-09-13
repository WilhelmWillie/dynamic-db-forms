import request from "supertest";

import app from "../../app";

describe("API form response", () => {
  it("GET /response/:username returns user's response", done => {
    request(app)
      .get("/api/v1/response/:username")
      .expect(200)
      .end((err, res) => {
        done();
      });
  });
});
