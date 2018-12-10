import DayInfo from "../../src/database/DayInfo";

const originalDate = global.Date;

beforeAll(() => {
    const mockDate: any = function () {
        this.getDate = () => 7;
        this.getMonth = () => 2;
    };

    global.Date = mockDate;
});

afterAll(() => {
    global.Date = originalDate;
});

test("name day and public holiday", () => {
    const nameDays: any = {
        getNameDay: jest.fn().mockReturnValueOnce(["Tom", "Tomáš"]),
    };

    const publicHolidays: any = {
        getPublicHoliday: jest.fn().mockReturnValueOnce({
            description: "Krásný Nový rok",
            name: "Nový rok",
        }),
    };

    const testedClass = new DayInfo(nameDays, publicHolidays);

    const result = testedClass.getDayInfo();

    expect(result).toBe(`Dnes je 7. 3. Svátek má: Tom, Tomáš. Gratulujeme!
Státní svátek: Nový rok!
Krásný Nový rok
`);

    expect(nameDays.getNameDay.mock.calls.length).toBe(1);
    expect(nameDays.getNameDay.mock.calls[0].length).toBe(1);
    expect(nameDays.getNameDay.mock.calls[0][0]).toBe("7. 3.");

    expect(publicHolidays.getPublicHoliday.mock.calls.length).toBe(1);
    expect(publicHolidays.getPublicHoliday.mock.calls[0].length).toBe(1);
    expect(publicHolidays.getPublicHoliday.mock.calls[0][0]).toBe("7. 3.");
});

test("name day", () => {
    const nameDays: any = {
        getNameDay: jest.fn().mockReturnValueOnce(["Tom", "Tomáš"]),
    };

    const publicHolidays: any = {
        getPublicHoliday: jest.fn(),
    };

    const testedClass = new DayInfo(nameDays, publicHolidays);

    const result = testedClass.getDayInfo();

    expect(result).toBe(`Dnes je 7. 3. Svátek má: Tom, Tomáš. Gratulujeme!
`);
});

test("public holiday", () => {
    const nameDays: any = {
        getNameDay: jest.fn(),
    };

    const publicHolidays: any = {
        getPublicHoliday: jest.fn().mockReturnValueOnce({
            description: "Krásný Nový rok",
            name: "Nový rok",
        }),
    };

    const testedClass = new DayInfo(nameDays, publicHolidays);

    const result = testedClass.getDayInfo();

    expect(result).toBe(`Dnes je 7. 3. Státní svátek: Nový rok!
Krásný Nový rok
`);
});
