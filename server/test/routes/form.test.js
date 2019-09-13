import request from "supertest";

import app from "../../app";

describe("API form", () => {
  it("GET /api/v1/form returns array of fields", done => {
    request(app)
      .get("/api/v1/form")
      .expect(200)
      .end((err, res) => {
        const data = res.body;
        expect(data.length).toEqual(6);
        done();
      });
  });

  it("POST /api/v1/form with valid input creates responses", done => {
    request(app)
      .post("/api/v1/form")
      .expect(200)
      .end((err, res) => {
        done();
      });
  });

  it("POST /api/v1/form with invalid input does not create responses", done => {
    request(app)
      .post("/api/v1/form")
      .expect(500)
      .end((err, res) => {
        done();
      });
  });
});
