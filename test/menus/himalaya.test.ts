import Himalaya from "../../src/menus/Himalaya";

let requestMock;
let testedClass: Himalaya;

beforeAll(() => {
    requestMock = jest.fn();
});

beforeEach(() => {
    testedClass = new Himalaya({ get: requestMock });
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
            "color": "#0a1966",
            "fallback": "Restaurant menu",
            "footer": "Cena: 1 Kč",
            "text": "Polevka-fazolova",
            "title": "Himalaya",
            "title_link": "https://www.zomato.com/cs/brno/himalaya-kr%C3%A1lovo-pole-brno-sever/denn%C3%AD-menu"
        },
        {
            "color": "#0a1966",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "1.Chicken madras  150g( kureci  kousky s ostrou  omacka   )7           95,-kc      111,-kc"
        },
        {
            "color": "#0a1966",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "2.Chicken kadai   150g ( kureci kousky s cibue paprika a   omacka  7       95,-kc         111,-kc"
        },
        {
            "color": "#0a1966",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "3.Dal tadka 150g (indicky zlula cocka   vareni dumaci stylu  ) 7                  95,-kc         111.-kc"
        },
        {
            "color": "#0a1966",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "4.Chicken salat s plackami                                                            96,-kc       111,-kc  ."
        },
        {
            "color": "#0a1966",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "5.Mix menu (1+2+3)                                                                               125,-kc                141,-kc"
        }
    ],
    "channel": "channel",
    "text": ""
};

const response = JSON.stringify({
    "daily_menus": [
      {
        "daily_menu": {
          "daily_menu_id": "19765695",
          "start_date": "2018-06-22 00:00:00",
          "end_date": "2018-06-22 23:59:59",
          "name": "",
          "dishes": [
            {
              "dish": {
                "dish_id": "679225954",
                "name": "Polevka-fazolova",
                "price": "1 Kč"
              }
            },
            {
              "dish": {
                "dish_id": "679225955",
                "name": "1.Chicken madras  150g( kureci  kousky s ostrou  omacka   )7           95,-kc      111,-kc",
                "price": ""
              }
            },
            {
              "dish": {
                "dish_id": "679225956",
                "name": "2.Chicken kadai   150g ( kureci kousky s cibue paprika a   omacka  7       95,-kc         111,-kc",
                "price": ""
              }
            },
            {
              "dish": {
                "dish_id": "679225957",
                "name": "3.Dal tadka 150g (indicky zlula cocka   vareni dumaci stylu  ) 7                  95,-kc         111.-kc",
                "price": ""
              }
            },
            {
              "dish": {
                "dish_id": "679225958",
                "name": "4.Chicken salat s plackami                                                            96,-kc       111,-kc  .",
                "price": ""
              }
            },
            {
              "dish": {
                "dish_id": "679225959",
                "name": "5.Mix menu (1+2+3)                                                                               125,-kc                141,-kc",
                "price": ""
              }
            }
          ]
        }
      }
    ],
    "status": "success"
  });
