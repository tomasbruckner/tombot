import ZelenaKocka from "../../src/menus/ZelenaKocka";

let requestMock;
let testedClass: ZelenaKocka;

beforeAll(() => {
    requestMock = jest.fn();
});

beforeEach(() => {
    testedClass = new ZelenaKocka({ get: requestMock });
});

test("Resolve menu response", done => {
    const menu = testedClass.getSlackMenu({ channel: "channel" }, "apikey");

    expect(requestMock.mock.calls.length).toBe(1);

    const callback = requestMock.mock.calls[0][1];

    callback(undefined, { statusCode: 200 }, response);

    menu.then(menu => {
        expect(menu).toEqual(expectedSlackMenu);
        done();
    });
});

afterEach(() => {
    requestMock.mockReset();
});

const expectedSlackMenu = {
    "as_user": true,
    "attachments": [
        {
            "color": "#7CB342",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "Moravské uzené s křenem, chléb (1,3)",
            "title": "Grand restaurant Zelená Kočka",
            "title_link": "http://www.zelenakocka.cz/index.php"
        },
        {
            "color": "#7CB342",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "Fazolová polévka s klobásou (1,)"
        },
        {
            "color": "#7CB342",
            "fallback": "Restaurant menu",
            "footer": "Cena: 109 Kč",
            "text": "Tagliatelle s filovanou vepřovou panenkou a grilovanou zeleninou (1,3)"
        }
    ],
    "channel": "channel",
    "text": ""
};

const response = JSON.stringify({
    "daily_menus": [
        {
            "daily_menu": {
                "daily_menu_id": "19712256",
                "start_date": "2018-06-05 00:00:00",
                "end_date": "2018-06-05 23:59:59",
                "name": "",
                "dishes": [
                    {
                        "dish": {
                            "dish_id": "677422387",
                            "name": "Moravské uzené s křenem, chléb (1,3)",
                            "price": ""
                        }
                    },
                    {
                        "dish": {
                            "dish_id": "677422388",
                            "name": "Fazolová polévka s klobásou (1,)",
                            "price": ""
                        }
                    },
                    {
                        "dish": {
                            "dish_id": "677422389",
                            "name": "Tagliatelle s filovanou vepřovou panenkou a grilovanou zeleninou (1,3)",
                            "price": "109 Kč"
                        }
                    }
                ]
            }
        }
    ],
    "status": "success"
});
