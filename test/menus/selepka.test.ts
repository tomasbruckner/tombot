import Selepka from "../../src/menus/Selepka";

describe("Selepka", () => {
    let requestMock;
    let testedClass: Selepka;

    beforeAll(() => {
        requestMock = jest.fn();
    });

    beforeEach(() => {
        testedClass = new Selepka({get: requestMock});
    });

    test("Resolve menu long response", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"}, "apikey");

        expect(requestMock.mock.calls.length).toBe(1);

        const callback = requestMock.mock.calls[0][1];

        callback(undefined, {statusCode: 200}, response);

        menu.then(resultMenu => {
            expect(resultMenu).toEqual(expectedSlackMenu);
            done();
        });
    });

    test("Resolve menu short response", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"}, "apikey");

        expect(requestMock.mock.calls.length).toBe(1);

        const callback = requestMock.mock.calls[0][1];
        const shortResponse = JSON.stringify(JSON.parse(response).daily_menus[0].daily_menu.dishes);

        callback(undefined, {statusCode: 200}, shortResponse);

        menu.then(resultMenu => {
            expect(resultMenu).toEqual(expectedSlackMenu);
            done();
        });
    });

    test("Reject menu status code", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"}, "apikey");

        expect(requestMock.mock.calls.length).toBe(1);

        const callback = requestMock.mock.calls[0][1];

        callback(undefined, {statusCode: 404}, response);

        menu.catch(resultMenu => {
            done();
        });
    });

    test("Reject menu error", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"}, "apikey");

        expect(requestMock.mock.calls.length).toBe(1);

        const callback = requestMock.mock.calls[0][1];

        callback({}, {statusCode: 200}, response);

        menu.catch(resultMenu => {
            done();
        });
    });

    test("Reject menu invalid response", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"}, "apikey");

        expect(requestMock.mock.calls.length).toBe(1);

        const callback = requestMock.mock.calls[0][1];
        const invalidJson = "{a:}";

        callback(undefined, {statusCode: 200}, invalidJson);

        menu.catch(resultMenu => {
            done();
        });
    });

    afterEach(() => {
        requestMock.mockReset();
    });
});

const expectedSlackMenu = {
    as_user: true,
    attachments:
        [{
            color: "#d11b45",
            fallback: "Restaurant menu",
            footer: "",
            text: "Polévka: Hovězí vývar s celestýnskými nudlemi | Beef broth with celestine noodles 1,3,9",
            title: "Šelepka",
            title_link: "http://www.selepova.cz/denni-menu",
        },
            {
                color: "#d11b45",
                fallback: "Restaurant menu",
                footer: "Cena: 99 Kč",
                text: "1. Špagety s pestem ze sušených rajčat, česnekem a olivami, drcený parmazán | Spaghetti with sun-dried tomatoes pesto, garlic and olives, crushed parmesan 1,3,7",
            },
            {
                color: "#d11b45",
                fallback: "Restaurant menu",
                footer: "Cena: 109 Kč",
                text: "2. Grilovaná krkovička s pepřovou omáčkou a rozmarýnovým bramborem | Grilled pork neck with pepper sauce and rosemary potatoes 7",
            },
            {
                color: "#d11b45",
                fallback: "Restaurant menu",
                footer: "Cena: 145 Kč",
                text: "3. Listové saláty s rukolou, jahodami a přírodním kozím sýrem, rozpečená bageta | Lettuce with rocket, strawberries and fresh goat cheese, toasted baguette 1,3,7",
            },
            {
                color: "#d11b45",
                fallback: "Restaurant menu",
                footer: "Cena: 179 Kč",
                text: "4. Steak z nízkého roštěnce s mladým hráškem, bramborové gratiny | Striploin steak with new peas, potato gratins 7",
            },
            {
                color: "#d11b45",
                fallback: "Restaurant menu",
                footer: "Cena: 79 Kč",
                text: "5. Velká polévka: Krém z pečeného pastináku s bílými fazolemi, dýňový olej, toast | Big soup: Roasted parsnip cream with white beans, pumpkin oil, toast 1,3,7",
            },
            {
                color: "#d11b45",
                fallback: "Restaurant menu",
                footer: "Cena: 129 Kč",
                text: "6. FIT: Tortilla s kuřecím masem, fazolkami a avokádem, zakysaná smetana | Tortilla with chicken, green beans and avocado, sour cream 1,7",
            },
            {
                color: "#d11b45",
                fallback: "Restaurant menu",
                footer: "Cena: 49 Kč",
                text: "7. Dezert: Rebarborový koláč | Rhubarb cake 1,3,7",
            }],
    channel: "channel",
    text: "",
};

const response = JSON.stringify({
    "daily_menus": [
        {
            "daily_menu": {
                "daily_menu_id": "19738182",
                "start_date": "2018-06-04 00:00:00",
                "end_date": "2018-06-04 23:59:59",
                "name": "",
                "dishes": [
                    {
                        "dish": {
                            "dish_id": "678362494",
                            "name": "Polévka: Hovězí vývar s celestýnskými nudlemi | Beef broth with celestine noodles 1,3,9",
                            "price": "",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678362495",
                            "name": "1. Špagety s pestem ze sušených rajčat, česnekem a olivami, drcený parmazán | Spaghetti with sun-dried tomatoes pesto, garlic and olives, crushed parmesan 1,3,7",
                            "price": "99 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678362496",
                            "name": "2. Grilovaná krkovička s pepřovou omáčkou a rozmarýnovým bramborem | Grilled pork neck with pepper sauce and rosemary potatoes 7",
                            "price": "109 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678362497",
                            "name": "3. Listové saláty s rukolou, jahodami a přírodním kozím sýrem, rozpečená bageta | Lettuce with rocket, strawberries and fresh goat cheese, toasted baguette 1,3,7",
                            "price": "145 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678362498",
                            "name": "4. Steak z nízkého roštěnce s mladým hráškem, bramborové gratiny | Striploin steak with new peas, potato gratins 7",
                            "price": "179 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678362499",
                            "name": "5. Velká polévka: Krém z pečeného pastináku s bílými fazolemi, dýňový olej, toast | Big soup: Roasted parsnip cream with white beans, pumpkin oil, toast 1,3,7",
                            "price": "79 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678362500",
                            "name": "6. FIT: Tortilla s kuřecím masem, fazolkami a avokádem, zakysaná smetana | Tortilla with chicken, green beans and avocado, sour cream 1,7",
                            "price": "129 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678362501",
                            "name": "7. Dezert: Rebarborový koláč | Rhubarb cake 1,3,7",
                            "price": "49 Kč",
                        },
                    },
                ],
            },
        },
    ],
    "status": "success",
});
