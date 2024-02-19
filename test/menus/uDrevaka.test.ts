import UDrevaka from "../../src/menus/UDrevaka";

describe("U Drevaka", () => {
  let requestMock;
  let testedClass: UDrevaka;
  const originalDate = global.Date;

  beforeAll(() => {
    requestMock = jest.fn();
    const mockDate: any = function () {
      this.getDay = () => 3;
    };

    global.Date = mockDate;
  });

  beforeEach(() => {
    testedClass = new UDrevaka({ get: requestMock });
  });

  afterAll(() => {
    global.Date = originalDate;
  });

  test("Resolve menu response - Monday", () => {
    // @ts-ignore
    global.Date = function () {
      this.getDay = () => 1;
    };
    expect(testedClass.handleResponse(response)).toEqual(expectedSlackMenu[0]);
  });

  test("Resolve menu response - Tuesday", () => {
    // @ts-ignore
    global.Date = function () {
      this.getDay = () => 2;
    };
    expect(testedClass.handleResponse(response)).toEqual(expectedSlackMenu[1]);
  });

  test("Resolve menu response - Wednesday", () => {
    // @ts-ignore
    global.Date = function () {
      this.getDay = () => 3;
    };
    expect(testedClass.handleResponse(response)).toEqual(expectedSlackMenu[2]);
  });

  test("Resolve menu response - Thursday", () => {
    // @ts-ignore
    global.Date = function () {
      this.getDay = () => 4;
    };
    expect(testedClass.handleResponse(response)).toEqual(expectedSlackMenu[3]);
  });

  test("Resolve menu response - Friday", () => {
    // @ts-ignore
    global.Date = function () {
      this.getDay = () => 5;
    };
    expect(testedClass.handleResponse(response)).toEqual(expectedSlackMenu[4]);
  });

  afterEach(() => {
    requestMock.mockReset();
  });
});

const expectedSlackMenu = [
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Zelná polévka se zakysanou smetanou (1,6,7,9)",
      "title": "U Drevaka",
      "title_link": "https://udrevaka.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 155 kč",
      "text": "130g Špikovaná hovězí svíčková na smetaně, brusinky na divoko, houskové knedlíky (1,3,6,7,9,10)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "120g Italské lasagne s kuřecím masem, špenátem, smetanou a salátkem (1,3,6,7,8,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 159 kč",
      "text": "100g Ultimate Chicken Strips Quesadilla MENU version (kuřecí stripsy, slanina, Cheddar, rajče, Chimmichuri majonéza) naše hranolky a dip (1,3,6,7,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "150g Grilovaná kuřecí prsíčka, zapečené balkánským sýrem, opékané brambory, tzatziki (3,6,7,9)"
    }
  ],
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Drůbeží vývar s masem, zeleninou a nudlemi (1,6,7,9)",
      "title": "U Drevaka",
      "title_link": "https://udrevaka.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "130g Kuřecí kung-pao s mungo klíčky, pórkem, jarní cibulkou a jasmínovou rýží (1,6,8,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 149 kč",
      "text": "260g Kuřecí špalíčky pečené v medu a chilli, šťouchaný brambor s cibulkou, salátek a dresink (3,6,7,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 175 kč",
      "text": "350g Bacon Burger (Grilovaná slanina, uzená majonéza, rajče, salát, naše preclíková brioška) naše hranolky se slaninovou majonézou (1,3,6,7,9,10)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "130g Medailonky z vepřové panenky s Bacon bites, opékané brambory, koprový dip a salátek (1,3,6,7,9)"
    }
  ],
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Fazolová s uzeninou (1,6,7,9)",
      "title": "U Drevaka",
      "title_link": "https://udrevaka.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "160g Naše sekaná s anglickou slaninou, bramborovou kaší a kyselou okurkou (1,3,6,7,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 155 kč",
      "text": "130g Maďarský hovězí guláš, houskové knedlíky, červená cibulka (1,3,6,7,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 159 kč",
      "text": "100g Kuřecí Fajitas Wrap (marinovaná kuřecí prsíčka, gouda, nakládaná cibulka, grilovaná paprika, chimmichurri majonéza,) naše hranolky, dip (1,3,6,7,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "140g Gratinovaný kuřecí steak s rajčaty zapečený mozzarellou, grilovaná zelenina, opékané brambory, jogurtový dresink (6,7,9)"
    }
  ],
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Hovězí vývar s masem, zeleninou a nudlemi (1,3,6,7,9)",
      "title": "U Drevaka",
      "title_link": "https://udrevaka.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 155 kč",
      "text": "150g Řecká Musaka s mletým masem a míchaným salátkem (1,3,7)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "160g Smažené kuřecí řízečky, vařené brambory s máslem, petrželkou a citronem (1,3,6,7,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 175 kč",
      "text": "350g Red Onion Burger (Grilovaná slanina, nakládaná červená cibulka a okurky, salát, The Burger Maker® majonéza) naše hranolky, dip (1,3,6,7,9,10)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "160g Marinovaná vepřová kotletka v bylinkách a česneku, grilované žampiony, tymiánová demi glace, americké brambory a jogurtový dip (1,6,7,9)"
    }
  ],
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Gulášová s klobáskou a bramborem (1,6,9)",
      "title": "U Drevaka",
      "title_link": "https://udrevaka.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 179 kč",
      "text": "350g Konfitovaná kachní čtvrtka v tymiánovém sádle, karamelizované červené zelí, houskové knedlíky (1,3,6,7,9,10)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "120g Smažený sýr s naší tatarskou omáčkou, vařené brambory s pažitkou (1,3,6,7,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 159 kč",
      "text": "100g Pulled Beef Quesadilla (Trhané hovězí, kukuřiče, cheddar, cherry rajčátka) a naše hranolky, chilli dip (1,6,7,9)"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "160g BBQ steak z kuřecího prsíčka, grilovaná zelenina, opékané brambory, česnekový dip (1,3,6,7,9)"
    }
  ],
];

const response = `{
    "_id": "655b153ebd27a41b4f45614c",
    "hurl": "poledni-menu",
    "active": true,
    "createdAt": "2023-11-20T08:13:50.714Z",
    "name": "Polední menu",
    "platformPage": false,
    "seo": {
        "name": "Polední menu",
        "description": null,
        "image": null
    },
    "updatedAt": "2024-02-18T17:24:05.118Z",
    "content": {
        "value": "<h3 style=\\"text-align: center\\">19.2.-23.2.</h3><p><strong>po Polévka: Zelná polévka se zakysanou smetanou (1,6,7,9)</strong></p><p>1) 130g Špikovaná hovězí svíčková na smetaně, brusinky na divoko, houskové knedlíky (1,3,6,7,9,10) 155</p><p>2) 120g Italské lasagne s kuřecím masem, špenátem, smetanou a salátkem (1,3,6,7,8,9) 145</p><p>3) 100g Ultimate Chicken Strips Quesadilla MENU version (kuřecí stripsy, slanina, Cheddar, rajče, Chimmichuri majonéza) naše hranolky a dip (1,3,6,7,9) 159</p><p>4) 150g Grilovaná kuřecí prsíčka, zapečené balkánským sýrem, opékané brambory, tzatziki (3,6,7,9) 165</p><p><strong>út Polévka: Drůbeží vývar s masem, zeleninou a nudlemi (1,6,7,9)</strong></p><p>1) 130g Kuřecí kung-pao s mungo klíčky, pórkem, jarní cibulkou a jasmínovou rýží (1,6,8,9) 145</p><p>2) 260g Kuřecí špalíčky pečené v medu a chilli, šťouchaný brambor s cibulkou, salátek a dresink (3,6,7,9) 149</p><p>3) 350g Bacon Burger (Grilovaná slanina, uzená majonéza, rajče, salát, naše preclíková brioška) naše hranolky se slaninovou majonézou (1,3,6,7,9,10) 175</p><p>4) 130g Medailonky z vepřové panenky s Bacon bites, opékané brambory, koprový dip a salátek (1,3,6,7,9) 165</p><p><strong>st Polévka: Fazolová s uzeninou (1,6,7,9)</strong></p><p>1) 160g Naše sekaná s anglickou slaninou, bramborovou kaší a kyselou okurkou (1,3,6,7,9) 145</p><p>2) 130g Maďarský hovězí guláš, houskové knedlíky, červená cibulka (1,3,6,7,9) 155</p><p>3) 100g Kuřecí Fajitas Wrap (marinovaná kuřecí prsíčka, gouda, nakládaná cibulka, grilovaná paprika, chimmichurri majonéza,) naše hranolky, dip (1,3,6,7,9) 159</p><p>4) 140g Gratinovaný kuřecí steak s rajčaty zapečený mozzarellou, grilovaná zelenina, opékané brambory, jogurtový dresink (6,7,9) 165</p><p><strong>čt Polévka: Hovězí vývar s masem, zeleninou a nudlemi (1,3,6,7,9)</strong></p><p>1) 150g Řecká Musaka s mletým masem a míchaným salátkem (1,3,7) 155</p><p>2) 160g Smažené kuřecí řízečky, vařené brambory s máslem, petrželkou a citronem (1,3,6,7,9) 145</p><p>3) 350g Red Onion Burger (Grilovaná slanina, nakládaná červená cibulka a okurky, salát, The Burger Maker® majonéza) naše hranolky, dip (1,3,6,7,9,10) 175</p><p>4) 160g Marinovaná vepřová kotletka v bylinkách a česneku, grilované žampiony, tymiánová demi glace, americké brambory a jogurtový dip (1,6,7,9) 165</p><p><strong>pa Polévka: Gulášová s klobáskou a bramborem (1,6,9)</strong></p><p>1) 350g Konfitovaná kachní čtvrtka v tymiánovém sádle, karamelizované červené zelí, houskové knedlíky (1,3,6,7,9,10) 179</p><p>2) 120g Smažený sýr s naší tatarskou omáčkou, vařené brambory s pažitkou (1,3,6,7,9) 145</p><p>3) 100g Pulled Beef Quesadilla (Trhané hovězí, kukuřiče, cheddar, cherry rajčátka) a naše hranolky, chilli dip (1,6,7,9) 159</p><p>4) 160g BBQ steak z kuřecího prsíčka, grilovaná zelenina, opékané brambory, česnekový dip (1,3,6,7,9) 165</p><p></p>"
    }
}`;
