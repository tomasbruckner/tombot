import Nepal from "../../src/menus/Nepal";

describe("LLoyd's", () => {
    let requestMock;
    let testedClass: Nepal;

    beforeAll(() => {
        requestMock = jest.fn();
    });

    beforeEach(() => {
        testedClass = new Nepal({get: requestMock});
    });

    test("Resolve menu response", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"}, "apikey");

        expect(requestMock.mock.calls.length).toBe(1);

        const callback = requestMock.mock.calls[0][1];

        callback(undefined, {statusCode: 200}, response);

        menu.then(resultMenu => {
            expect(resultMenu).toEqual(expectedSlackMenu);
            done();
        });
    });

    afterEach(() => {
        requestMock.mockReset();
    });
});

const expectedSlackMenu = {
    "as_user": true,
    "attachments": [
        {
            "color": "#827717",
            "fallback": "Restaurant menu",
            "footer": "Cena: 17 Kč",
            "text": "Dal Palak Soup (Indická polévka s čočkou a špenátem)",
            "title": "Golden Nepal",
            "title_link": "http://goldennepal.cz/menu/#denni-menu",
        },
        {
            "color": "#827717",
            "fallback": "Restaurant menu",
            "footer": "Cena: 95 Kč",
            "text": "1. Chicken Fal (Kuřecí kostky s kari a extrémně ostrou omáčkou)",
        },
        {
            "color": "#827717",
            "fallback": "Restaurant menu",
            "footer": "Cena: 95 Kč",
            "text": "2. Chicken Masala (Kuřecí kostky v omáčce s cibulí a rajčaty)",
        },
        {
            "color": "#827717",
            "fallback": "Restaurant menu",
            "footer": "Cena: 95 Kč",
            "text": "3. Tindu Curry (Cuketa v kari omáčce)",
        },
        {
            "color": "#827717",
            "fallback": "Restaurant menu",
            "footer": "Cena: 122 Kč",
            "text": "4. Golden Special Mix Thali (Všechna tři jídla na děleném talíři)",
        },
    ],
    "channel": "channel",
    "text": "",
};

const response = JSON.stringify({
    "daily_menus": [
        {
            "daily_menu": {
                "daily_menu_id": "19737895",
                "start_date": "2018-06-05 00:00:00",
                "end_date": "2018-06-05 23:59:59",
                "name": "",
                "dishes": [
                    {
                        "dish": {
                            "dish_id": "678359995",
                            "name": "Dal Palak Soup (Indická polévka s čočkou a špenátem)   ",
                            "price": "17 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678359996",
                            "name": "1. Chicken Fal (Kuřecí kostky s kari a extrémně ostrou omáčkou)  ",
                            "price": "95 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678359997",
                            "name": "2. Chicken Masala (Kuřecí kostky v omáčce s cibulí a rajčaty)   ",
                            "price": "95 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678359998",
                            "name": "3. Tindu Curry (Cuketa v kari omáčce)     ",
                            "price": "95 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678359999",
                            "name": "4. Golden Special Mix Thali (Všechna tři jídla na děleném talíři)   ",
                            "price": "122 Kč",
                        },
                    },
                ],
            },
        },
    ],
    "status": "success",
});
