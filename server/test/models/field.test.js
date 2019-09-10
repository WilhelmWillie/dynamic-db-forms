import { Field } from "../../models";

describe("Field model", () => {
  it("is named Field", () => {
    expect(Field.name).toEqual("Field");
  });
});
