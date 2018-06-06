import NameDays from "../../src/database/NameDays";

test("name day", () => {
    const testedClass = new NameDays();

    const result = testedClass.getNameDay("7. 3.");

    expect(result).toEqual(["Thomas", "Tom", "Tomáš"]);
});
