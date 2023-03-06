import Everest from "../../src/menus/Everest";

describe("Everest", () => {
    let requestMock;
    let testedClass: Everest;
    const originalDate = global.Date;

    beforeAll(() => {
        requestMock = jest.fn();
        const mockDate: any = function () {
            this.getDay = () => 3;
        };

        global.Date = mockDate;
    });

    beforeEach(() => {
        testedClass = new Everest({get: requestMock});
    });

    afterAll(() => {
        global.Date = originalDate;
    });

    test("Resolve menu response - Monday", () => {
        // @ts-ignore
        global.Date = function () {
            this.getDay = () => 1;
        };
        expect(testedClass.handleResponse(response)).toEqual(
            expectedSlackMenu[0]
        );
    });

    test("Resolve menu response - Tuesday", () => {
        // @ts-ignore
        global.Date = function () {
            this.getDay = () => 2;
        };
        expect(testedClass.handleResponse(response)).toEqual(
            expectedSlackMenu[1]
        );
    });

    test("Resolve menu response - Wednesday", () => {
        // @ts-ignore
        global.Date = function () {
            this.getDay = () => 3;
        };
        expect(testedClass.handleResponse(response)).toEqual(
            expectedSlackMenu[2]
        );
    });

    test("Resolve menu response - Thursday", () => {
        // @ts-ignore
        global.Date = function () {
            this.getDay = () => 4;
        };
        expect(testedClass.handleResponse(response)).toEqual(
            expectedSlackMenu[3]
        );
    });

    test("Resolve menu response - Friday", () => {
        // @ts-ignore
        global.Date = function () {
            this.getDay = () => 5;
        };
        expect(testedClass.handleResponse(response)).toEqual(
            expectedSlackMenu[4]
        );
    });

    afterEach(() => {
        requestMock.mockReset();
    });
});

const expectedSlackMenu = [
    [
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 27Kč/39Kč",
            "text": "Garlic Soup (Nepálská česneková polévka)/Mint/Green Tea/Mango Lassi",
            "title": "Everest",
            "title_link": "https://www.everestbrno.cz/denni-menu/"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "1. Chicken Garlic (Kuřecí kostky ve středně pikantní česnekové omáčce s cibulí a rajčaty)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "2.Butter Chicken (Pečené kuřecí kousky v jemné máslové omáčce)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "3. Vegetable Curry Madras (Směs zeleniny s kari a čennajskou omáčkou)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "4. Tandori TikkaKuřecí kousky marinované v koření a jogurtu,pečenév peci tandoor se salátem"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 179 Kč",
            "text": "5. Everest’s Chef Special Mix Thali (Všechna  jídla na děleném talíři) (1+2+3+4)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 195 Kč",
            "text": "6. Salmon Curry/Masala/Mango/Butter/Madras"
        }
    ],
    [
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 27 Kč/39 Kč",
            "text": "Tomato Soup (Nepálská rajská polévka)/Mint/Green Tea/Mango Lassi",
            "title": "Everest",
            "title_link": "https://www.everestbrno.cz/denni-menu/"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "1. Chicken Tikka Masala (Kuřecí kostky ve středně pálivé omáčce s rajčaty a paprikou"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "2. Chicken Mango (Kuřecí kostky v mangové omáčce)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "3. Matar Paneer (Indický sýr s hráškem a omáčkou)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "4. Banjara Tikka (Kuřecí kostky zapečené v plně naloženo čerstvým kořením)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 179 Kč",
            "text": "5. Everest’s Chef Special Mix Thali (Všechna  jídla na děleném talíři) (1+2+3+4)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 195 Kč",
            "text": "6. Shrimp Madras/Masala/Curry/Butter/Mango"
        }
    ],
    [
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 27 Kč/39 Kč",
            "text": "Dal Soup (Nepálská čočková polévka)/Mint/Green Tea/Mango Lassi",
            "title": "Everest",
            "title_link": "https://www.everestbrno.cz/denni-menu/"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "1. Chicken Madras (Kuřecí kostky s mírně ostrou čennajskou omáčkou)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "2. Chicken Korma (Kuřecí kostky v jemné smetanové omáčce s kokosem a kešu oříšky)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "3. Aloo Matar Mushroom Shimla Mirch(Žampiony, paprika s bramborovými kostkami a hráškem v omáčce)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "4. Malai Tikka (Kořeněné kuřecí kostky pečené ve smetanové marinádě)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 179 Kč",
            "text": "5. Everest’s Chef Special Mix Thali (Všechna  jídla na děleném talíři) (1+2+3+4)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 195 Kč",
            "text": "6. Salmon Curry/Masala/Mango/Butter/Madras"
        }
    ],
    [
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 27/35 Kč",
            "text": "Chicken  Soup (Nepálská kuřecí polévka)/Mint/Green Tea/Mango Lassi",
            "title": "Everest",
            "title_link": "https://www.everestbrno.cz/denni-menu/"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "1. Chicken Fal (Kuřecí kostky s kari a extrémně ostrou omáčkou)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "2. Chicken Curry (Kuřecí kostky  v tradiční kari omáčce)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "3. Dal Makhani (Indická čočka ve smetanové omáčce)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "4. Madras  Tikka(Kořeněné kuřecí kostky pečené v mírně ostrou madrasová paste v peci tandoor)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 179 Kč",
            "text": "5. Everest’s Chef Special Mix Thali (Všechna  jídla na děleném talíři) (1+2+3+4)"
        }
    ],
    [
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 27 Kč/39 Kč",
            "text": "Tomato Soup (Nepálská rajská polévka)/Mint/Green Tea/Mango Lassi",
            "title": "Everest",
            "title_link": "https://www.everestbrno.cz/denni-menu/"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "1. Chicken  Tikka Masala (Kuřecí kostky ve středně pálivé omáčce s rajčaty a paprikou)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "2.Butter Chicken (Pečené kuřecí kousky v jemné máslové omáčce)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "3. Paneer Butter Masala (Jemně opečený indický sýr ve smetanovo-máslové omáčce)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "4. Mustard Tikka (Pečené kuřecí kostky s hořčicí a nepálským kořením se salátem)"
        },
        {
            "color": "#ffdc00",
            "fallback": "Restaurant menu",
            "footer": "Cena: 179 Kč",
            "text": "5. Everest’s Chef Special Mix Thali (Všechna  jídla na děleném talíři) (1+2+3+4)"
        }
    ]
];

const response = `
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="utf-8">
    <meta name="author" content="">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="keywords" content="">

            
    <title>Denní menu</title>

          <link rel="shortcut icon" href="https://www.everestbrno.cz/web/images/favikona__favicon.png?1977400565">
    
    <link rel="stylesheet" type="text/css" href="https://www.everestbrno.cz/template/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://www.everestbrno.cz/template/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://www.everestbrno.cz/template/css/styles.php?567215502">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700&amp;subset=latin-ext" rel="stylesheet">
    <!--[if lte IE 9]>
      <script src="https://www.everestbrno.cz/template/js/compatibility.js"></script>
    <![endif]-->
    <!-- Fancybox style -->
    <link rel="stylesheet" type="text/css" href="https://www.everestbrno.cz/fancybox/jquery.fancybox.css?v=2.1.4" media="screen" />

    
  </head>
  <body  >

    
    <header class="header">
      <div class="container">

                  <a href="https://www.everestbrno.cz/" class="logo col-sm-3"><div class="row"><img src="https://www.everestbrno.cz/web/images/logo1__logo.jpg?962680071"></div></a>
        
      <nav id="nav" class="nav">
  <div id="nav-opener" class="nav-opener">
    <span><span class="sr-only">Menu</span></span>
  </div>
  <ul>
                                            <li class=""><a href="https://www.everestbrno.cz/" title="Úvod">Úvod</a>
                                            </li>
                                              <li class="active"><a target="" href="https://www.everestbrno.cz/denni-menu/" title="Denní menu">Denní menu</a>
                                            </li>
                                              <li class=""><a target="" href="https://www.everestbrno.cz/jidelni-listek/" title="Jídelní lístek">Jídelní lístek</a>
                                            </li>
                                              <li class=""><a target="" href="https://www.everestbrno.cz/napojovy-listek/" title="Nápojový lístek">Nápojový lístek</a>
                                            </li>
                                              <li class=""><a target="" href="https://www.everestbrno.cz/foto/" title="Foto">Foto</a>
                                            </li>
                                              <li class=""><a target="" href="https://www.everestbrno.cz/kontakt/" title="Kontakt">Kontakt</a>
                                            </li>
                                              <li class=""><a target="" href="https://www.everestbrno.cz/en/" title="EN">EN</a>
                                            </li>
          </ul>
</nav>      </div>
    </header> <section class="banner subpage" style='background-image:url(https://www.everestbrno.cz/web/images/subpage_45ncyu_hero.jpg)' >
      <div class="container">
        <div class="table-row">
          <div class="cell-12 middle">
            <div class="content">
              <h1 class="subpage">Denní menu</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class='container'><div class='cols row'><main><div class='col-lg-12'><div class='col-md-12 col-sm-12 col-xs-12 column'>
<div class='' data-block='true' data-editor='2bstv' data-offset-key='dc9d0-0-0'>
<div class='_1mf _1mj' data-offset-key='dc9d0-0-0'>
<div class='' data-block='true' data-editor='b3pgf' data-offset-key='6eed3-0-0'>
<div class='_1mf _1mj' data-offset-key='6eed3-0-0'>
<div class='' data-block='true' data-editor='84qvl' data-offset-key='qv4h-0-0'>
<div class='_1mf _1mj' data-offset-key='qv4h-0-0'>
<div class='' data-block='true' data-editor='1f2ph' data-offset-key='4amm4-0-0'>
<div class='_1mf _1mj' data-offset-key='4amm4-0-0'>
<p style='background-color: #ffffff;'><strong><em>PLEASE VISIT OUR HOME PAGE TO ORDER ONLINE. THE ORDERING BUTTON IS AT THE BOTTOM OF THE HOME PAGE.</em></strong></p>
<p><strong><em>Dear Valued Customers, we apologize for the inconvenience. Due to increases in the price of all products we are forced to increase the price of our menu for maintaining standard quality and hygiene keeping health as a top priority. Thank you for your understanding and support.</em></strong></p>
<div class='' style='background-color: #ffffff;' data-block='true' data-editor='d9maa' data-offset-key='adu5b-0-0'>
<div class='_1mf _1mj' data-offset-key='adu5b-0-0'>
<div class='' data-block='true' data-editor='a18l6' data-offset-key='9umi5-0-0'>
<div class='_1mf _1mj' data-offset-key='9umi5-0-0'>
<div class='' data-block='true' data-editor='cl1fe' data-offset-key='blocj-0-0'>
<div class='_1mf _1mj' data-offset-key='blocj-0-0'>
<div class='' data-block='true' data-editor='fdel' data-offset-key='35bp7-0-0'>
<div class='_1mf _1mj' data-offset-key='35bp7-0-0'>
<div class='' data-block='true' data-editor='cjb86' data-offset-key='1nrsb-0-0'>
<div class='_1mf _1mj' data-offset-key='1nrsb-0-0'>&nbsp;</div>
<div class='_1mf _1mj' data-offset-key='1nrsb-0-0'><strong>DENNÍ MENU 11:00 – 15:00</strong></div>
</div>
<div class='' data-block='true' data-editor='cjb86' data-offset-key='c1b1-0-0'>
<div class='_1mf _1mj' data-offset-key='c1b1-0-0'>
<div class='' data-block='true' data-editor='5lc8a' data-offset-key='2qsuv-0-0'>
<div class='_1mf _1mj' data-offset-key='2qsuv-0-0'>
<div class='' data-block='true' data-editor='7e5el' data-offset-key='eqqtn-0-0'>
<div class='_1mf _1mj' data-offset-key='eqqtn-0-0'>
<div class='' data-block='true' data-editor='6k9fo' data-offset-key='aah4r-0-0'>
<div class='_1mf _1mj' data-offset-key='aah4r-0-0'>
<div class='' data-block='true' data-editor='4ajha' data-offset-key='ak7rd-0-0'>
<div class='_1mf _1mj' data-offset-key='ak7rd-0-0'>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='6i7s0-0-0'>
<div class='_1mf _1mj' data-offset-key='6i7s0-0-0'><span data-offset-key='6i7s0-0-0'>&nbsp;</span></div>
<div class='_1mf _1mj' data-offset-key='6i7s0-0-0'><span data-offset-key='6i7s0-0-0'><strong>Pondeli</strong></span></div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='fe37-0-0'>
<div class='_1mf _1mj' data-offset-key='fe37-0-0'>
<table style='height: 188px;' width='615'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong><em><span lang='CS'>Garlic Soup <span style='text-decoration: underline;'>(Nepálská česneková polévka</span>)</span>/Mint/Green Tea/Mango Lassi&nbsp;&nbsp;</em></strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><em><strong>27Kč/39Kč</strong></em></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>1</strong>.&nbsp;<strong>Chicken Garlic (</strong><strong>Kuřecí kostky ve středně pikantní česnekové omáčce s cibulí a rajčaty</strong><strong>)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong><em>2.</em></strong>&nbsp;<strong><em>Butter Chicken (Pečené kuřecí kousky v jemné máslové omáčce)</em></strong></td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>3. Vegetable Curry Madras (Směs zeleniny s kari a čennajskou omáčkou)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong><em>4. Tandori Tikka</em></strong>(<strong><em>Kuřecí kousky marinované v&nbsp;koření a jogurtu,pečenév peci tandoor se salátem</em></strong>)</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>&nbsp;<em>5.</em>&nbsp;<em>Everest’s Chef Special Mix Thali (Všechna&nbsp; jídla na děleném talíři) (1+2+3+4)&nbsp;</em>&nbsp;&nbsp;&nbsp;</strong></td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>179 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>6. </strong><strong>Salmon</strong><strong>&nbsp;Curry</strong><strong>/Masala/Mango/Butter/Madras</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>&nbsp;<strong>195 Kč</strong></td>
</tr>
</tbody>
</table>
</div>
<div class='_1mf _1mj' data-offset-key='fe37-0-0'><br /><br /></div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='5sjum-0-0'>
<div class='_1mf _1mj' data-offset-key='5sjum-0-0'><strong>Úterý</strong></div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='2qibd-0-0'>
<div class='_1mf _1mj' data-offset-key='2qibd-0-0'>
<table style='border: 1px dashed #bbbbbb; height: 149px;' width='635'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong><em>Tomato Soup&nbsp;(Nepálská&nbsp;rajská polévka)/Mint/Green Tea/Mango Lassi&nbsp;&nbsp;</em></strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>27 Kč/39 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>1. Chicken&nbsp;</strong><strong>Tikka&nbsp;</strong><strong>Masala</strong><strong>&nbsp;</strong><strong>(Kuřecí kostky ve středně pálivé omáčce s rajčaty a paprikou</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>2.&nbsp;Chicken Mango (Kuřecí kostky v mangové omáčce)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>3.&nbsp;Matar Paneer (Indický sýr s hráškem a omáčkou)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>4. Banjara Tikka (</strong><strong>Kuřecí kostky zapečené v plně naloženo čerstvým koření</strong><strong>m</strong><strong>)</strong></td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>&nbsp;<em>5.</em>&nbsp;<em>Everest’s Chef Special Mix Thali (Všechna&nbsp; jídla na děleném talíři) (1+2+3+4)&nbsp;</em>&nbsp; &nbsp;</strong></td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>179 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>6. </strong><strong>Shrimp Madras/Masala/Curry/Butter/Mango</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>&nbsp;<strong>195 Kč</strong></td>
</tr>
</tbody>
</table>
</div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='1d2r9-0-0'>
<div class='_1mf _1mj' data-offset-key='1d2r9-0-0'>&nbsp;</div>
<div class='_1mf _1mj' data-offset-key='1d2r9-0-0'><strong>Středa</strong></div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='2t57j-0-0'>
<div class='_1mf _1mj' data-offset-key='2t57j-0-0'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>Dal Soup (</strong><strong>Nepálská</strong><strong>&nbsp;čočková polévka</strong><strong>)</strong><strong>/<strong><em>Mint/Green Tea/Mango Lassi&nbsp;</em></strong>&nbsp;</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>27 Kč/39 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>1.&nbsp;</strong><strong>Chicken Madras (Kuřecí kostky s mírně ostrou čennajskou omáčkou)</strong><strong>&nbsp;</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>2.&nbsp;Chicken Korma (Kuřecí kostky v jemné smetanové omáčce s kokosem a kešu oříšky)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>3.&nbsp;Aloo Matar Mushroom Shimla Mirch(Žampiony, paprika s bramborovými kostkami a hráškem v omáčce)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>4. Malai Tikka (Kořeněné kuřecí kostky pečené ve smetanové marinádě)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>5. Everest’s </strong><strong>Chef Special Mix Thali</strong><strong>&nbsp;</strong><strong>(</strong><strong>Všechna &nbsp;jídla na děleném talíři</strong><strong>) (1+2+3+4)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>179 Kč</strong></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>6.&nbsp;</strong><strong>Salmon</strong><strong>&nbsp;Curry</strong><strong>/Masala/Mango/Butter/Madras</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<strong>195 Kč</strong></td>
</tr>
</tbody>
</table>
</div>
<div class='_1mf _1mj' data-offset-key='2t57j-0-0'>&nbsp;</div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='fjh3n-0-0'>
<div class='_1mf _1mj' data-offset-key='fjh3n-0-0'><strong>Čtvrtek</strong></div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='fefi3-0-0'>
<div class='_1mf _1mj' data-offset-key='fefi3-0-0'>
<table style='border: 1px dashed #bbbbbb; height: 228px;' width='583'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>Chicken &nbsp;Soup (</strong><strong>Nepálská kuřecí polévka</strong><strong>)</strong><strong>/<strong><em>Mint/Green Tea/Mango Lassi&nbsp;</em></strong>&nbsp;</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>27/35 Kč</strong></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>1. Chicken Fal (Kuřecí kostky s kari a extrémně ostrou omáčkou)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>2. Chicken Curry (Kuřecí kostky &nbsp;v tradiční kari omáčce)&nbsp;</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>3.&nbsp;Dal Makhani (Indická čočka ve smetanové omáčce)&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>4.&nbsp;</strong><strong>Madras &nbsp;Tikka(</strong><strong>Kořeněné kuřecí kostky pečené v mírně ostrou madrasová paste v peci tandoor</strong><strong>)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>5.&nbsp;</strong><strong>Everest’s </strong><strong>Chef Special Mix Thali</strong><strong>&nbsp;</strong><strong>(Všechna &nbsp;jídla na děleném talíři) (1+2+3+4)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>179 Kč&nbsp;</strong></td>
</tr>
</tbody>
</table>
</div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='3a69k-0-0'>
<div class='_1mf _1mj' data-offset-key='3a69k-0-0'>&nbsp;</div>
<div class='_1mf _1mj' data-offset-key='3a69k-0-0'><strong>Pátek</strong></div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='eor8k-0-0'>
<div class='_1mf _1mj' data-offset-key='eor8k-0-0'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong><em>Tomato Soup&nbsp;(Nepálská&nbsp;rajská polévka)</em>/<em>Mint/Green Tea/Mango Lassi&nbsp;</em>&nbsp;</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>27 Kč/39 Kč</strong></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>1</strong>.&nbsp;<strong>Chicken </strong><strong>&nbsp;Tikka&nbsp;</strong><strong>Masala</strong><strong>&nbsp;</strong><strong>(Kuřecí kostky ve středně pálivé omáčce s rajčaty a paprikou</strong><strong>)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong><em>2.</em></strong> <strong><em>Butter Chicken (Pečené kuřecí kousky v jemné máslové omáčce)</em></strong></td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong style='background-color: transparent;'><strong>3.&nbsp;Paneer Butter Masala (Jemně opečený indický sýr ve smetanovo-máslové omáčce)</strong></strong></p>
<p>&nbsp;</p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'>
<p><strong>4. Mustard Tikka (</strong><strong>Pečené kuřecí kostky s hořčicí a nepálským kořením se salátem</strong><strong>)</strong></p>
</td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>135 Kč</strong></td>
</tr>
<tr>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong><em>5.</em>&nbsp;<em>Everest’s Chef Special Mix Thali (Všechna&nbsp; jídla na děleném talíři) (1+2+3+4)</em></strong></td>
<td style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; border: 1px dashed #bbbbbb;'><strong>179 Kč&nbsp;</strong></td>
</tr>
</tbody>
</table>
</div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='bk6re-0-0'>
<div class='_1mf _1mj' data-offset-key='bk6re-0-0'>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='eor8k-0-0'>
<div class='_1mf _1mj' data-offset-key='eor8k-0-0'>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='eor8k-0-0'>
<p><strong>6. </strong><strong>Lamb</strong><strong>&nbsp;Masala</strong><strong>/Madras/Rogan Josh/Butter/Curry/Mango</strong></p>
<table style='border: 1px dashed #bbbbbb;'>
<tbody>
<tr>
<td><strong>195 Kč&nbsp;</strong></td>
</tr>
</tbody>
</table>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='bk6re-0-0'>&nbsp;</div>
</div>
</div>
<div class='' data-block='true' data-editor='4qt1k' data-offset-key='bk6re-0-0'>&nbsp;</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='' data-block='true' data-editor='d9maa' data-offset-key='adu5b-0-0'>
<div class='_1mf _1mj' data-offset-key='adu5b-0-0'>
<div class='' data-block='true' data-editor='a18l6' data-offset-key='9umi5-0-0'>
<div class='_1mf _1mj' data-offset-key='9umi5-0-0'>
<div class='' data-block='true' data-editor='cl1fe' data-offset-key='blocj-0-0'>
<div class='_1mf _1mj' data-offset-key='blocj-0-0'>
<div class='' data-block='true' data-editor='fdel' data-offset-key='35bp7-0-0'>
<div class='_1mf _1mj' data-offset-key='35bp7-0-0'>
<div class='' data-block='true' data-editor='cjb86' data-offset-key='1nrsb-0-0'>
<div class='_1mf _1mj' data-offset-key='1nrsb-0-0'>
<p>*** POZNÁMKA ****</p>
</div>
</div>
<div class='' data-block='true' data-editor='cjb86' data-offset-key='c1b1-0-0'>
<div class='_1mf _1mj' data-offset-key='c1b1-0-0'>
<div class='' data-block='true' data-editor='5lc8a' data-offset-key='2qsuv-0-0'>
<div class='_1mf _1mj' data-offset-key='2qsuv-0-0'>
<div class='' data-block='true' data-editor='7e5el' data-offset-key='eqqtn-0-0'>
<div class='_1mf _1mj' data-offset-key='eqqtn-0-0'>
<div class='' data-block='true' data-editor='6k9fo' data-offset-key='aah4r-0-0'>
<div class='_1mf _1mj' data-offset-key='aah4r-0-0'>
<div class='' data-block='true' data-editor='4ajha' data-offset-key='9s8mp-0-0'>
<div class='_1mf _1mj' data-offset-key='9s8mp-0-0'><span data-offset-key='9s8mp-0-0'>- Ke každému jídlu příloha (rýže/placka /kombinace) ZDARMA</span></div>
</div>
<div class='' data-block='true' data-editor='4ajha' data-offset-key='fr4fn-0-0'>
<div class='_1mf _1mj' data-offset-key='fr4fn-0-0'><span data-offset-key='fr4fn-0-0'>- Všechna jídla kromě Vindaloo, Jalfrezi, Madrasu a Falu obsahují smetanu</span></div>
</div>
<div class='' data-block='true' data-editor='4ajha' data-offset-key='37ipm-0-0'>
<div class='_1mf _1mj' data-offset-key='37ipm-0-0'><span data-offset-key='37ipm-0-0'>- Všechny polévky obsahují mouku..</span></div>
</div>
<div class='' data-block='true' data-editor='4ajha' data-offset-key='dmqs0-0-0'>
<div class='_1mf _1mj' data-offset-key='dmqs0-0-0'><span data-offset-key='dmqs0-0-0'>- Korma obsahuje ořechy.</span></div>
</div>
<div class='' data-block='true' data-editor='4ajha' data-offset-key='esc46-0-0'>
<div class='_1mf _1mj' data-offset-key='esc46-0-0'><span data-offset-key='esc46-0-0'>- Chicken Tikka Masala, Butter Chicken a Vindaloo obsahují barvivo</span></div>
</div>
&nbsp;</div>
</div>
<div class='' data-block='true' data-editor='6k9fo' data-offset-key='o6l0-0-0'>
<div class='_1mf _1mj' data-offset-key='o6l0-0-0'>For more info & update:</div>
</div>
<div class='' data-block='true' data-editor='6k9fo' data-offset-key='e7mnp-0-0'>&nbsp;</div>
<div class='' data-block='true' data-editor='6k9fo' data-offset-key='2seq9-0-0'>
<div class='_1mf _1mj' data-offset-key='2seq9-0-0'><span data-offset-key='2seq9-0-0'> Visit our website:&nbsp;<a href='https://www.everestbrno.cz'>wwww.everestbrno.cz </a></span></div>
<div class='_1mf _1mj' data-offset-key='2seq9-0-0'><span data-offset-key='2seq9-0-0'>Like our Facebook page:&nbsp;<a href='https://www.facebook.com/Everest-Nepali-and-Indian-Restaurant-1615531865345696'>https://www.facebook.com/Everest-Nepali-and-Indian-Restaurant-1615531865345696</a></span></div>
<div class='_1mf _1mj' data-offset-key='2seq9-0-0'><span data-offset-key='2seq9-0-0'>Follow our Instagram page:&nbsp;<a href='https://www.instagram.com/everestrestaurent/'>https://www.instagram.com/everestrestaurent/</a></span></div>
<div class='_1mf _1mj' data-offset-key='2seq9-0-0'><span data-offset-key='2seq9-0-0'>Visit our zomato page for lunch and regular menu:&nbsp;<a href='https://www.zomato.com/cs/brno/everest-veve%C5%99%C3%AD-brno-st%C5%99ed'>https://www.zomato.com/cs/brno/everest-veve%C5%99%C3%AD-brno-st%C5%99ed</a></span></div>
</div>
<div class='' data-block='true' data-editor='6k9fo' data-offset-key='57vph-0-0'>
<div class='_1mf _1mj' data-offset-key='57vph-0-0'><span data-offset-key='57vph-0-0'>Visit our <strong>damejidlo</strong>&nbsp; <strong>Bolt and</strong> <strong>Wolt</strong> page for the online delivery of food.</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div></main></div></div>
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col-md-2">
        <ul class="menu">
                  <li><a href='https://www.everestbrno.cz/'>Úvod</a></li>
                        <li><a target="" href='https://www.everestbrno.cz/denni-menu/'>Denní menu</a></li>
                        <li><a target="" href='https://www.everestbrno.cz/jidelni-listek/'>Jídelní lístek</a></li>
                        <li><a target="" href='https://www.everestbrno.cz/kontakt/'>Kontakt</a></li>
          </ul>      </div>
      <div class="col-sm-9 col-md-8">
        <div class="footer__contacts">
          <div class="row">
                          <div class="col-sm-6">
                <a href="tel:+420 773 990 837"><i class="fa fa-phone" aria-hidden="true"></i> +420 773 990 837</a><br>                <a href="mailto:everest.restauracia@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i> everest.restauracia@gmail.com</a>              </div>
            
                          <div class="col-sm-6">
                <p class="address">Everest Nepalese & Indian Restaurant<br />
Veveří 61<br />
602 00 Brno - střed </p>
              </div>
                      </div>
        </div>
      </div>
      <span class="clearfix visible-sm-block"></span>
      <div class="copy col-sm-12 col-md-2">
        Tvorba webu<br>
        <a href="https://www.webmy.cz" target="_blank"><img src="https://www.everestbrno.cz/template/img/webmy.cz.png" alt=""></a>
              </div>
    </div>
  </div>
</footer>



<script type="text/javascript" src="https://www.everestbrno.cz/template/js/jquery.js"></script>
<script type="text/javascript" src="https://www.everestbrno.cz/template/js/jquery.unveil.min.js"></script>
<script type="text/javascript" src="https://www.everestbrno.cz/template/js/doubletaptogo.js"></script>
<script type="text/javascript" src="https://www.everestbrno.cz/template/js/layout.js"></script>
<script type="text/javascript" src="https://www.everestbrno.cz/template/js/bootstrap.min.js"></script>
<!-- Fancybox JS -->
<script type="text/javascript" src="https://www.everestbrno.cz/fancybox/jquery.fancybox.js?v=2.1.4"></script>
<script type="text/javascript" src="https://www.everestbrno.cz/fancybox/fancy.js"></script>

<script type="text/javascript">
  $(document).on("submit", ".sber-emailu-form", function(e) {
    var form = $(this);
    event.preventDefault();

    var formData = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: 'https://www.everestbrno.cz',
        data: formData
      })
      .success(function(returnData) {
        if (returnData.err != "") {
          $("[value=" + returnData.token + "]").parent().find(".sber-emailu-msg").text(returnData.err);
          $("[value=" + returnData.token + "]").parent().find(".sber-emailu-msg").addClass("red");
          $("[value=" + returnData.token + "]").parent().find(".sber-emailu-msg").slideToggle().delay(4000).slideToggle();
        } else {
          $("[value=" + returnData.token + "]").parent().find(".sber-emailu-msg").text(returnData.msg);
          $("[value=" + returnData.token + "]").parent().find(".sber-emailu-msg").removeClass("red");
          $("[value=" + returnData.token + "]").parent().find(".sber-emailu-msg").slideToggle().delay(4000).slideToggle();
        }
      })
      .fail(function(data) {
        alert("Neidetifikovatelna chyba, změny nebyly uloženy. Aktualizujte tuto stránku prosím." + data);
      });
  });
</script>


<!-- Modal -->
<div class="modal fade modal-ebook" id="ebook-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
          <button type="button" class="button-close" data-dismiss="modal">Close</button>

    \t\t\t<p><strong></strong></p>

          <form method="post">
            <input type="hidden" name="modal-ebook" value="1">
            <input type="hidden" name="idebooku" value="">
            <input type="hidden" name="url" value="http://www.everestbrno.cz/denni-menu/">
            <div class="col-xs-12">
              <input type="text" name="jmeno" required >
            </div>
            <div class="col-xs-12">
              <input type="email" required name="email" >
            </div>
            <div class="col-xs-12">
              <button class="button-odeslat">ODESLAT NA E-MAIL</button>
            </div>
            <div class="clearfix"></div>
          </form>
      </div>
    </div>
  </div>
</div>

<script>
$("#ebook-modal").on("show.bs.modal", function (event) {

  var button = $(event.relatedTarget);
  var idebooku = button.data("idebooku");
  var modal = $(this);

  $.ajax({
      type: "POST",
      url: "https://www.everestbrno.cz",
      data: "modal-ebook-info=1&idebooku=" + idebooku
  })
  .success(function(returnData) {
    modal.find(".modal-body input[name=idebooku]").val(returnData.idebooku);
    modal.find("strong").text(returnData.modal_text);
    modal.find("input[name=jmeno]").attr("placeholder", returnData.modal_placeholder_jmeno);
    if(returnData.modal_placeholder_jmeno_povinne == "1"){
      modal.find("input[name=jmeno]").attr("required", "required");
    }else{
      modal.find("input[name=jmeno]").removeAttr("required");
    }
    modal.find("input[name=email]").attr("placeholder", returnData.modal_placeholder_email);
    if(returnData.modal_placeholder_email_povinne == "1"){
      modal.find("input[name=email]").attr("required", "required");
    }else{
      modal.find("input[name=email]").removeAttr("required");
    }
    modal.find(".button-odeslat").text(returnData.modal_texttlacitka);
  })
  .fail(function(data) {
    alert("Neidetifikovatelna chyba, změny nebyly uloženy. Aktualizujte tuto stránku prosím." + data);
  });

})
</script>

</body>

</html>
`