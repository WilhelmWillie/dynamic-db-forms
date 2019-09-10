import request from "supertest";

import app from "../../app";
import { sequelize } from "../../models";

describe("API form", () => {
  it("POST /api/v1/form/field creates a field", async done => {
    request(app)
      .post("/api/v1/form/field")
      .send({
        label: "First Name",
        type: "text",
        order: 0,
        required: true,
        active: true
      })
      .expect(200)
      .end((err, res) => {
        const data = res.body;
        expect(data.label).toEqual("First Name");
        done();
      });
  });

  afterAll(async done => {
    sequelize.close();
    done();
  });
});
