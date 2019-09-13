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
        expect(data.required).toEqual(true);
        expect(data.active).toEqual(true);
        done();
      });
  });

  it("PUT /api/v1/form/field/:id updates field", done => {
    request(app)
      .put("/api/v1/form/field")
      .expect(200)
      .end((err, res) => {
        done();
      });
  });

  it("DELETE /api/v1/form/field/:id deletes field", done => {
    request(app)
      .delete("/api/v1/form/field")
      .expect(200)
      .end((err, res) => {
        done();
      });
  });

  afterAll(async done => {
    sequelize.close();
    done();
  });
});
