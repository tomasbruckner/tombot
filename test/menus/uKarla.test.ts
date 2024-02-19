import UKarla from "../../src/menus/UKarla";

describe("U Karla", () => {
  let requestMock;
  let testedClass: UKarla;
  const originalDate = global.Date;

  beforeAll(() => {
    requestMock = jest.fn();
    const mockDate: any = function () {
      this.getDay = () => 3;
    };

    global.Date = mockDate;
  });

  beforeEach(() => {
    testedClass = new UKarla({ get: requestMock });
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
      "text": "Uzená s kroupami, strouhanou mrkví a bramborem(1,6,9)",
      "title": "U Karla",
      "title_link": "https://ukarlabrno.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 175 kč",
      "text": "The Butcher Burger (Hovězí mleté maso, grilovaná slanina, cheddar, salát, rajčátka, bylinková majonéza), hranolky a dresink (1,3,6,7,9) 90g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 149 kč",
      "text": "Vepřové výpečky na česneku a kmíně, dušené bílé zelí na slanině, houskové knedlíky (1,3,6,7,9) 150g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "Smažený holandský řízek se sýrem, bramborová kaše, kyselý okurek (1,3,6,7,9) 160g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "Grilovaný steak z kuřecích prsíček, marinovaný v česnekovém oleji, silná výpeková omáčka, pečené brambory, salátek, bylinkový dip (1,3,6,7,9) 160g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 125 kč",
      "text": "Kuřecí stehýnko ala bažant, dušená rýže (1), 250g"
    }
  ],
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Frankfurtská s párečky a bramborem(1,6,7,9)",
      "title": "U Karla",
      "title_link": "https://ukarlabrno.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 159 kč",
      "text": "Wrap s kuřecím gyrosem, zeleninou, salátem, olivami a bylinkovým dresinkem, hranolky a dresink (1,3,6,7,9) 100g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "Plněný paprikový lusk s rajskou omáčkou a houskovými knedlíky (1,3,6,7,9) 150g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 149 kč",
      "text": "Smažený sýr se šunkou, vařené brambory maštěné máslem s pažitkou, naše tatarská omáčka (1,3,6,7,9,10) 120g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "Medailonky z vepřové panenky, opékané bramborové čtvrtky, svěží sladkokyselý salátek a dresink (1,6,9) 150g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 125 kč",
      "text": "Zeleninové rizoto se sýrem a kyselou okurkou (7)"
    }
  ],
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Hovězí vývar s nudlemi a petrželkou (1,3,6,9)",
      "title": "U Karla",
      "title_link": "https://ukarlabrno.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 159 kč",
      "text": "The Cow Quesadilla (Pomalu pečené trahné hovězí maso, kukuřice, cheddar), hranolky a dresink (1,3,6,7,9) 100g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "Směs kuřecích nudliček se zeleninou, americké brambory, tatarská omáčka (1,3,6,7,9) 120g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 149 kč",
      "text": "Smažené kuřecí řízečky v Cornflake strouhance, lehký bramborový salát, citron (1,3,6,9) 150g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "Dřevorubecká vepřová krkovička s vejcem a grilovanou slaninou, šťouchané brambory s restovanou cibulkou, česnekový dip, salátek (3,6,7,9) 130g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 125 kč",
      "text": "Hrachová kaše s restovanou cibulkou a opečenou klobásou, kyselá okurka, pečivo (1), 100g"
    }
  ],
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Gulášová s bramborem (1,3,6,7,9)",
      "title": "U Karla",
      "title_link": "https://ukarlabrno.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 175 kč",
      "text": "Burger s trhaným vepřovým masem smíchaným s naší BBQ, kyselá okurka, salát, slaninová mayo, hranolky a dresink (1,3,6,7,9) 90g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "Kuřecí steak Havaii zapečený broskví a sýrem, výpeková omáčka, hranolky a tatarská omáčka (1,3,6,7,9,10) 120g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "Smažený karbanátek s restovanou slaninou a hřiby, šťouchané brambory s jarní cibulkou, nakládaná kyselá okurka (1,3,6,7,9) 160g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "Grilovaný steak z vepřové kotlety s vídeňskou cibulkou, opékané brambory, salátek a dresink (1,6,9) 150g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 125 kč",
      "text": "Vepřový flamendr s bramboráčky (1,3), 100g"
    }
  ],
  [
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "",
      "text": "Hrstková s klobásou (1,6,9)",
      "title": "U Karla",
      "title_link": "https://ukarlabrno.cz/pages/poledni-menu"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 159 kč",
      "text": "Ceasar Tortilla (Grilovaná kuřecí prsíčka, marinované v bylinkách, řimský salát, caesar dressing, cherry rajčátka), hranolky a dresink (1,3,6,7,9) 100g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 145 kč",
      "text": "Naše sekaná, bramborová kaše zdobená pažitkou, okurkový salátek (1,3,6,7,9) 160g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 155 kč",
      "text": "Tradiční španělský hovězí ptáček plněný klobáskou, vejcem, okurkou a klobásou, dušená jasmínová rýže (1,3,6,7,9,10) 130g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 165 kč",
      "text": "Steak z kuřecích prsíček s grilovanou zeleninou, opékané brambory a dresink (1,3,6,7,9) 160g"
    },
    {
      "color": "#5da7ac",
      "fallback": "Restaurant menu",
      "footer": "Cena: 125 kč",
      "text": "Vepřový karbanátek s tymiánem, vařené brambory, kyselá okurka (1,3,7), 150g"
    }
  ],
];

const response = `{
    "_id": "654b3e48bd27a41b4f992291",
    "hurl": "poledni-menu",
    "active": true,
    "createdAt": "2023-11-08T07:52:40.111Z",
    "name": "Polední menu",
    "platformPage": false,
    "seo": {
        "name": "Polední menu",
        "description": null,
        "image": null
    },
    "updatedAt": "2024-02-18T17:23:47.436Z",
    "content": {
        "value": "<h3 style=\\"text-align: center\\">19.2.-25.2.</h3><p><strong>po\\tPolévka: Uzená s kroupami, strouhanou mrkví a bramborem(1,6,9)\\t</strong></p><p><strong>\\t</strong>1) The Butcher Burger (Hovězí mleté maso, grilovaná slanina, cheddar, salát, rajčátka, bylinková majonéza), hranolky a dresink (1,3,6,7,9) 90g\\t175</p><p>\\t2) Vepřové výpečky na česneku a kmíně, dušené bílé zelí na slanině, houskové knedlíky (1,3,6,7,9) 150g\\t149</p><p>\\t3) Smažený holandský řízek se sýrem, bramborová kaše, kyselý okurek (1,3,6,7,9) 160g\\t145</p><p>\\t4) Grilovaný steak z kuřecích prsíček, marinovaný v česnekovém oleji, silná výpeková omáčka, pečené brambory, salátek, bylinkový dip (1,3,6,7,9) 160g\\t165</p><p><strong>\\t</strong>5) Kuřecí stehýnko ala bažant, dušená rýže (1), 250g\\t125</p><p><strong>út\\tPolévka : Frankfurtská s párečky a bramborem(1,6,7,9)\\t</strong></p><p><strong>\\t</strong>1) Wrap s kuřecím gyrosem, zeleninou, salátem, olivami a bylinkovým dresinkem, hranolky a dresink (1,3,6,7,9) 100g\\t159</p><p>\\t2) Plněný paprikový lusk s rajskou omáčkou a houskovými knedlíky (1,3,6,7,9) 150g\\t145</p><p>\\t3) Smažený sýr se šunkou, vařené brambory maštěné máslem s pažitkou, naše tatarská omáčka (1,3,6,7,9,10) 120g\\t149</p><p>\\t4) Medailonky z vepřové panenky, opékané bramborové čtvrtky, svěží sladkokyselý salátek a dresink (1,6,9) 150g\\t165</p><p>\\t5) Zeleninové rizoto se sýrem a kyselou okurkou (7)\\t125</p><p><strong>st\\tPolévka: Hovězí vývar s nudlemi a petrželkou (1,3,6,9)\\t</strong></p><p><strong>\\t</strong>1) The Cow Quesadilla (Pomalu pečené trahné hovězí maso, kukuřice, cheddar), hranolky a dresink (1,3,6,7,9) 100g\\t159</p><p>\\t2) Směs kuřecích nudliček se zeleninou, americké brambory, tatarská omáčka (1,3,6,7,9) 120g\\t145</p><p>\\t3) Smažené kuřecí řízečky v Cornflake strouhance, lehký bramborový salát, citron (1,3,6,9) 150g\\t149</p><p>\\t4) Dřevorubecká vepřová krkovička s vejcem a grilovanou slaninou, šťouchané brambory s restovanou cibulkou, česnekový dip, salátek (3,6,7,9) 130g\\t165</p><p>\\t5) Hrachová kaše s restovanou cibulkou a opečenou klobásou, kyselá okurka, pečivo (1), 100g\\t125</p><p><strong>čt\\tPolévka: Gulášová s bramborem (1,3,6,7,9)\\t</strong></p><p><strong>\\t</strong>1) Burger s trhaným vepřovým masem smíchaným s naší BBQ, kyselá okurka, salát, slaninová mayo, hranolky a dresink (1,3,6,7,9) 90g\\t175</p><p>\\t2) Kuřecí steak Havaii zapečený broskví a sýrem, výpeková omáčka, hranolky a tatarská omáčka (1,3,6,7,9,10) 120g\\t165</p><p>\\t3) Smažený karbanátek s restovanou slaninou a hřiby, šťouchané brambory s jarní cibulkou, nakládaná kyselá okurka (1,3,6,7,9) 160g\\t145</p><p>\\t4) Grilovaný steak z vepřové kotlety s vídeňskou cibulkou, opékané brambory, salátek a dresink (1,6,9) 150g\\t165</p><p>\\t5) Vepřový flamendr s bramboráčky (1,3), 100g\\t125</p><p><strong>pa\\tPolévka: Hrstková s klobásou (1,6,9)\\t</strong></p><p><strong>\\t</strong>1) Ceasar Tortilla (Grilovaná kuřecí prsíčka, marinované v bylinkách, řimský salát, caesar dressing, cherry rajčátka), hranolky a dresink (1,3,6,7,9) 100g\\t159</p><p>\\t2) Naše sekaná, bramborová kaše zdobená pažitkou, okurkový salátek (1,3,6,7,9) 160g\\t145</p><p>\\t3) Tradiční španělský hovězí ptáček plněný klobáskou, vejcem, okurkou a klobásou, dušená jasmínová rýže (1,3,6,7,9,10) 130g\\t155</p><p>\\t4) Steak z kuřecích prsíček s grilovanou zeleninou, opékané brambory a dresink (1,3,6,7,9) 160g\\t165</p><p>\\t5) Vepřový karbanátek s tymiánem, vařené brambory, kyselá okurka (1,3,7), 150g\\t125</p><p><strong>so\\tPolévka: Slepičí vývar se zeleninou a nudlemi (1,6,9)\\t</strong></p><p><strong>\\t</strong>1) Telecí maso na červeném víně a kořenové zelenině, šťouchané brambory, salát, (1,3,6,7,9), 150g\\t205</p><p>\\t2) Kuřecí Cordon Bleu plněný šunkou a sýrem, bramborová kaše s máslem, okurkový salátek (1,3,6,7,9,12) 140g\\t175</p><p>\\t3) Club Sandwich (Grilované kuřecí prsíčko, cheddar, grilovaná slanina, slaninová majonéza, rajče, salát, máslový toust), hranolky a dip (1,3,6,7,9) 130g\\t175</p><p>\\t4) Steak z vepřové krkovice, grilovaná zelenina se žampiony, opékané brambory, česnekový dip (3,6,9) 160g\\t175</p><p>\\t5) Špagety „aglio olio e peperoncino“ sypané parmazánem (chilli, česnek, listová petržel) (1,7), 450g\\t135</p><p><strong>ne\\tPolévka: Česnečka se zeleninou, brambory a vejci (1,3,6,7,9)\\t</strong></p><p><strong>\\t</strong>1) Telecí maso na červeném víně a kořenové zelenině, šťouchané brambory, salát, (1,3,6,7,9), 150g\\t205</p><p>\\t2) Kuřecí Cordon Bleu plněný šunkou a sýrem, bramborová kaše s máslem, okurkový salátek (1,3,6,7,9,12) 140g\\t175</p><p>\\t3) Vepřový řízek z krkovičky marinovaný v česneku, šťouchané brambory s restovanou cibulkou a slaninou, citron (1,3,6,7,9) 160g\\t175</p><p>\\t4) Grilovaný kuřecí steak se silnou výpekovou omáčkou, bramborové hranolky, salátek z čerstvé zeleniny a listových salátů a dresink (1,6,9) 160g\\t175</p><p>\\t5) Cmunda po kaplicku s uzeným masem a kysaným zelím (1,3), 100g\\t135</p><p></p><p></p><p></p>"
    }
}`;
