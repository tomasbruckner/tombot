import LLoyds from "../../src/menus/LLoyds";

let requestMock;
let testedClass: LLoyds;

beforeAll(() => {
    requestMock = jest.fn();
});

beforeEach(() => {
    testedClass = new LLoyds({ get: requestMock });
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
            "color": "#7986CB",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "Minestróne A9",
            "title": "LLoyd's",
            "title_link": "http://restauracelloyds.cz/menu-2/denni-menu"
        },
        {
            "color": "#7986CB",
            "fallback": "Restaurant menu",
            "footer": "Cena: 94 Kč",
            "text": "1.  Smažená gouda s vařeným bramborem a naší hustokrutopřísnou tatarkou A1,7,12"
        },
        {
            "color": "#7986CB",
            "fallback": "Restaurant menu",
            "footer": "Cena: 98 Kč",
            "text": "2.  Tradiční hovězí guláš zdobený cibulkou s domácím kynutým knedlíkem A1,3"
        },
        {
            "color": "#7986CB",
            "fallback": "Restaurant menu",
            "footer": "Cena: 129 Kč",
            "text": "3.  „Shepherds Pie“–Hovězí koláč gratinovaný bramborovou kaší s čedarem, v horké misce A7"
        },
        {
            "color": "#7986CB",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč",
            "text": "4.  „Low Carb“ Salát s pečenou dýní, marinovaným kuřecím prsíčkem a parmezánem A7"
        },
        {
            "color": "#7986CB",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč",
            "text": "5.  Pulet Burger s hranolkami, zeleninou, čedarem a BBQ A1,3"
        }
    ],
    "channel": "channel",
    "text": ""
};

const response = JSON.stringify({
    "daily_menus": [
        {
            "daily_menu": {
                "daily_menu_id": "19736277",
                "start_date": "2018-06-05 00:00:00",
                "end_date": "2018-06-05 23:59:59",
                "name": "",
                "dishes": [
                    {
                        "dish": {
                            "dish_id": "678299194",
                            "name": "Minestróne A9",
                            "price": ""
                        }
                    },
                    {
                        "dish": {
                            "dish_id": "678299195",
                            "name": "1.  Smažená gouda s vařeným bramborem a naší hustokrutopřísnou tatarkou A1,7,12   ",
                            "price": "94 Kč"
                        }
                    },
                    {
                        "dish": {
                            "dish_id": "678299196",
                            "name": "2.  Tradiční hovězí guláš zdobený cibulkou s domácím kynutým knedlíkem A1,3 ",
                            "price": "98 Kč"
                        }
                    },
                    {
                        "dish": {
                            "dish_id": "678299197",
                            "name": "3.  „Shepherds Pie“–Hovězí koláč gratinovaný bramborovou kaší s čedarem, v horké misce A7",
                            "price": "129 Kč"
                        }
                    },
                    {
                        "dish": {
                            "dish_id": "678299198",
                            "name": "4.  „Low Carb“ Salát s pečenou dýní, marinovaným kuřecím prsíčkem a parmezánem A7",
                            "price": "139 Kč"
                        }
                    },
                    {
                        "dish": {
                            "dish_id": "678299199",
                            "name": "5.  Pulet Burger s hranolkami, zeleninou, čedarem a BBQ A1,3                                                  ",
                            "price": "139 Kč"
                        }
                    }
                ]
            }
        }
    ],
    "status": "success"
});
