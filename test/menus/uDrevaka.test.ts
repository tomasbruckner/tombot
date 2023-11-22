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
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "",
      text: "Česnečka se zeleninou a brambory (1,6,7,9)",
      title: "U Drevaka",
      title_link: "https://udrevaka.cz/pages/poledni-menu",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 139 kč",
      text: "170g Smažený holandský řízek se sýrem, bramborová kaše a kyselá okurka (1,3,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 145 kč",
      text: "100g Lasagne s boloňským masovým ragú, parmazánem a salátkem (1,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 155 kč",
      text: "100g Tortilla plněná grilovanými kuřecími prsíčky, cheddarem, rajčátky, salátem a dipem, naše bramborové hranolky s dresinkem (1,3,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 159 kč",
      text: "160g Grilovaná vepřová kotleta s krémovou dijonskou omáčkou, pečené slaninové brambory a salátek (1,6,7,9,10)",
    },
  ],
  [
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "",
      text: "Gulášová (1,6,9)",
      title: "U Drevaka",
      title_link: "https://udrevaka.cz/pages/poledni-menu",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 139 kč",
      text: "250g Pečené kuřecí stehýnko s nádivkou, jasmínová rýže (1,6,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 155 kč",
      text: "100g Grilovaný vepřový špíz (slanina, paprika, cibule, vepřové maso), americké brambory a bylinkový dip (1,3,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 169 kč",
      text: "120g USA Bacon Jam Hamburger (hovězí mleté, USA cheese, rajče, salát, americký dresink), naše hranolky (1,3,6,7,9,10)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 159 kč",
      text: "150g Grilované kuřecí prsíčko grilovaná, kukuřice se slaninou a vařené brambory s pažitkou (1,3,6,7,9)",
    },
  ],
  [
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "",
      text: "Slepičí vývar s nudlemi, zeleninou a trhaným masem (1,6,7,9)",
      title: "U Drevaka",
      title_link: "https://udrevaka.cz/pages/poledni-menu",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 149 kč",
      text: "130g Tradiční španělský hovězí ptáček s jasmínovou rýží (1,3,6,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 139 kč",
      text: "130g Plněný paprikový lusk s rajskou omáčkou, houskové knedlíky (1,3,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 155 kč",
      text: "100g Tortilla s řeckým kuřecím gyrosem, feta sýrem, olivami a zeleninou, bramborové hranolky, dresink (1,3,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 159 kč",
      text: "160g Gratinovaný kuřecí steak se sýrovou omáčkou, opékané brambory, salátek (6,7,9)",
    },
  ],
  [
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "",
      text: "Hráškový krém (1,6,7,9)",
      title: "U Drevaka",
      title_link: "https://udrevaka.cz/pages/poledni-menu",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 149 kč",
      text: "130g Pečené kuřecí prsa na karotce, cuketě a fazolových luscích, bramborová kaše (1,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 139 kč",
      text: "160g Smažený kuřecí řízek v rozmarýnové strouhance, bramborový salát s hráškem (1,3,6,7,9,10)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 169 kč",
      text: "120g Fat Chilli Burger (Hovězí mleté, Cheddar, majonéza z pečených jalapeňo papriček, nakládaná cibulka, salát) naše hranolky, tatarská omáčka (1,3,6,7,9,10)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 159 kč",
      text: "160g Grilovaný vepřový steak s bylinkovou omáčkou, pečené bramborové čtvrtky s česnekem, salátek (6,7,9)",
    },
  ],
  [
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "",
      text: "Hovězí vývar se zeleninou a nudlemi (1,6,7,9)",
      title: "U Drevaka",
      title_link: "https://udrevaka.cz/pages/poledni-menu",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 139 kč",
      text: "160g Švédské masové kuličky s bramborovou kaší, brusinkami a salátkem (1,3,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 149 kč",
      text: "120g Variace smažených sýrů, vařené brambory s pažitkou, salátek a tatarská omáčka (1,3,6,7,9,10)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 155 kč",
      text: "100g Pulled Pork Quesadilla (Trhané vepřové maso, cheddar, kukuřice), zakysaná smetana a naše hranolky (1,3,6,7,9)",
    },
    {
      color: "#5da7ac",
      fallback: "Restaurant menu",
      footer: "Cena: 159 kč",
      text: '140g Kuřecí steak "Caprese" (Zapečený mozzarelou, rajčaty a bazalkou) americké brambory, česnekový dip (3,6,7,9)',
    },
  ],
];

const response = `<!DOCTYPE html>
<html lang="default">

<head>
\t<meta name="viewport"
\t\tcontent="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
\t<meta charSet="utf-8" />
\t<meta property="og:type" content="website" />
\t<meta property="og:site_name" content="U Dřeváka Beer&amp;Grill" />
\t<meta property="og:url" content="https://udrevaka.cz/pages/poledni-menu" />
\t<meta property="og:image:alt" content="U Dřeváka Beer&amp;Grill - Rozvoz jídla, Vyzvednutí, Rezervace" />
\t<meta property="og:title" content="U Dřeváka Beer&amp;Grill - Rozvoz jídla, Vyzvednutí, Rezervace" />
\t<meta property="twitter:title" content="U Dřeváka Beer&amp;Grill - Rozvoz jídla, Vyzvednutí, Rezervace" />
\t<meta property="og:description" content="" />
\t<meta property="twitter:description" content="" />
\t<link rel="canonical" href="https://udrevaka.cz/pages/poledni-menu" />
\t<meta property="og:image"
\t\tcontent="https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_cGvltHc-ZyvKpll-SCTAfPq_P-D-E.jpeg" />
\t<meta property="twitter:image"
\t\tcontent="https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_cGvltHc-ZyvKpll-SCTAfPq_P-D-E.jpeg" />
\t<link rel="shortcut icon"
\t\thref="https://cdn-media.choiceqr.com/prod-eat-udrevaka/logo/thumbnail_kJCJSam-JJANcIj-QzBjelx_E-q-I.png" />
\t<link rel="shortcut icon" id="shortcut-icon" href="https://cdn-media.choiceqr.com/prod-eat-udrevaka/logo/kJCJSam-JJANcIj-QzBjelx_x48.png
\t\t\t\t\t" />
\t<link rel="apple-touch-icon" id="shortcut-icon-180" sizes="180x180"
\t\thref="https://cdn-media.choiceqr.com/prod-eat-udrevaka/logo/kJCJSam-JJANcIj-QzBjelx_x180.png" />
\t<link rel="apple-touch-icon" id="shortcut-icon-152" sizes="152x152"
\t\thref="https://cdn-media.choiceqr.com/prod-eat-udrevaka/logo/kJCJSam-JJANcIj-QzBjelx_x152.png" />
\t<link rel="apple-touch-icon" id="shortcut-icon-144" sizes="144x144"
\t\thref="https://cdn-media.choiceqr.com/prod-eat-udrevaka/logo/kJCJSam-JJANcIj-QzBjelx_x144.png" />
\t<meta name="facebook-domain-verification" content="210940111209588" />
\t<title>Polední menu</title>
\t<meta name="description" />
\t<meta property="og:url" content="https://udrevaka.choiceqr.com/pages/poledni-menu" />
\t<meta property="og:title" content="Polední menu" />
\t<meta property="og:description" />
\t<meta property="og:image" />
\t<meta property="og:image:url" />
\t<meta property="twitter:image" />
\t<meta name="next-head-count" content="27" />
\t<script id="analytics-fbp" data-nscript="beforeInteractive">
\t\t!function (f, b, e, v, n, t, s) {
\t\t\tif (f.fbq) return; n = f.fbq = function () {
\t\t\t\tn.callMethod ?
\t\t\t\tn.callMethod.apply(n, arguments) : n.queue.push(arguments)
\t\t\t};
\t\t\tif (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
\t\t\tn.queue = []; t = b.createElement(e); t.async = !0;
\t\t\tt.src = v; s = b.getElementsByTagName(e)[0];
\t\t\ts.parentNode.insertBefore(t, s)
\t\t}(window, document, "script",
\t\t\t"https://connect.facebook.net/en_US/fbevents.js");
\t\tfbq("init", "1127135891032294");
\t\tfbq("track", "PageView");
\t</script>
\t<script id="analytics-ga" data-nscript="beforeInteractive">
\t\twindow.dataLayer = window.dataLayer || [];
\t\tfunction gtag() { window.dataLayer.push(arguments); }
\t\tgtag('js', new Date());
\t\tgtag('config', 'G-GLR4LNVN81');
\t</script>
\t<script id="analytics-gtm" data-nscript="beforeInteractive">
\t\t(function (w, d, s, l, i) {
\t\t\tw[l] = w[l] || []; w[l].push({
\t\t\t\t'gtm.start':
\t\t\t\t\tnew Date().getTime(), event: 'gtm.js'
\t\t\t}); var f = d.getElementsByTagName(s)[0],
\t\t\t\tj = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
\t\t\t\t\t'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
\t\t})(window, document, 'script', 'dataLayer', 'GTM-PZWKGL83');
\t</script>
\t<link rel="preload" href="https://cdn-clients.choiceqr.com/client/_next/static/css/cbf1b125e340160a.css"
\t\tas="style" />
\t<link rel="stylesheet" href="https://cdn-clients.choiceqr.com/client/_next/static/css/cbf1b125e340160a.css"
\t\tdata-n-g="" />
\t<link rel="preload" href="https://cdn-clients.choiceqr.com/client/_next/static/css/673639c52e43e191.css"
\t\tas="style" />
\t<link rel="stylesheet" href="https://cdn-clients.choiceqr.com/client/_next/static/css/673639c52e43e191.css"
\t\tdata-n-p="" />
\t<link rel="preload" href="https://cdn-clients.choiceqr.com/client/_next/static/css/d863daede580f031.css"
\t\tas="style" />
\t<link rel="stylesheet" href="https://cdn-clients.choiceqr.com/client/_next/static/css/d863daede580f031.css" />
\t<link rel="preload" href="https://cdn-clients.choiceqr.com/client/_next/static/css/0e37e95ae6f9ae9d.css"
\t\tas="style" />
\t<link rel="stylesheet" href="https://cdn-clients.choiceqr.com/client/_next/static/css/0e37e95ae6f9ae9d.css" />
\t<noscript data-n-css=""></noscript>
\t<script defer="" nomodule=""
\t\tsrc="https://cdn-clients.choiceqr.com/client/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
\t<script src="https://www.googletagmanager.com/gtag/js?id=G-GLR4LNVN81" async="" defer=""
\t\tdata-nscript="beforeInteractive"></script>
\t<script defer=""
\t\tsrc="https://cdn-clients.choiceqr.com/client/_next/static/chunks/8436.a35e43a710b645e0.js"></script>
\t<script defer=""
\t\tsrc="https://cdn-clients.choiceqr.com/client/_next/static/chunks/2915.900a0c3656a37335.js"></script>
\t<script defer=""
\t\tsrc="https://cdn-clients.choiceqr.com/client/_next/static/chunks/3749.188252cff6b05761.js"></script>
\t<script src="https://cdn-clients.choiceqr.com/client/_next/static/chunks/webpack-e337e0f770e8918d.js"
\t\tdefer=""></script>
\t<script src="https://cdn-clients.choiceqr.com/client/_next/static/chunks/framework-19384512454a710f.js"
\t\tdefer=""></script>
\t<script src="https://cdn-clients.choiceqr.com/client/_next/static/chunks/main-976ced8030a13df4.js"
\t\tdefer=""></script>
\t<script src="https://cdn-clients.choiceqr.com/client/_next/static/chunks/pages/_app-9642f00e3eb01590.js"
\t\tdefer=""></script>
\t<script
\t\tsrc="https://cdn-clients.choiceqr.com/client/_next/static/chunks/pages/pages/%5BpageHurl%5D-5118a3300ecbc8f7.js"
\t\tdefer=""></script>
\t<script src="https://cdn-clients.choiceqr.com/client/_next/static/qUrOVO1ZaZOJmL0krpVKl/_buildManifest.js"
\t\tdefer=""></script>
\t<script src="https://cdn-clients.choiceqr.com/client/_next/static/qUrOVO1ZaZOJmL0krpVKl/_ssgManifest.js"
\t\tdefer=""></script>
\t<style id="__jsx-4068586695">
\t\t:root {
\t\t\t--theme-colors-100: #FFFFFF;
\t\t\t--theme-colors-200: #F8F8F8;
\t\t\t--theme-colors-300: #E0E0E0;
\t\t\t--theme-colors-400: #BDBDBD;
\t\t\t--theme-colors-500: #828282;
\t\t\t--theme-colors-600: #4F4F4F;
\t\t\t--theme-colors-700: #333333;
\t\t\t--theme-colors-800: #222222;
\t\t\t--theme-colors-900: #111111;
\t\t\t--theme-colors-100-a0: #FFFFFF00;
\t\t\t--theme-colors-100-a10: #FFFFFF10;
\t\t\t--theme-colors-100-a15: #FFFFFF15;
\t\t\t--theme-colors-100-a20: #FFFFFF20;
\t\t\t--theme-colors-100-a50: #FFFFFF50;
\t\t\t--theme-colors-100-a60: #FFFFFF60;
\t\t\t--theme-colors-100-a70: #FFFFFF70;
\t\t\t--theme-colors-100-a80: #FFFFFF80;
\t\t\t--theme-colors-100-a90: #FFFFFF90;
\t\t\t--theme-colors-200-a95: #F8F8F8f2;
\t\t\t--theme-colors-300-a20: #E0E0E020;
\t\t\t--theme-colors-300-a50: #E0E0E050;
\t\t\t--theme-colors-900-a0: #11111100;
\t\t\t--theme-colors-900-a05: #11111105;
\t\t\t--theme-colors-900-a10: #11111110;
\t\t\t--theme-colors-900-a15: #11111115;
\t\t\t--theme-colors-900-a20: #11111120;
\t\t\t--theme-colors-900-a50: #11111150;
\t\t\t--theme-colors-900-a60: #11111160;
\t\t\t--theme-colors-900-a70: #11111170;
\t\t\t--theme-colors-900-a80: #11111180;
\t\t\t--theme-colors-900-a90: #11111190;
\t\t\t--background-popup: rgba(0, 0, 0, 0.5);
\t\t\t--payment-wallet-color: #111
\t\t}
\t</style>
\t<style id="__jsx-250913933">
\t\t:root {
\t\t\t--primary-color: #801f18;
\t\t\t--primary-color-a25: #801f1825;
\t\t\t--secondary-font-color: #FFFFFF;
\t\t\t--primary-background: #FFFFFF;
\t\t\t--font-family:
\t\t\t\t'Inter',
\t\t\t\t-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
\t\t\t\tDroid Sans, Helvetica Neue, sans-serif
\t\t}
\t</style>
</head>

<body>
\t<div id="__next">
\t\t<script
\t\t\ttype="application/ld+json">{"@context":"https://schema.org","@type":"Restaurant","name":"U Dřeváka Beer&Grill","description":"","url":"https://udrevaka.cz","image":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_cGvltHc-ZyvKpll-SCTAfPq_P-D-E.jpeg","telephone":"724 000 723","address":{"@type":"PostalAddress","addressLocality":"","addressRegion":"Czechia","postalCode":"602 00","streetAddress":"Brno-Královo Pole"},"hasMenu":{"@type":"Menu","name":"🍽️ POLEDNÍ  MENU","hasMenuSection":[{"@type":"MenuSection","name":"🍽️ Polední menu ÚTERÝ","hasMenuItem":[]},{"@type":"MenuSection","name":"🍽️ Polední menu STŘEDA","hasMenuItem":[{"@type":"MenuItem","name":"Polevka: Slepici vyvar s nudlemi, zeleninou a trhanym masem (1,6,7,9)","description":"","offers":{"@type":"Offer","price":"15","priceCurrency":"CZK"}},{"@type":"MenuItem","name":"1) 130g Tradicni spanelsky hovezi ptacek s jasminovou ryzi (1,3,6,9)","description":"","offers":{"@type":"Offer","price":"149","priceCurrency":"CZK"}},{"@type":"MenuItem","name":"2) 130g Plneny paprikovy lusk s rajskou omackou, houskove knedliky (1,3,6,7,9)","description":"","offers":{"@type":"Offer","price":"139","priceCurrency":"CZK"}},{"@type":"MenuItem","name":"3) 100g Tortilla s reckym kurecim gyrosem, feta syrem, olivami a zeleninou, bramborove hranolky, dresink (1,3,6,7,9)","description":"","offers":{"@type":"Offer","price":"155","priceCurrency":"CZK"}},{"@type":"MenuItem","name":"4) 160g Gratinovany kureci steak se syrovou omackou, opekane brambory, salatek (6,7,9)","description":"","offers":{"@type":"Offer","price":"159","priceCurrency":"CZK"}}]}]}}</script>
\t\t<script
\t\t\ttype="application/ld+json">{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","name":"Hlavní stránka","url":"https:/udrevaka.cz/","@type":"SiteNavigationElement"},{"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Nabídka","url":"https:/udrevaka.cz/online-menu"},{"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Rezervace","url":"https:/udrevaka.cz/booking"},{"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Zanechat zpětnou vazbu","url":"https:/udrevaka.cz/feedback"},{"@context":"https://schema.org","@type":"SiteNavigationElement","name":"Polední menu","url":"https:/udrevaka.cz/pages/poledni-menu"}]}</script>
\t\t<div id="device-type-selector" class="is-desktop">
\t\t\t<div style="position:relative">
\t\t\t\t<div class="styles_background__4aLe1" style="background-color:#FFFFFF">
\t\t\t\t\t<div class="styles_backgroundPattern__QKyjW"
\t\t\t\t\t\tstyle="background-image:url(https://cdn-media.choiceqr.com/prod-eat-udrevaka/background-image/ZyTuNLZ-HChIVik-zDKCUqL.jpeg);opacity:1">
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="styles_pageLayout__Mpbxs">
\t\t\t\t\t<div class="styles_layoutBody__exqBO">
\t\t\t\t\t\t<div class="styles_mainDesktopHeader__sZ5w3 styles_mainDesktopHeaderWithTemplate__FV6U_">
\t\t\t\t\t\t\t<div class="styles_container__Vr_GI styles_isDesktop__v3bmF styles_flexible__OQLzY"><a
\t\t\t\t\t\t\t\t\tclass="styles_flexible__OQLzY" href="/">
\t\t\t\t\t\t\t\t\t<div class="styles_logo__Dxpw_"
\t\t\t\t\t\t\t\t\t\tstyle="background-image:url(&quot;https://cdn-media.choiceqr.com/prod-eat-udrevaka/logo/thumbnail_kJCJSam-JJANcIj-QzBjelx_E-q-I.png&quot;)">
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="styles_info__axNPt">
\t\t\t\t\t\t\t\t\t\t<div class="styles_placeName___Lwcq">U Dřeváka Beer&amp;Grill</div>
\t\t\t\t\t\t\t\t\t\t<div class="styles_placeType__4iN18">Bar</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t<div class="styles_rightContent__axDzF"><button
\t\t\t\t\t\t\t\t\t\tclass="styles_button__eH6h8 styles_appearancePrimary__NVNw2 styles_withShadow___6J2y styles_disabled___u82U styles_desktop-cart-button__9MvXM styles_is-empty__8Hyfh">
\t\t\t\t\t\t\t\t\t\t<div class="styles_left-icon__pgOhz"><svg width="24" height="24"
\t\t\t\t\t\t\t\t\t\t\t\tviewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
\t\t\t\t\t\t\t\t\t\t\t\t<path
\t\t\t\t\t\t\t\t\t\t\t\t\td="M18.5 5C17.672 5 17 5.672 17 6.5C17 6.67612 17.036 6.84296 17.0918 7H14V9H17.3066L17.5684 9.69727L17.4941 9.65625L13.4121 17H12C11.9999 16.9344 11.9934 16.869 11.9805 16.8047L11.2188 13H12V11H7V6H0V7V13H4.25391C4.13729 13.1481 4.01786 13.2955 3.91797 13.4453C3.33263 14.3233 3 15.1667 3 16C3.00005 16.2652 3.10543 16.5195 3.29297 16.707L3.45117 16.8652C3.18772 17.3567 3.02344 17.9076 3.02344 18.5C3.02344 20.4188 4.59478 22 6.51172 22C8.25777 22 9.7029 20.6839 9.94922 19H12H14H17.0742C17.3205 20.6839 18.7657 22 20.5117 22C22.4287 22 24 20.4188 24 18.5C24 17.0321 23.0776 15.7679 21.7871 15.252L21.6914 15H24V13H20.9414L19.0664 8H21V5H18.5ZM2 8H5V11H2V8ZM18.4512 12.0527L19.6074 15.1367C18.6234 15.4063 17.813 16.0932 17.377 17H15.6992L18.4512 12.0527ZM7.26953 13H9.17969L9.98047 17H9.64648C9.08179 15.8256 7.8913 15 6.51172 15C6.06192 15 5.63419 15.0939 5.23828 15.252C5.30532 15.0501 5.40397 14.8218 5.58203 14.5547C5.96497 13.9803 6.53845 13.4086 7.26953 13ZM6.51172 17C7.34278 17 8 17.6568 8 18.5C8 19.3432 7.34278 20 6.51172 20C5.68066 20 5.02344 19.3432 5.02344 18.5C5.02344 17.6568 5.68066 17 6.51172 17ZM20.5117 17C21.3428 17 22 17.6568 22 18.5C22 19.3432 21.3428 20 20.5117 20C19.6807 20 19.0234 19.3432 19.0234 18.5C19.0234 17.6568 19.6807 17 20.5117 17Z"
\t\t\t\t\t\t\t\t\t\t\t\t\tfill="currentColor"></path>
\t\t\t\t\t\t\t\t\t\t\t</svg></div>Položky nevybrány
\t\t\t\t\t\t\t\t\t</button><button
\t\t\t\t\t\t\t\t\t\tclass="styles_button__eH6h8 styles_appearanceStroke__2w0V8 styles_withShadow___6J2y styles_button__9jZw7 styles_language__6TYiD"><span>cz</span>
\t\t\t\t\t\t\t\t\t\t<div style="display:flex;transform:none"><svg width="24" height="24"
\t\t\t\t\t\t\t\t\t\t\t\tviewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
\t\t\t\t\t\t\t\t\t\t\t\t<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"></path>
\t\t\t\t\t\t\t\t\t\t\t</svg></div>
\t\t\t\t\t\t\t\t\t</button><a href="/auth"><button
\t\t\t\t\t\t\t\t\t\t\tclass="styles_button__eH6h8 styles_appearanceStroke__2w0V8 styles_withShadow___6J2y styles_button__9jZw7"><svg
\t\t\t\t\t\t\t\t\t\t\t\twidth="24" height="24" viewBox="0 0 24 24" fill="none"
\t\t\t\t\t\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg">
\t\t\t\t\t\t\t\t\t\t\t\t<path
\t\t\t\t\t\t\t\t\t\t\t\t\td="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 4C16.418 4 20 7.582 20 12C20 13.5973 19.5254 15.0811 18.7188 16.3301L17.9492 15.7344C16.3972 14.5374 13.537 14 12 14C10.463 14 7.60178 14.5374 6.05078 15.7344L5.28125 16.332C4.47404 15.0828 4 13.5979 4 12C4 7.582 7.582 4 12 4ZM12 5.75C10.208 5.75 8.75 7.208 8.75 9C8.75 10.792 10.208 12.25 12 12.25C13.792 12.25 15.25 10.792 15.25 9C15.25 7.208 13.792 5.75 12 5.75ZM12 7.75C12.689 7.75 13.25 8.311 13.25 9C13.25 9.689 12.689 10.25 12 10.25C11.311 10.25 10.75 9.689 10.75 9C10.75 8.311 11.311 7.75 12 7.75ZM12 16C15.1007 16 16.7681 17.1685 17.5488 17.7539C16.11 19.1418 14.1569 20 12 20C9.84315 20 7.89002 19.1418 6.45117 17.7539C7.2319 17.1685 8.89929 16 12 16ZM6.05469 17.3398C6.17566 17.4731 6.29727 17.6059 6.42578 17.7305C6.29711 17.6053 6.17473 17.4734 6.05469 17.3398ZM17.9121 17.375C17.8024 17.4955 17.6929 17.6168 17.5762 17.7305C17.6926 17.6175 17.8015 17.495 17.9121 17.375Z"
\t\t\t\t\t\t\t\t\t\t\t\t\tfill="currentColor"></path>
\t\t\t\t\t\t\t\t\t\t\t</svg></button></a><button
\t\t\t\t\t\t\t\t\t\tclass="styles_button__eH6h8 styles_appearanceStroke__2w0V8 styles_withShadow___6J2y styles_button__9jZw7"><svg
\t\t\t\t\t\t\t\t\t\t\twidth="24" height="24" viewBox="0 0 24 24" fill="none"
\t\t\t\t\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg">
\t\t\t\t\t\t\t\t\t\t\t<rect x="4" y="6" width="16" height="2" fill="var(--theme-colors-900)">
\t\t\t\t\t\t\t\t\t\t\t</rect>
\t\t\t\t\t\t\t\t\t\t\t<rect x="4" y="11" width="16" height="2" fill="var(--theme-colors-900)">
\t\t\t\t\t\t\t\t\t\t\t</rect>
\t\t\t\t\t\t\t\t\t\t\t<rect x="4" y="16" width="16" height="2" fill="var(--theme-colors-900)">
\t\t\t\t\t\t\t\t\t\t\t</rect>
\t\t\t\t\t\t\t\t\t\t</svg></button></div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class="styles_HeaderNavMenuWrapper__luCN_">
\t\t\t\t\t\t\t\t<div class="styles_container__Vr_GI styles_isDesktop__v3bmF styles_flexible__OQLzY">
\t\t\t\t\t\t\t\t\t<nav class="styles_HeaderNavMenu__9HLrB"><a class="styles_HeaderNavMenLink__euTqg"
\t\t\t\t\t\t\t\t\t\t\thref="/">Hlavní stránka</a><a class="styles_HeaderNavMenLink__euTqg"
\t\t\t\t\t\t\t\t\t\t\thref="/online-menu">Nabídka</a><a class="styles_HeaderNavMenLink__euTqg"
\t\t\t\t\t\t\t\t\t\t\thref="/booking">Rezervace</a><a class="styles_HeaderNavMenLink__euTqg"
\t\t\t\t\t\t\t\t\t\t\thref="/feedback">Zanechat zpětnou vazbu</a><a
\t\t\t\t\t\t\t\t\t\t\tclass="styles_HeaderNavMenLink__euTqg styles_HeaderNavMenLinkActive__SUE0X"
\t\t\t\t\t\t\t\t\t\t\thref="/pages/poledni-menu">Polední menu<div
\t\t\t\t\t\t\t\t\t\t\t\tclass="styles_HeaderActiveLinkIndicator__IpRpw"></div></a></nav>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="CustomPage_page-wrapper__CoWil">
\t\t\t\t\t\t\t<div class="style_EditorTemplateAbout__wJNQR CustomPage_page__HEyTe">
\t\t\t\t\t\t\t\t<div class="style_EditorTemplateAboutContent__0wRaN CustomPage_content__WL4ly">
\t\t\t\t\t\t\t\t\t<p></p>
\t\t\t\t\t\t\t\t\t<p><strong>po Polévka: Česnečka se zeleninou a brambory (1,6,7,9) </strong></p>
\t\t\t\t\t\t\t\t\t<p> 1) 170g Smažený holandský řízek se sýrem, bramborová kaše a kyselá okurka
\t\t\t\t\t\t\t\t\t\t(1,3,6,7,9) 139</p>
\t\t\t\t\t\t\t\t\t<p> 2) 100g Lasagne s boloňským masovým ragú, parmazánem a salátkem (1,6,7,9) 145
\t\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t\t<p> 3) 100g Tortilla plněná grilovanými kuřecími prsíčky, cheddarem, rajčátky,
\t\t\t\t\t\t\t\t\t\tsalátem a dipem, naše bramborové hranolky s dresinkem (1,3,6,7,9) 155</p>
\t\t\t\t\t\t\t\t\t<p> 4) 160g Grilovaná vepřová kotleta s krémovou dijonskou omáčkou, pečené slaninové
\t\t\t\t\t\t\t\t\t\tbrambory a salátek (1,6,7,9,10) 159</p>
\t\t\t\t\t\t\t\t\t<p><strong>út Polévka: Gulášová (1,6,9) </strong></p>
\t\t\t\t\t\t\t\t\t<p> 1) 250g Pečené kuřecí stehýnko s nádivkou, jasmínová rýže (1,6,9) 139</p>
\t\t\t\t\t\t\t\t\t<p> 2) 100g Grilovaný vepřový špíz (slanina, paprika, cibule, vepřové maso),
\t\t\t\t\t\t\t\t\t\tamerické brambory a bylinkový dip (1,3,6,7,9) 155</p>
\t\t\t\t\t\t\t\t\t<p> 3) 120g USA Bacon Jam Hamburger (hovězí mleté, USA cheese, rajče, salát,
\t\t\t\t\t\t\t\t\t\tamerický dresink), naše hranolky (1,3,6,7,9,10) 169</p>
\t\t\t\t\t\t\t\t\t<p> 4) 150g Grilované kuřecí prsíčko grilovaná, kukuřice se slaninou a vařené
\t\t\t\t\t\t\t\t\t\tbrambory s pažitkou (1,3,6,7,9) 159</p>
\t\t\t\t\t\t\t\t\t<p><strong>st Polévka: Slepičí vývar s nudlemi, zeleninou a trhaným masem (1,6,7,9)
\t\t\t\t\t\t\t\t\t\t</strong></p>
\t\t\t\t\t\t\t\t\t<p> 1) 130g Tradiční španělský hovězí ptáček s jasmínovou rýží (1,3,6,9) 149</p>
\t\t\t\t\t\t\t\t\t<p> 2) 130g Plněný paprikový lusk s rajskou omáčkou, houskové knedlíky (1,3,6,7,9)
\t\t\t\t\t\t\t\t\t\t139</p>
\t\t\t\t\t\t\t\t\t<p> 3) 100g Tortilla s řeckým kuřecím gyrosem, feta sýrem, olivami a zeleninou,
\t\t\t\t\t\t\t\t\t\tbramborové hranolky, dresink (1,3,6,7,9) 155</p>
\t\t\t\t\t\t\t\t\t<p> 4) 160g Gratinovaný kuřecí steak se sýrovou omáčkou, opékané brambory, salátek
\t\t\t\t\t\t\t\t\t\t(6,7,9) 159</p>
\t\t\t\t\t\t\t\t\t<p><strong>čt Polévka: Hráškový krém (1,6,7,9) </strong></p>
\t\t\t\t\t\t\t\t\t<p> 1) 130g Pečené kuřecí prsa na karotce, cuketě a fazolových luscích, bramborová
\t\t\t\t\t\t\t\t\t\tkaše (1,6,7,9) 149</p>
\t\t\t\t\t\t\t\t\t<p> 2) 160g Smažený kuřecí řízek v rozmarýnové strouhance, bramborový salát s
\t\t\t\t\t\t\t\t\t\thráškem (1,3,6,7,9,10) 139</p>
\t\t\t\t\t\t\t\t\t<p> 3) 120g Fat Chilli Burger (Hovězí mleté, Cheddar, majonéza z pečených jalapeňo
\t\t\t\t\t\t\t\t\t\tpapriček, nakládaná cibulka, salát) naše hranolky, tatarská omáčka
\t\t\t\t\t\t\t\t\t\t(1,3,6,7,9,10) 169</p>
\t\t\t\t\t\t\t\t\t<p> 4) 160g Grilovaný vepřový steak s bylinkovou omáčkou, pečené bramborové čtvrtky
\t\t\t\t\t\t\t\t\t\ts česnekem, salátek (6,7,9) 159</p>
\t\t\t\t\t\t\t\t\t<p><strong>pa Polévka: Hovězí vývar se zeleninou a nudlemi (1,6,7,9) </strong></p>
\t\t\t\t\t\t\t\t\t<p> 1) 160g Švédské masové kuličky s bramborovou kaší, brusinkami a salátkem
\t\t\t\t\t\t\t\t\t\t(1,3,6,7,9) 139</p>
\t\t\t\t\t\t\t\t\t<p> 2) 120g Variace smažených sýrů, vařené brambory s pažitkou, salátek a tatarská
\t\t\t\t\t\t\t\t\t\tomáčka (1,3,6,7,9,10) 149</p>
\t\t\t\t\t\t\t\t\t<p> 3) 100g Pulled Pork Quesadilla (Trhané vepřové maso, cheddar, kukuřice),
\t\t\t\t\t\t\t\t\t\tzakysaná smetana a naše hranolky (1,3,6,7,9) 155</p>
\t\t\t\t\t\t\t\t\t<p> 4) 140g Kuřecí steak "Caprese" (Zapečený mozzarelou, rajčaty a bazalkou)
\t\t\t\t\t\t\t\t\t\tamerické brambory, česnekový dip (3,6,7,9) 159</p>
\t\t\t\t\t\t\t\t\t<p></p>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="style_FooterWrapper__il_xu">
\t\t\t\t\t\t<div class="styles_container__Vr_GI styles_isDesktop__v3bmF">
\t\t\t\t\t\t\t<div class="style_FooterContent__X5nfQ">
\t\t\t\t\t\t\t\t<div class="style_FooterBlocks__DuQR1">
\t\t\t\t\t\t\t\t\t<div class="style_FooterBlockWrap__fsZih">
\t\t\t\t\t\t\t\t\t\t<div class="style_FooterBlock__Hvejp">
\t\t\t\t\t\t\t\t\t\t\t<p class="style_FooterLabel__mReSa">Kontaktní údaje</p>
\t\t\t\t\t\t\t\t\t\t\t<div class="style_FooterText__OBiCy">Dřevařská 806/22, 602 00 Brno-Královo
\t\t\t\t\t\t\t\t\t\t\t\tPole-Brno-střed, Czechia</div>
\t\t\t\t\t\t\t\t\t\t\t<div class="style_FooterText__OBiCy"><a href="tel:724 000 723">724 000
\t\t\t\t\t\t\t\t\t\t\t\t\t723</a></div>
\t\t\t\t\t\t\t\t\t\t\t<div class="style_FooterText__OBiCy"><a
\t\t\t\t\t\t\t\t\t\t\t\t\thref="mailto:info@udrevaka.cz">info@udrevaka.cz</a></div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="style_FooterBlock__Hvejp">
\t\t\t\t\t\t\t\t\t\t\t<p class="style_FooterLabel__mReSa">Otevírací doba</p>
\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeList__lw1CU">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItem__B_6uE">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemDay__ZP_W3">Pondělí</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemTime__GRYZE">11:00 - 24:00</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItem__B_6uE">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemDay__ZP_W3">Úterý</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemTime__GRYZE">11:00 - 24:00</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div
\t\t\t\t\t\t\t\t\t\t\t\t\tclass="styles_WorkTimeListItem__B_6uE styles_WorkTimeListItemSelected__hBUcJ">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemDay__ZP_W3">Středa</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemTime__GRYZE">11:00 - 24:00</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItem__B_6uE">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemDay__ZP_W3">Čtvrtek</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemTime__GRYZE">11:00 - 24:00</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItem__B_6uE">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemDay__ZP_W3">Pátek</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemTime__GRYZE">11:00 - 01:00</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItem__B_6uE">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemDay__ZP_W3">Sobota</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemTime__GRYZE">11:30 - 01:00</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItem__B_6uE">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemDay__ZP_W3">Neděle</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="styles_WorkTimeListItemTime__GRYZE">11:30 - 23:00</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="style_FooterBlockSocials__FA2AK">
\t\t\t\t\t\t\t\t\t\t<div class="style_FooterLabel__mReSa">Jsme na sociálních sitích</div><a
\t\t\t\t\t\t\t\t\t\t\ttarget="_blank"
\t\t\t\t\t\t\t\t\t\t\thref="https://www.google.com/search?sca_esv=580203348&amp;sxsrf=AM9HkKkhLZDtgVj0wQyUSO3ftDJLrj1hYw:1699383742664&amp;uds=H4sIAAAAAAAA_-MS5-IISk1OzavKTBXiLFVIKUotS8xONGAW4uJiEGKQYlBi0GAAAPlbSUIlAAAA&amp;si=ALGXSlbXm0uZkOvwvL0f1xrkn2WL71XYlO7Pt_7-_Cecra_WQHep4vRmdMa5MmolkBb01y8cwtGMvx-TpBFU7swd5_UCniNqZvp-GlviYQevP18aIbtn5tk%3D&amp;q=Hostinec+U+D%C5%99ev%C3%A1ka+Recenzie&amp;sa=X&amp;ved=2ahUKEwjlzMXiybKCAxXwhv0HHZbLAq0Q3PALegQIWBAF&amp;biw=1310&amp;bih=676&amp;dpr=2.2"
\t\t\t\t\t\t\t\t\t\t\trel="noreferrer" class="style_FooterSocials__J4a11"><svg width="24"
\t\t\t\t\t\t\t\t\t\t\t\theight="24" viewBox="0 0 24 24" fill="none"
\t\t\t\t\t\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg">
\t\t\t\t\t\t\t\t\t\t\t\t<path xmlns="http://www.w3.org/2000/svg"
\t\t\t\t\t\t\t\t\t\t\t\t\td="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
\t\t\t\t\t\t\t\t\t\t\t\t\tfill="currentColor"></path>
\t\t\t\t\t\t\t\t\t\t\t</svg>
\t\t\t\t\t\t\t\t\t\t\t<div>Google</div>
\t\t\t\t\t\t\t\t\t\t</a><a target="_blank" href="https://www.facebook.com/UDrevaka/"
\t\t\t\t\t\t\t\t\t\t\trel="noreferrer" class="style_FooterSocials__J4a11"><svg width="24"
\t\t\t\t\t\t\t\t\t\t\t\theight="24" viewBox="0 0 24 24" fill="none"
\t\t\t\t\t\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg">
\t\t\t\t\t\t\t\t\t\t\t\t<path
\t\t\t\t\t\t\t\t\t\t\t\t\td="M12 2C6.489 2 2 6.489 2 12C2 17.511 6.489 22 12 22C17.511 22 22 17.511 22 12C22 6.489 17.511 2 12 2ZM12 4C16.4301 4 20 7.56988 20 12C20 16.0145 17.0653 19.313 13.2188 19.8984V14.3848H15.5469L15.9121 12.0195H13.2188V10.7266C13.2188 9.74356 13.539 8.87109 14.459 8.87109H15.9355V6.80664C15.6755 6.77164 15.1268 6.69531 14.0898 6.69531C11.9238 6.69531 10.6543 7.83931 10.6543 10.4453V12.0195H8.42773V14.3848H10.6543V19.8789C6.87029 19.2408 4 15.9702 4 12C4 7.56988 7.56988 4 12 4Z"
\t\t\t\t\t\t\t\t\t\t\t\t\tfill="currentColor"></path>
\t\t\t\t\t\t\t\t\t\t\t</svg>
\t\t\t\t\t\t\t\t\t\t\t<div>Facebook</div>
\t\t\t\t\t\t\t\t\t\t</a><a target="_blank" href="https://www.instagram.com/udrevaka/"
\t\t\t\t\t\t\t\t\t\t\trel="noreferrer" class="style_FooterSocials__J4a11"><svg width="24"
\t\t\t\t\t\t\t\t\t\t\t\theight="24" viewBox="0 0 24 24" fill="none"
\t\t\t\t\t\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg">
\t\t\t\t\t\t\t\t\t\t\t\t<path
\t\t\t\t\t\t\t\t\t\t\t\t\td="M8 3C5.243 3 3 5.243 3 8V16C3 18.757 5.243 21 8 21H16C18.757 21 21 18.757 21 16V8C21 5.243 18.757 3 16 3H8ZM8 5H16C17.654 5 19 6.346 19 8V16C19 17.654 17.654 19 16 19H8C6.346 19 5 17.654 5 16V8C5 6.346 6.346 5 8 5ZM17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9Z"
\t\t\t\t\t\t\t\t\t\t\t\t\tfill="currentColor"></path>
\t\t\t\t\t\t\t\t\t\t\t</svg>
\t\t\t\t\t\t\t\t\t\t\t<div>Instagram</div>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div class="style_FooterBlockMap__NRGag">
\t\t\t\t\t\t\t\t\t<p class="style_FooterLabel__mReSa">Mapa</p><iframe class="style_FooterMap__r0TYP"
\t\t\t\t\t\t\t\t\t\treferrerPolicy="no-referrer-when-downgrade"
\t\t\t\t\t\t\t\t\t\tsrc="https://www.google.com/maps/embed/v1/place?key=AIzaSyBlNJjVAiVL3NDU8_UlkX0EbIc8aCeZqqE&amp;q=D%C5%99eva%C5%99sk%C3%A1%20806%2F22%2C%20602%2000%20Brno-Kr%C3%A1lovo%20Pole-Brno-st%C5%99ed%2C%20Czechia&amp;zoom=15"
\t\t\t\t\t\t\t\t\t\tallowfullscreen=""></iframe><a target="_blank"
\t\t\t\t\t\t\t\t\t\thref="https://maps.google.com/?q=Dřevařská 806/22, 602 00 Brno-Královo Pole-Brno-střed, Czechia"
\t\t\t\t\t\t\t\t\t\trel="noreferrer"><button
\t\t\t\t\t\t\t\t\t\t\tclass="styles_button__eH6h8 styles_appearanceStroke__2w0V8 style_FooterMapButton__7Eot7"><svg
\t\t\t\t\t\t\t\t\t\t\t\twidth="24" height="24" viewBox="0 0 24 24" fill="none"
\t\t\t\t\t\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg">
\t\t\t\t\t\t\t\t\t\t\t\t<path
\t\t\t\t\t\t\t\t\t\t\t\t\td="M6 3C4.35499 3 3 4.35499 3 6C3 7.64501 4.35499 9 6 9C7.29316 9 8.39514 8.15733 8.8125 7H17C18.1167 7 19 7.88333 19 9C19 10.1167 18.1167 11 17 11H7C4.80267 11 3 12.8027 3 15V16H3.20312C3.65948 17.7064 5.15641 19 7 19H15.1875C15.6049 20.1573 16.7068 21 18 21C19.645 21 21 19.645 21 18C21 16.355 19.645 15 18 15C16.7068 15 15.6049 15.8427 15.1875 17H7C5.88333 17 5 16.1167 5 15C5 13.8833 5.88333 13 7 13H17C18.8436 13 20.3405 11.7064 20.7969 10H21V9C21 6.80267 19.1973 5 17 5H8.8125C8.39514 3.84267 7.29316 3 6 3ZM6 5C6.56413 5 7 5.43587 7 6C7 6.56413 6.56413 7 6 7C5.43587 7 5 6.56413 5 6C5 5.43587 5.43587 5 6 5ZM18 17C18.5641 17 19 17.4359 19 18C19 18.5641 18.5641 19 18 19C17.4359 19 17 18.5641 17 18C17 17.4359 17.4359 17 18 17Z"
\t\t\t\t\t\t\t\t\t\t\t\t\tfill="currentColor"></path>
\t\t\t\t\t\t\t\t\t\t\t</svg>Navigovat</button></a>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="style_FooterAbout__SJ1Ho">
\t\t\t\t\t\t<div class="styles_container__Vr_GI styles_isDesktop__v3bmF">
\t\t\t\t\t\t\t<div class="style_FooterAboutContent__Nctss">© <!-- -->2023<!-- --> <!-- -->U Dřeváka
\t\t\t\t\t\t\t\tBeer&amp;Grill<div class="style_FooterAboutLinkWrapper__KHSLE"><a
\t\t\t\t\t\t\t\t\t\tclass="style_FooterAboutLink__xPI_N" href="/cookie-policy">Zásady používání
\t\t\t\t\t\t\t\t\t\tsouborů cookie</a><a class="style_FooterAboutLink__xPI_N"
\t\t\t\t\t\t\t\t\t\thref="/terms-of-use">Podmínky použití</a><a class="style_FooterAboutLink__xPI_N"
\t\t\t\t\t\t\t\t\t\thref="/privacy-policy">Zásady ochrany osobních údajů</a></div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<div id="portal-root"></div>
\t</div>
\t<script id="__NEXT_DATA__"
\t\ttype="application/json">{"props":{"pageProps":{"page":{"_id":"655b153ebd27a41b4f45614c","hurl":"poledni-menu","active":true,"createdAt":"2023-11-20T08:13:50.714Z","name":"Polední menu","platformPage":false,"seo":{"name":"Polední menu","description":null,"image":null},"updatedAt":"2023-11-20T08:14:17.384Z","content":{"value":"\u003cp\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003epo\\tPolévka: Česnečka se zeleninou a brambory (1,6,7,9)\\t \u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\\t1) 170g Smažený holandský řízek se sýrem, bramborová kaše a kyselá okurka (1,3,6,7,9)\\t139\u003c/p\u003e\u003cp\u003e\\t2) 100g Lasagne s boloňským masovým ragú, parmazánem a salátkem (1,6,7,9)\\t145\u003c/p\u003e\u003cp\u003e\\t3) 100g Tortilla plněná grilovanými kuřecími prsíčky, cheddarem, rajčátky, salátem a dipem, naše bramborové hranolky s dresinkem (1,3,6,7,9)\\t155\u003c/p\u003e\u003cp\u003e\\t4) 160g Grilovaná vepřová kotleta s krémovou dijonskou omáčkou, pečené slaninové brambory a salátek (1,6,7,9,10)\\t159\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eút\\tPolévka: Gulášová (1,6,9)\\t \u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\\t1) 250g Pečené kuřecí stehýnko s nádivkou, jasmínová rýže (1,6,9)\\t139\u003c/p\u003e\u003cp\u003e\\t2) 100g Grilovaný vepřový špíz (slanina, paprika, cibule, vepřové maso), americké brambory a bylinkový dip (1,3,6,7,9)\\t155\u003c/p\u003e\u003cp\u003e\\t3) 120g USA Bacon Jam Hamburger (hovězí mleté, USA cheese, rajče, salát, americký dresink), naše hranolky (1,3,6,7,9,10)\\t169\u003c/p\u003e\u003cp\u003e\\t4) 150g Grilované kuřecí prsíčko grilovaná, kukuřice se slaninou a vařené brambory s pažitkou (1,3,6,7,9)\\t159\u003c/p\u003e\u003cp\u003e\u003cstrong\u003est\\tPolévka: Slepičí vývar s nudlemi, zeleninou a trhaným masem (1,6,7,9)\\t \u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\\t1) 130g Tradiční španělský hovězí ptáček s jasmínovou rýží (1,3,6,9)\\t149\u003c/p\u003e\u003cp\u003e\\t2) 130g Plněný paprikový lusk s rajskou omáčkou, houskové knedlíky (1,3,6,7,9)\\t139\u003c/p\u003e\u003cp\u003e\\t3) 100g Tortilla s řeckým kuřecím gyrosem, feta sýrem, olivami a zeleninou, bramborové hranolky, dresink (1,3,6,7,9)\\t155\u003c/p\u003e\u003cp\u003e\\t4) 160g Gratinovaný kuřecí steak se sýrovou omáčkou, opékané brambory, salátek (6,7,9)\\t159\u003c/p\u003e\u003cp\u003e\u003cstrong\u003ečt\\tPolévka: Hráškový krém (1,6,7,9)\\t \u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\\t1) 130g Pečené kuřecí prsa na karotce, cuketě a fazolových luscích, bramborová kaše (1,6,7,9)\\t149\u003c/p\u003e\u003cp\u003e\\t2) 160g Smažený kuřecí řízek v rozmarýnové strouhance, bramborový salát s hráškem (1,3,6,7,9,10)\\t139\u003c/p\u003e\u003cp\u003e\\t3) 120g Fat Chilli Burger (Hovězí mleté, Cheddar, majonéza z pečených jalapeňo papriček, nakládaná cibulka, salát) naše hranolky, tatarská omáčka (1,3,6,7,9,10)\\t169\u003c/p\u003e\u003cp\u003e\\t4) 160g Grilovaný vepřový steak s bylinkovou omáčkou, pečené bramborové čtvrtky s česnekem, salátek (6,7,9)\\t159\u003c/p\u003e\u003cp\u003e\u003cstrong\u003epa\\tPolévka: Hovězí vývar se zeleninou a nudlemi (1,6,7,9)\\t \u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\\t1) 160g Švédské masové kuličky s bramborovou kaší, brusinkami a salátkem (1,3,6,7,9)\\t139\u003c/p\u003e\u003cp\u003e\\t2) 120g Variace smažených sýrů, vařené brambory s pažitkou, salátek a tatarská omáčka (1,3,6,7,9,10)\\t149\u003c/p\u003e\u003cp\u003e\\t3) 100g Pulled Pork Quesadilla (Trhané vepřové maso, cheddar, kukuřice), zakysaná smetana a naše hranolky (1,3,6,7,9)\\t155\u003c/p\u003e\u003cp\u003e\\t4) 140g Kuřecí steak \\"Caprese\\" (Zapečený mozzarelou, rajčaty a bazalkou) americké brambory, česnekový dip (3,6,7,9)\\t159\u003c/p\u003e\u003cp\u003e\u003c/p\u003e"}},"host":"https://udrevaka.choiceqr.com","_sentryTraceData":"8ddd21986d1b4c55a90ae0edc226734e-aaf3ad4ba0757e27-0","_sentryBaggage":"sentry-environment=production,sentry-release=qUrOVO1ZaZOJmL0krpVKl,sentry-transaction=%2Fpages%2F%5BpageHurl%5D,sentry-public_key=490d62f0191342e78f6c9dd893cad040,sentry-trace_id=8ddd21986d1b4c55a90ae0edc226734e,sentry-sample_rate=0.1"},"app":{"place":{"name":"U Dřeváka Beer\u0026Grill","type":"bar","placeType":"SIMPLE","features":{"translations":true,"booking":true,"feedbackRestaurant":true,"whiteLabel":true,"delivery":true,"geolocation":true,"recommendations":true,"promocodes":true,"canOrderTakeaway":true,"canOrderDelivery":true,"loyalty":true,"customDomain":"udrevaka.cz/pages/poledni-menu"},"canOrder":false,"canPreOrder":true,"useTerms":null,"companyDescription":"","companyImages":{"mobile":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_qhvIXFR-luPcPhP-pOSeHoB_m-w-i.jpeg","desktop":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_cGvltHc-ZyvKpll-SCTAfPq_P-D-E.jpeg","logo":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/logo/thumbnail_kJCJSam-JJANcIj-QzBjelx_E-q-I.png","pwaLogo":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/logo/kJCJSam-JJANcIj-QzBjelx.png"},"opened":false,"openStatus":"today","location":{"opened":false,"openStatus":"today","workTime":{"dayOfWeek":3,"from":"10:30:00.000","till":"22:15:00.000"},"workTimeAll":[{"dayOfWeek":0,"active":true,"from":"10:30:00.000","till":"22:15:00.000"},{"dayOfWeek":1,"active":true,"from":"10:30:00.000","till":"22:15:00.000"},{"dayOfWeek":2,"active":true,"from":"10:30:00.000","till":"22:15:00.000"},{"dayOfWeek":3,"active":true,"from":"10:30:00.000","till":"22:15:00.000"},{"dayOfWeek":4,"active":true,"from":"10:30:00.000","till":"22:15:00.000"},{"dayOfWeek":5,"active":true,"from":"10:30:00.000","till":"22:15:00.000"},{"dayOfWeek":6,"active":true,"from":"10:30:00.000","till":"22:15:00.000"}]},"workTime":{"dayOfWeek":3,"from":"11:00:00.000","till":"24:00:00.000"},"workTimeAll":[{"dayOfWeek":0,"active":true,"from":"11:30:00.000","till":"23:00:00.000"},{"dayOfWeek":1,"active":true,"from":"11:00:00.000","till":"24:00:00.000"},{"dayOfWeek":2,"active":true,"from":"11:00:00.000","till":"24:00:00.000"},{"dayOfWeek":3,"active":true,"from":"11:00:00.000","till":"24:00:00.000"},{"dayOfWeek":4,"active":true,"from":"11:00:00.000","till":"24:00:00.000"},{"dayOfWeek":5,"active":true,"from":"11:00:00.000","till":"01:00:00.000"},{"dayOfWeek":6,"active":true,"from":"11:30:00.000","till":"01:00:00.000"}],"customize":{"primaryColor":"#FFA11B","menuFavorites":true,"menuFavoritesCounter":true,"clientMenuTileStyle":false,"hideMinorUnits":true,"showOrderTableProgress":true,"showOrderDeliveryProgress":false,"showOrderTakeawayProgress":true,"customTemplate":true,"deliveryProviderBy":"wolt","feedbackSocNetworkLinks":["google"],"requiredEmailOrder":true,"platformPages":{"privacyPolicy":true,"termsOfUse":true},"feedbackMandatoryPhone":true,"cardMenuOptionShow":true},"currency":"CZK","locationPoint":{"areaType":"delivery","name":"Delivery","active":true,"type":"area","time":{"allowASAP":true,"minPreOrdersDayCount":0,"maxPreOrdersDayCount":2,"delay":30,"interval":15,"preOrderSkipDelay":false,"allowNonWorkingOrder":true,"allowTime":true}},"delivery":{"active":true},"paymentMethods":{"cash":false,"online":true,"wallet":true},"contactInfo":{"socialNetworks":{"google":"https://www.google.com/search?sca_esv=580203348\u0026sxsrf=AM9HkKkhLZDtgVj0wQyUSO3ftDJLrj1hYw:1699383742664\u0026uds=H4sIAAAAAAAA_-MS5-IISk1OzavKTBXiLFVIKUotS8xONGAW4uJiEGKQYlBi0GAAAPlbSUIlAAAA\u0026si=ALGXSlbXm0uZkOvwvL0f1xrkn2WL71XYlO7Pt_7-_Cecra_WQHep4vRmdMa5MmolkBb01y8cwtGMvx-TpBFU7swd5_UCniNqZvp-GlviYQevP18aIbtn5tk%3D\u0026q=Hostinec+U+D%C5%99ev%C3%A1ka+Recenzie\u0026sa=X\u0026ved=2ahUKEwjlzMXiybKCAxXwhv0HHZbLAq0Q3PALegQIWBAF\u0026biw=1310\u0026bih=676\u0026dpr=2.2","tripAdvisor":"","fb":"https://www.facebook.com/UDrevaka/","instagram":"https://www.instagram.com/udrevaka/"},"website":"https://udrevaka.cz/","email":"info@udrevaka.cz","phone":"724 000 723","address":{"prediction":"Dřevařská 806/22, 602 00 Brno-Královo Pole-Brno-střed, Czechia","country":"Czechia","postalCode":"602 00","sublocality":"Brno-Královo Pole","location":{"coordinates":[16.6010655,49.2090913],"type":"Point"},"countryCode":"CZ"}}},"customMenuLinks":[{"_id":"655b153e905dbadf880cdf17","active":true,"pageActive":true,"name":"Polední menu","openIn":"current","type":"page","value":"poledni-menu","position":0,"createdAt":"2023-11-20T08:13:50.780Z","updatedAt":"2023-11-20T08:13:50.780Z"}],"language":{"current":"cz","default":"cz","list":[{"code":"cz","name":"Czech"}]},"template":{"name":"Úvodní stránka","styles":{"background":{"type":"pattern","value":{"_id":"65421c2dfefe1cce59ac71e4","originalName":"bg_menu_day.jpg","name":"ZyTuNLZ-HChIVik-zDKCUqL","filename":"ZyTuNLZ-HChIVik-zDKCUqL.jpeg","size":1312.29,"ext":"jpeg","mime":"image/jpeg","width":1920,"height":2270,"type":"background-image","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/background-image/ZyTuNLZ-HChIVik-zDKCUqL.jpeg","originalFile":{"originalName":"bg_menu_day.jpg","name":"ZyTuNLZ-HChIVik-zDKCUqL_original","filename":"ZyTuNLZ-HChIVik-zDKCUqL_original.jpeg","size":574.83,"ext":"jpeg","mime":"image/jpeg","width":913,"height":1080,"url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/background-image/ZyTuNLZ-HChIVik-zDKCUqL_original.jpeg"},"formats":{"thumbnail":{"originalName":"thumbnail_ZyTuNLZ-HChIVik-zDKCUqL_P-P-T","name":"thumbnail_ZyTuNLZ-HChIVik-zDKCUqL_P-P-T","filename":"thumbnail_ZyTuNLZ-HChIVik-zDKCUqL_P-P-T.jpeg","size":18.04,"ext":"jpeg","mime":"image/jpeg","width":192,"height":108,"url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/background-image/thumbnail_ZyTuNLZ-HChIVik-zDKCUqL_P-P-T.jpeg"}},"createdAt":"2023-11-01T09:36:45.187Z","updatedAt":"2023-11-01T09:36:45.187Z"},"options":{"backgroundColor":"#FFFFFF","color":"#FFFFFF","opacity":1}},"bgColor":"#FFFFFF","fontColor":"#FFFFFF","primaryColor":"#801f18"},"blocks":[{"active":true,"id":"IzCTfrA-TueCVhv-kCBIDXF","type":"media","items":[{"type":"image","value":{"_id":"6542115ae22fa760d3a1cbff","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_cGvltHc-ZyvKpll-SCTAfPq_P-D-E.jpeg"}},{"type":"image","value":{"_id":"6542115ae22fa760d3a1cc00","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_gJbGqkM-HGcGMOQ-RqZYLIu_I-R-Q.jpeg"}}],"styleType":"short"},{"active":false,"id":"uGDgoII-AMvgebn-lrDRwtM","type":"menu","items":[]},{"active":true,"id":"HAeIvbf-enSRBIq-EIjkFVs","type":"editor","content":"\u003cp\u003ePilsner Urquell a Rojc z Rozdrojovic na čepu na stálo a dalších 5 kohoutů máme pro řemeslná piva.\u003c/p\u003e\u003cp\u003eBurgery, Vafle sendviče, Wrapy, Quesadilly, hranolkový Bowl...\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e"},{"active":false,"id":"SFVrSCD-LOlAfDU-cOiQOHp","type":"plugin","meta":{}},{"active":true,"id":"VIGeCKO-sdJegAa-GoGjyTr","type":"gallery","items":[{"_id":"65420e72db06e9fc1658c279","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_ahRPRUH-psITZqd-RTVCFII_k-L-j.jpeg"},{"_id":"65420e71115da33d365da362","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_pHxeRwo-bdIdRmP-DwGDujN_p-M-w.jpeg"},{"_id":"65420e70115da33d365da35f","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_XbwwYpr-GjKfJeF-IZsQrnD_D-f-x.jpeg"},{"_id":"65420e71115da33d365da361","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_PXpchAH-IsVSGEC-leGeLmu_F-r-X.jpeg"},{"_id":"65420e71115da33d365da363","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_pmqJerj-lsCirPl-kJhIKak_H-w-r.jpeg"},{"_id":"65420e70115da33d365da360","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_VGwUDWN-aLbnYFA-ozdyhiu_S-k-n.jpeg"},{"_id":"65420e72db06e9fc1658c27a","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_cfECknz-xCTNmbh-NhtHWHQ_R-b-B.jpeg"},{"_id":"65420e6d115da33d365da35b","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_AHlKwnc-ifpZpOR-sKTixFV_y-g-e.jpeg"},{"_id":"65420e6e115da33d365da35d","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_NarSJGP-ejbKOGn-FLKJeoM_s-B-s.jpeg"},{"_id":"65420e6e115da33d365da35e","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_hwxIstF-UmJJWDs-DdRhcCP_Q-P-Q.jpeg"},{"_id":"65420e6d115da33d365da35c","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_OuMDyRQ-BFEFGhG-RiGuLaD_b-Q-D.jpeg"}]}]},"sections":[{"_id":"654fd292f92cb93530761152","name":"🍽️ POLEDNÍ  MENU","description":"","mode":{"type":"interactive","staticDoc":null},"hurl":"section:poledni-menu","showOutsideSchedule":false,"schedule":[{"dayOfWeek":0,"active":false,"from":"12:00:00","till":"15:00:00"},{"dayOfWeek":1,"active":true,"from":"06:00:00","till":"14:00:00"},{"dayOfWeek":2,"active":true,"from":"06:00:00","till":"14:00:00"},{"dayOfWeek":3,"active":true,"from":"06:00:00","till":"14:00:00"},{"dayOfWeek":4,"active":true,"from":"06:00:00","till":"14:00:00"},{"dayOfWeek":5,"active":true,"from":"06:00:00","till":"14:00:00"},{"dayOfWeek":6,"active":false,"from":"12:00:00","till":"15:00:00"}],"left":346,"interval":{"from":"06:00:00.000","till":"14:00:00.000"}},{"_id":"653fd489660843bb3f850cec","name":"🥪 Jídelní lístek","description":"","mode":{"type":"interactive","staticDoc":null},"hurl":"section:jidelni-listek"}],"menuInfo":"","categories":[{"_id":"655b1b66905dbadf880cdf73","hurl":"poledni-menu-uteru-237","name":"🍽️ Polední menu ÚTERÝ","description":null},{"_id":"655b1b66905dbadf880cdf74","hurl":"poledni-menu-streda-702","name":"🍽️ Polední menu STŘEDA","description":null}],"menu":[{"_id":"65566044269ffefb80300897","price":1500,"category":"655b1b66905dbadf880cdf74","VAT":15,"hurl":"polevka-slepici-vyvar-s-nudlemi-zeleninou-a-trhanym-masem-1-6-7-9","position":5,"weightType":"g","allergens":[],"attributes":[],"preparationTime":0,"externalMedia":[],"name":"Polevka: Slepici vyvar s nudlemi, zeleninou a trhanym masem (1,6,7,9)","description":"","media":null,"weight":"","pack":null,"menu_labels":[],"menu_options":[{"_id":"654fdad9f92cb935307611a9","required":true,"defaultIndex":null,"name":"OBAL (POVINNÁ POLOŽKA)!","countable":false,"shortenList":null,"type":"single","menuMinCount":0,"menuMaxCount":0,"list":[{"_id":"654fdaf2f92cb935307611ac","name":"OBAL 3","price":1500,"position":2,"default":false,"max":0}]},{"_id":"654fda12f92cb93530761199","required":false,"defaultIndex":-1,"name":"COLESLAW!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":8,"list":[{"_id":"654fda21f92cb9353076119a","name":"Coleslaw","price":3900,"position":0,"default":false,"max":0}]},{"_id":"654fda2df92cb9353076119b","required":false,"defaultIndex":-1,"name":"DEJ SI NÁPOJ!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fdac1f92cb9353076119e","name":"Náš Malinový Radler 1L","price":11800,"position":0,"default":false,"max":0},{"_id":"654fdac1f92cb9353076119f","name":"Náš Malinový Radler 1L","price":11800,"position":1,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a0","name":"Náš Malinový Radler 1L","price":11800,"position":2,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a1","name":"0,5l Naše Zázvorová limonáda s citronem","price":8400,"position":3,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a2","name":"0,5l Naše Pomerančová limonáda s pomerančem","price":8400,"position":4,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a3","name":"0,5l Naše Malinová limonáda s malinami","price":8400,"position":5,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a4","name":"Coca Cola v plechu 0,33l","price":4500,"position":6,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a5","name":"Coca Cola ZERO v plechu 0,33l","price":4500,"position":7,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a6","name":"Sprite v plechu 0,33l","price":4500,"position":8,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a7","name":"Fanta v plechu 0,33l ","price":4500,"position":9,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a8","name":"0,33l","price":4900,"position":10,"default":false,"max":0}]},{"_id":"654fddb7f92cb935307611e1","required":false,"defaultIndex":-1,"name":"ZMRZLINA!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fddd4f92cb935307611e2","name":"Ben\u0026Jerry's Cookie Cookie Dough","price":21900,"position":0,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e3","name":"Ben\u0026Jerry's Karamel Sutra","price":21900,"position":1,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e4","name":"Ben\u0026Jerry's Chocolate Fudge Brownie","price":21900,"position":2,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e5","name":"Ben\u0026Jerry's Peanut Butter Cup","price":21900,"position":3,"default":false,"max":0}]}],"available":true},{"_id":"6556605f269ffefb80300899","price":14900,"category":"655b1b66905dbadf880cdf74","VAT":15,"hurl":"1-130g-tradicni-spanelsky-hovezi-ptacek-s-jasminovou-ryzi-1-3-6-9","position":6,"weightType":"g","allergens":[],"attributes":[],"preparationTime":0,"externalMedia":[],"name":"1) 130g Tradicni spanelsky hovezi ptacek s jasminovou ryzi (1,3,6,9)","description":"","media":null,"weight":"","pack":null,"menu_labels":[],"menu_options":[{"_id":"654fdad9f92cb935307611a9","required":true,"defaultIndex":null,"name":"OBAL (POVINNÁ POLOŽKA)!","countable":false,"shortenList":null,"type":"single","menuMinCount":0,"menuMaxCount":0,"list":[{"_id":"654fdaf2f92cb935307611ac","name":"OBAL 3","price":1500,"position":2,"default":false,"max":0}]},{"_id":"654fda12f92cb93530761199","required":false,"defaultIndex":-1,"name":"COLESLAW!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":8,"list":[{"_id":"654fda21f92cb9353076119a","name":"Coleslaw","price":3900,"position":0,"default":false,"max":0}]},{"_id":"654fda2df92cb9353076119b","required":false,"defaultIndex":-1,"name":"DEJ SI NÁPOJ!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fdac1f92cb9353076119e","name":"Náš Malinový Radler 1L","price":11800,"position":0,"default":false,"max":0},{"_id":"654fdac1f92cb9353076119f","name":"Náš Malinový Radler 1L","price":11800,"position":1,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a0","name":"Náš Malinový Radler 1L","price":11800,"position":2,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a1","name":"0,5l Naše Zázvorová limonáda s citronem","price":8400,"position":3,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a2","name":"0,5l Naše Pomerančová limonáda s pomerančem","price":8400,"position":4,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a3","name":"0,5l Naše Malinová limonáda s malinami","price":8400,"position":5,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a4","name":"Coca Cola v plechu 0,33l","price":4500,"position":6,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a5","name":"Coca Cola ZERO v plechu 0,33l","price":4500,"position":7,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a6","name":"Sprite v plechu 0,33l","price":4500,"position":8,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a7","name":"Fanta v plechu 0,33l ","price":4500,"position":9,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a8","name":"0,33l","price":4900,"position":10,"default":false,"max":0}]},{"_id":"654fddb7f92cb935307611e1","required":false,"defaultIndex":-1,"name":"ZMRZLINA!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fddd4f92cb935307611e2","name":"Ben\u0026Jerry's Cookie Cookie Dough","price":21900,"position":0,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e3","name":"Ben\u0026Jerry's Karamel Sutra","price":21900,"position":1,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e4","name":"Ben\u0026Jerry's Chocolate Fudge Brownie","price":21900,"position":2,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e5","name":"Ben\u0026Jerry's Peanut Butter Cup","price":21900,"position":3,"default":false,"max":0}]}],"available":true},{"_id":"6556609a269ffefb8030089c","price":13900,"category":"655b1b66905dbadf880cdf74","VAT":15,"hurl":"2-130g-plneny-paprikovy-lusk-s-rajskou-omackou-houskove-knedliky-1-3-6-7-9","position":7,"weightType":"g","allergens":[],"attributes":[],"preparationTime":0,"externalMedia":[],"name":"2) 130g Plneny paprikovy lusk s rajskou omackou, houskove knedliky (1,3,6,7,9)","description":"","media":null,"weight":"","pack":null,"menu_labels":[],"menu_options":[{"_id":"654fdad9f92cb935307611a9","required":true,"defaultIndex":null,"name":"OBAL (POVINNÁ POLOŽKA)!","countable":false,"shortenList":null,"type":"single","menuMinCount":0,"menuMaxCount":0,"list":[{"_id":"654fdaf2f92cb935307611ac","name":"OBAL 3","price":1500,"position":2,"default":false,"max":0}]},{"_id":"654fda12f92cb93530761199","required":false,"defaultIndex":-1,"name":"COLESLAW!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":8,"list":[{"_id":"654fda21f92cb9353076119a","name":"Coleslaw","price":3900,"position":0,"default":false,"max":0}]},{"_id":"654fda2df92cb9353076119b","required":false,"defaultIndex":-1,"name":"DEJ SI NÁPOJ!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fdac1f92cb9353076119e","name":"Náš Malinový Radler 1L","price":11800,"position":0,"default":false,"max":0},{"_id":"654fdac1f92cb9353076119f","name":"Náš Malinový Radler 1L","price":11800,"position":1,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a0","name":"Náš Malinový Radler 1L","price":11800,"position":2,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a1","name":"0,5l Naše Zázvorová limonáda s citronem","price":8400,"position":3,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a2","name":"0,5l Naše Pomerančová limonáda s pomerančem","price":8400,"position":4,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a3","name":"0,5l Naše Malinová limonáda s malinami","price":8400,"position":5,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a4","name":"Coca Cola v plechu 0,33l","price":4500,"position":6,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a5","name":"Coca Cola ZERO v plechu 0,33l","price":4500,"position":7,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a6","name":"Sprite v plechu 0,33l","price":4500,"position":8,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a7","name":"Fanta v plechu 0,33l ","price":4500,"position":9,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a8","name":"0,33l","price":4900,"position":10,"default":false,"max":0}]},{"_id":"654fddb7f92cb935307611e1","required":false,"defaultIndex":-1,"name":"ZMRZLINA!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fddd4f92cb935307611e2","name":"Ben\u0026Jerry's Cookie Cookie Dough","price":21900,"position":0,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e3","name":"Ben\u0026Jerry's Karamel Sutra","price":21900,"position":1,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e4","name":"Ben\u0026Jerry's Chocolate Fudge Brownie","price":21900,"position":2,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e5","name":"Ben\u0026Jerry's Peanut Butter Cup","price":21900,"position":3,"default":false,"max":0}]}],"available":true},{"_id":"655660b5269ffefb8030089f","price":15500,"category":"655b1b66905dbadf880cdf74","VAT":15,"hurl":"3-100g-tortilla-s-reckym-kurecim-gyrosem-feta-syrem-olivami-a-zeleninou-bramborove-hranolky-dresink-1-3-6-7-9","position":8,"weightType":"g","allergens":[],"attributes":[],"preparationTime":0,"externalMedia":[],"name":"3) 100g Tortilla s reckym kurecim gyrosem, feta syrem, olivami a zeleninou, bramborove hranolky, dresink (1,3,6,7,9)","description":"","media":null,"weight":"","pack":null,"menu_labels":[],"menu_options":[{"_id":"654fdad9f92cb935307611a9","required":true,"defaultIndex":null,"name":"OBAL (POVINNÁ POLOŽKA)!","countable":false,"shortenList":null,"type":"single","menuMinCount":0,"menuMaxCount":0,"list":[{"_id":"654fdaf2f92cb935307611ac","name":"OBAL 3","price":1500,"position":2,"default":false,"max":0}]},{"_id":"654fda12f92cb93530761199","required":false,"defaultIndex":-1,"name":"COLESLAW!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":8,"list":[{"_id":"654fda21f92cb9353076119a","name":"Coleslaw","price":3900,"position":0,"default":false,"max":0}]},{"_id":"654fda2df92cb9353076119b","required":false,"defaultIndex":-1,"name":"DEJ SI NÁPOJ!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fdac1f92cb9353076119e","name":"Náš Malinový Radler 1L","price":11800,"position":0,"default":false,"max":0},{"_id":"654fdac1f92cb9353076119f","name":"Náš Malinový Radler 1L","price":11800,"position":1,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a0","name":"Náš Malinový Radler 1L","price":11800,"position":2,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a1","name":"0,5l Naše Zázvorová limonáda s citronem","price":8400,"position":3,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a2","name":"0,5l Naše Pomerančová limonáda s pomerančem","price":8400,"position":4,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a3","name":"0,5l Naše Malinová limonáda s malinami","price":8400,"position":5,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a4","name":"Coca Cola v plechu 0,33l","price":4500,"position":6,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a5","name":"Coca Cola ZERO v plechu 0,33l","price":4500,"position":7,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a6","name":"Sprite v plechu 0,33l","price":4500,"position":8,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a7","name":"Fanta v plechu 0,33l ","price":4500,"position":9,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a8","name":"0,33l","price":4900,"position":10,"default":false,"max":0}]},{"_id":"654fddb7f92cb935307611e1","required":false,"defaultIndex":-1,"name":"ZMRZLINA!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fddd4f92cb935307611e2","name":"Ben\u0026Jerry's Cookie Cookie Dough","price":21900,"position":0,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e3","name":"Ben\u0026Jerry's Karamel Sutra","price":21900,"position":1,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e4","name":"Ben\u0026Jerry's Chocolate Fudge Brownie","price":21900,"position":2,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e5","name":"Ben\u0026Jerry's Peanut Butter Cup","price":21900,"position":3,"default":false,"max":0}]}],"available":true},{"_id":"655660d8269ffefb803008a1","price":15900,"category":"655b1b66905dbadf880cdf74","VAT":15,"hurl":"4-160g-gratinovany-kureci-steak-se-syrovou-omackou-opekane-brambory-salatek-6-7-9","position":9,"weightType":"g","allergens":[],"attributes":[],"preparationTime":0,"externalMedia":[],"name":"4) 160g Gratinovany kureci steak se syrovou omackou, opekane brambory, salatek (6,7,9)","description":"","media":null,"weight":"","pack":null,"menu_labels":[],"menu_options":[{"_id":"654fdad9f92cb935307611a9","required":true,"defaultIndex":null,"name":"OBAL (POVINNÁ POLOŽKA)!","countable":false,"shortenList":null,"type":"single","menuMinCount":0,"menuMaxCount":0,"list":[{"_id":"654fdaf2f92cb935307611ac","name":"OBAL 3","price":1500,"position":2,"default":false,"max":0}]},{"_id":"654fda12f92cb93530761199","required":false,"defaultIndex":-1,"name":"COLESLAW!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":8,"list":[{"_id":"654fda21f92cb9353076119a","name":"Coleslaw","price":3900,"position":0,"default":false,"max":0}]},{"_id":"654fda2df92cb9353076119b","required":false,"defaultIndex":-1,"name":"DEJ SI NÁPOJ!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fdac1f92cb9353076119e","name":"Náš Malinový Radler 1L","price":11800,"position":0,"default":false,"max":0},{"_id":"654fdac1f92cb9353076119f","name":"Náš Malinový Radler 1L","price":11800,"position":1,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a0","name":"Náš Malinový Radler 1L","price":11800,"position":2,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a1","name":"0,5l Naše Zázvorová limonáda s citronem","price":8400,"position":3,"default":false,"max":0},{"_id":"654fdac1f92cb935307611a2","name":"0,5l Naše Pomerančová limonáda s pomerančem","price":8400,"position":4,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a3","name":"0,5l Naše Malinová limonáda s malinami","price":8400,"position":5,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a4","name":"Coca Cola v plechu 0,33l","price":4500,"position":6,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a5","name":"Coca Cola ZERO v plechu 0,33l","price":4500,"position":7,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a6","name":"Sprite v plechu 0,33l","price":4500,"position":8,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a7","name":"Fanta v plechu 0,33l ","price":4500,"position":9,"default":false,"max":0},{"_id":"654fdac2f92cb935307611a8","name":"0,33l","price":4900,"position":10,"default":false,"max":0}]},{"_id":"654fddb7f92cb935307611e1","required":false,"defaultIndex":-1,"name":"ZMRZLINA!","countable":false,"shortenList":null,"type":"multiple","menuMinCount":0,"menuMaxCount":99,"list":[{"_id":"654fddd4f92cb935307611e2","name":"Ben\u0026Jerry's Cookie Cookie Dough","price":21900,"position":0,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e3","name":"Ben\u0026Jerry's Karamel Sutra","price":21900,"position":1,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e4","name":"Ben\u0026Jerry's Chocolate Fudge Brownie","price":21900,"position":2,"default":false,"max":0},{"_id":"654fddd4f92cb935307611e5","name":"Ben\u0026Jerry's Peanut Butter Cup","price":21900,"position":3,"default":false,"max":0}]}],"available":true}],"areaSwitcher":{"dineIn":null,"takeaway":{"type":"takeaway","url":"/takeaway","discount":null},"delivery":{"type":"delivery","url":"/delivery","discount":null}},"menuSync":false},"template":{"template":{"name":"Úvodní stránka","styles":{"background":{"type":"pattern","value":{"_id":"65421c2dfefe1cce59ac71e4","originalName":"bg_menu_day.jpg","name":"ZyTuNLZ-HChIVik-zDKCUqL","filename":"ZyTuNLZ-HChIVik-zDKCUqL.jpeg","size":1312.29,"ext":"jpeg","mime":"image/jpeg","width":1920,"height":2270,"type":"background-image","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/background-image/ZyTuNLZ-HChIVik-zDKCUqL.jpeg","originalFile":{"originalName":"bg_menu_day.jpg","name":"ZyTuNLZ-HChIVik-zDKCUqL_original","filename":"ZyTuNLZ-HChIVik-zDKCUqL_original.jpeg","size":574.83,"ext":"jpeg","mime":"image/jpeg","width":913,"height":1080,"url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/background-image/ZyTuNLZ-HChIVik-zDKCUqL_original.jpeg"},"formats":{"thumbnail":{"originalName":"thumbnail_ZyTuNLZ-HChIVik-zDKCUqL_P-P-T","name":"thumbnail_ZyTuNLZ-HChIVik-zDKCUqL_P-P-T","filename":"thumbnail_ZyTuNLZ-HChIVik-zDKCUqL_P-P-T.jpeg","size":18.04,"ext":"jpeg","mime":"image/jpeg","width":192,"height":108,"url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/background-image/thumbnail_ZyTuNLZ-HChIVik-zDKCUqL_P-P-T.jpeg"}},"createdAt":"2023-11-01T09:36:45.187Z","updatedAt":"2023-11-01T09:36:45.187Z"},"options":{"backgroundColor":"#FFFFFF","color":"#FFFFFF","opacity":1}},"bgColor":"#FFFFFF","fontColor":"#FFFFFF","primaryColor":"#801f18"},"blocks":[{"active":true,"id":"IzCTfrA-TueCVhv-kCBIDXF","type":"media","items":[{"type":"image","value":{"_id":"6542115ae22fa760d3a1cbff","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_cGvltHc-ZyvKpll-SCTAfPq_P-D-E.jpeg"}},{"type":"image","value":{"_id":"6542115ae22fa760d3a1cc00","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/thumbnail_gJbGqkM-HGcGMOQ-RqZYLIu_I-R-Q.jpeg"}}],"styleType":"short"},{"active":false,"id":"uGDgoII-AMvgebn-lrDRwtM","type":"menu","items":[]},{"active":true,"id":"HAeIvbf-enSRBIq-EIjkFVs","type":"editor","content":"\u003cp\u003ePilsner Urquell a Rojc z Rozdrojovic na čepu na stálo a dalších 5 kohoutů máme pro řemeslná piva.\u003c/p\u003e\u003cp\u003eBurgery, Vafle sendviče, Wrapy, Quesadilly, hranolkový Bowl...\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e"},{"active":false,"id":"SFVrSCD-LOlAfDU-cOiQOHp","type":"plugin","meta":{}},{"active":true,"id":"VIGeCKO-sdJegAa-GoGjyTr","type":"gallery","items":[{"_id":"65420e72db06e9fc1658c279","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_ahRPRUH-psITZqd-RTVCFII_k-L-j.jpeg"},{"_id":"65420e71115da33d365da362","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_pHxeRwo-bdIdRmP-DwGDujN_p-M-w.jpeg"},{"_id":"65420e70115da33d365da35f","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_XbwwYpr-GjKfJeF-IZsQrnD_D-f-x.jpeg"},{"_id":"65420e71115da33d365da361","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_PXpchAH-IsVSGEC-leGeLmu_F-r-X.jpeg"},{"_id":"65420e71115da33d365da363","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_pmqJerj-lsCirPl-kJhIKak_H-w-r.jpeg"},{"_id":"65420e70115da33d365da360","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_VGwUDWN-aLbnYFA-ozdyhiu_S-k-n.jpeg"},{"_id":"65420e72db06e9fc1658c27a","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_cfECknz-xCTNmbh-NhtHWHQ_R-b-B.jpeg"},{"_id":"65420e6d115da33d365da35b","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_AHlKwnc-ifpZpOR-sKTixFV_y-g-e.jpeg"},{"_id":"65420e6e115da33d365da35d","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_NarSJGP-ejbKOGn-FLKJeoM_s-B-s.jpeg"},{"_id":"65420e6e115da33d365da35e","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_hwxIstF-UmJJWDs-DdRhcCP_Q-P-Q.jpeg"},{"_id":"65420e6d115da33d365da35c","url":"https://cdn-media.choiceqr.com/prod-eat-udrevaka/template-gallery/thumbnail_OuMDyRQ-BFEFGhG-RiGuLaD_b-Q-D.jpeg"}]}]},"isTemplate":true},"promo":{"analytics":{"gtm":"GTM-PZWKGL83","ga":"G-GLR4LNVN81","fbPixel":"1127135891032294","fbDomainVerification":"210940111209588"},"seo":{"title":null,"description":null,"disallowIndexing":false},"promo":null,"og":{"title":null,"description":null,"image":null}},"languageContent":{"go_to_order_page":"Přejděte na stránku objednávek","back_to_menu":"Zpět","your_order":"Vaše objednávka","total":"Celkem","no_order_yet":"Zatím jste nic neobjednali","confirm_order":"Potvrdit objednávku","menu_search":"Vyhledávání v nabídce","work_time":"Otevírací doba","wifi":"WiFi","thank_you":"Děkujeme!","confirm":"Potvrdit","page_not_found":"Stránka nenalezena","label_type_spicy":"Pálivé","label_type_preparation":"{time}minut","confirm_order.comment":"Komentář pro podnik","waiter.will_come":"Obsluha za chvíli přijde.","payment.rate_service":"Prosím ohodnoťte kvalitu obsluhy","payment.rate_dishes":"Prosím ohodnoťte kvalitu podávaného jídla","payment.leave_message":"Zanechte nám komentář","payment.tripadviser":"Ohodnoťte nás na Tripadvisoru","payment.facebook":"Navštivte naši stránku na Facebooku","payment.send_feedback":"Zpětná vazba","payment.method":"Platební metoda","payment.by_cash":"Hotovost","payment.by_card":"Kartou na místě","payment.by_card_desc":"Kreditní karta nebo PayPass","payment.leave_tips":"Zanechat spropitné","menu.menu":"Nabídka","menu.order":"Moje objednávka","menu.waiter":"Zavolat obsluhu","menu_item.add_to_order":"Objednat","comment_plce":"Přidejte komentář","waiter.ask_bill":"Řekněte si o účet","your_table":"Vaše místo {table}","label_type_recommended":"Doporučujeme","hide":"Skrýt","waiter.call":"Zavolejte obsluhu","next":"Pokračovat","min_order":"minimální objednávka {value}","takeaway.when":"Na jaký čas chcete objednávku přichystat?","takeaway.when.as_soon":"Co nejdříve","takeaway.when.choose":"Zvolit čas","name":"Jméno","day.sunday":"Ne","day.monday":"Po","day.tuesday":"Út","day.wednesday":"St","day.thursday":"Čt","day.friday":"Pá","day.saturday":"So","month.january":"Leden","month.february":"Únor","month.march":"Březen","month.april":"Duben","month.may":"Květen","month.june":"Červen","month.july":"Červenec","month.august":"Srpen","month.september":"Září","month.october":"Říjen","month.november":"Listopad","month.december":"Prosinec","required_field":"Toto pole je povinné","fill_email_address":"Prosím zadejte emailovou adresu","incorrect_phone":"Nesprávné telefonní číslo","today":"Dnes","tomorrow":"Zítra","day.full.sunday":"Neděle","day.full.monday":"Pondělí","day.full.tuesday":"Úterý","day.full.wednesday":"Středa","day.full.thursday":"Čtvrtek","day.full.friday":"Pátek","day.full.saturday":"Sobota","fill_address":"Vyberte adresu z poskytnutého seznamu","allergens":"Alergeny","back":"Zpět","label_type_vegetarian":"Vegetariánské","label_type_gluten_free":"Bezlepkové","payment.instagram":"Navštivte nás na Instagramu","language":"Jazyk","facebook":"Facebook","instagram":"Instagram","tripadviser":"Tripadvisor","list_of_allergens":"Seznam alergenů","visit_us_on":"Navštivte nás na","allergens.1":"Obiloviny obsahující lepek","allergens.2":"Korýši","allergens.3":"Vejce","allergens.4":"Ryba","allergens.5":"Arašídy","allergens.6":"Sojové boby","allergens.7":"Mléko","allergens.8":"Oříšky","allergens.9":"Celer","allergens.10":"Hořčice","allergens.11":"Sezam","allergens.12":"Oxid siřičitý a síra","allergens.13":"Lupina","allergens.14":"Měkkýši","restaurant":"Restaurace","hotel":"Hotel","weight.grams":"g","open_pdf_menu":"Otevřete nabídku PDF","allergens.15":"Med","bakery":"Pekařství","bar":"Bar","cafe":"Kavárna","coffee_house":"Kavárna","bowling_alley":"Bowlingová dráha","visit_our_website":"Navštivte náš web","address":"Ulice a číslo domu","label_type_vegan":"Veganské","address_apart_number":"Číslo bytu","address_building":"Patro / byt","address_entrance":"Číslo vchodu","lang_search":"Vyhledávání jazyků","nothing_was_found":"Nic nebylo nalezeno ...","machine_translation":"Strojový překlad","human_translation":"Lidský překlad","help_us_improve":"Pomozte nám zlepšit produkt","help_us_improve_desc":"Zanechte zpětnou vazbu, máte-li stížnosti nebo návrhy týkající se kvality služeb. Náš tým kontroluje a zpracovává veškeré náměty.","feedback_name":"Jméno (nepovinné)","you_make_us_better":"Pomáháte nám se zlepšovat!","incorrect_email":"Nesprávná e-mailová adresa","useful_information":"Užitečné informace","menu_language":"Jazyk","tap_on_star":"Klepněte na hvězdičku","help_us_become_better":"Pomozte nám se zlepšovat","leave_contact":"Zanechte kontakt","rating_1":"Strašný","rating_2":"Špatný","rating_3":"Nedostatečný","rating_4":"Dobrý","rating_5":"Výborný","sorry_we_are_closed":"Omlouváme se, nyní máme zavřeno!","payment.online":"Kartou online","failed":"Neúspěšný","unexpected_error":"Došlo k neočekávané chybě","here":"Zde","delivery":"Rozvoz jídla","takeaway":"Vyzvednutí","close":"Storno","deliveryToAddressNotAvailable":"Rozvoz na Vaší adresu bohužel není dostupný, vyberte prosím jinou nebo zvolte osobní vyzvednutí.","deliveryNotAvailable":"Objednávku rozvozu není možné uskutečnit","install_pwa_app_button":"Nainstalovat aplikaci","install_pwa_app_title":"Přidat aplikaci na domovskou stránku","install_pwa_app_description":"Vytvořte ikonu aplikace na domovské stránce, abyste si mohli kdykoliv objednat Vaše oblíbené menu","install_pwa_app_description_ios":"Pro přidání aplikace na Vaší domovskou stránku stiskněte {iconShare} a poté \\"přidat na domovskou stránku\\"","menu_description":"Popis","venue_information":"Informace o podniku","items":"Objednávka","empty_cart":"Položky nevybrány","clarify_delivery_fee_manager":"Kontaktovat manažera ohledně podmínek rozvozu","yes":"Ano","no":"Ne","maturity_ask":"Je vám více než {years} let?","maturity_ask_description":"Dodržujeme omezení prodeje alkoholických nápojů.","our_places":"Naše podniky","change":"změna podniku","new":"Nové","costOfPackaging":"Náklady na balení","delivery_price":"Poplatek za doručení","aboutCompany":"O společnosti","termsOfUse":"Podmínky použití","privacyPolicy":"Zásady ochrany osobních údajů","meters":"metrů","km":"km","package":"Balení","deliveryNotAllowedOrderAmount":"{minOrderAmount}. Ještě si k tomu něco přihoďte!","label_middle_spicy":"Středně pikantní","weightType.g":"g","weightType.kg":"kg","weightType.mm":"mm","weightType.ml":"ml","weightType.m":"m","weightType.l":"l","weightType.oz":"oz","kcal":"Kilokalorií","cutlery.title":"Potřebuji příbor","cutlery.description.with":"Požádáme restauraci o příbory","cutlery.description.without":"Pomozte nám minimalizovat odpad vyžádáním příboru pouze pokud jej opravdu potřebujete.","dine_in":"Zde","showMore":"Ukázat více","payment.wallet":"Wallet","payment.wallet_ios":"Apple Pay","payment.by":"Zaplatit pomocí","payment.wallet_android":"Google Pay","confirmation.useSavedData.label":"Použít uložená data","where_will_you_it":"Kde si chcete pochutnat?","no_street_number_error":"Doplňte prosím číslo budovy","cannot_get_point_error":"Doplňte prosím správnou adresu","understandable":"Rozumím","table":"Místo","not_selected":"Nevybráno","select":"Vybrat","select_your_table":"Vyberte místo","change_1":"Změnit","invalid.scheduled.sections":"Bohužel v době vytvoření Vaší objednávky bylo některé nádobí nedostupné a bylo odstraněno z Vašeho košíku","company.delivery.openHours.false":"Omlouváme se, ale nyní není možné objednat rozvoz","company.current.openHours.false":"Omlouváme se, ale nyní nepřijímáme objednávky","check_will_sent_email":"Účtenka Vám bude zaslána na emailovou adresu","payment.hotel_room":"Na pokoj","incorrect_phone_number":"Prosím, zadejte správné telefonní číslo.","order_status.order":"Objednávka","order_status.widget.completed":"Hotovo","order_status.widget.cancelled":"Zrušeno","order_status.widget.follow":"Otevřít","order_status.widget.orders":"Objednávky","order_status.widget.dishes":"Položky","order_status.step.accepting":"Schvalování","order_status.step.preparing":"Příprava","order_status.step.delivering":"Doručování","order_status.accepting_description":"Objednávka byla úspěšně odeslána a čeká na potvrzení restaurací","order_status.preparing_description":"Vaše objednávka byla přijata a bude hotova za {m} min","order_status.delivering_description":"Vaše objednávka byla připravena a předána kurýrovi.","order_status.completed":"Objednávka je připravena.","order_status.cancelled":"Vaše objednávka byla zrušena.","order_status.refund_soon":"Platba bude co nejdříve vrácena! ","order_status.refund_problem_info":"V případě problému s vrácenou platbou, prosím kontaktujte","order_status.delivery_rate":"Prosím ohodnoťte kvalitu služby","order_status.feedback_comment":"Komentář","order_status.feedback_done":"Zanechat zpětnou vazbu","order_status.price.delivery":"Doručení:","order_status.price.order_total":"Celková hodnota:","order_status.delivery_details":"Podrobnosti objednávky","order_status.delivery_details.address":"Adresa:","order_status.delivery_details.order_num":"Číslo objednávky:","confirm_order.order_num_was_received":"Vaše objednávka {num} byla obdržena.","order_status.step.cancelled":"Zrušeno","order_status.step.completed":"Hotovo","order_status.delivery_details.table":"Stůl:","order_status.delivery_details.delivery_time":"Čas doručení:","order_status.delivery_details.cutlery":"Příbory","order_status.delivery_details.persons":"Osoby: {persons}","order_status.delivery_details.comment":"Komentář:","order_status.delivery_details.address_apartment":"Byt","order_status.delivery_details.address_comment":"Poznámka k adrese:","order_status.price.discount":"Sleva:","order_status.price.tips":"Spropitné:","order_status.order_details":"Podrobnosti objednávky","order_status.widget.feedback":"Odeslat zpětnou vazbu","inside_order":"Ke stolu","takeaway_order":"Vyzvednutí","delivery_order":"Rozvoz","order_accepting":"Čeká na přijmutí","order_preparing":"Příprava","order_delivering":"Doručování objednávky","order_completed":"Připravena","order_canceled":"Objednávka zrušena","cart_items_text":"{items} kusů za {price}","cart_items_text_2_4":"{items} kusů za {price}","cart_item_text":"1 kus za {price}","order_status.takeaway.completed":"Objednávka je připravena","order_status.delivery.completed":"Objednávka je hotová a byla předána kurýrovi k doručení.","delete_order":"Smazat objednávku","we_recommend":"Doporučujeme","add_to_wishlist":"Přidat na wishlist","table_bill":"Objednávka na stůl {name}","to_payment":"K platbě","order_not_found":"Objednávka nenalezena","payment_verified":"Platba je ověřena","payment_process":"Zpracování platby","payment_confirmation_awaiting":"Čekáme na potvrzení platby","pos_order_not_found":"Objednávka nenalezena","pos_order_invalid_menu_items":"Počet nezaplacených položek se změnil. Prosím, zkuste znovu.","pos_order_min_order_amount":"Hodnota objednávky nedosahuje minimální hodnoty pro objednání.","try_again":"Zkusit znovu","pay_the_bill":"Zaplatit","menu":"Nabídka","table_reservation":"Rezervace","time":"Čas","contacts":"Kontakt","number_of_people":"Počet osob","we_will_confirm_your_reservation":"Vaši rezervaci co nejdříve potvrdíme","your_name":"Vaše jméno","reserve_table":"Rezervace","error":"Error!","ok":"Ok","booking_comment":"Poznámky nebo zvláštní požadavky ","booking_request_sent":"Odeslán!","booking_request_confirmed":"Potvrzen!","booking_we_will_check":"Na Vaši rezervaci zareagujeme \u003cb\u003eco nejdříve\u003c/b\u003e a upozorníme Vás e-mailem nebo Vám zavoláme.","booking_request_details":"Detaily požadavku","booking_date":"Datum","booking_person_count":"Počet osob","booking_customer_comment":"Komentář","booking_to_cancel_text":"Pro zrušení nebo změnu Vaší rezervace nás prosím kontaktujte na tel. čísle {phone}","booking_we_are_waiting":"Budeme se na Vás těšit","booking_we_are_sorry":"Omlouváme se, Vaše žádost o rezervaci nemohla být přijata.","booking_cancelled":"Zrušeno","reserves":"Rezervace","email":"E-mailem","phone":"Telefon","items_count_price":"{count} položek, {price}","bill_for_this_table":"Účet pro tento stůl","has_bills":"Počet účtů: {count}","bills_on":"Účet na jméno: {name}","no_bills_text":"Zobrazí se účet, který můžete zaplatit bez pomoci obsluhy","actual_address":"Skutečná adresa","requisites":"Náležitosti","legal_address":"Sídlo firmy","tin_number":"Daňové identifikační číslo","payment_methods":"Platební metody","bank_card":"Bankovní karta","transfer_process":"Platba probíhá","purchase_returns":"Vrácení částky","order_takeaway":"Jídlo s sebou","order_delivery":"Rozvoz","chain.modal.delivery.address":"Vyplňte adresu pro doručení","your_courier":"Váš kurýr","visitDuration":"Délka návštěvy","hour":"h","hours":"h","hours_2":"h","minute":"min","minutes":"min","minutes_2":"min","booking_outside_working_message":"Nyní máme zavřeno, Vaši rezervaci potvrdíme nejdříve \\nv {day} v {time}. \\nUpozorníme Vás emailem nebo Vám zavoláme.","booking_reservation_not_work":"Rezervovat můžete v {day} v \\n{time}","booking_during_non_working":"Omlouváme se, funkce rezervací mimo otevírací dobu není dostupná.","browse_menu":"Prohlédnout menu","booking.cancelReason.comment":"Komentář","booking.company.disabled":"Omlouváme se, rezervace nyní přijímáme pouze telefonicky.","booking.invalid.create":"Chyba, prosím načtěte stránku znovu.","booking.cannot.create":"Chyba, prosím načtěte stránku znovu.","booking.dateTime.in.past":"Chyba, prosím načtěte stránku znovu.","booking.company.closed":"Omlouváme se, máme zavřeno.","booking.create.maxBookingDate":"Datum rezervace není k dispozici.","booking.create.minBookingTime":"Je nám líto, vybrané období není k dispozici pro rezervaci.","booking.create.bookingTimeWithCloseInterval":"Je nám líto, vybrané období není k dispozici pro rezervaci.","period_expired.title":"Služba je momentálně pozastavena, objednávky brzy spustíme.","period_expired.description":"Kontaktujte nás prosím telefonicky nebo e-mailem.","place_not_found":"Tento odkaz neexistuje","payment.p24":"Przelewy24","use_promocode":"Použít promo kód","ente_code":"Zadejte kód","code_incorrect":"Kód není platný nebo již vypršel","use_code":"Použijte kód","has_promo":"Mám promo kód","use_promo":"Použijte kód","order_status.price.promocode":"Promo kód","promocode.invalid":"Promo kód není platný","promocode.invactive":"Promo kód je neaktivní","booking.create.blocked":"Zvolený termín není pro online rezervace k dispozici, zavolejte prosím restauraci a ověřte si dostupnost","auth.next":"Další","auth.bonuses.title":"Získejte bonusy, uložte platební metody a adresy","auth.login":"Přihlášení","auth.create_acc":"Vytvoření nového účtu","auth.email_verification":"Ověření e-mailu","auth.code_email":"Zadejte kód, který jsme vám poslali na adresu {mail}.","auth.password":"Heslo","auth.create_password":"Vytvořte heslo","auth.name.title":"Vítejte na osobním profilu","auth.name":"Jméno","auth.name.desc":"Jak Vás můžeme oslovovat?","auth.your_email":"Vaše e-mailová adresa","you_can_pre_order":"Můžete si ale předobjednat.","restaurant_will_start_working":"Podnik bude otevřen \u003cb\u003e{day} v {time}\u003c/b\u003e","order_status.accepting_pre_order_description":"Vaše objednávka byla {isPaid} a bude zpracována \u003cb\u003e {day} v {time}!\u003c/b\u003e","takeaway_are_closed":"Vyzvednutí není k dispozici!","delivery_are_closed":"Doručení není k dispozici!","see_on_map":"Zobrazit na mapě","dial":"Zavolat","explore_entire_menu":"Prozkoumat celou nabídku","see_all_menu":"Zobrazit celou nabídku","home":"Hlavní stránka","reservation":"Rezervace","contactDetails":"Kontaktní údaje","weInSocial":"Jsme na sociálních sitích","onMap":"Mapa","getDirections":"Navigovat","auth.login_to_acc":"Přihlásit se do účtu","auth.login_to":"Přihlášení pro {mail}","auth.enter_password":"Heslo","auth.send_me_code_email":"Zaslat kód na email","auth.forgot_password":"Zapomněli jste heslo?","auth.restore":"Obnovit","auth.how_call_you":"Jak Vás můžeme kontaktovat?","auth.phone.description":"Zadejte telefonní číslo pro budoucí potvrzení objednávky","auth.birthday.description":"Abychom věděli kdy Vás obdarovat","day":"Den","month":"Měsíc","year":"Rok","auth.create_password_for":"Vytvořit nové heslo pro","auth.new_password":"Nové heslo","auth.save_and_login":"Uložit a přihlásit se","auth.password_recovery":"Obnovení hesla","auth.password_recovery_for":"Obnovení hesla pro","auth.password_recovery.description":"Pošleme Vám link pro obnovu hesla na email","auth.send_recovery_mail":"Poslat email pro obnovení hesla","auth.letter_sent":"Email odeslán","auth.no_letter":"Žádný email?","auth.send_again_via":"Poslat znovu na","auth.send_again":"Poslat znovu","profile.your_points":"Vaše body","profile.orders_history":"Historie objednávek","profile.my_addresses":"Moje adresy","profile.payment_methods":"Platební metody","profile.settings":"Nastavení \u0026 Osobní údaje","profile.add_new_address":"Přidat novou adresu","profile.saved_addresses":"Uložit adresy","profile.address_name":"Název adresy","profile.address_comment":"Komentář k adrese","profile.set_default_address":"Nastavit jako výchozí adresu","cancel":"Zrušit","save_changes":"Uložit změny","bonus_using":"Využít bonusy","settings.photo_and_name":"Foto a jméno","settings.birthday":"Datum narození","settings.email_address":"E-mailo","settings.change_password":"Změnit heslo","payment.bill":"Přidat na účet","booking.notWork.title":"Rezervace stolů momentálně nejsou možné","booking.notWork.desc":"Pokud si chcete rezervovat stůl, kontaktujte nás prosím na telefonním čísle","links":"Odkazy","dish_name":"Název položky","menu.search.not_found":"Aktuálně není obsah nabídky dostupný, zkuste to prosím později.","add":"Přidat","required":"Povinné","select_required_options":"Zvolte povinné možnosti","choose_up_to_items":"Vyberte maximálně {number} doplňkových možností","maximum_of_reached":"Vybráno maximum {number} možností","choose_additional_items":"Vyberte doplňkové možnosti","add_item_with_other_options":"Přidat s jinými možnostmi","selected_options":"Vybrané možnosti","search":"Hledat","check_order":"Zkontrolovat objednávku","to_order":"K objednávce","booking.notFound":"Rezervace nenalezena","delivery_method":"Způsob doručení","booking_request_expired":"Platnost požadavku vypršela!","template.dishes.title":"Doporučujeme","order.notFound":"Objednávka nenalezena","error_payment_descr":"Z nějakého důvodu jsme neobdrželi platbu.","success_payment_descr":"Vaše objednávka byla úspěšně zaplacena","delivery_address":"Adresa doručení","cutlery.need.title":"Potřebujete příbory?","menu_item.update":"Aktualizovat objednávku","token.invalid":"Nesprávný token","booking.company.error":"V rezervaci došlo k chybě","photo_gallery.title":"Naše fotky","see_menu":"Zobrazit nabídku","booking.paid.inform":"Rezervace je možná po uhrazení zálohy ({amount} {currency}), tato částka bude poté odečtena z Vaší útraty v restauraci.","booking.paid.status_msg":"{Obdrželi jsme vaši zálohu.} V případě zrušení rezervace ze strany restaurace budou vaše finanční prostředky okamžitě vráceny na kartu.","deposit":"Záloha","booking.paid.cancel_msg":"Záloha vám bude vrácena na kartu","booking.paid.error_msg":"Při platbě došlo k chybě. Peníze z vaší karty se nám nepodařilo strhnout.","more_recommendations":"Další doporučení","booking.paid.btn_pay":"Zaplatit depozit - {amount} {currency}","pay_bill_here_title":"Zaplaťte svůj účet zde!","pay_bill_here_description":"Po objednání můžete zaplatit a nečekat na obsluhu.","item_sold_out":"Vyprodáno","item_unavailable_now":"Nyní není k dispozici","available_options":"Dostupné možnosti","available_options.show":"Zobrazit možnosti","available_options.hide":"Skrýt možnosti","edit_options":"Upravit","accepted":"přijato","paid":"zaplaceno","booking_time_not_available_label":"Vyberte jiný den","option_unavailable":"Nedostupné","non_working_day":"Nepracovní den","to_institution":"Navštívit","add_more_products":"Přidat další produkty","promo_greater_label":"Váš promo kód obsahuje částku vyšší než objednávka.","promo_greater_descr":"Nevyužitý zbytek shoří","cookies.we_use":"Tento web používá soubory cookie.","cookies.short":"Některé z nich jsou pro využívání našich služeb povinné.","cookies.long":"Některé z nich jsou pro využívání našich služeb povinné. Pokud kliknete na tlačítko \\"Přijmout všechny soubory cookie\\", povolíte také společnosti ChoiceQR a jejím partnerům používat soubory cookie k přizpůsobení obsahu vašim preferencím. Pokud kliknete na \\"Ponechat pouze povinné\\", nebudeme soubory cookie používat ke shromažďování dalších údajů, abychom přizpůsobili obsah vašim preferencím.","cookies.accept_required":"Ponechte pouze ty povinné","cookies.accept_all":"Přijmout všechny soubory cookie","cookies.more":"Přečtěte si více","continue_without_code":"Pokračovat bez promo kódu","min_order_amount_title_modal":"Pro využití {promoName} kódu, musí být objednávka minimálně v hodnotě {minValue}.","from_label":"Od","favorites.limit":"Maximálně {count} oblíbených položek","favorites.title":"Vaše oblíbené","favorites.empty_list":"Žádné oblíbené","undo":"Zrušit","favorites.undo_message":"Odstraněno z oblíbených položek","favorites.unavailable.delivery":"Není k dispozici pro rozvoz jídla","favorites.unavailable.takeaway":"Není k dispozici pro vyzvednutí","favorites.unavailable.simple":"Není k dispozici pro Zde","search.title":"Prohledat menu","search.min_symbols":"Zadejte prosím minimálně 2 znaky","search.title.list":"Výsledek vyhledávání:","section.unavailable.msg1":"Tato sekce není momentálně k dispozici.","section.unavailable.msg2":"I tak si ji ale můžete prohlédnout.","section.unavailable.msg3":"Tato sekce bude k dispozici v tomto rozmezí: {labelOfDate}, od {from} do {till}","courier_label":"Kurýr","call_label":"Přivolat obsluhu","share_item.copied":"Odkaz zkopírován!","other_sections":"Ostatní sekce","go_to_top":"Přejít na začátek","order_error_item":"Některé položky bohužel nebyly v době odeslání objednávky k dispozici, a proto byly z nákupního košíku odstraněny.","order_error_rest":"Bohužel v době vytváření objednávky došlo ke změně ceny nebo doplnění některých položek, takže byly z nákupního košíku odstraněny. Můžete se vrátit do nabídky a znovu je přidat.","back_to_check_order":"U koše","menu_structure.additions":"Doplňky","favorites":"Moje oblíbené","more":"Více","noActiveMenu":"Omlouváme se, ale v současné době není k dispozici žádná aktivní nabídka.","maximum_characters":"Maximální délka je {length} znaků","menu_available":"Dostupné menu","menu_available.from_to":"od {from} do {to}","tip.required_minimum":"Minimální výše spropitného","addition.minimum":"Vyberte dodatek (minimum: {minimum} ks.)","addition.maximum":"Vyberte dodatek (maximum: {maximum} ks.)","addition.minimum.maximum":"Vyberte dodatek (minimálně: {minimum} Vyberte dodatek, maximálně {maximum} Vyberte dodatek)","booking.paid.inform.perPerson":"Rezervace je možná po uhrazení zálohy ({amount} {currency} na osobu).","address_floor":"Podlaží","deliver_to_apartment":"Doručení do bytu","company.location.openHours.false":"Provozovna je zavřená, nemůžeme přijímat objednávky","location.feature.disabled":"V tuto chvíli nemůžeme vaši objednávku přijmout","pay":"Potvrďte","order_payment":"Platba za objednávku","invoice.company.title":"Faktura pro společnost","invoice.company.desc":"Daňové identifikační číslo (IČO) je nutné pro fakturaci společnosti","invoice.company.nip":"IČO","invoice.company.nip.placeholder":"e.g.","processing.please_wait":"Počkejte prosím","processing.waiting":"Čekáme na potvrzení platby.","processing.few_minutes":"To obvykle trvá několik minut.","payment_error.try_another_method":"Chyba platby! Zkuste prosím jiný způsob platby.","feedback.help_us":"Pomozte nám zlepšit se!","feedback.suggestions":"Pokud máte nějaké stížnosti nebo připomínky k pokrmům a službám, zanechte nám prosím zpětnou vazbu.","feedback.thanks.title":"Děkujeme za zpětnou vazbu! 😊","feedback.thanks.description":"Děláte nás lepšími!","service":"Služba","feedback.leave_contact":"Zanechte prosím své kontaktní údaje","feedback.also_rate_us":"Také nás ohodnoťte","feedback.tap_on_stars":"Klepnutím na hvězdičku ohodnoťte","feedback.enter_phone":"Zadejte prosím své telefonní číslo","booking.paid.minPersonsValue":"Rezervace stolu pro více než {personCount} osob vyžaduje zálohu.  ({amount} {currency}).","booking_request_draft":"Koncept","booking_request_paying":"Placení","booking.paid.minPersonsValue.perPerson":"Rezervace stolu pro více než {personCount} osob vyžaduje zálohu.  ({amount} {currency} na osobu).","booking.preferred.area":"Vyberte preferovanou oblast","slider_of":"z","register.error":"Tuto e-mailovou adresu se nepodařilo zaregistrovat, zkuste to prosím později","register.error.phone":"Telefonní číslo nelze uložit","auth.no_sms":"Žádné SMS zprávy?","auth.code.notValid":"Kód není platný, zkontrolujte, zda jste zadali 4 číslice.","auth.code.wrong":"Kód je neplatný","auth.skip":"Přeskočit","auth.password.error":"Heslo nelze nastavit, zkuste to prosím znovu","auth.password.notValid":"Heslo je nesprávné","or":"nebo","auth.recovery.error.code":"Na danou e-mailovou adresu se nepodařilo odeslat kód pro obnovení, zkuste to prosím později.","profile":"Profil","change.error.name":"Při změně jména došlo k chybě, zkuste to prosím později.","change.error.email":"Při změně e-mailu došlo k chybě, zkuste to prosím později.","auth.logout":"Odhlásit se","profile.orders.empty.title":"Seznam je prázdný","profile.orders.empty.description":"Objednejte si něco dobrého z Vašeho oblíbeného podniku.","poweredBy":"Powered by","booking.exceedRate":"Váš požadavek na rezervaci není dočasně k dispozici, jelikož jste v krátkém časovém období zadali příliš mnoho požadavků. Pokud máte zájem o rezervaci, kontaktujte nás prosím na telefonním čísle restaurace. Omlouváme se za nepříjemnosti.","cookies.manage_your_privacy":"Správa ochrany osobních údajů","cookiePolicy":"Zásady používání souborů cookie","cookies.configurate":"Nakonfigurujte","cookies.we_care_privacy":"Dbáme na vaše soukromí","cookies.description.lang":"ento soubor cookie si pamatuje aktuální jazyk uživatele.","cookies.description.mguid":"Tento soubor cookie slouží k identifikaci relace klienta","cookies.description.language":"Tento soubor cookie si pamatuje aktuální jazyk uživatele.","cookies.description.autoLang":"Tento soubor cookie se používá k určení, zda je aktuální jazyk původní.","cookies.description.cookieSettings":"Tento soubor cookie se používá k zajištění toho, abychom si zapamatovali volbu uživatele, které soubory cookie chceme ponechat.","days":"dny","cookies.name":"Název","cookies.description":"Popis","cookies.expires":"Platnost končí","booking_cancelled_by_client":"Vaše rezervace byla úspěšně zrušena","cancel_reservation":"Zrušit rezervaci","booking.cancel.no_later_24_hours":"Nejpozději 24 hodin před návštěvou","booking.cancel.contact_us":"Chcete-li zrušit rezervaci, kontaktujte nás","booking.cancel.confirm_please":"{Prosím, potvrďte}, že chcete zrušit svou rezervaci.","booking.deposit_will_returned":"Záloha bude vrácena na kartu","booking.cancel.confirm":"Potvrzení zrušení","delivery.showMyCourier":"Ukaž, kde je můj kurýr","delivery.whereMyCourier":"Kde je můj kurýr","places_for_delivery":"Restaurace pro rozvoz","places_for_takeaway":"Restaurace Takeaway","specific_address":"Specifická adresa","use_my_location":"Použijte mou polohu","enter_address":"Zadejte adresu","enter_address.description.delivery":"Zadejte svou adresu nebo sdílejte svou polohu a my vám zobrazíme seznam nejbližších restaurací, které k vám doručují.","share_location":"Sdílet mou polohu","none_locations":"Je nám líto, ale žádná z našich restaurací nedoručuje jídlo na vaši adresu.","cookies.term_of_use":"Podmínky pro soubory cookie","payBtn.allowTerms.text":"Potvrzujete, že jste se seznámili s obsahem těchto podmínek a zásad ochrany osobních údajů.","geolocation.error":"Odmítli jste žádost o poskytnutí geolokace pro naše stránky.","chain.modal.takeaway.search.placeholder":"Zde zadejte adresu a my seřadíme místa podle vzdálenosti od vás.","newsletter.title":"Nastavení newsletteru","newsletter.title_for":"Nastavení newsletteru pro","newsletter.marketing_notice":"Poznámky pro marketing","vat_id":"VAT ID","email.already.used":"Tento e-mail je již používán","order.list.active":"Aktivní objednávky","order.list.history":"Nedávno dokončené","order.list.completed":"Historie objednávek","done":"Hotovo","order.pick":"Objednávku si můžete vyzvednout","order.rate":"Ohodnoťte tuto objednávku","order.details":"Podrobnosti k objednávce","confirm_order.allowTerms":"Souhlasím s \u003ca href=\\"{termsURL}\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"\u003e podmínkami použití \u003c/a\u003e a \u003ca href={privacyURL} target=\\"_blank\\" rel=\\"noopener noreferrer\\"\u003e zásadami ochrany osobních údajů *\u003c/a\u003e.","confirm_order.allowMarketing":"Dostat slevy, nabídky a další aktualizace prostřednictvím e-mailu, SMS.","confirm_order.allowMarketingMore":"Souhlasím se zasíláním reklamního obsahu od {name} elektronicky (e-mail and SMS/MMS), včetně informací o slevách, produktech a službách od {name}.\\n","confirm_order.termsAdditional":"Vaše osobní data ve formě {name}{place} budou uložena zejména za účelem vyřízení Vaší objednávky, oprávněných zájmů správce ve formě komunikace s Vámi, pro statistické a analytické účely správce a v případě, že jste udělili souhlas, také za účelem marketingu. Souhlas je dobrovolný a lze jej kdykoli odvolat (což nemá vliv na zákonnost předchozího zpracování). Více informací o zpracování osobních údajů naleznete v Zásadách ochrany osobních údajů.\\n","cookiesSettings.description":"Při návštěvě našich webových stránek vás prohlížeč požádá o povolení, aby mohl uložit do vašeho zařízení soubor dat (textový soubor) nazývaný cookie, aby si založit informace o vás, vašich preferencích nebo vašem zařízení. Tyto informace vás obvykle přímo neidentifikují, ale mohou vám poskytnout lepší zážitek z používání webu. Protože respektujeme vaše právo na soukromí, můžete se rozhodnout nepoužívat určité typy souborů cookie. Kliknutím na nadpisy různých kategorií se dozvíte více a změníte výchozí nastavení. Blokování některých typů souborů cookie však může ovlivnit váš fungování webových stránek a služeb, které vám můžeme jinak nabídnout.","cookiesSettings.necessary":"Nezbytné","cookiesSettings.alwaysActive":"VŽDY AKTIVNÍ","cookiesSettings.necessaryDescription":"Tyto soubory cookie jsou nezbytné pro fungování webových stránek a nelze je zablokovat. Svůj prohlížeč můžete nastavit tak, aby blokoval nebo upozorňoval na tyto soubory cookie, ale to způsobí, že některé části webu nebudou plně funkční.","cookiesSettings.essentialCookies":"Nezbytné soubory cookie","cookiesSettings.adyenDescription":"Ke zpracování plateb na našich stránkách používáme platební bránu Adyen. Adyen je globální služba umožňující finanční transakce. Adyen poskytuje zabezpečenou platební platformu, která umožňuje přijímat od zákazníků různé platební metody, včetně kreditních karet, debetních karet a digitálních peněženek. Více informací o službě naleznete na stránce společnosti - \u003ca href=\\"https://www.adyen.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003eadyen.com\u003c/a\u003e.\u003cbr /\u003e\u003cspan\u003eAdyen také používá soubory cookie\u003c/span\u003e a podobné technologie ke zlepšení svých služeb a přizpůsobení vašeho zážitku. Tyto soubory cookie a technologie mohou shromažďovat informace o vašem zařízení, prohlížeči a způsobech používání. Další informace o tom, jak Adyen používá soubory cookie a technologie, naleznete v jejich Zásadách používání souborů cookie \u003ca href=\\"https://www.adyen.com/policies-and-disclaimer/cookie-policy\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003ezde\u003c/a\u003e.\u003cbr /\u003eKromě toho může Adyen sdílet některé informace o vás s ostatními stranami, jako jsou agentury pro prevenci podvodů, aby se bránil před podvodnými transakcemi.\u003cbr /\u003eDalší informace o postupech zpracování údajů společností Adyen a vašich právech, jakožto subjektu údajů naleznete v jejích Zásadách ochrany osobních údajů \u003ca href=\\"https://www.adyen.com/policies-and-disclaimer/privacy-policy\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003ezde\u003c/a\u003e","cookiesSettings.googleMapsDescription":"Google Maps API je mapová služba poskytovaná společností Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Používáme Google Maps API, abyste mohli na mapě určit místo doručení vaší objednávky. Při používání Google Maps mohou být informace o vašem používání této webové stránky (včetně vaší IP adresy) přeneseny na server Google v USA a zde také uloženy. Následující odkazy obsahují informace o \u003ca href=\\"https://policies.google.com/privacy\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003eochraně dat\u003c/a\u003e a \u003ca href=\\"https://www.google.com/help/terms_maps/\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003esmluvních podmínkách\u003c/a\u003e služby Google Maps.","cookiesSettings.analyticsCookies":"Soubory Analytics Cookies","cookiesSettings.analyticsCookiesDescription":"Tyto soubory cookie se používají k poskytování statistických informací běžně používaných pro měření výkonu a zlepšování webu. Někdy analytické služby poskytují třetí strany a specializovaný software, který může používat vlastní soubory cookie třetích stran. Softwarové služby třetích stran vložené na webové stránky mohou využívat analytické služby k měření účinnosti služby.","cookiesSettings.googleAnalytics":"Google Analytics","cookiesSettings.googleAnalyticsDescription":"Google Analytics je služba webové analýzy poskytovaná společností Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Google Analytics používá cookies, aby umožnilo analýzu používání našich webových stránek. Informace generované souborem cookie o vašem používání této webové stránky se obvykle přenášejí na server Google v USA a tam se ukládají. Před provedením analýzy však Google zkrátí IP adresu uživatele. Kromě toho mohou údaje přenášené do Google Ads obsahovat hashovanou e-mailovou adresu uživatele a také údaje o využití z interních analýz. Soubory cookie uložené službou Google Analytics se vymažou nejpozději po 14 měsících. Následující odkazy poskytují informace o \u003ca href=\\"https://policies.google.com/privacy\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003eochraně údajů\u003c/a\u003e a \u003ca href=\\"https://marketingplatform.google.com/about/analytics/terms/de/\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003epodmínkách používání\u003c/a\u003e v Google Analytics.","cookiesSettings.googleTagManager":"Google Tag Manager","cookiesSettings.googleTagManagerDescription":"K zobrazení partnerských služeb na našich webových stránkách používáme službu „Google Tag Manager“, produkt společnosti Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (dále jen „Google“). Touto službou zajišťujeme, aby byl souhlas dodržen pro vás jako uživatele, a proto jej nelze deaktivovat. Samotná služba neshromažďuje nezávisle žádná jiná data než ta, která jsou technicky nezbytná pro doručení (včetně vaší IP adresy) a jsou přenášena na server Google v USA a tam ukládána. Další informace naleznete v \u003ca href=\\"https://www.google.de/analytics/terms/tag-manager/\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003epodmínkách\u003c/a\u003e a \u003ca href=\\"https://policies.google.com/privacy?hl=de\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003ezásadách ochrany osobních údajů\u003c/a\u003e Správce značek Google.","cookiesSettings.googleMaps":"Google Maps","cookiesSettings.facebook":"Facebook","cookiesSettings.facebookDescription":"Facebook Pixel používáme na našich webových stránkách k měření efektivity našich reklamních kampaní na Facebooku a k lepšímu pochopení toho, jak jsou naše webové stránky používány. Facebook Pixel je malý kousek kódu, který nám umožňuje sledovat chování uživatelů na našem webu, jako je zobrazení stránek, nákupy a další interakce. \u003cbr /\u003e Pomocí Facebook Pixel můžeme optimalizovat naše Facebook reklamy, abychom oslovili správné publikum, zlepšili relevanci našich reklam a změřili výsledky našich kampaní. To nám pomáhá dodávat našim zákazníkům personalizovanější a relevantnější obsah a zlepšovat naši celkovou marketingovou strategii. \u003cbr /\u003e Informace shromážděné prostřednictvím Facebook Pixel jsou anonymní a používají se pouze pro marketingové a analytické účely. Nejsou sdíleny s žádnými třetími stranami ani používány pro žádné jiné účely. Další informace o Facebook Pixel a o tom, jak Facebook používá data pro reklamní účely, naleznete v Zásadách údajů Facebooku \u003ca href=\\"https://www.facebook.com/about/privacy/previous\\" target=\\"_blank\\" rel=\\"noreferrer\\"\u003ezde\u003c/a\u003e.","confirm_order.termsAdditional.thaiwok":"se sídlem ve Varšavě","shortedList.showLess":"Ukaž méně","shortedList.showMore":"Zobrazit {count} dalších položek\\n","preorder.modal.addingInfo":"Po přidání položky do košíku bude nejbližší možný čas doručení v","to_label":"to","preorder.modal.added.title":"Již jste přidali položku z jiného časově omezeného menu, objednávku bohužel nelze dokončit.","preorder.modal.added.info":"Pokud si přejete objednat více položek z různých časově omezených menu, doporučujeme si objednat každou z nich zvlášť.","preorder.section.banner":"Předpokládaný čas doručení je omezený vzhledem k časovému nastavení dané sekce {sectionName}","feedbacks.contactWithMe.title":"Kontaktujte mě","feedbacks.contactWithMe.description":"Kde byste chtěli pokračovat v rozhovoru?","feedbacks.openChat":"Otevřít chat","delivery_start_working.withDelay":"Odhadovaný čas doručení Vaší objednávky je: {day} v ~{time}","takeaway_start_working.withDelay":"Odhadovaný čas pro vyzvednutí Vaší objednávky je: {day} v ~{time}","preorders.possibleWait.title":"Čas přípravy objednávky může zabrat o něco delší dobu","preorders.possibleWait.description":"Předpokládaný čas doručení je odvozený od začátku otevírací doby podniku. Pokud Vaše objednávka obsahuje větší množství položek nebo je Vaše adresa ve větší vzdálenosti, může celý proces trvat o něco déle.","cant.find.address":"Nemůžete dohledat adresu?","cant.find.address.desc":"Můžete vybrat místo přímo na mapě","select_location":"Vybrat polohu","confirm_location":"Potvrdit","show":"ukázat","enter_address.description.delivery.no_geo":"Zadejte svou adresu, objevujte nejbližší podniky a objednejte si jídlo až k Vašim dveřím","error.map_picker.distance.not.valid":"Vybraná adresa je příliš daleko od podniku","our_places.all":"Všechno","our_places.nearest":"Nejbližší","map_picker.go.home.address":"Přejít na adresu podniku","confirm_order.terms.privacy":"Kliknutím na \u003cspan\u003e{payByText}\u003c/span\u003e potvrzujete obsah košíku a zadanými údaji, zde jsou naše \u003ca href={privacyLink} target='_blank'\u003eformulář o soukromí\u003c/a\u003e a \u003ca href={termsLink} target='_blank'\u003epodmínky použití\u003c/a\u003e.","cookies.text":"Používáme soubory cookies pro co nejlepší zážitek při využívání našich služeb. Své nastavení můžete kdykoliv později upravit. Pro souhlas s používání všech souborů cookies, klikněte na Přijmout.","cookies.manage":"Upravit","cookies.accept":"Přijmout","cookies.confirm":"Potvrdit a pokračovat","payment.with":"Zaplatit pomocí","section_order_not_avalible":"Ano = Otevíráme v {day} {time}","loyalty.banner.checkout":"{login} pro proměnu {sum} jako bonusové body ({bonusPoints}) z této objednávky","loyalty.banner.created":"Mohli jste získat z {sum} celkem {bonusPoints} bodů za tuto objednávku, pokud byste se registrovali.\\n","loyalty.banner.created.description":"Přihlašte se a nepřicházejte už o bonusové body z Vašich dalších objednávek.","loyalty.use":"Využít","loyalty.yourBalance":"Váš zůstatek","area_start_working":"Začneme pracovat \u003cb\u003e{day} v {time}\u003c/b\u003e","loyalty.modal.howMuchToUse":"Kolik bodů využít?","loyalty.modal.error":"Chyba při pokusu o použití bonusových bodů","loyalty.bonusEarned":"{bonusPoints} získány","booking.checkout.warning":"Byli jste přesměrováni na stránku pro platbu zálohy. Pokud se stránka s platbou neotevře, klikněte na tlačítko níže a přejděte k platbě","booking.proceed.checkout":"Přejděte k platbě","delivery.provided_by":"Rozváží","loyalty.maxForOrder":"Pro tuto objednávku můžete použít maximálně: {sum} ","loyalty.cantUseWithPromoCode":"Je nám líto, ale bonusy a promo kódy nelze kombinovat.","courierComment":"Komentář pro kurýra","loyalty.loggedInAs":"Jste přihlášeni jako {profile}","loyalty.authorize":"Přihlásit","tableOrder.selectedItem":"Vybráno {count} položek","tableOrder.clearAll":"Vymazat vše","payment.goTo":"Další","payment.validation.card":"Vyplňte informace o platební kartě.","payment.validation.p24":"Vyberte banku z seznamu","payment.validation.blik":"Vyplňte 6místný kód","simple":"Zde","tableOrder.selectAll":"Vybrat všechno","order.cannot.prePay":"Příprava platby se nezdařila. Zkuste to prosím ještě jednou","prePay.pos.error.disabled":"Funkce placení účtu online není povolena, prosím kontaktujte administrátora","loyalty.banner.checkout.auth":"Z této objednávky získáte {sum} jako bonusové body  ({bonusPoints})","booking.create.allowRequestOutsideWorkingHours":"Omlouváme se, ale rezervace mimo pracovní dobu nepřijímáme","you":"Vy","order_status.step.scheduled":"Naplánováno","lookingCourier":"Hledá se kurýr","label_type_hours":"hod.","login":"Přihlásit se","login.purchase":"abyste zjednodušili objednávkový proces a využili další funkce.","auth.withGoogle":"Přihlaste se pomocí Google","auth.enterEmail":"Nebo zadejte svůj email","auth.advantages":"Výhody registrace:","auth.signInTo":"Přihlaste se do","auth.advantages.loyalty":"Výhody a odměny věrnostního programu","auth.advantages.checkout":"Jednodušší a rychlejší proces pokladny","auth.advantages.exclusive":"Exkluzivní podmínky a nabídky","auth.advantages.history":"Přístup k historii objednávek","phone.already.exists":"Tento telefon se již používá","loyalty.bonusPoint":"Bonusový bod","loyalty.infoModal.description":"Používáním našeho bonusového systému budete moci nahromadit body, které lze použít k platbě za objednávky","loyalty.infoModal.logged":"Nyní můžete vydělávat a používat body při objednávání","loyalty.infoModal.unLogged":"Abyste získali body, musíte být přihlášeni do systému v době nákupu.","loyalty.bonusProgram":"Bonusový program","auth.advantages.functions":"Doplňkové funkce","order.notExists":"Objednávka nenalezena","profile.address.empty":"Dosud jste nepřidal(a) žádné adresy","profile.address.new":"Nová adresa","profile.address.edit":"Upravit adresu","profile.address.delete":"Smazat adresu","profile.address.save":"Uložit novou adresu","popular":"Populární","auth.withApple":"Přihlaste se pomocí Apple","cutlery.prepare.order":"Uveďte prosím, pro kolik osob má být objednávka připravena?"},"deviceType":{"isMobile":false,"isDesktop":true,"isTablet":false,"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36","os":"Windows"},"customHeaders":{"uiHideElements":[""],"webViewQrApp":{}},"request":{"cookie":"language=cz; mguid=VHwbyKF-tCYGTsB-FNKoBJM..cz..takeaway","path":"/pages/poledni-menu","domain":"https://udrevaka.cz"}},"page":"/pages/[pageHurl]","query":{"pageHurl":"poledni-menu"},"buildId":"qUrOVO1ZaZOJmL0krpVKl","assetPrefix":"https://cdn-clients.choiceqr.com/client","runtimeConfig":{"assetPrefix":"https://cdn-clients.choiceqr.com/client/"},"isFallback":false,"dynamicIds":[80683,38436,92915,3749],"gip":true,"appGip":true,"locale":"default","locales":["default","ar","bg","cz","de","en","es","fr","hu","it","pl","ru","sk","tl","tr","uk","zh","lt","kk","lv","et","ja"],"defaultLocale":"default","scriptLoader":[]}</script>
</body>

</html>`;
