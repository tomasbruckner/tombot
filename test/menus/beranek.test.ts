import Beranek from "../../src/menus/Beranek";

describe("Beranek", () => {
    let requestMock;
    let testedClass: Beranek;

    beforeAll(() => {
        requestMock = jest.fn();
    });

    beforeEach(() => {
        testedClass = new Beranek({get: requestMock});
    });

    test("Resolve menu response", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"}, "apikey");

        expect(requestMock.mock.calls.length).toBe(1);

        const callback = requestMock.mock.calls[0][1];

        callback(undefined, {statusCode: 200}, response);

        menu.then(menu => {
            expect(menu).toEqual(expectedSlackMenu);
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
            color: "#0a1966",
            fallback: "Restaurant menu",
            footer: "",
            text: "Polévka - Uzený vývar s masem a kroupami (1,9)",
            title: "U Bílého beránka",
            title_link: "http://www.ubilehoberanka.cz/menu-dne",
        },
            {
                color: "#0a1966",
                fallback: "Restaurant menu",
                footer: "Cena: 94 Kč",
                text: "200ml Koprová omáčka, 2ks vařené vejce, houskový knedlík (1,3,7,9)",
            },
            {
                color: "#0a1966",
                fallback: "Restaurant menu",
                footer: "Cena: 94 Kč",
                text: "180g Vepřový špíz (krkovice, paprika, klobása, slanina), hranolky, zelný salát (1,3,7,6,9,12)",
            },
            {
                color: "#0a1966",
                fallback: "Restaurant menu",
                footer: "Cena: 101 Kč",
                text: "130g Smažený kančí řízek, šťouchané brambory (1,9,10)",
            },
            {
                color: "#0a1966",
                fallback: "Restaurant menu",
                footer: "Cena: 105 Kč",
                text: "300g Těstovinový salát s grilovanými kousky lososa a čerstvou zeleninou, bylinkový dresink (1,3,4,7,9)",
            },
            {
                color: "#0a1966",
                fallback: "Restaurant menu",
                footer: "Cena: 149 Kč",
                text: "150g Grilovaný flank steak, pepřová omáčka, americké brambory (1,7,9)",
            }],
    channel: "channel",
    text: "",
};

const response = JSON.stringify({
    "daily_menus": [
        {
            "daily_menu": {
                "daily_menu_id": "19732609",
                "start_date": "2018-06-05 00:00:00",
                "end_date": "2018-06-05 23:59:59",
                "name": "",
                "dishes": [
                    {
                        "dish": {
                            "dish_id": "678220056",
                            "name": "Polévka - Uzený vývar s masem a kroupami (1,9)",
                            "price": "",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678220057",
                            "name": "200ml Koprová omáčka, 2ks vařené vejce, houskový knedlík (1,3,7,9)         ",
                            "price": "94 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678220058",
                            "name": "180g Vepřový špíz (krkovice, paprika, klobása, slanina), hranolky, zelný salát (1,3,7,6,9,12)     ",
                            "price": "94 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678220059",
                            "name": "130g Smažený kančí řízek, šťouchané brambory (1,9,10)           ",
                            "price": "101 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678220060",
                            "name": "300g Těstovinový salát s grilovanými kousky lososa a čerstvou zeleninou, bylinkový dresink (1,3,4,7,9) ",
                            "price": "105 Kč",
                        },
                    },
                    {
                        "dish": {
                            "dish_id": "678220061",
                            "name": "150g Grilovaný flank steak, pepřová omáčka, americké brambory (1,7,9)     ",
                            "price": "149 Kč",
                        },
                    },
                ],
            },
        },
    ],
    "status": "success",
});
