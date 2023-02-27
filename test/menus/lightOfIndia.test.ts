import LightOfIndia from "../../src/menus/LightOfIndia";

describe("LightOfIndia", () => {
    let requestMock;
    let testedClass: LightOfIndia;
    const originalDate = global.Date;

    beforeAll(() => {
        requestMock = jest.fn();
        const mockDate: any = function () {
            this.getDay = () => 3;
        };

        global.Date = mockDate;
    });

    beforeEach(() => {
        testedClass = new LightOfIndia({get: requestMock});
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
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29Kč",
            "text": "1. Lamb soup (jehněčí polévka) (1,7)",
            "title": "Light of India",
            "title_link": "http://www.lightofindia.cz/lang-cs/denni-menu"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149Kč",
            "text": "2. Turkey Madras (krůtí kostky ve stř. pálivé omáčce) 100g"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "3. Chicken Curry (kuřecí kostky v kari omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "4. Rajma (červené fazole v nepálivé omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "5. Corn Palak (kukuřice se špenátem a ind. kořením) 100g (7)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 169Kč",
            "text": "6. Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g (viz jídla)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 199Kč",
            "text": "7. Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g (viz jídla)"
        }
    ],
    [
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29Kč",
            "text": "1. Dal soup (čočková polévka) (1,7)",
            "title": "Light of India",
            "title_link": "http://www.lightofindia.cz/lang-cs/denni-menu"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149Kč",
            "text": "2. Chicken Korma (kuřecí kousky v jemné omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149Kč",
            "text": "3. Lamb Keema Vindaloo (jehněčí mleté maso ve velmi pálivé omáčce) 100g"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "4. Mattar Paneer (ind. sýr s hráškem v kari omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "5. Aloo Gobi (brambory s květákem v omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 169Kč",
            "text": "6. Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g (viz jídla)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 199Kč",
            "text": "7. Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g (viz jídla)"
        }
    ],
    [
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29Kč",
            "text": "1. Tomato soup (rajčatová polévka) (1,7)",
            "title": "Light of India",
            "title_link": "http://www.lightofindia.cz/lang-cs/denni-menu"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149Kč",
            "text": "2. Butter Chicken (kuřecí kousky v omáčce na másle) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "3. Pork Masala (vepřové kousky v jemně pálivé omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "4. Shahi Paneer (ind. sýr v nepálivé omáčce na másle) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "5. Chana Masala (ind. hrášek v jemně pálivé omáčce) 100g (7,8,13)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 169Kč",
            "text": "6. Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g (viz jídla)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 199Kč",
            "text": "7. Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g (viz jídla)"
        }
    ],
    [
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29Kč",
            "text": "1. Rajma soup (fazolová polévka) (1,7)",
            "title": "Light of India",
            "title_link": "http://www.lightofindia.cz/lang-cs/denni-menu"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149Kč",
            "text": "2. Chicken Tikka (kuřecí kousky marinované ve směsi koření) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "3. Chicken Mango (kuřecí kostky v mango omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "4. Navratan Korma (směs zeleniny a ind. sýra v jemné omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "5. Mattar Mushroom (hrášek se žampiony v kari omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 169Kč",
            "text": "6. Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g (viz jídla)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 199Kč",
            "text": "7. Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g (viz jídla)"
        }
    ],
    [
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29Kč",
            "text": "1. Chicken soup (kuřecí polévka) (1,3,7)",
            "title": "Light of India",
            "title_link": "http://www.lightofindia.cz/lang-cs/denni-menu"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149Kč",
            "text": "2. Turkey Do Piyaza (krůtí maso s cibulí a rajčaty v omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "3. Chicken Methi (kuřecí kostky s bylinkami v omáčce) 100g (7,8)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "4. Dal Tadka (národní jídlo ze žluté čočky) 100g (7)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139Kč",
            "text": "5. Palak Paneer (indický sýr se špenátem) 100g (7)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 169Kč",
            "text": "6. Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g (viz jídla)"
        },
        {
            "color": "#e7ef43",
            "fallback": "Restaurant menu",
            "footer": "Cena: 199Kč",
            "text": "7. Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g (viz jídla)"
        }
    ]
];

const response = `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="cs-cz" lang="cs-cz" dir="ltr" >
<head>
  <base href="http://www.lightofindia.cz/lang-cs/denni-menu" />
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="Indická restaurace Brno,Indická restaurace v Brně, Indická restaurace Light of India,restaurace Light of India,Indická kuchyně,Indické jídlo,restaurace v brne,restaurace v praze,Light of India restaurant,restaurant Light of India,restaurant Light of India,Light of India restaurant,indicke jidlo, vegetariánské jídlo, indian food, indian cuisine, indian cuisine brno, vegetarian food" />
  <meta name="description" content="Light of India" />
  <meta name="generator" content="Joomla! 1.5 - Open Source Content Management" />
  <title>lightofindia.cz - Týdenní menu</title>
  <link href="/templates/yoo_shuffle/favicon.ico" rel="shortcut icon" type="image/x-icon" />
  <link rel="stylesheet" href="/templates/yoo_shuffle/css/template.css.php?colorHeader=hatching2&amp;colorTop=default&amp;colorMiddle=default&amp;colorBottom=sand&amp;colorFooter=default" type="text/css" />
  <link rel="stylesheet" href="/modules/mod_jflanguageselection/tmpl/mod_jflanguageselection.css" type="text/css" />
  <script type="text/javascript" src="/templates/yoo_shuffle/lib/js/mootools.js.php"></script>
  <script type="text/javascript" src="/media/system/js/caption.js"></script>
  <script type="text/javascript">
var YtSettings = { tplurl: '/templates/yoo_shuffle', color: '', layout: 'left', fontDefault: 'font-medium', widthDefault: 'width-wide', widthThinPx: 790, widthWidePx: 960, widthFluidPx: 0.9 };
  </script>
  <script type="text/javascript" src="/templates/yoo_shuffle/lib/js/template.js.php"></script>

<link rel="apple-touch-icon" href="/templates/yoo_shuffle/apple_touch_icon.png" />
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44543184-1', 'lightofindia.cz');
  ga('send', 'pageview');

</script>
</head>

<body id="page" class="yoopage font-medium width-wide left   ">
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/cs_CZ/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
\t\t
\t<div id="page-header">
\t\t<div class="page-header-middle">
\t\t\t<div class="page-header-shadow">
\t\t\t\t
\t\t\t\t<div class="page-header-toolbar">
\t\t\t\t\t<div class="wrapper floatholder">
\t\t\t\t\t
\t\t\t\t\t\t<div id="toolbar">
\t\t\t\t\t\t\t<div class="floatbox ie_fix_floats">
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="date">
\t\t\t\t\t\t\t\t\tPondělí, 27 Únor 2023\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="styleswitcher">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a id="switchfontlarge" href="javascript:void(0)" title="Increase font size"></a>
\t\t\t\t\t\t\t\t\t<a id="switchfontmedium" href="javascript:void(0)" title="Default font size"></a>
\t\t\t\t\t\t\t\t\t<a id="switchfontsmall" href="javascript:void(0)" title="Decrease font size"></a>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t

\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<!-- header end -->
\t\t\t\t
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t
\t\t\t\t<div class="wrapper floatholder">
\t\t\t\t\t
\t\t\t\t\t<div id="header">
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t<div id="logo">
\t\t\t\t\t\t<!--<a href="http://localhost/goa2/index.php">
            <img src="http://localhost/templates/yoo_shuffle/images/white/back_logo.png"></a>-->
\t\t\t\t\t\t<!--<div id="logo" onmouseover="this.style.cursor='pointer';" onclick="window.location.href='http://localhost/goa2/index.php'" onmouseout="this.style.cursor='default';">!-->
\t\t\t\t\t\t\t<div id="jflanguageselection"><ul class="jflanguageselection"><li id="active_language"><a href="/lang-cs/denni-menu"><img src="/components/com_joomfish/images/flags/cs.gif" alt="Čeština" title="Čeština" /></a></li><li><a href="/lang-en/denni-menu"><img src="/components/com_joomfish/images/flags/en.gif" alt="English" title="English" /></a></li><li><a href="/lang-de/denni-menu"><img src="/components/com_joomfish/images/flags/de.gif" alt="Deutsch" title="Deutsch" /></a></li></ul></div><!--Joom!fish V2.0 (BETA)-->
<!-- &copy; 2003-2008 Think Network, released under the GPL. -->
<!-- More information: at http://www.joomfish.net -->
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t</div>
\t\t\t\t\t<!-- header end -->
\t\t\t
\t\t\t\t</div>
\t\t\t\t
\t\t\t</div>
\t\t</div>
\t</div>
\t
\t<div id="page-headerbar">
\t\t<div class="page-headerbar-middle">
\t\t\t<div class="wrapper floatholder">
\t\t\t
\t\t\t\t
\t\t\t</div>
\t\t</div>
\t</div>
    
\t    
\t<div id="page-middle">
\t\t<div class="page-middle-middle">
\t\t\t<div class="page-middle-shadow">
\t\t\t\t<div class="wrapper floatholder">
\t
\t\t\t\t\t<div id="middle">

\t\t\t\t\t\t<div class="middle-container-t">
\t\t\t\t\t\t\t<div class="middle-tl"></div>
\t\t\t\t\t\t\t<div class="middle-tr"></div>
\t\t\t\t\t\t\t<div class="middle-t"></div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t
\t\t\t\t\t\t<div class="middle-l">
\t\t\t\t\t\t\t<div class="middle-l-ie6"></div>
\t\t\t\t\t\t\t<div class="middle-r-ie6"></div>
\t\t\t\t\t\t\t<div class="middle-r">
\t\t\t\t\t\t\t\t<div class="middle-m">
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<div class="background">

\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="left">
\t\t\t\t\t\t\t\t\t\t\t<div id="left_container" class="clearfix">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t<div class="mod-rounded mod-menu">
\t\t\t\t<div class="module ">
\t\t\t\t\t\t\t\t\t\t<div class="module-2">
\t\t\t\t\t\t<div class="module-3">
\t\t\t\t\t\t\t<div class="module-4 deepest">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="module"><span class="module-2"><span class="module-3"><span class="color">Hlavní</span> nabídka</span></span></h3>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="menu"><li class="level1 item2 first"><a href="http://www.lightofindia.cz/" class="level1 item2 first"><span>Restaurace</span></a></li><li class="level1 item3 active current"><a href="/lang-cs/denni-menu" class="level1 item3 active current"><span>Týdenní menu</span></a></li><li class="level1 item4"><a href="/lang-cs/jidelni-listek" class="level1 item4"><span>Jídelní lístek</span></a></li><li class="level1 item6"><a href="/lang-cs/napojovy-listek" class="level1 item6"><span>Nápojový lístek</span></a></li><li class="level1 item7 last"><a href="/lang-cs/kontakt" class="level1 item7 last"><span>Restaurace Light of India</span></a></li></ul>\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t\t\t\t<div class="mod-sticker">
\t\t\t\t<div class="module">
\t\t\t\t\t\t\t\t\t\t<div class="module-container-t">
\t\t\t\t\t\t<div class="module-tl"></div>
\t\t\t\t\t\t<div class="module-tr"></div>
\t\t\t\t\t\t<div class="module-t"></div>
\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t<div class="module-l">
\t\t\t\t\t\t<div class="module-l-ie6"></div>
\t\t\t\t\t\t<div class="module-r-ie6"></div>
\t\t\t\t\t\t<div class="module-r">
\t\t\t\t\t\t\t<div class="module-m deepest">
\t\t\t\t\t\t\t\t<div class="ie6">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="module"><span class="module-2"><span class="module-3"><span class="color">Otevírací</span> doba</span></span></h3>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>PONDĚLÍ - PÁTEK<br /></strong><strong>10:30 - 21:30h</strong></p>
<p><strong><strong><strong>SOBOTA- NEĎELE<br /></strong></strong></strong><strong><strong><strong>11:30-21:30</strong></strong></strong></p>
<p>Štefánikova 35<br />602 00&nbsp;Brno<br /> <strong>Tel.: +420&nbsp;724&nbsp;323&nbsp;211</strong></p>
<p><strong><a href="mailto:info@lightofindia.cz">info@lightofindia.cz</a></strong></p>
<p><a href="/index.php/lang-cs/kontakt">více informací zde</a></p>
<p><strong>Příjmáme platební karty</strong></p>
<p><strong><img src="/images/stories/karty.jpg" alt="" /></strong></p>\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t\t
\t\t\t\t\t<div class="module-container-b">
\t\t\t\t\t\t<div class="module-bl"></div>
\t\t\t\t\t\t<div class="module-br"></div>
\t\t\t\t\t\t<div class="module-b"></div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t\t\t\t<div class="mod-dotted">
\t\t\t\t<div class="module deepest">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="module"><span class="module-2"><span class="module-3"><span class="color">Naše</span> další restaurace</span></span></h3>
\t\t\t\t\t\t\t\t\t\t<p><span style="font-size: 12pt;"><strong><a href="http://www.restaurant-goa.cz/" target="_blank">Restaurace GOA - Geislerova</a></strong></span></p>
<p><span style="font-size: 12pt;"><strong><a href="http://www.restaurant-goa-slatina.cz/" target="_blank">Restaurace GOA - Slatina</a></strong></span></p>
<p><span style="font-size: 12pt;"><strong><a href="http://www.campusbrno.cz/thali-of-india.html" target="_blank">Restaurace Thali Of India - Campus Square</a></strong></span></p>\t\t\t\t</div>
\t\t\t</div>
\t\t\t\t\t\t<div class="mod-sticker">
\t\t\t\t<div class="module">
\t\t\t\t\t\t\t\t\t\t<div class="module-container-t">
\t\t\t\t\t\t<div class="module-tl"></div>
\t\t\t\t\t\t<div class="module-tr"></div>
\t\t\t\t\t\t<div class="module-t"></div>
\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t<div class="module-l">
\t\t\t\t\t\t<div class="module-l-ie6"></div>
\t\t\t\t\t\t<div class="module-r-ie6"></div>
\t\t\t\t\t\t<div class="module-r">
\t\t\t\t\t\t\t<div class="module-m deepest">
\t\t\t\t\t\t\t\t<div class="ie6">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="module"><span class="module-2"><span class="module-3"><span class="color">Rozvoz</span> jídel</span></span></h3>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong><span style="color: #00ffff;">Vyberte si jídlo z našeho jídelního lístku a poté zavolejte na jedno z výše uvedených tel. čísel.</span></strong></p>
<p><strong><span style="color: #00ffff;">Cena rozvozu platí pouze pro město Brno.</span></strong></p>
<p><strong><span style="text-decoration: underline; color: #00ffff;">Cena rozvozu jídla:</span></strong></p>
<p><strong>400 Kč a více</strong>&nbsp;= rozvoz ZDARMA.</p>
<p><strong>do 400 Kč</strong>&nbsp;= 79 Kč poplatek za rozvoz.</p>
<p><strong>Minimální objednávka 200 Kč<br />Platba pouze v hotovosti.</strong></p>
<p><strong>dle jídelního lístku mimo THALI</strong></p>
<p><span style="background-color: #ffff99;"><strong><span style="color: #ff0000;">Nabídka pro firmy</span></strong></span></p>
<p><span style="color: #ff0000; background-color: #ffff99;"><strong>rozvoz poledniho menu min. 10 ks, objednání 1 den dopředu na Vámi určený čas .<br /></strong><strong>Zakoupení Příboru &nbsp;k menu - 5 Kc.</strong></span></p>\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t\t
\t\t\t\t\t<div class="module-container-b">
\t\t\t\t\t\t<div class="module-bl"></div>
\t\t\t\t\t\t<div class="module-br"></div>
\t\t\t\t\t\t<div class="module-b"></div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t\t\t\t<div class="mod-dotted">
\t\t\t\t<div class="module deepest">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="module"><span class="module-2"><span class="module-3"><span class="color">SLEDUJTE</span> NÁS NA FB</span></span></h3>
\t\t\t\t\t\t\t\t\t\t<p><a href="https://www.facebook.com/lightofindia.cz/"><img style="display: block; margin-left: auto; margin-right: auto;" src="/images/stories/1517174_orig.png" alt="" width="86" height="86" /></a></p>\t\t\t\t</div>
\t\t\t</div>
\t\t\t\t\t\t<div class="mod-dotted">
\t\t\t\t<div class="module deepest">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="module"><span class="module-2"><span class="module-3"><span class="color">NÁŠ</span> INSTAGRAM</span></span></h3>
\t\t\t\t\t\t\t\t\t\t<p><a href="https://www.instagram.com/tradicni_indicke_restaurace/"><img style="display: block; margin-left: auto; margin-right: auto;" src="/images/stories/instagram_ikona.png" alt="" width="86" height="86" /></a></p>\t\t\t\t</div>
\t\t\t</div>
\t\t\t
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<!-- left end -->
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<div id="main">
\t\t\t\t\t\t\t\t\t\t\t<div id="main_container" class="clearfix">
\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<div id="mainmiddle" class="floatbox">
\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="content">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="content_container" class="clearfix">
\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="floatbox">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
<table class="contentpaneopen">
<tr>
\t\t\t\t\t\t<td align="right" width="100%" class="buttonheading">
\t\t<a href="/lang-cs/denni-menu?format=pdf" title="PDF" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">PDF&nbsp;</a>\t\t</td>
\t\t
\t\t\t\t<td align="right" width="100%" class="buttonheading">
\t\t<a href="/lang-cs/denni-menu?tmpl=component&amp;print=1&amp;page=" title="Tisk" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">Array&nbsp;Tisk&nbsp;Array</a>\t\t</td>
\t\t
\t\t\t\t\t</tr>
</table>

<table class="contentpaneopen">



<tr>
<td valign="top">
<p><style type="text/css">
.hlight {background: #ffff00;color: #000000; height:auto; width:80px; font-size:26; text-align:center;}
.novinka {color: #C6461C;}
</style>
<H5>Ke každému menu jako příloha <strong>rýže</strong> nebo <strong>Nan (indický chléb 1,3,7),</H5><br><H5>Novinka Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g</H5><br>Týden: 27.02. - 03.03.
<br />﻿<H2>Pondělí</H2><br>1.  Lamb soup (jehněčí polévka) 29Kč (1,7)<br>2.  Turkey Madras (krůtí kostky ve stř. pálivé omáčce) 100g 149Kč<br>3.  Chicken Curry (kuřecí kostky v kari omáčce) 100g 139Kč (7,8)<br>4.  Rajma (červené fazole v nepálivé omáčce) 100g 139Kč (7,8)<br>5.  Corn Palak (kukuřice se špenátem a ind. kořením) 100g 139Kč (7)<br>6.  Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g 169Kč (viz jídla)<br>7.  Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g 199Kč (viz jídla)<br><br><H2>Uterý</H2><br>1.  Dal soup (čočková polévka) 29Kč (1,7)<br>2.  Chicken Korma (kuřecí kousky v jemné omáčce) 100g 149Kč (7,8)<br>3.  Lamb Keema Vindaloo (jehněčí mleté maso ve velmi pálivé omáčce) 100g 149Kč<br>4.  Mattar Paneer (ind. sýr s hráškem v kari omáčce) 100g 139Kč (7,8)<br>5.  Aloo Gobi (brambory s květákem v omáčce) 100g 139Kč (7,8)<br>6.  Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g 169Kč (viz jídla)<br>7.  Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g 199Kč (viz jídla)<br><br><H2>Středa</H2><br>1.  Tomato soup (rajčatová polévka) 29Kč (1,7)<br>2.  Butter Chicken (kuřecí kousky v omáčce na másle) 100g 149Kč (7,8)<br>3.  Pork Masala (vepřové kousky v jemně pálivé omáčce) 100g 139Kč (7,8)<br>4.  Shahi Paneer (ind. sýr v nepálivé omáčce na másle) 100g 139Kč (7,8)<br>5.  Chana Masala (ind. hrášek v jemně pálivé omáčce) 100g 139Kč (7,8,13)<br>6.  Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g 169Kč (viz jídla)<br>7.  Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g 199Kč (viz jídla)<br><br><H2>Čtvrtek</H2><br>1.  Rajma soup (fazolová polévka) 29Kč (1,7)<br>2.  Chicken Tikka (kuřecí kousky marinované ve směsi koření) 100g 149Kč (7,8)<br>3.  Chicken Mango (kuřecí kostky v mango omáčce) 100g 139Kč (7,8)<br>4.  Navratan Korma (směs zeleniny a ind. sýra v jemné omáčce) 100g 139Kč (7,8)<br>5.  Mattar Mushroom (hrášek se žampiony v kari omáčce) 100g 139Kč (7,8)<br>6.  Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g 169Kč (viz jídla)<br>7.  Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g 199Kč (viz jídla)<br><br><H2>Pátek</H2><br>1.  Chicken soup (kuřecí polévka) 29Kč (1,3,7)<br>2.  Turkey Do Piyaza (krůtí maso s cibulí a rajčaty v omáčce) 100g 149Kč (7,8)<br>3.  Chicken Methi (kuřecí kostky s bylinkami v omáčce) 100g 139Kč (7,8)<br>4.  Dal Tadka (národní jídlo ze žluté čočky) 100g 139Kč (7)<br>5.  Palak Paneer (indický sýr se špenátem) 100g 139Kč (7)<br>6.  Menu Mix Thali(mix 3 jídel z dnešního menu na děleném talíři) 150g 169Kč (viz jídla)<br>7.  Menu Grand Mix Thali(mix všech zdnešního menu na děleném talíři) 200g 199Kč (viz jídla)</p>

<p>Obsažené alergeny jsou zapsány v závorkách za daným jídlem.</p>
<p><strong><span style="font-size: 14pt;">Seznam alergenů:</span></strong></p>
<p><strong>1</strong> Obiloviny obsahující lepek<br /><strong>2</strong> Korýši<br /><strong>3</strong> Vejce<br /><strong>4</strong> Ryby<br /><strong>5</strong> Arašídy (podzemnice olejná)<br /><strong>6</strong> Sójové boby (sója)<br /><strong>7</strong> Mléko<br /><strong>8</strong> Ořechy, madle, pistácie<br /><strong>9</strong> Celer<br /><strong>10</strong> Hořčice<br /><strong>11</strong> Sezamová semena<br /><strong>12</strong> Oxid siřičitý a siřičitany<br /><strong>13</strong> Vlčí bob<br /><strong>14</strong> Měkkýši</p>

</td>
</tr>

</table>
<span class="article_separator">&nbsp;</span>

\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- content end -->
\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<!-- mainmiddle end -->
\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<!-- main end -->

\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t
\t\t\t\t\t\t<div class="middle-container-b">
\t\t\t\t\t\t\t<div class="middle-bl"></div>
\t\t\t\t\t\t\t<div class="middle-br"></div>
\t\t\t\t\t\t\t<div class="middle-b"></div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t
\t\t\t\t\t</div>
\t\t\t\t\t<!-- middle end -->

\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>

\t<div id="page-bottom">
\t\t<div class="page-bottom-middle">
\t\t\t<div class="page-bottom-shadow">
\t\t\t\t<div class="wrapper floatholder">

\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
    
\t<div id="page-footer">
\t\t<div class="wrapper floatholder">
\t
\t\t\t\t<div id="footer">
\t\t\t\t\t<a class="anchor" href="#page">&nbsp;</a>
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t</div>
\t\t\t\t<!-- footer end -->
\t\t
\t\t</div>
\t</div>
    
</body>
</html>`;
