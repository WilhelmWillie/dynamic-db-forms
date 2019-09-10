import { Field } from "../../models";

describe("Field model", () => {
  it("is named Field", done => {
    expect(Field.name).toEqual("Field");
    done();
  });
});
