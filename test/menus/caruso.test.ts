import Caruso from "../../src/menus/Caruso";

describe("Caruso", () => {
    let requestMock;
    let testedClass: Caruso;
    const originalDate = global.Date;

    beforeAll(() => {
        requestMock = jest.fn();
        const mockDate: any = function () {
            this.getDay = () => 3;
        };

        global.Date = mockDate;
    });

    beforeEach(() => {
        testedClass = new Caruso({get: requestMock});
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
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/1-margherita.html#/velikost-velka_35_cm)",
            "text": "*Margherita* (Pizza) - rajčatový protlak, mozzarella",
            "title": "Caruso",
            "title_link": "https://www.carusorestaurant.cz/denni-obedove-menu/"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/1022-sbagliata.html#/velikost-velka_35_cm)",
            "text": "*Sbagliata* (Pizza) - rajčatový protlak, mozzarella, pikantní salám, kukuřice"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/1013-tricolore.html#/velikost-velka_35_cm)",
            "text": "*Tricolore* (Pizza) - smetanový základ, mozzarella, salám spianata, hermelín, špenát"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/penne/116-rigatoni-carbonara.html)",
            "text": "*Penne Carbonara* (Těstoviny) - 2 vejce, italská domácí pancetta, parmezán, cibule, pepř"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/spaghetti/131-spaghetti-bolognese.html)",
            "text": "*Spaghetti Bolognese* (Těstoviny) - mleté maso (hovězí a vepřové), zelenina, rajčata"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/1050-alpina.html#/ingredience_navic-zadna_dalsi_ingredience)",
            "text": "*Alpina* (Salát) - římský salát, ledový salát, kuřecí maso, paprikový dressing, kukuřice, plísňový sýr, sůl, pizza pane"
        }
    ],
    [
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/24-concordia.html#/velikost-velka_35_cm)",
            "text": "*Concordia* (Pizza) - smetana, mozzarella, šunka, parmezán, pepř",
            "title": "Caruso",
            "title_link": "https://www.carusorestaurant.cz/denni-obedove-menu/"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/13-golosona.html#/velikost-velka_35_cm)",
            "text": "*Golosona* (Pizza) - rajčatový protlak, mozzarella, dušená šunka, slanina, paprikový salám"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/1000-saporita.html#/velikost-velka_35_cm)",
            "text": "*Saporita* (Pizza) - rajčatový protlak, mozzarella, italský salám napoli, žampiony, hermelín"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/fusilli/1004-fusilli-pollo-spinaci.html)",
            "text": "*Fusilli Pollo Spinaci* (Těstoviny) - kuřecí maso, špenát, smetana"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/tagliatelle/1074-tagliatelle-amatriciana.html)",
            "text": "*Tagliatelle Amatriciana* (Těstoviny) - rajčata, domácí italská pancetta, cibule, chilli drcené, černé olivy"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/119-tirolese.html#/ingredience_navic-zadna_dalsi_ingredience)",
            "text": "*Montana* (Salát) - ledový salát, římský salát, rukola, černé olivy, sušená rajčata, slanina, parmazán, pizza pane"
        }
    ],
    [
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/26-salsiccia-spinaci.html#/velikost-velka_35_cm)",
            "text": "*Salsiccia Spinaci* (Pizza) - smetana, mozzarella, domácí italská klobása salsiccia, špenát",
            "title": "Caruso",
            "title_link": "https://www.carusorestaurant.cz/denni-obedove-menu/"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/14-mais.html#/velikost-velka_35_cm)",
            "text": "*Mais* (Pizza) - rajčatový protlak, mozzarella, slanina, kukuřice, šunka"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/28-mediterranea.html#/velikost-velka_35_cm)",
            "text": "*Mediterranea* (Pizza) - rajčatový protlak, mozzarella , rukola, sušená rajčata, parmazán"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 129 Kč (https://carusopizza.cz/cs/penne/115-rigatoni-pomodoro.html)",
            "text": "*Penne Pomodoro* (Těstoviny) - rajčata, zelenina"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/spaghetti/1027-spaghetti-pollo-e-funghi.html)",
            "text": "*Spaghetti Pollo Funghi* (Těstoviny) - kuřecí maso, smetana, žampiony, petržel"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/120-caesar.html#/ingredience_navic-zadna_dalsi_ingredience)",
            "text": "*Caesar* (Salát) - kuřecí maso, římský salát, dresink, krutony, parmazán, pizza pane"
        }
    ],
    [
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/1047-funghi.html#/velikost-velka_35_cm)",
            "text": "*Funghi* (Pizza) - rajčatový protlak, mozzarella, žampiony",
            "title": "Caruso",
            "title_link": "https://www.carusorestaurant.cz/denni-obedove-menu/"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/16-contadina.html#/velikost-velka_35_cm)",
            "text": "*Contadina* (Pizza) - rajčatový protlak, mozzarella, salám, slanina, žampióny"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/30-speciale.html#/velikost-velka_35_cm)",
            "text": "*Speciale* (Pizza) - smetana, mozzarella, domácí italská slanina pancetta, žampióny, parmezan"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč",
            "text": "Tagliatele Carbonara"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149 Kč (https://carusopizza.cz/cs/gnocchi/107-gnocchi-bolognese.html)",
            "text": "*Gnocchi Bolognese* (Těstoviny) - mleté maso (hovězí a vepřové), zelenina, rajčata"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/121-primavera.html#/ingredience_navic-zadna_dalsi_ingredience)",
            "text": "*Primavera* (Salát) - ledový a římský salát, kukuřice, tuňák, černé olivy, červená cibule, rajčata, vejce, olivový olej, pizza pane"
        }
    ],
    [
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/9-prosciutto.html#/velikost-velka_35_cm)",
            "text": "*Prosciutto* (Pizza) - rajčatový protlak, mozzarella, dušená šunka",
            "title": "Caruso",
            "title_link": "https://www.carusorestaurant.cz/denni-obedove-menu/"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/8-hawai.html#/velikost-velka_35_cm)",
            "text": "*Hawai* (Pizza) - smetana, mozzarella, šunka, ananas"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149 Kč (https://carusopizza.cz/cs/pizza-brno-olomouc/1000-saporita.html#/velikost-velka_35_cm)",
            "text": "*Saporita* (Pizza) - rajčatový protlak, mozzarella, italský salám napoli, žampiony, hermelín"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/penne/1003-rigatoni-pollo-spinaci.html)",
            "text": "*Penne Pollo Spinaci* (Těstoviny) - kuřecí maso, špenát, smetana"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139 Kč (https://carusopizza.cz/cs/spaghetti/1073-spagety-bolognese.html)",
            "text": "*Spaghetti Amatriciana* (Těstoviny) - rajčata, domácí italská pancetta, cibule, chilli drcené, černé olivy"
        },
        {
            "color": "#5BBB47",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč (https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/119-tirolese.html#/ingredience_navic-zadna_dalsi_ingredience)",
            "text": "*Montana* (Salát) - ledový salát, římský salát, rukola, černé olivy, sušená rajčata, slanina, parmazán, pizza pane"
        }
    ]
];

const response = `
<!DOCTYPE html>
<html lang="cs-CZ" prefix="og: http://ogp.me/ns#" class="no-js">
<head>
\t<meta charset="UTF-8">

\t<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

\t\t
\t\t\t\t\t<link rel="icon" href="https://www.carusorestaurant.cz/wp-content/uploads/2019/04/bez-pozadi-bile-panacek.png" type="image/x-icon">
\t\t\t\t\t\t  \t\t  \t\t  \t\t<title>Denní zvýhodněné obědové menu | Caruso Pizza &amp; Pasta Brno a Olomouc</title>
                        <script>
                            /* You can add more configuration options to webfontloader by previously defining the WebFontConfig with your options */
                            if ( typeof WebFontConfig === "undefined" ) {
                                WebFontConfig = new Object();
                            }
                            WebFontConfig['google'] = {families: ['Open+Sans:400']};

                            (function() {
                                var wf = document.createElement( 'script' );
                                wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont.js';
                                wf.type = 'text/javascript';
                                wf.async = 'true';
                                var s = document.getElementsByTagName( 'script' )[0];
                                s.parentNode.insertBefore( wf, s );
                            })();
                        </script>
                        
<!-- This site is optimized with the Yoast SEO plugin v11.1.1 - https://yoast.com/wordpress/plugins/seo/ -->
<meta name="description" content="Každý den nabízíme zvýhodněné obědové menu od 119 Kč. Zastavte se u nás v italské restauraci v Brně a Olomouci. Těšíme se na vaši návštěvu."/>
<link rel="canonical" href="https://www.carusorestaurant.cz/denni-obedove-menu/" />
<meta property="og:locale" content="cs_CZ" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Denní zvýhodněné obědové menu | Caruso Pizza &amp; Pasta Brno a Olomouc" />
<meta property="og:description" content="Každý den nabízíme zvýhodněné obědové menu od 119 Kč. Zastavte se u nás v italské restauraci v Brně a Olomouci. Těšíme se na vaši návštěvu." />
<meta property="og:url" content="https://www.carusorestaurant.cz/denni-obedove-menu/" />
<meta property="og:site_name" content="Italská restaurace v Brně a Olomouci" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:description" content="Každý den nabízíme zvýhodněné obědové menu od 119 Kč. Zastavte se u nás v italské restauraci v Brně a Olomouci. Těšíme se na vaši návštěvu." />
<meta name="twitter:title" content="Denní zvýhodněné obědové menu | Caruso Pizza &amp; Pasta Brno a Olomouc" />
<script type='application/ld+json' class='yoast-schema-graph yoast-schema-graph--main'>{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.carusorestaurant.cz/#organization","name":"","url":"https://www.carusorestaurant.cz/","sameAs":[]},{"@type":"WebSite","@id":"https://www.carusorestaurant.cz/#website","url":"https://www.carusorestaurant.cz/","name":"Italsk\u00e1 restaurace v Brn\u011b a Olomouci","publisher":{"@id":"https://www.carusorestaurant.cz/#organization"},"potentialAction":{"@type":"SearchAction","target":"https://www.carusorestaurant.cz/?s={search_term_string}","query-input":"required name=search_term_string"}},{"@type":"WebPage","@id":"https://www.carusorestaurant.cz/denni-obedove-menu/#webpage","url":"https://www.carusorestaurant.cz/denni-obedove-menu/","inLanguage":"cs-CZ","name":"Denn\u00ed zv\u00fdhodn\u011bn\u00e9 ob\u011bdov\u00e9 menu | Caruso Pizza &amp; Pasta Brno a Olomouc","isPartOf":{"@id":"https://www.carusorestaurant.cz/#website"},"datePublished":"2021-12-03T13:48:19+00:00","dateModified":"2023-02-22T20:43:41+00:00","description":"Ka\u017ed\u00fd den nab\u00edz\u00edme zv\u00fdhodn\u011bn\u00e9 ob\u011bdov\u00e9 menu od 119 K\u010d. Zastavte se u n\u00e1s v italsk\u00e9 restauraci v Brn\u011b a Olomouci. T\u011b\u0161\u00edme se na va\u0161i n\u00e1v\u0161t\u011bvu."}]}</script>
<!-- / Yoast SEO plugin. -->

<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//maxcdn.bootstrapcdn.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Italská restaurace v Brně a Olomouci &raquo; RSS zdroj" href="https://www.carusorestaurant.cz/feed/" />
<link rel="alternate" type="application/rss+xml" title="Italská restaurace v Brně a Olomouci &raquo; RSS komentářů" href="https://www.carusorestaurant.cz/comments/feed/" />
\t\t<script type="text/javascript">
\t\t\twindow._wpemojiSettings = {"baseUrl":"https:\\/\\/s.w.org\\/images\\/core\\/emoji\\/11\\/72x72\\/","ext":".png","svgUrl":"https:\\/\\/s.w.org\\/images\\/core\\/emoji\\/11\\/svg\\/","svgExt":".svg","source":{"concatemoji":"https:\\/\\/www.carusorestaurant.cz\\/wp-includes\\/js\\/wp-emoji-release.min.js?ver=4.9.8"}};
\t\t\t!function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55358,56760,9792,65039],[55358,56760,8203,9792,65039]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
\t\t</script>
\t\t<style type="text/css">
img.wp-smiley,
img.emoji {
\tdisplay: inline !important;
\tborder: none !important;
\tbox-shadow: none !important;
\theight: 1em !important;
\twidth: 1em !important;
\tmargin: 0 .07em !important;
\tvertical-align: -0.1em !important;
\tbackground: none !important;
\tpadding: 0 !important;
}
</style>
<link rel='stylesheet' id='contact-form-7-css'  href='https://www.carusorestaurant.cz/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.1.6' type='text/css' media='all' />
<link rel='stylesheet' id='rs-plugin-settings-css'  href='https://www.carusorestaurant.cz/wp-content/plugins/revslider/public/assets/css/settings.css?ver=5.4.5.1' type='text/css' media='all' />
<style id='rs-plugin-settings-inline-css' type='text/css'>
#rs-demo-id {}
</style>
<link rel='stylesheet' id='font-awesome-css'  href='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min.css?ver=5.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='elegant-icons-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/css/elegant-icons.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='bootstrap-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/css/bootstrap.min.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='owl.carousel-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/css/owl.carousel.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='owl.theme-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/css/owl.theme.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='jquery-ui-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/css/jquery-ui.min.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='sflexslider-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/css/flexslider.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='restory-default-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/css/restory_style.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='restory-style-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/style.css?ver=2017-05-01' type='text/css' media='all' />
<link rel='stylesheet' id='restory-fonts-css'  href='//fonts.googleapis.com/css?family=Mr+Dafoe%7CPoppins%3A300%2C400%2C500%2C600%2C700%7COpen+Sans%3A400%2C500%2C700%2C500italic%2C400italic%2C300italic%2C300%2C100%2C100italic%2C700italic%2C900%2C900italic%26subset%3Dlatin%2Clatin-ext&#038;ver=1.0.0' type='text/css' media='all' />
<link rel='stylesheet' id='restory-custom-style-css'  href='https://www.carusorestaurant.cz/wp-content/themes/restory/css/custom_script.css?ver=4.9.8' type='text/css' media='all' />
<style id='restory-custom-style-inline-css' type='text/css'>

\t\t.list-content h2, .menu-post-content h2,.about-content h2, .team-post h2, .center-area h2, div.related-posts .news-post .hover-box div.inner-hover span, a, .comment-area-box > ul li .comment-box .comment-content h3, .comment-area-box > ul li .comment-box .comment-content h3 a,.comment-area-box > ul li .comment-box .comment-content a:hover,#reply-title,.pagination-box ul.page-list li a:hover, .pagination-box ul.page-list li a.active, .pagination-box ul.page-list li .current,section.blog-section .blog-box .blog-post ul.share-post li a:hover,section.blog-section .blog-box .blog-post ul.post-meta li a,.contact-form-box #comment-form input[type='submit'], input[type='submit'],.reservation-section #reservation-form h3, .reservation-section .wpcf7-form h3,.statistic-section .statistic-post h3,.clients-section .clients-box .flex-direction-nav .flex-prev:hover::after, .clients-section .clients-box .flex-direction-nav .flex-next:hover::after,section.page-banner-section h3, footer .instagram-widget h3, .footer-widget h3,.contact-section div.contact-info .info-box span, .contact-section div.contact-info .info-box i, .contact-section .wpcf7-form input[type='submit'],a.button-one, .popular-menu-section .menu-box .item .menu-post .menu-post-content span,.menu-section .menu-box ul.menu-list-items li span.price{ color: #c7ad88; }
\t\t#home-section .tp-caption.Concept-Title span{
\t\tcolor: #c7ad88 !important;
\t}
\t.contact-form-box #comment-form input[type='submit']:hover, input[type='submit']:hover,.today-menu-section .menu-box .item .menu-post .menu-post-content .inner-menu h2::after,.clients-section .clients-box .client-review .inner-client-review .client-content h2::after,.clients-section .clients-box .flex-control-paging li a.flex-active,.contact-section .wpcf7-form input[type='submit']:hover,.navbar-default .navbar-nav > .active > a:after, .navbar-default .navbar-nav > .active > a:hover:after, .navbar-default .navbar-nav > .active > a:focus:after, .navbar-nav > li > a:hover::after, .navbar-nav > li > a.active::after, a.button-one:hover{
\t\tbackground: #c7ad88;
\t}
\t div.related-posts .news-post:hover .hover-box, .pagination-box ul.page-list li a:hover, .pagination-box ul.page-list li a.active, .pagination-box ul.page-list li .current,.contact-form-box #comment-form input[type='submit'], input[type='submit'],.today-menu-section .menu-box .item .menu-post:hover .menu-post-content::after,.clients-section .clients-box .flex-control-paging li a.flex-active,.about-section .about-images::after,.clients-section .clients-box .client-review::after,.contact-section .wpcf7-form input[type='submit'],a.button-one, .popular-menu-section .menu-box .item .menu-post:hover::after{
\t \tborder-color: #c7ad88 !important;
\t }
\t .pagination-box ul.page-list li a.next:hover, .pagination-box ul.page-list li a.prev:hover{
\t \tborder-color: transparent !important;
\t }
\t#header{
margin: 0 auto;
}.page-id-874 .page-banner-section{
                background-image: url(https://www.carusorestaurant.cz/wp-content/uploads/2019/04/homepage_cover4.jpg) !important;
            }
</style>
<link rel='stylesheet' id='wis_font-awesome-css'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='wis_instag-slider-css'  href='https://www.carusorestaurant.cz/wp-content/plugins/instagram-slider-widget/assets/css/instag-slider.css?ver=1.6.3' type='text/css' media='all' />
<link rel='stylesheet' id='wis_wis-header-css'  href='https://www.carusorestaurant.cz/wp-content/plugins/instagram-slider-widget/assets/css/wis-header.css?ver=1.6.3' type='text/css' media='all' />
<link rel='stylesheet' id='js_composer_front-css'  href='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=5.1.1' type='text/css' media='all' />
<script>if (document.location.protocol != "https:") {document.location = document.URL.replace(/^http:/i, "https:");}</script><script type='text/javascript' src='https://www.carusorestaurant.cz/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.tools.min.js?ver=5.4.5.1'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.revolution.min.js?ver=5.4.5.1'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/instagram-slider-widget/assets/js/jquery.flexslider-min.js?ver=1.6.3'></script>
<link rel='https://api.w.org/' href='https://www.carusorestaurant.cz/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.carusorestaurant.cz/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.carusorestaurant.cz/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 4.9.8" />
<link rel='shortlink' href='https://www.carusorestaurant.cz/?p=874' />
<link rel="alternate" type="application/json+oembed" href="https://www.carusorestaurant.cz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.carusorestaurant.cz%2Fdenni-obedove-menu%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.carusorestaurant.cz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.carusorestaurant.cz%2Fdenni-obedove-menu%2F&#038;format=xml" />

<!--BEGIN: TRACKING CODE MANAGER BY INTELLYWP.COM IN HEAD//-->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-30568656-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-30568656-2');
</script>

<script type="text/javascript">
\t/* <![CDATA[ */
\tvar seznam_retargeting_id = 40660;
\t/* ]]> */
</script>
<script type="text/javascript" src="//c.imedia.cz/js/retargeting.js"></script>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t<!-- Global site tag (gtag.js) - Google Ads: 966790225 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-966790225"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-966790225');
</script>
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1740835996241974');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1740835996241974&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<!--END: https://wordpress.org/plugins/tracking-code-manager IN HEAD//--><meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress."/>
<!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.min.css" media="screen"><![endif]--><meta name="generator" content="Powered by Slider Revolution 5.4.5.1 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
<script type="text/javascript">function setREVStartSize(e){
\t\t\t\ttry{ var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;\t\t\t\t\t
\t\t\t\t\tif(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})\t\t\t\t\t
\t\t\t\t}catch(d){console.log("Failure at Presize of Slider:"+d)}
\t\t\t};</script>
<style type="text/css" title="dynamic-css" class="options-output">.navbar-brand{padding-top:35px;padding-right:15px;padding-bottom:30px;padding-left:15px;}.navbar-brand img{height:30px;}body{font-family:"Open Sans";line-height:24px;font-weight:400;font-style:normal;color:#999999;font-size:14px;opacity: 1;visibility: visible;-webkit-transition: opacity 0.24s ease-in-out;-moz-transition: opacity 0.24s ease-in-out;transition: opacity 0.24s ease-in-out;}.wf-loading body{opacity: 0;}.ie.wf-loading body{visibility: hidden;}</style><noscript><style type="text/css"> .wpb_animate_when_almost_visible { opacity: 1; }</style></noscript>\t

</head>
<body data-rsssl=1 class="page-template page-template-template-page_builder page-template-template-page_builder-php page page-id-874 wpb-js-composer js-comp-ver-5.1.1 vc_responsive">

\t<!-- Container -->
\t<div id="container">
\t\t<!-- Header
\t\t    ================================================== -->
\t\t<header class="clearfix trans">
\t\t\t<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
\t\t\t\t<div class="container">
\t\t\t\t\t<div class="inner-navbar">
\t\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->
\t\t\t\t\t\t<div class="navbar-header">
\t\t\t\t\t\t\t<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
\t\t\t\t\t\t\t\t<span class="sr-only">Toggle navigation</span>
\t\t\t\t\t\t\t\t<span class="icon-bar"></span>
\t\t\t\t\t\t\t\t<span class="icon-bar"></span>
\t\t\t\t\t\t\t\t<span class="icon-bar"></span>
\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t<a class="navbar-brand"  href="https://www.carusorestaurant.cz/" title="Italská restaurace v Brně a Olomouci">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="https://www.carusorestaurant.cz/wp-content/uploads/2019/04/bez-pozadi-bilenapis.png" alt="Italská restaurace v Brně a Olomouci">
\t\t\t\t\t\t\t\t  \t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->
\t\t\t\t\t\t<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
\t\t\t\t\t\t\t<ul data-breakpoint="800" id="menu-hlavni-menu-hlavicka" class="nav navbar-nav navbar-right navigate-section"><li id="menu-item-916" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-874 current_page_item menu-item-916 active"><a title="Obědové menu" href="https://www.carusorestaurant.cz/denni-obedove-menu/">Obědové menu</a></li>
<li id="menu-item-436" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-436 drop"><a title="Menu" href="https://www.carusorestaurant.cz/menu-2/" class=" dropdown-toggle" data-hover="dropdown">Menu</a>
<ul role="menu" class=" dropdown">
\t<li id="menu-item-1042" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1042"><a title="AKCE" href="https://www.carusorestaurant.cz/akce-v-restauraci/">AKCE</a></li>
\t<li id="menu-item-160" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-160"><a title="Pizzy" href="https://www.carusorestaurant.cz/pizzy/">Pizzy</a></li>
\t<li id="menu-item-159" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-159"><a title="Těstoviny" href="https://www.carusorestaurant.cz/testoviny/">Těstoviny</a></li>
\t<li id="menu-item-166" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"><a title="Polévky, saláty a dezerty" href="https://www.carusorestaurant.cz/salaty-a-dezerty/">Polévky, saláty a dezerty</a></li>
\t<li id="menu-item-169" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-169"><a title="Nápoje" href="https://www.carusorestaurant.cz/napoje-menu/">Nápoje</a></li>
\t<li id="menu-item-744" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-744"><a title="Zmrzliny" href="https://www.carusorestaurant.cz/zmrzliny/">Zmrzliny</a></li>
</ul>
</li>
<li id="menu-item-519" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-519"><a title="Fotogalerie" href="https://www.carusorestaurant.cz/fotogalerie/">Fotogalerie</a></li>
<li id="menu-item-802" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-802"><a title="Rozvoz Brno a Olomouc" href="https://carusopizza.cz/">Rozvoz Brno a Olomouc</a></li>
<li id="menu-item-94" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"><a title="O nás" href="https://www.carusorestaurant.cz/o-nas-2/">O nás</a></li>
<li id="menu-item-96" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"><a title="Kontakt" href="https://www.carusorestaurant.cz/kontakt/">Kontakt</a></li>
</ul>\t\t\t\t\t\t
\t\t\t\t\t\t</div><!-- /.navbar-collapse -->
\t\t\t\t\t</div>
\t\t\t\t</div><!-- /.container -->
\t\t\t</nav>
\t\t</header>
\t\t<!-- End Header -->
\t\t
\t\t\t\t<!-- page-banner-section 
\t\t\t================================================== -->
\t\t<section class="page-banner-section blog">
\t\t\t<div class="container">
\t\t\t\t<h1>Denní obědové menu</h1>
\t\t\t\t\t\t\t\t<h3>Zvýhodněné menu každý všední den do 14:00. Jídlo s sebou za příplatek 15 Kč.</h3>
\t\t\t\t\t\t\t</div>
\t\t</section>
\t\t<!-- End page-banner section -->
\t\t
\t\t<div class="vc_row wpb_row vc_row-fluid"><div class="container"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br><br>
\t\t</div>
\t</div>
</div></div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid"><div class="container"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper"><div class="vc_tta-container" data-vc-action="collapse"><div class="vc_general vc_tta vc_tta-tabs vc_tta-color-black vc_tta-style-modern vc_tta-shape-square vc_tta-spacing-2 vc_tta-tabs-position-top vc_tta-controls-align-left"><div class="vc_tta-tabs-container"><ul class="vc_tta-tabs-list"><li class="vc_tta-tab vc_active" data-vc-tab><a href="#1638540085462-ea9fc8e1-c901" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text">Pondělí</span></a></li><li class="vc_tta-tab" data-vc-tab><a href="#1638789180583-20357114-21d0" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text">Úterý</span></a></li><li class="vc_tta-tab" data-vc-tab><a href="#1638789179086-52e9c92b-3e1c" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text">Středa</span></a></li><li class="vc_tta-tab" data-vc-tab><a href="#1638789177192-eb081da0-928d" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text">Čtvrtek</span></a></li><li class="vc_tta-tab" data-vc-tab><a href="#1638789175085-ee6a4841-2c29" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text">Pátek</span></a></li></ul></div><div class="vc_tta-panels-container"><div class="vc_tta-panels"><div class="vc_tta-panel vc_active" id="1638540085462-ea9fc8e1-c901" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h4 class="vc_tta-panel-title"><a href="#1638540085462-ea9fc8e1-c901" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Pondělí</span></a></h4></div><div class="vc_tta-panel-body">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Pizzy</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Margherita</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>135 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Sbagliata</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Tricolore</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>149 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Těstoviny</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Penne Carbonara</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Spaghetti Bolognese</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Saláty</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Alpina</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>135 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div></div></div><div class="vc_tta-panel" id="1638789180583-20357114-21d0" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h4 class="vc_tta-panel-title"><a href="#1638789180583-20357114-21d0" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Úterý</span></a></h4></div><div class="vc_tta-panel-body">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Pizzy</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Concordia</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>135 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Golosona</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Saporita</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>149 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Těstoviny</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Fusilli Pollo Spinaci</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Tagliatelle Amatriciana</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Saláty</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Montana</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>135 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div></div></div><div class="vc_tta-panel" id="1638789179086-52e9c92b-3e1c" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h4 class="vc_tta-panel-title"><a href="#1638789179086-52e9c92b-3e1c" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Středa</span></a></h4></div><div class="vc_tta-panel-body">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Pizzy</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Salsiccia Spinaci</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>135 Kč</p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Mais</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>139 Kč</p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Mediterranea</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>149 Kč</p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Těstoviny</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Penne Pomodoro</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>129 Kč</p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Spaghetti Pollo Funghi</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>139 Kč</p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Saláty</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Caesar</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>135 Kč</p>

\t\t</div>
\t</div>
</div></div></div></div></div></div></div><div class="vc_tta-panel" id="1638789177192-eb081da0-928d" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h4 class="vc_tta-panel-title"><a href="#1638789177192-eb081da0-928d" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Čtvrtek</span></a></h4></div><div class="vc_tta-panel-body">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Pizzy</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Funghi</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>135 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Contadina</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Speciale</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>149 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Těstoviny</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Tagliatele Carbonara</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Gnocchi Bolognese</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>149 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Saláty</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Primavera</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>135 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div></div></div><div class="vc_tta-panel" id="1638789175085-ee6a4841-2c29" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h4 class="vc_tta-panel-title"><a href="#1638789175085-ee6a4841-2c29" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Pátek</span></a></h4></div><div class="vc_tta-panel-body">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Pizzy</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Prosciutto</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>135 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Hawai</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Saporita</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>149 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Těstoviny</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Penne Pollo Spinaci</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div><div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Spaghetti Amatriciana</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>139 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div>
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<h3>Saláty</h3>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_row wpb_row vc_inner vc_row-fluid"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-8"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p>Montana</p>

\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p><strong>135 Kč</strong></p>

\t\t</div>
\t</div>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-4"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br><br>
\t\t</div>
\t</div>
<div class="wpb_gallery wpb_content_element vc_clearfix" ><div class="wpb_wrapper"><div class="wpb_gallery_slides wpb_flexslider flexslider_slide flexslider" data-interval="3" data-flex_fx="slide"><ul class="slides"><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/4maggi.jpg" width="820" height="750" alt="4maggi" title="4maggi" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/penne_amatriciana2.jpg" width="820" height="750" alt="penne_amatriciana2" title="penne_amatriciana2" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/butrio.jpg" width="820" height="750" alt="butrio" title="butrio" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/fusilli_amatriciana2.jpg" width="820" height="750" alt="fusilli_amatriciana2" title="fusilli_amatriciana2" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/caesar.jpg" width="820" height="750" alt="caesar" title="caesar" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/quattro_stagioni.jpg" width="820" height="750" alt="quattro_stagioni" title="quattro_stagioni" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/lasagne.jpg" width="820" height="750" alt="lasagne" title="lasagne" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/diavola.jpg" width="820" height="750" alt="diavola" title="diavola" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/primavera.jpg" width="820" height="750" alt="primavera" title="primavera" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/spaghetti_pollospinaci.jpg" width="820" height="750" alt="spaghetti_pollospinaci" title="spaghetti_pollospinaci" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/new_TBD.jpg" width="820" height="750" alt="new_TBD" title="new_TBD" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/alpina.jpg" width="820" height="750" alt="alpina" title="alpina" /></li><li><img class="" src="https://www.carusorestaurant.cz/wp-content/uploads/2021/12/mezzogiorno.jpg" width="820" height="750" alt="mezzogiorno" title="mezzogiorno" /></li></ul></div></div></div></div></div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid"><div class="container"><div class="row"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper">
\t<div class="wpb_text_column wpb_content_element " >
\t\t<div class="wpb_wrapper">
\t\t\t<p style="text-align: center;">K dennímu obědovému menu s sebou si účtujeme +15 Kč za obal.</p>

\t\t</div>
\t</div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br>
\t\t</div>
\t</div>
<div class="vc_btn3-container vc_btn3-center" >
\t<a class="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-modern vc_btn3-color-black" href="/menu-2/" title="">ZOBRAZIT CELÉ MENU</a></div>

\t<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
\t\t<div class="wpb_wrapper">
\t\t\t<br><br>
\t\t</div>
\t</div>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper"></div></div></div></div></div></div>



\t\t<!-- footer 
\t\t\t================================================== -->
\t\t<footer>
\t\t\t\t\t<div class="last-line">
\t\t\t\t<div class="container">
\t\t\t\t\t<div class="row">
\t\t\t\t\t\t<div class="col-md-6">
\t\t\t\t\t\t\t<p><a href="/">Homepage</a> | <a href="/menu-2/">Jídelní lístek</a> | <a href="/kontakt/">Kontakt</a> | <a href="/kariera/">Kariéra</a> | <a href="/stravenky/">Stravenky</a><p></p>

© 2019. Designed by <a href="https://www.pavelminarik.cz">Pavel Minarik - Marketing Consultant</a></p>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="col-md-6">
\t\t\t\t\t\t\t<ul class="social-icons">
\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t<li><a href="https://www.facebook.com/CarusoPizza/">facebook</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="https://www.instagram.com/carusopizza/">instagram</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</footer>
\t\t<!-- End footer -->

\t</div>
\t<!-- End Container -->
\t<link rel='stylesheet' id='vc_tta_style-css'  href='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/css/js_composer_tta.min.css?ver=5.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='flexslider-css'  href='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/lib/bower/flexslider/flexslider.min.css?ver=5.1.1' type='text/css' media='all' />
<script type='text/javascript'>
/* <![CDATA[ */
var wpcf7 = {"apiSettings":{"root":"https:\\/\\/www.carusorestaurant.cz\\/wp-json\\/contact-form-7\\/v1","namespace":"contact-form-7\\/v1"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.1.6'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/themes/restory/js/bootstrap.min.js?ver=4.9.8'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/themes/restory/js/jquery-ui.min.js?ver=4.9.8'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/themes/restory/js/jquery.flexslider.js?ver=4.9.8'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/themes/restory/js/owl.carousel.min.js?ver=4.9.8'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-includes/js/imagesloaded.min.js?ver=3.2.0'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-includes/js/masonry.min.js?ver=3.3.2'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/lib/bower/isotope/dist/isotope.pkgd.min.js?ver=5.1.1'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/themes/restory/js/script.js?ver=4.9.8'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-includes/js/wp-embed.min.js?ver=4.9.8'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/js/dist/js_composer_front.min.js?ver=5.1.1'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/lib/vc_accordion/vc-accordion.min.js?ver=5.1.1'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/lib/vc-tta-autoplay/vc-tta-autoplay.min.js?ver=5.1.1'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/lib/vc_tabs/vc-tabs.min.js?ver=5.1.1'></script>
<script type='text/javascript' src='https://www.carusorestaurant.cz/wp-content/plugins/js_composer/assets/lib/bower/flexslider/jquery.flexslider-min.js?ver=5.1.1'></script>
</body>
</html>
`