import Padagali from "../../src/menus/Padagali";

describe("Padagali", () => {
    let requestMock;
    let testedClass: Padagali;
    const originalDate = global.Date;

    beforeAll(() => {
        requestMock = jest.fn();
        const mockDate: any = function () {
            this.getDay = () => 3;
        };

        global.Date = mockDate;
    });

    beforeEach(() => {
        testedClass = new Padagali({get: requestMock});
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
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29 CZK",
            "text": "Tomato Soup (Rajská polévka)",
            "title": "Padagali",
            "title_link": "https://padagali.cz/denni-menu/"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chicken Madras (Kuřecí kostky s ostrou čennajskou omáčkou)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Methi Chicken (Kuřecí kostky v bylinkové kari omáčce se sušenými listy pískavice)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Rajma Curry (Červené fazole v kari omáčce)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 175 CZK",
            "text": "Chicken Salad (Zeleninový salát s kuřecím masem)"
        }
    ],
    [
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29 CZK",
            "text": "Bean Soup (Fazolová polévka)",
            "title": "Padagali",
            "title_link": "https://padagali.cz/denni-menu/"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chicken Vindaloo (Kuřecí kostky ve velmi ostré omáčce s bramborami)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Butter Chicken (Pečené kuřecí kousky v jemné máslové omáčce)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Kadai Paneer (Indický domácí sýr vařený s paprikou v cibulovo-rajčatové omáčce)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 175 CZK",
            "text": "Chicken Salad (Zeleninový salát s kuřecím masem)"
        }
    ],
    [
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29 CZK",
            "text": "Dal Soup (Čočková polévka)",
            "title": "Padagali",
            "title_link": "https://padagali.cz/denni-menu/"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chicken Tikka Masala (Kuřecí kostky ve středně pálivé omáčce s cibulí, rajčaty a paprikou)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chicken Curry (Kuřecí kostky v tradiční kari omáčce)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Palak Kofta (Bramborové nugetky ve špenátové kari omáčce)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 175 CZK",
            "text": "Chicken Salad (Zeleninový salát s kuřecím masem)"
        }
    ],
    [
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29 CZK",
            "text": "Shrimp Soup (Krevetová polévka)",
            "title": "Padagali",
            "title_link": "https://padagali.cz/denni-menu/"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chicken Fal (Kuřecí kostky v extrémně ostré kari omáčce)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chicken Mango (Kuřecí kostky v mangové kari omáčce)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chana Masala (Cizrna v kořeněné omáčce s cibulí)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 175 CZK",
            "text": "Chicken Salad (Zeleninový salát s kuřecím masem)"
        }
    ],
    [
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 29 CZK",
            "text": "Broccoli Soup (Brokolicový krém)",
            "title": "Padagali",
            "title_link": "https://padagali.cz/denni-menu/"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chicken Jalfrezi (Kuřecí kostky v pikantní omáčce s cibulí, rajčaty, paprikou a čili)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Chicken Korma (Kuřecí kostky v jemné smetanové omáčce s kokosem a kešu)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155 CZK",
            "text": "Matar Baingan Bharta (Lilek připravený v peci tandoor v kari omáčce s hráškem)"
        },
        {
            "color": "#ffdcff",
            "fallback": "Restaurant menu",
            "footer": "Cena: 175 CZK",
            "text": "Chicken Salad (Zeleninový salát s kuřecím masem)"
        }
    ]
];

const response = `
<!DOCTYPE html>
<html lang="cs-CZ">
<head>
\t<meta charset="UTF-8">
\t<meta name="viewport" content="width=device-width, initial-scale=1">
\t<link rel="profile" href="http://gmpg.org/xfn/11">

\t<link href="https://fonts.googleapis.com" rel="preconnect" crossorigin><link href="https://fonts.gstatic.com" rel="preconnect" crossorigin><link href="https://padagali.cz" rel="preconnect" crossorigin><title>Denní menu - Padagali</title>
<link rel="alternate" href="https://padagali.cz/denni-menu/" hreflang="cs" />
<link rel="alternate" href="https://padagali.cz/en/lunch-menu/" hreflang="en" />
<meta name="description" content="Denní menu podáváme od 11 do 15 hodin každý všední den. V případě potřeby si můžete objednat denní menu k vyzvednutí pomocí tlačítka níže. OBJEDNAT DENNÍ MENU OBJEDNAT Objednávání je možné pouze online, a to vždy daný den. &nbsp; &nbsp; Denní menu vydáváme každý všední den od 11 do 15&hellip;" />
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<link rel="canonical" href="https://padagali.cz/denni-menu/" />
<meta property="og:url" content="https://padagali.cz/denni-menu/" />
<meta property="og:site_name" content="Padagali" />
<meta property="og:locale" content="cs_CZ" />
<meta property="og:locale:alternate" content="en_US" />
<meta property="og:type" content="article" />
<meta property="article:author" content="https://www.facebook.com/padagalibrno" />
<meta property="article:publisher" content="https://www.facebook.com/padagalibrno" />
<meta property="og:title" content="Denní menu - Padagali" />
<meta property="og:description" content="Denní menu podáváme od 11 do 15 hodin každý všední den. V případě potřeby si můžete objednat denní menu k vyzvednutí pomocí tlačítka níže. OBJEDNAT DENNÍ MENU OBJEDNAT Objednávání je možné pouze online, a to vždy daný den. &nbsp; &nbsp; Denní menu vydáváme každý všední den od 11 do 15&hellip;" />
<meta property="og:image" content="https://padagali.cz/wp-content/uploads/2018/08/decorative-line.png" />
<meta property="og:image:secure_url" content="https://padagali.cz/wp-content/uploads/2018/08/decorative-line.png" />
<meta property="og:image:width" content="354" />
<meta property="og:image:height" content="28" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Denní menu - Padagali" />
<meta name="twitter:description" content="Denní menu podáváme od 11 do 15 hodin každý všední den. V případě potřeby si můžete objednat denní menu k vyzvednutí pomocí tlačítka níže. OBJEDNAT DENNÍ MENU OBJEDNAT Objednávání je možné pouze online, a to vždy daný den. &nbsp; &nbsp; Denní menu vydáváme každý všední den od 11 do 15&hellip;" />
<meta name="twitter:image" content="https://padagali.cz/wp-content/uploads/2018/08/decorative-line.png" />
<link rel='dns-prefetch' href='//www.fbgcdn.com' />
<link rel='dns-prefetch' href='//maps.google.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//v0.wordpress.com' />
<link rel="alternate" type="application/rss+xml" title="Padagali &raquo; RSS zdroj" href="https://padagali.cz/feed/" />
<link rel="alternate" type="application/rss+xml" title="Padagali &raquo; RSS komentářů" href="https://padagali.cz/comments/feed/" />
<link rel='stylesheet' id='customify-font-stylesheet-0-css' href='https://padagali.cz/wp-content/themes/osteria/assets/fonts/woodfordbourne/stylesheet.css' type='text/css' media='all' />
<link rel='stylesheet' id='customify-font-stylesheet-1-css' href='https://fonts.googleapis.com/css2?family=Oswald:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700&#038;family=PT%20Serif:ital,wght@0,400;0,700;1,400;1,700&#038;display=swap' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css' href='https://padagali.cz/wp-includes/css/dist/block-library/style.min.css?ver=6.4.2' type='text/css' media='all' />
<style id='wp-block-library-inline-css' type='text/css'>
.has-text-align-justify{text-align:justify;}
</style>
<link rel='stylesheet' id='mediaelement-css' href='https://padagali.cz/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.17' type='text/css' media='all' />
<link rel='stylesheet' id='wp-mediaelement-css' href='https://padagali.cz/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=6.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='online-css-css' href='https://www.fbgcdn.com/embedder/css/order-online.css?ver=6.4.2' type='text/css' media='all' />
<style id='classic-theme-styles-inline-css' type='text/css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='eeb-css-frontend-css' href='https://padagali.cz/wp-content/plugins/email-encoder-bundle/core/includes/assets/css/style.css?ver=240111-85528' type='text/css' media='all' />
<link rel='stylesheet' id='gridable-css' href='https://padagali.cz/wp-content/plugins/gridable/public/css/gridable-style.css?ver=1.2.9' type='text/css' media='all' />
<link rel='stylesheet' id='osteria-style-css' href='https://padagali.cz/wp-content/themes/osteria/style.css?ver=2.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='osteria-fonts-woodfordbourne-css' href='https://padagali.cz/wp-content/themes/osteria/assets/fonts/woodfordbourne/stylesheet.css?ver=6.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='osteria-fonts-pecitabook-css' href='https://padagali.cz/wp-content/themes/osteria/assets/fonts/pecitabook/stylesheet.css?ver=6.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='osteria-google-fonts-css' href='//fonts.googleapis.com/css?family=Neuton%3A200%2C300%2C400%2C400i%2C700%2C800%7CPT+Serif%3A400%2C400i%2C700%2C700i&#038;subset=latin%2Clatin-ext&#038;ver=6.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='genericons-css' href='https://padagali.cz/wp-content/plugins/pixelgrade-care/theme-helpers/jetpack-fallbacks/genericons/genericons/genericons.css?ver=3.1' type='text/css' media='all' />
<link rel='stylesheet' id='jetpack_css-css' href='https://padagali.cz/wp-content/plugins/jetpack/css/jetpack.css?ver=13.0' type='text/css' media='all' />
<link rel='stylesheet' id='restaurant_system_public_style-css' href='https://padagali.cz/wp-content/plugins/menu-ordering-reservations/assets/css/public-style.css?ver=2.4.0' type='text/css' media='all' />
<script type="text/javascript" src="https://www.fbgcdn.com/embedder/js/ewm2.js?ver=6.4.2" id="jsforwp-blocks-frontend-js-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-content/plugins/email-encoder-bundle/core/includes/assets/js/custom.js?ver=240111-85528" id="eeb-js-frontend-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-content/plugins/gridable/public/js/gridable-scripts.js?ver=1.2.9" id="gridable-js"></script>
<link rel="https://api.w.org/" href="https://padagali.cz/wp-json/" /><link rel="alternate" type="application/json" href="https://padagali.cz/wp-json/wp/v2/pages/75" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://padagali.cz/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.4.2" />
<link rel='shortlink' href='https://padagali.cz/?p=75' />
\t\t<!-- Custom Logo: hide header text -->
\t\t<style id="custom-logo-css" type="text/css">
\t\t\t.site-title, .site-description-text {
\t\t\t\tposition: absolute;
\t\t\t\tclip: rect(1px, 1px, 1px, 1px);
\t\t\t}
\t\t</style>
\t\t<link rel="alternate" type="application/json+oembed" href="https://padagali.cz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fpadagali.cz%2Fdenni-menu%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://padagali.cz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fpadagali.cz%2Fdenni-menu%2F&#038;format=xml" />
<link rel="icon" href="https://padagali.cz/wp-content/uploads/2018/09/cropped-Logo-z-FB-32x32.png" sizes="32x32" />
<link rel="icon" href="https://padagali.cz/wp-content/uploads/2018/09/cropped-Logo-z-FB-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://padagali.cz/wp-content/uploads/2018/09/cropped-Logo-z-FB-180x180.png" />
<meta name="msapplication-TileImage" content="https://padagali.cz/wp-content/uploads/2018/09/cropped-Logo-z-FB-270x270.png" />
\t\t\t<style id="customify_output_style">
\t\t\t\t:root { --sm-color-primary: #fe9802; }
:root { --sm-color-secondary: #ff5b95; }
:root { --sm-color-tertiary: #ef6fff; }
:root { --sm-dark-primary: #24211e; }
:root { --sm-dark-secondary: #4d4232; }
:root { --sm-dark-tertiary: #9e9b96; }
:root { --sm-light-primary: #faf8f5; }
:root { --sm-light-secondary: #fcf4e8; }
:root { --sm-light-tertiary: #f4edf5; }
.site-logo img, .custom-logo-link img { max-height: 34px; }
.c-navbar { height: 110px; }
body:not(.has-hero) .u-header-height-padding-top { padding-top: 110px; }
@media screen and (min-height: 768px) {
.admin-bar.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--full {
min-height: calc(100vh - 156px);
}
}
.admin-bar.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--full {
min-height: calc(100vh - 142px);
}
.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--full {
min-height: calc(100vh - 110px);
}
@media screen and (min-height: 768px) {
.admin-bar.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--two-thirds {
min-height: calc(66.666666vh - 156px);
}
}
.admin-bar.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--two-thirds {
min-height: calc(66.666666vh - 142px);
}
.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--two-thirds {
min-height: calc(66.666666vh - 110px);
}
@media screen and (min-height: 768px) {
.admin-bar.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--half {
min-height: calc(50vh - 156px);
}
}
.admin-bar.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--half {
min-height: calc(50vh - 142px);
}
.u-site-header-sticky:not(.u-site-header-transparent) article:first-of-type .c-hero.c-hero--half {
min-height: calc(50vh - 110px);
}

\t.c-navbar ul {
\t\tmargin-left: -24px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.c-navbar ul {
\t\t\t\t\tmargin-left: -19px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.c-navbar ul {
\t\t\t\t\tmargin-left: -16px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.c-navbar ul {
\t\t\t\t\tmargin-left: -14px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.c-navbar ul {
\t\t\t\t\tmargin-left: -12px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.c-navbar li {
\t\tmargin-left: 24px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.c-navbar li {
\t\t\t\t\tmargin-left: 19px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.c-navbar li {
\t\t\t\t\tmargin-left: 16px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.c-navbar li {
\t\t\t\t\tmargin-left: 14px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.c-navbar li {
\t\t\t\t\tmargin-left: 12px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.u-header-sides-spacing {
\t\tpadding-left: 40px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-header-sides-spacing {
\t\t\t\t\tpadding-left: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-header-sides-spacing {
\t\t\t\t\tpadding-left: 26px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-header-sides-spacing {
\t\t\t\t\tpadding-left: 22px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-header-sides-spacing {
\t\t\t\t\tpadding-left: 19px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.u-header-sides-spacing {
\t\tpadding-right: 40px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-header-sides-spacing {
\t\t\t\t\tpadding-right: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-header-sides-spacing {
\t\t\t\t\tpadding-right: 26px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-header-sides-spacing {
\t\t\t\t\tpadding-right: 22px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-header-sides-spacing {
\t\t\t\t\tpadding-right: 19px;
\t\t\t\t}
\t\t\t}
\t\t\t.entry-content div[id="ot-reservation-widget"] .ot-dtp-picker-button { color: #24211e; }
.c-btn,
 button[type="submit"],
 input[type="submit"],
 .post-return-button:hover:before { background-color: #24211e; }
.c-btn,
 button[type="submit"],
 input[type="submit"] { border-color: #24211e; }
.entry-content .dark div[id="ot-reservation-widget"],
 .entry-content div[id="ot-reservation-widget"] { background-color: #24211e; }
.u-header-background,
 .site-header, 
 .u-site-header-sticky .site-header--not-top,
 .single.u-site-header-sticky:not(.u-site-header-transparent) .site-header,
 .single.entry-image--none.u-site-header-sticky .site-header--not-top { background-color: #faf8f5; }
.u-container-width { max-width: 1280px; }

\t.u-container-sides-spacing {
\t\tpadding-left: 60px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-container-sides-spacing {
\t\t\t\t\tpadding-left: 46px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-container-sides-spacing {
\t\t\t\t\tpadding-left: 37px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-container-sides-spacing {
\t\t\t\t\tpadding-left: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-container-sides-spacing {
\t\t\t\t\tpadding-left: 27px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.u-container-sides-spacing {
\t\tpadding-right: 60px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-container-sides-spacing {
\t\t\t\t\tpadding-right: 46px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-container-sides-spacing {
\t\t\t\t\tpadding-right: 37px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-container-sides-spacing {
\t\t\t\t\tpadding-right: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-container-sides-spacing {
\t\t\t\t\tpadding-right: 27px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.mce-content-body {
\t\tborder-width: 60px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.mce-content-body {
\t\t\t\t\tborder-width: 46px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.mce-content-body {
\t\t\t\t\tborder-width: 37px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.mce-content-body {
\t\t\t\t\tborder-width: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.mce-content-body {
\t\t\t\t\tborder-width: 27px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.u-content-top-spacing {
\t\tpadding-top: 56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-content-top-spacing {
\t\t\t\t\tpadding-top: 43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-content-top-spacing {
\t\t\t\t\tpadding-top: 35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-content-top-spacing {
\t\t\t\t\tpadding-top: 29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-content-top-spacing {
\t\t\t\t\tpadding-top: 25px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.u-content-bottom-spacing {
\t\tpadding-bottom: 56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-content-bottom-spacing {
\t\t\t\t\tpadding-bottom: 43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-content-bottom-spacing {
\t\t\t\t\tpadding-bottom: 35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-content-bottom-spacing {
\t\t\t\t\tpadding-bottom: 29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-content-bottom-spacing {
\t\t\t\t\tpadding-bottom: 25px;
\t\t\t\t}
\t\t\t}
\t\t\t.comments-area, .related-posts-container { padding-top: 56px; }
.comments-area { margin-top: 56px; }
.comments-area { padding-bottom: 56px; }
.u-content-width > :not([class*="align"]):not([class*="gallery"]),
 .mce-content-body:not([class*="page-template-full-width"]) > :not([class*="align"]):not([data-wpview-type*="gallery"]):not(.mceTemp) { max-width: 1000px; }
html { border-width: 0px; }
html, .u-site-header-sticky .site-header { border-color: #faf8f5; }
.u-page-title-color { color: #4d4232; }
.h0, 
 .display { color: #4d4232; }
body { color: #4d4232; }
.page-numbers.current[class][class],
 .menu-list__item-highlight-title,
 .menu-list__item-price.highlighted { background-color: #4d4232; }
.menu-list__item--highlight { border-color: #4d4232; }
select { color: #4d4232; }
a { color: #4d4232; }
.back-to-top,
 .entry-content a.c-btn-link:not(.c-btn-directional):hover { color: #4d4232; }
.entry-content a.c-btn-link:not(.c-btn-directional):hover { border-color: #4d4232; }
a:hover, a:active { color: #fe9802; }
.c-gallery--woocommerce .product .price,
 .woocommerce-product-category,
 .c-tabs__nav a.current { color: #fe9802; }
.u-buttons-solid[class] .c-btn--sale-flash,
 .u-buttons-solid[class][class][class] .add_to_cart_button,
 .u-buttons-solid[class][class][class] .single_add_to_cart_button[class][class][class][class][class],
 .u-buttons-solid[class] .product .cart .qty[class][class][class],
 .select2-container[class] .select2-results__option--highlighted[aria-selected] { background-color: #fe9802; }
.u-buttons-solid[class][class] .c-btn--sale-flash,
 .u-buttons-solid[class][class] .add_to_cart_button,
 .u-buttons-solid[class][class] .single_add_to_cart_button[class][class][class][class][class],
 .c-card:hover .u-buttons-solid[class][class] .add_to_cart_button:hover,
 .c-card:hover .u-buttons-solid[class][class] .single_add_to_cart_button[class][class][class][class][class],
 .u-buttons-solid[class][class] .product .cart .qty[class][class][class] { border-color: #fe9802; }
h1, .h1 { color: #4d4232; }
h2, .h2 { color: #4d4232; }
h3, .h3 { color: #4d4232; }
h4, .h4 { color: #4d4232; }
h5, .h5 { color: #4d4232; }
h6, .h6 { color: #4d4232; }
.u-content-background, .mce-content-body { background-color: #faf8f5; }
.page-numbers.current[class][class],
 .entry-content .dark div[id="ot-reservation-widget"],
 .menu-list__item-highlight-title,
 .menu-list__item-price.highlighted,
 .c-card__add-to-cart[class][class][class][class] .add_to_cart_button:hover,
 .u-buttons-solid[class][class][class] .add_to_cart_button:hover,
 .woocommerce-checkout .button[class][class][class][class][class][class],
 .woocommerce-checkout .button[class][class][class][class][class][class]:hover { color: #faf8f5; }
.dark div[id="ot-reservation-widget"] .ot-dtp-picker-button, 
 .dark div[id="ot-reservation-widget"] .ot-dtp-picker-button:hover,
 .column-style--highlighted,
 .menu-list__item-title .item_title,
 .c-btn:not(.c-btn-link).c-btn-directional--left:before { background-color: #faf8f5; }

\t.row__wrapper {
\t\tmargin-bottom: 56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.row__wrapper {
\t\t\t\t\tmargin-bottom: 43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.row__wrapper {
\t\t\t\t\tmargin-bottom: 35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.row__wrapper {
\t\t\t\t\tmargin-bottom: 29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.row__wrapper {
\t\t\t\t\tmargin-bottom: 25px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.row-style--strip {
\t\tpadding-bottom: 56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.row-style--strip {
\t\t\t\t\tpadding-bottom: 43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.row-style--strip {
\t\t\t\t\tpadding-bottom: 35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.row-style--strip {
\t\t\t\t\tpadding-bottom: 29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.row-style--strip {
\t\t\t\t\tpadding-bottom: 25px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.row-style--strip {
\t\tpadding-top: 56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.row-style--strip {
\t\t\t\t\tpadding-top: 43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.row-style--strip {
\t\t\t\t\tpadding-top: 35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.row-style--strip {
\t\t\t\t\tpadding-top: 29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.row-style--strip {
\t\t\t\t\tpadding-top: 25px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.row-style--strip + .row-style--strip {
\t\tmargin-top: -56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.row-style--strip + .row-style--strip {
\t\t\t\t\tmargin-top: -43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.row-style--strip + .row-style--strip {
\t\t\t\t\tmargin-top: -35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.row-style--strip + .row-style--strip {
\t\t\t\t\tmargin-top: -29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.row-style--strip + .row-style--strip {
\t\t\t\t\tmargin-top: -25px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.column__wrapper {
\t\tpadding-left: 56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.column__wrapper {
\t\t\t\t\tpadding-left: 43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.column__wrapper {
\t\t\t\t\tpadding-left: 35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.column__wrapper {
\t\t\t\t\tpadding-left: 29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.column__wrapper {
\t\t\t\t\tpadding-left: 25px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.column-style--highlighted, .column-style--boxed {
\t\tpadding: 56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.column-style--highlighted, .column-style--boxed {
\t\t\t\t\tpadding: 43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.column-style--highlighted, .column-style--boxed {
\t\t\t\t\tpadding: 35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.column-style--highlighted, .column-style--boxed {
\t\t\t\t\tpadding: 29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.column-style--highlighted, .column-style--boxed {
\t\t\t\t\tpadding: 25px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.row {
\t\tmargin-left: -56px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.row {
\t\t\t\t\tmargin-left: -43px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.row {
\t\t\t\t\tmargin-left: -35px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.row {
\t\t\t\t\tmargin-left: -29px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.row {
\t\t\t\t\tmargin-left: -25px;
\t\t\t\t}
\t\t\t}
\t\t\t.row-style--strip,
 .entry-content .dark div[id="ot-reservation-widget"] .ot-dtp-picker-button:hover,
 .entry-content div[id="ot-reservation-widget"] .ot-dtp-picker-button:hover { background-color: #fcf4e8; }
.single .entry-header:before { color: #fcf4e8; }
.comments-area,
 .widget-area .search-form,
 .entry-content .dark div[id="ot-reservation-widget"] .ot-dtp-picker-button:hover,
 .entry-content div[id="ot-reservation-widget"] .ot-dtp-picker-button:hover { border-color: #fcf4e8; }
.column-style--highlighted { background-color: #faf8f5; }
.column-style--boxed { background-color: #24211e; }
.column-style--boxed *,
 .column-style--boxed a:hover { color: #faf8f5; }
.u-buttons-solid .button,.u-buttons-solid .c-btn,.u-buttons-solid .c-comments-toggle__label,.u-buttons-solid button[type=reset],.u-buttons-solid button[type=submit],.u-buttons-solid input[type=button],.u-buttons-solid input[type=submit],.u-buttons-solid [id="subscribe-submit"] { background-color: #23252D; }
.u-buttons-outline .button,.u-buttons-outline .c-btn,.u-buttons-outline .c-comments-toggle__label,.u-buttons-outline button[type=reset],.u-buttons-outline button[type=submit],.u-buttons-outline input[type=button],.u-buttons-outline input[type=submit],.u-buttons-outline [id="subscribe-submit"],.u-buttons-solid .button:hover,.u-buttons-solid .c-btn:hover,.u-buttons-solid .c-comments-toggle__label:hover,.u-buttons-solid button[type=reset]:hover,.u-buttons-solid button[type=submit]:hover,.u-buttons-solid input[type=button]:hover,.u-buttons-solid input[type=submit]:hover,.u-buttons-solid [id="subscribe-submit"]:hover,.u-buttons-solid .button:active,.u-buttons-solid .c-btn:active,.u-buttons-solid .c-comments-toggle__label:active,.u-buttons-solid button[type=reset]:active,.u-buttons-solid button[type=submit]:active,.u-buttons-solid input[type=button]:active,.u-buttons-solid input[type=submit]:active,.u-buttons-solid [id="subscribe-submit"]:active,.u-buttons-solid .button:focus,.u-buttons-solid .c-btn:focus,.u-buttons-solid .c-comments-toggle__label:focus,.u-buttons-solid button[type=reset]:focus,.u-buttons-solid button[type=submit]:focus,.u-buttons-solid input[type=button]:focus,.u-buttons-solid input[type=submit]:focus,.u-buttons-solid [id="subscribe-submit"]:focus { color: #23252D; }
.c-btn:hover:not(.c-btn-link).c-btn-directional--right:after,
 .c-btn:hover:not(.c-btn-link).c-btn-directional--right:before,
 .u-buttons-outline .c-btn:not(.c-btn-link).c-btn-directional--right:after,
 .u-buttons-outline .c-btn:not(.c-btn-link).c-btn-directional--right:before { background-color: #23252D; }
.c-btn:not(.c-btn-link):not(.back-to-top) { border-color: #23252D; }
.button,.c-btn,.c-comments-toggle__label,button[type=reset],button[type=submit],input[type=button],input[type=submit],[id="subscribe-submit"] { color: #FFFFFF; }
.c-btn:not(.c-btn-link).c-btn-directional--right:after,
 .c-btn:not(.c-btn-link).c-btn-directional--right:before { background-color: #FFFFFF; }

\t.u-footer-top-spacing {
\t\tpadding-top: 50px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-footer-top-spacing {
\t\t\t\t\tpadding-top: 39px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-footer-top-spacing {
\t\t\t\t\tpadding-top: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-footer-top-spacing {
\t\t\t\t\tpadding-top: 26px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-footer-top-spacing {
\t\t\t\t\tpadding-top: 23px;
\t\t\t\t}
\t\t\t}
\t\t\t.c-footer__zone:not(:empty) + .c-footer__zone { margin-top: 50px; }

\t.u-footer-bottom-spacing {
\t\tpadding-bottom: 50px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-footer-bottom-spacing {
\t\t\t\t\tpadding-bottom: 39px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-footer-bottom-spacing {
\t\t\t\t\tpadding-bottom: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-footer-bottom-spacing {
\t\t\t\t\tpadding-bottom: 26px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-footer-bottom-spacing {
\t\t\t\t\tpadding-bottom: 23px;
\t\t\t\t}
\t\t\t}
\t\t\t.c-footer .widget__title { color: #faf8f5; }
.c-footer, .back-to-top:hover { color: #faf8f5; }
.back-to-top:hover { border-bottom-color: #faf8f5; }
.site-footer select { color: #faf8f5; }
.c-footer a { color: #faf8f5; }
.u-footer-background { background: #24211e; }
.u-blog-grid-width { max-width: 1280px; }

\t.u-blog-sides-spacing {
\t\tpadding-left: 60px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-blog-sides-spacing {
\t\t\t\t\tpadding-left: 46px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-blog-sides-spacing {
\t\t\t\t\tpadding-left: 37px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-blog-sides-spacing {
\t\t\t\t\tpadding-left: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-blog-sides-spacing {
\t\t\t\t\tpadding-left: 27px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t.u-blog-sides-spacing {
\t\tpadding-right: 60px;
\t}
\t
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t.u-blog-sides-spacing {
\t\t\t\t\tpadding-right: 46px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t.u-blog-sides-spacing {
\t\t\t\t\tpadding-right: 37px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t.u-blog-sides-spacing {
\t\t\t\t\tpadding-right: 31px;
\t\t\t\t}
\t\t\t}
\t\t\t
\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t.u-blog-sides-spacing {
\t\t\t\t\tpadding-right: 27px;
\t\t\t\t}
\t\t\t}
\t\t\t.c-gallery--blog.c-gallery--regular .c-card__frame {
\t\t\tpadding-top: 140%;
\t\t}
\t\t.dummy { dummy: 3px; }
.c-gallery--blog.c-gallery--packed,
\t\t\t.c-gallery--blog.c-gallery--packed .c-gallery__item {
\t\t\tmargin-top: 0
\t\t\t}
\t\t\t@media only screen and (min-width: 35em) {
\t\t\t\t.c-gallery--blog.c-gallery--packed .c-gallery__item {
\t\t\t\tpadding-top: calc(75.833333333333% - 75.075px);
\t\t\t\tmargin-bottom: 33px
\t\t\t\t}
\t\t\t\t.c-gallery--blog.c-gallery--packed .c-gallery__item.jetpack-blog-tag-featured {
\t\t\t\tpadding-top: calc(151.66666666667% - 117.15px);
\t\t\t\t}
\t\t\t}
\t\t\t@media only screen and (min-width: 50em) {
\t\t\t\t.c-gallery--blog.c-gallery--packed .c-gallery__item {
\t\t\t\tpadding-top: calc(75.833333333333% - 95.55px);
\t\t\t\tmargin-bottom: 42px
\t\t\t\t}
\t\t\t\t.c-gallery--blog.c-gallery--packed .c-gallery__item.jetpack-blog-tag-featured {
\t\t\t\tpadding-top: calc(151.66666666667% - 149.1px);
\t\t\t\t}
\t\t\t}
\t\t\t@media only screen and (min-width: 80em) {
\t\t\t\t.c-gallery--blog.c-gallery--packed .c-gallery__item {
\t\t\t\tpadding-top: calc(75.833333333333% - 136.5px);
\t\t\t\tmargin-bottom: 60px
\t\t\t\t}
\t\t\t\t.c-gallery--blog.c-gallery--packed .c-gallery__item.jetpack-blog-tag-featured {
\t\t\t\tpadding-top: calc(151.66666666667% - 213px);
\t\t\t\t}
\t\t\t}
\t\t\t.c-gallery--blog {
\t\t\tmargin-top: calc(-60px);
\t\t\t}
\t\t\t.c-gallery--blog > * {
\t\t\tmargin-top: 60px;
\t\t\t}
\t\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t\t.c-gallery--blog {
\t\t\t\t\tmargin-top: calc(-46px);
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog > * {
\t\t\t\t\tmargin-top: 46px;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t\t.c-gallery--blog {
\t\t\t\t\tmargin-top: calc(-37px);
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog > * {
\t\t\t\t\tmargin-top: 37px;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t\t.c-gallery--blog {
\t\t\t\t\tmargin-top: calc(-31px);
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog > * {
\t\t\t\t\tmargin-top: 31px;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t\t.c-gallery--blog {
\t\t\t\t\tmargin-top: calc(-27px);
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog > * {
\t\t\t\t\tmargin-top: 27px;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t.c-gallery--blog {
\t\tmargin-left: -60px;
\t\t}
\t\t.c-gallery--blog > * {
\t\tpadding-left: 60px;
\t\t}
\t\t.c-gallery--blog.c-gallery--packed .c-card {
\t\tleft: 60px;
\t\t}
\t\t@media only screen and (max-width: 1360px) {
\t\t\t\t\t.c-gallery--blog {
\t\t\t\t\tmargin-left: -46px;
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog > * {
\t\t\t\t\tpadding-left: 46px;
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog.c-gallery--packed .c-card {
\t\t\t\t\tleft: 46px;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t@media only screen and (max-width: 1024px) {
\t\t\t\t\t.c-gallery--blog {
\t\t\t\t\tmargin-left: -37px;
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog > * {
\t\t\t\t\tpadding-left: 37px;
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog.c-gallery--packed .c-card {
\t\t\t\t\tleft: 37px;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t@media only screen and (max-width: 768px) {
\t\t\t\t\t.c-gallery--blog {
\t\t\t\t\tmargin-left: -31px;
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog > * {
\t\t\t\t\tpadding-left: 31px;
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog.c-gallery--packed .c-card {
\t\t\t\t\tleft: 31px;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t@media only screen and (max-width: 320px) {
\t\t\t\t\t.c-gallery--blog {
\t\t\t\t\tmargin-left: -27px;
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog > * {
\t\t\t\t\tpadding-left: 27px;
\t\t\t\t\t}
\t\t\t\t\t.c-gallery--blog.c-gallery--packed .c-card {
\t\t\t\t\tleft: 27px;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\t.c-gallery--blog .c-card__title { color: #FFFFFF; }
.c-gallery--blog .c-meta__primary { color: #FFFFFF; }
.c-gallery--blog .c-meta__secondary, .c-gallery--blog .c-meta__separator { color: #FFFFFF; }
.c-gallery--blog .c-card__excerpt { color: #FFFFFF; }
.c-gallery--blog .c-card__footer { color: #FFFFFF; }
.c-gallery--blog .c-card__thumbnail-background { background-color: #fe9802; }
.c-gallery--blog .c-card:hover .c-card__frame { opacity: 0.7; }
.comments-area,
 .comment-form input[type="text"],
 .comment-form input[type="email"],
 .comment__text { background-color: #f4edf5; }
.single.single .post-wrapper { border-color: #f4edf5; }

@media screen and (min-width: 50em) { 

\tbody:not(.u-site-header-transparent) .c-navbar,
 .u-site-header-sticky .site-header--not-top .c-navbar,
 .single.u-site-header-transparent .site-header--top .c-navbar,
 .c-burger,
 div.ot-dtp-picker .ot-dtp-picker-selector select { color: #24211e; }

\tbody:not(.u-site-header-transparent) .c-navbar li:hover,
 .u-site-header-sticky .site-header--not-top .c-navbar li:hover,
 .entry-header .entry-categories li:hover,
 .post-return-button:hover,
 .navigation .nav-links a:hover { color: #24211e; }

\tbody.u-site-header-transparent:not(.single) .site-header--top .c-navbar li:hover { color: #FFFFFF; }

\tbody.u-site-header-transparent:not(.single) .site-header--top .c-navbar { color: #FFFFFF; }

}

@media not screen and (min-width: 50em)  { 

\t.c-burger { color: #24211e; }

\t.c-navbar__content,
 .c-navbar__content li,
 .c-navbar__checkbox:checked ~ .c-navbar__label .c-burger { color: #faf8f5; }

}

@media not screen and (min-width: 50em) { 

\t.c-navbar__content { background-color: #24211e; }

\tbody.u-site-header-transparent .site-header--top .c-burger { color: #FFFFFF; }

}

@media only screen and (min-width: 50em) { 

\t.site-header--not-top .c-navbar--dropdown [class*="children"] .sub-menu,
 body:not(.u-site-header-transparent) .c-navbar--dropdown [class*="children"] .sub-menu,
 body:not(.u-site-header-transparent) .site-header--not-top .c-navbar--dropdown [class*="children"] .sub-menu { background-color: #faf8f5; }

\t.single[class],
 .single.entry-image--landscape .entry-header,
 .single-post .site-main { background-color: #f4edf5; }

}
\t\t\t</style>
\t\t\t<style id="customify_fonts_output">
\t.site-title { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 34px; font-weight: 700;line-height: 1;letter-spacing: 0em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {.site-title { font-size: 27px; } }
@media only screen and (max-width: 1024px) {.site-title { font-size: 23px; } }
@media only screen and (max-width: 768px) {.site-title { font-size: 19px; } }
@media only screen and (max-width: 320px) {.site-title { font-size: 17px; } }

.c-navbar { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 700;line-height: 1;letter-spacing: 0.08em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {.c-navbar { font-size: 14px; } }
@media only screen and (max-width: 1024px) {.c-navbar { font-size: 14px; } }
@media only screen and (max-width: 768px) {.c-navbar { font-size: 13px; } }
@media only screen and (max-width: 320px) {.c-navbar { font-size: 13px; } }

.widget-area--front-page { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400;line-height: 1.4;letter-spacing: 0em; text-transform: none;}
@media only screen and (max-width: 1360px) {.widget-area--front-page { font-size: 16px; } }
@media only screen and (max-width: 1024px) {.widget-area--front-page { font-size: 15px; } }
@media only screen and (max-width: 768px) {.widget-area--front-page { font-size: 15px; } }
@media only screen and (max-width: 320px) {.widget-area--front-page { font-size: 14px; } }

.display, .h0, .woocommerce-products-header__title { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 90px; font-weight: 200;line-height: 1.2;letter-spacing: 0.02em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {.display, .h0, .woocommerce-products-header__title { font-size: 70px; } }
@media only screen and (max-width: 1024px) {.display, .h0, .woocommerce-products-header__title { font-size: 57px; } }
@media only screen and (max-width: 768px) {.display, .h0, .woocommerce-products-header__title { font-size: 48px; } }
@media only screen and (max-width: 320px) {.display, .h0, .woocommerce-products-header__title { font-size: 42px; } }

body { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.8;letter-spacing: 0.03em; text-transform: none;}

.entry-content { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.66;letter-spacing: 0em; text-transform: none;}

blockquote { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 400;line-height: 1.2;letter-spacing: 0em; text-transform: none;}
@media only screen and (max-width: 1360px) {blockquote { font-size: 29px; } }
@media only screen and (max-width: 1024px) {blockquote { font-size: 24px; } }
@media only screen and (max-width: 768px) {blockquote { font-size: 21px; } }
@media only screen and (max-width: 320px) {blockquote { font-size: 18px; } }

h1, .h1 { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: 700;line-height: 1;letter-spacing: 0em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {h1, .h1 { font-size: 47px; } }
@media only screen and (max-width: 1024px) {h1, .h1 { font-size: 39px; } }
@media only screen and (max-width: 768px) {h1, .h1 { font-size: 33px; } }
@media only screen and (max-width: 320px) {h1, .h1 { font-size: 29px; } }

h2, .h2, .product_title[class] { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700;line-height: 1.3;letter-spacing: 0em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {h2, .h2, .product_title[class] { font-size: 22px; } }
@media only screen and (max-width: 1024px) {h2, .h2, .product_title[class] { font-size: 20px; } }
@media only screen and (max-width: 768px) {h2, .h2, .product_title[class] { font-size: 19px; } }
@media only screen and (max-width: 320px) {h2, .h2, .product_title[class] { font-size: 18px; } }

h3, .h3 { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 700;line-height: 1.3;letter-spacing: 0.07em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {h3, .h3 { font-size: 16px; } }
@media only screen and (max-width: 1024px) {h3, .h3 { font-size: 15px; } }
@media only screen and (max-width: 768px) {h3, .h3 { font-size: 15px; } }
@media only screen and (max-width: 320px) {h3, .h3 { font-size: 14px; } }

h4, .h4, .woocommerce-product-category, .woocommerce-checkout form .form-row input.input-text, .woocommerce-checkout form .form-row textarea, .select2-container--default .select2-selection--single .select2-selection__rendered { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 700;line-height: 1.2;letter-spacing: 0.2em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {h4, .h4, .woocommerce-product-category, .woocommerce-checkout form .form-row input.input-text, .woocommerce-checkout form .form-row textarea, .select2-container--default .select2-selection--single .select2-selection__rendered { font-size: 13px; } }
@media only screen and (max-width: 1024px) {h4, .h4, .woocommerce-product-category, .woocommerce-checkout form .form-row input.input-text, .woocommerce-checkout form .form-row textarea, .select2-container--default .select2-selection--single .select2-selection__rendered { font-size: 13px; } }
@media only screen and (max-width: 768px) {h4, .h4, .woocommerce-product-category, .woocommerce-checkout form .form-row input.input-text, .woocommerce-checkout form .form-row textarea, .select2-container--default .select2-selection--single .select2-selection__rendered { font-size: 12px; } }
@media only screen and (max-width: 320px) {h4, .h4, .woocommerce-product-category, .woocommerce-checkout form .form-row input.input-text, .woocommerce-checkout form .form-row textarea, .select2-container--default .select2-selection--single .select2-selection__rendered { font-size: 12px; } }

h5, .h5, .nav-links, .navigation, .pagination, .woocommerce-pagination, .menu-list__item-title .item_title, .menu-group__title, .post-return-button, .woocommerce-Reviews[class] .comment-form label { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 700;line-height: 1.2;letter-spacing: 0.15em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {h5, .h5, .nav-links, .navigation, .pagination, .woocommerce-pagination, .menu-list__item-title .item_title, .menu-group__title, .post-return-button, .woocommerce-Reviews[class] .comment-form label { font-size: 13px; } }
@media only screen and (max-width: 1024px) {h5, .h5, .nav-links, .navigation, .pagination, .woocommerce-pagination, .menu-list__item-title .item_title, .menu-group__title, .post-return-button, .woocommerce-Reviews[class] .comment-form label { font-size: 13px; } }
@media only screen and (max-width: 768px) {h5, .h5, .nav-links, .navigation, .pagination, .woocommerce-pagination, .menu-list__item-title .item_title, .menu-group__title, .post-return-button, .woocommerce-Reviews[class] .comment-form label { font-size: 12px; } }
@media only screen and (max-width: 320px) {h5, .h5, .nav-links, .navigation, .pagination, .woocommerce-pagination, .menu-list__item-title .item_title, .menu-group__title, .post-return-button, .woocommerce-Reviews[class] .comment-form label { font-size: 12px; } }

h6, .h6, .comment-reply-title a, .comment__metadata a, .edit-link a, .logged-in-as a, .reply a { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 700;line-height: 1.2;letter-spacing: 0.15em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {h6, .h6, .comment-reply-title a, .comment__metadata a, .edit-link a, .logged-in-as a, .reply a { font-size: 11px; } }
@media only screen and (max-width: 1024px) {h6, .h6, .comment-reply-title a, .comment__metadata a, .edit-link a, .logged-in-as a, .reply a { font-size: 11px; } }
@media only screen and (max-width: 768px) {h6, .h6, .comment-reply-title a, .comment__metadata a, .edit-link a, .logged-in-as a, .reply a { font-size: 11px; } }
@media only screen and (max-width: 320px) {h6, .h6, .comment-reply-title a, .comment__metadata a, .edit-link a, .logged-in-as a, .reply a { font-size: 11px; } }

html body .intro { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 25px; font-weight: 300;line-height: 1.4;letter-spacing: 0em; text-transform: none;}
@media only screen and (max-width: 1360px) {html body .intro { font-size: 23px; } }
@media only screen and (max-width: 1024px) {html body .intro { font-size: 21px; } }
@media only screen and (max-width: 768px) {html body .intro { font-size: 19px; } }
@media only screen and (max-width: 320px) {html body .intro { font-size: 18px; } }

.font-accent.font-accent.font-accent, .font-accent.font-accent.font-accent > * { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: 400;line-height: 1.2;letter-spacing: 0em; text-transform: none;}
@media only screen and (max-width: 1360px) {.font-accent.font-accent.font-accent, .font-accent.font-accent.font-accent > * { font-size: 47px; } }
@media only screen and (max-width: 1024px) {.font-accent.font-accent.font-accent, .font-accent.font-accent.font-accent > * { font-size: 39px; } }
@media only screen and (max-width: 768px) {.font-accent.font-accent.font-accent, .font-accent.font-accent.font-accent > * { font-size: 33px; } }
@media only screen and (max-width: 320px) {.font-accent.font-accent.font-accent, .font-accent.font-accent.font-accent > * { font-size: 29px; } }

.button, .c-btn, .c-comments-toggle__label, button[type=reset], button[type=submit], input[type=button], input[type=submit], [id="subscribe-submit"] { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 700;line-height: 1.21;letter-spacing: 0.21em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {.button, .c-btn, .c-comments-toggle__label, button[type=reset], button[type=submit], input[type=button], input[type=submit], [id="subscribe-submit"] { font-size: 14px; } }
@media only screen and (max-width: 1024px) {.button, .c-btn, .c-comments-toggle__label, button[type=reset], button[type=submit], input[type=button], input[type=submit], [id="subscribe-submit"] { font-size: 14px; } }
@media only screen and (max-width: 768px) {.button, .c-btn, .c-comments-toggle__label, button[type=reset], button[type=submit], input[type=button], input[type=submit], [id="subscribe-submit"] { font-size: 13px; } }
@media only screen and (max-width: 320px) {.button, .c-btn, .c-comments-toggle__label, button[type=reset], button[type=submit], input[type=button], input[type=submit], [id="subscribe-submit"] { font-size: 13px; } }

.c-footer.c-footer h1, .c-footer.c-footer h2, .c-footer.c-footer h3, .c-footer.c-footer h4, .c-footer.c-footer h5, .c-footer.c-footer h6 { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 700;line-height: 1.2;letter-spacing: 0.15em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {.c-footer.c-footer h1, .c-footer.c-footer h2, .c-footer.c-footer h3, .c-footer.c-footer h4, .c-footer.c-footer h5, .c-footer.c-footer h6 { font-size: 14px; } }
@media only screen and (max-width: 1024px) {.c-footer.c-footer h1, .c-footer.c-footer h2, .c-footer.c-footer h3, .c-footer.c-footer h4, .c-footer.c-footer h5, .c-footer.c-footer h6 { font-size: 14px; } }
@media only screen and (max-width: 768px) {.c-footer.c-footer h1, .c-footer.c-footer h2, .c-footer.c-footer h3, .c-footer.c-footer h4, .c-footer.c-footer h5, .c-footer.c-footer h6 { font-size: 13px; } }
@media only screen and (max-width: 320px) {.c-footer.c-footer h1, .c-footer.c-footer h2, .c-footer.c-footer h3, .c-footer.c-footer h4, .c-footer.c-footer h5, .c-footer.c-footer h6 { font-size: 13px; } }

.c-footer { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400;line-height: 1.4;letter-spacing: 0em; text-transform: none;}
@media only screen and (max-width: 1360px) {.c-footer { font-size: 14px; } }
@media only screen and (max-width: 1024px) {.c-footer { font-size: 14px; } }
@media only screen and (max-width: 768px) {.c-footer { font-size: 13px; } }
@media only screen and (max-width: 320px) {.c-footer { font-size: 13px; } }

.c-gallery--blog .c-card__title, .c-gallery--blog .c-card__letter { font-family: Oswald, "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700;line-height: 1.2;letter-spacing: 0em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {.c-gallery--blog .c-card__title, .c-gallery--blog .c-card__letter { font-size: 22px; } }
@media only screen and (max-width: 1024px) {.c-gallery--blog .c-card__title, .c-gallery--blog .c-card__letter { font-size: 20px; } }
@media only screen and (max-width: 768px) {.c-gallery--blog .c-card__title, .c-gallery--blog .c-card__letter { font-size: 19px; } }
@media only screen and (max-width: 320px) {.c-gallery--blog .c-card__title, .c-gallery--blog .c-card__letter { font-size: 18px; } }

.c-gallery--blog .c-meta__primary, .c-gallery--blog .c-meta__secondary { font-family: "Woodford Bourne"; font-size: 13px; font-weight: 700;line-height: 1.17;letter-spacing: 0.15em; text-transform: uppercase;}
@media only screen and (max-width: 1360px) {.c-gallery--blog .c-meta__primary, .c-gallery--blog .c-meta__secondary { font-size: 13px; } }
@media only screen and (max-width: 1024px) {.c-gallery--blog .c-meta__primary, .c-gallery--blog .c-meta__secondary { font-size: 13px; } }
@media only screen and (max-width: 768px) {.c-gallery--blog .c-meta__primary, .c-gallery--blog .c-meta__secondary { font-size: 12px; } }
@media only screen and (max-width: 320px) {.c-gallery--blog .c-meta__primary, .c-gallery--blog .c-meta__secondary { font-size: 12px; } }

.c-gallery--blog .c-card__excerpt { font-family: "PT Serif", Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif; font-size: 16px; font-weight: 400;line-height: 1.5;letter-spacing: 0em; text-transform: none;}
@media only screen and (max-width: 1360px) {.c-gallery--blog .c-card__excerpt { font-size: 16px; } }
@media only screen and (max-width: 1024px) {.c-gallery--blog .c-card__excerpt { font-size: 15px; } }
@media only screen and (max-width: 768px) {.c-gallery--blog .c-card__excerpt { font-size: 15px; } }
@media only screen and (max-width: 320px) {.c-gallery--blog .c-card__excerpt { font-size: 14px; } }

.c-gallery--blog .c-card__footer { font-family: "PT Serif", Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif; font-size: 16px; font-weight: 400;line-height: 1.5;letter-spacing: 0em; text-transform: none;}
@media only screen and (max-width: 1360px) {.c-gallery--blog .c-card__footer { font-size: 16px; } }
@media only screen and (max-width: 1024px) {.c-gallery--blog .c-card__footer { font-size: 15px; } }
@media only screen and (max-width: 768px) {.c-gallery--blog .c-card__footer { font-size: 15px; } }
@media only screen and (max-width: 320px) {.c-gallery--blog .c-card__footer { font-size: 14px; } }

</style>
\t\t\t<style type="text/css" id="wp-custom-css">.widget-area--sidebar-footer {
    position: relative;
    left: 70px;
}

.glf-mor-restaurant-menu-item-name {
    font-size: 16px !important;
\t\tcolor: #4d4232 !important;
}

.glf-mor-restaurant-menu-item-description {
\t\tcolor: #4d423288 !important;
}

.glf-mor-restaurant-menu-wrapper {
\t\tmax-width: 650px !important;
}

.glf-mor-restaurant-menu-wrapper hr {
\t\tborder-top: 1px dotted !important;
\t  box-shadow: none !important;
\t  border-bottom: none !important;
\t\tmargin-bottom: 5px !important;\t
}

.glf-mor-restaurant-menu-category h3 {
    font-size: 20px !important;
}

.glf-mor-restaurant-menu-item-price {
    line-height: 1.2 !important;
}

.c-tabs__nav a {
\tz-index: 9999;
\tposition: relative;
}</style></head>

<body class="page-template-default page page-id-75 wp-custom-logo u-scroll-arrow-bottom u-site-header-transparent u-full-width-header site-title-hidden u-site-header-sticky u-site-header-full-width u-underlined-header-links has-hero u-underlined-links u-buttons-solid u-buttons-square u-content-background singular entry-image--none customify" data-parallax itemscope itemtype="http://schema.org/WebPage">



<div id="barba-wrapper" class="site u-wrap-text u-header-height-padding-top u-border-width">
\t<a class="skip-link screen-reader-text" href="#content">Skip to content</a>

\t
<header id="masthead" class="site-header u-header-background" role="banner">
\t<div class="u-header-sides-spacing">
\t\t<div class="o-wrapper  u-container-width  c-navbar__wrapper">

\t\t\t
\t\t\t<div class="c-navbar  c-navbar--dropdown  u-header-height">

                \t\t\t\t<input class="c-navbar__checkbox" id="menu-toggle" type="checkbox">
\t\t\t\t<label class="c-navbar__label u-header-sides-spacing" for="menu-toggle">
\t\t\t\t\t<span class="c-navbar__label-icon"><span class="c-burger c-burger--fade">
\t<b class="c-burger__slice c-burger__slice--top"></b>
\t<b class="c-burger__slice c-burger__slice--middle"></b>
\t<b class="c-burger__slice c-burger__slice--bottom"></b>
</span>
</span>
\t\t\t\t\t<span class="c-navbar__label-text screen-reader-text">Menu</span>
\t\t\t\t</label><!-- .c-navbar__label -->
                
\t\t\t\t        <div class="c-navbar__overlay"></div>
\t\t
\t\t\t\t
<div class="c-navbar__content  u-header-background">

\t
\t\t<div class="c-navbar__zone c-navbar__zone--left">
\t\t\t<div class="header nav">

\t<div class="c-branding">

\t\t
\t\t
\t\t\t<div class="c-logo">
\t\t\t\t\t\t\t\t\t<div class="c-logo__default">
\t\t\t\t\t\t<a href="https://padagali.cz/" class="custom-logo-link" rel="home"><img width="126" height="33" src="https://padagali.cz/wp-content/uploads/2018/09/Logo-PG-CB-male.png" class="custom-logo" alt="Padagali" decoding="async" /></a>\t\t\t\t\t</div>
\t\t\t\t
\t\t\t\t\t\t\t\t\t<div class="c-logo__inverted">
\t\t\t\t\t\t<a href="https://padagali.cz/" class="custom-logo-link  custom-logo-link--inversed" rel="home" itemprop="url"><img width="126" height="33" src="https://padagali.cz/wp-content/uploads/2018/09/Logo-PG-CB-male-negative.png" class="custom-logo--transparent" alt="" itemprop="logo" decoding="async" /></a>\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>

\t\t
\t\t
\t\t<a class="c-logo__title" href="https://padagali.cz/" rel="home">
\t\t\t\t\t\t\t<p class="site-title">Padagali</p>
\t\t\t\t\t</a>

\t\t<p class="site-description site-description-text">indian restaurant</p>

\t\t
\t</div><!-- .c-branding -->

</div>\t\t</div><!-- .c-navbar__zone -->

\t
\t\t<div class="c-navbar__zone c-navbar__zone--middle">
\t\t\t<nav class="menu-hlavni-container"><ul id="menu-2" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-100"><a href="https://padagali.cz/" data-color="#333333">Domů</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-39"><a href="https://padagali.cz/o-nas/" data-color="#333333">O restauraci</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3976"><a href="https://padagali.cz/objednat/" data-color="#333333">Objednávka</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4744"><a href="https://padagali.cz/restaurace/#rezervace" data-color="#131313">Rezervace</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-75 current_page_item menu-item-99"><a href="https://padagali.cz/denni-menu/" aria-current="page" data-color="#000000">Denní menu</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3462"><a href="https://padagali.cz/jidelni-listek/" data-color="#333333">Jídelní lístek</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3527"><a href="https://padagali.cz/napojovy-listek/" data-color="#333333">Nápojový lístek</a></li>
<li class="lang-item lang-item-449 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-3621-en"><a href="https://padagali.cz/en/lunch-menu/" hreflang="en-US" lang="en-US" data-color="#333">English</a></li>
</ul></nav>\t\t</div><!-- .c-navbar__zone -->

\t
\t\t<div class="c-navbar__zone c-navbar__zone--right c-navbar__zone--push-right">
\t\t\t<nav class="jetpack-social-navigation jetpack-social-navigation-genericons" aria-label="Social Links Menu">
\t\t\t<div class="menu-socialni-site-container"><ul id="menu-socialni-site" class="menu"><li id="menu-item-2129" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2129"><a target="_blank" rel="noopener" href="https://www.facebook.com/padagalibrno" data-color="#333"><span class="screen-reader-text">Facebook</span></a></li>
<li id="menu-item-2131" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2131"><a target="_blank" rel="noopener" href="https://www.instagram.com/padagalibrno/" data-color="#333"><span class="screen-reader-text">Instagram</span></a></li>
</ul></div>\t\t</nav><!-- .jetpack-social-navigation -->\t\t</div><!-- .c-navbar__zone -->

\t
</div><!-- .c-navbar__content -->

\t\t\t\t
\t\t\t</div><!-- .c-navbar -->

\t\t\t
\t\t</div><!-- .o-wrapper  .u-container-width -->
\t</div><!-- .u-header-sides-spacing -->
</header><!-- #masthead .site-header -->


\t<div id="content" class="site-content barba-container u-content-background">

<!-- pixelgrade_before_loop_entry -->

<article id="post-75" class="post-75 page type-page status-publish hentry article--page">

\t
\t<div class="c-hero c-hero--half">

        <div class="c-hero__background-mask c-hero__layer">

            <div class="c-hero__slider" style="background-color: #000000;" >

                
<div class="c-hero__slide">

\t<div class="c-hero__layer">

\t\t
<div class="c-hero__background c-hero__layer">

\t<img class="c-hero__image" itemprop="image" src="https://padagali.cz/wp-content/uploads/2018/04/spices55555555.jpg" alt="" style="opacity: 0.7;" srcset="https://padagali.cz/wp-content/uploads/2018/04/spices55555555.jpg 1920w, https://padagali.cz/wp-content/uploads/2018/04/spices55555555-300x188.jpg 300w, https://padagali.cz/wp-content/uploads/2018/04/spices55555555-768x480.jpg 768w, https://padagali.cz/wp-content/uploads/2018/04/spices55555555-1024x640.jpg 1024w" sizes="(max-width: 1920px) 100vw, 1920px" />

</div><!-- .c-hero__background -->

\t<div class="c-hero__wrapper c-hero__layer c-hero__wrapper--center">

\t\t
\t\t<div class="c-hero__content">
\t\t\t<h1 class="h0">Denní menu</h1>
<p>pro týden 22. - 26. ledna</p>
\t\t</div><!-- .c-hero__content -->

\t\t
\t</div><!-- .c-hero__wrapper -->


\t</div><!-- .c-hero__background-mask.c-hero__layer -->

</div><!-- .c-hero__slide -->

                
            </div><!-- pixelgrade_hero_slider_class -->

        </div><!-- c-hero__background-mask -->

\t</div><!-- pixelgrade_hero_class -->

<div class="u-content-background u-content-top-spacing u-content-bottom-spacing">\t<!-- pixelgrade_after_entry_article_start -->

\t<div class="u-container-sides-spacing">
\t\t<div class="o-wrapper u-container-width">

\t\t\t\t\t\t<!-- pixelgrade_after_entry_start -->

\t\t\t<div class="o-layout">

\t\t\t\t\t\t\t\t<!-- pixelgrade_before_entry_main -->

\t\t\t\t<div class="o-layout__main">

\t\t\t\t\t\t\t\t\t\t<!-- pixelgrade_after_entry_main_start -->

\t\t\t\t\t
\t\t\t\t\t<div class="u-content-bottom-spacing  screen-reader-text">
\t\t\t\t\t\t<div class="u-content-width">

\t\t\t\t\t\t\t
\t\t\t\t\t\t\t<header class="entry-header">
\t\t\t\t\t\t\t\t<h1 class="entry-title">Denní menu</h1>\t\t\t\t\t\t\t</header><!-- .entry-header -->

\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- pixelgrade_after_entry_title -->

\t\t\t\t\t\t</div><!-- .u-content-width -->
\t\t\t\t\t</div><!-- .u-content-bottom-spacing -->

\t\t\t\t\t
\t\t\t\t\t\t<div class="entry-content u-content-width">
\t\t\t\t\t\t\t<p align="center">Denní menu podáváme od 11 do 15 hodin každý všední den.<br />
V případě potřeby si můžete objednat denní menu k vyzvednutí pomocí tlačítka níže.</p>
<p align="center">OBJEDNAT DENNÍ MENU<br />
<span class="c-btn" data-glf-cuid="9662a024-cac9-405c-bcc2-a120077ce8a8" data-glf-ruid="ca2d13ba-4876-4315-8e55-ef793326fcc1">OBJEDNAT</span><br />
<script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async ></script></p>
<p align="center">Objednávání je možné <strong>pouze online</strong>, a to vždy daný den.</p>
<p>&nbsp;</p>
<p align="center"><div class="glf-mor-restaurant-menu-wrapper"><div class="glf-mor-restaurant-menu-category"><h3>DENNÍ MENU PONDĚLÍ<div class="glf-mor-restaurant-menu-category-description">Denní menu vydáváme od 11 do 15 hodin</div></h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Tomato Soup</h5><div class="glf-mor-restaurant-menu-item-price" data-price="29" data-currency="CZK" data-decimals="0"><span class="price">29 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Rajská polévka</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Madras</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky s ostrou čennajskou omáčkou</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Methi Chicken</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky v bylinkové kari omáčce se sušenými listy pískavice</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Rajma Curry</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Červené fazole v kari omáčce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Salad</h5><div class="glf-mor-restaurant-menu-item-price" data-price="175" data-currency="CZK" data-decimals="0"><span class="price">175 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Zeleninový salát s kuřecím masem</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>DENNÍ MENU ÚTERÝ<div class="glf-mor-restaurant-menu-category-description">Denní menu vydáváme od 11 do 15 hodin</div></h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Bean Soup</h5><div class="glf-mor-restaurant-menu-item-price" data-price="29" data-currency="CZK" data-decimals="0"><span class="price">29 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Fazolová polévka</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Vindaloo</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky ve velmi ostré omáčce s bramborami</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Butter Chicken</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Pečené kuřecí kousky v jemné máslové omáčce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Kadai Paneer</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Indický domácí sýr vařený s paprikou v cibulovo-rajčatové omáčce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Salad</h5><div class="glf-mor-restaurant-menu-item-price" data-price="175" data-currency="CZK" data-decimals="0"><span class="price">175 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Zeleninový salát s kuřecím masem</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>DENNÍ MENU STŘEDA<div class="glf-mor-restaurant-menu-category-description">Denní menu vydáváme od 11 do 15 hodin</div></h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Dal Soup</h5><div class="glf-mor-restaurant-menu-item-price" data-price="29" data-currency="CZK" data-decimals="0"><span class="price">29 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Čočková polévka</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Tikka Masala</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky ve středně pálivé omáčce s cibulí, rajčaty a paprikou</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Curry</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky v tradiční kari omáčce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Palak Kofta</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Bramborové nugetky ve špenátové kari omáčce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Salad</h5><div class="glf-mor-restaurant-menu-item-price" data-price="175" data-currency="CZK" data-decimals="0"><span class="price">175 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Zeleninový salát s kuřecím masem</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>DENNÍ MENU ČTVRTEK<div class="glf-mor-restaurant-menu-category-description">Denní menu vydáváme od 11 do 15 hodin</div></h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Shrimp Soup</h5><div class="glf-mor-restaurant-menu-item-price" data-price="29" data-currency="CZK" data-decimals="0"><span class="price">29 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Krevetová polévka</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Fal</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky v extrémně ostré kari omáčce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Mango</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky v mangové kari omáčce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chana Masala</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Cizrna v kořeněné omáčce s cibulí</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Salad</h5><div class="glf-mor-restaurant-menu-item-price" data-price="175" data-currency="CZK" data-decimals="0"><span class="price">175 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Zeleninový salát s kuřecím masem</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>DENNÍ MENU PÁTEK<div class="glf-mor-restaurant-menu-category-description">Denní menu vydáváme od 11 do 15 hodin</div></h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Broccoli Soup</h5><div class="glf-mor-restaurant-menu-item-price" data-price="29" data-currency="CZK" data-decimals="0"><span class="price">29 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Brokolicový krém</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Jalfrezi</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky v pikantní omáčce s cibulí, rajčaty, paprikou a čili</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Korma</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuřecí kostky v jemné smetanové omáčce s kokosem a kešu</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Matar Baingan Bharta</h5><div class="glf-mor-restaurant-menu-item-price" data-price="155" data-currency="CZK" data-decimals="0"><span class="price">155 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Lilek připravený v peci tandoor v kari omáčce s hráškem</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chicken Salad</h5><div class="glf-mor-restaurant-menu-item-price" data-price="175" data-currency="CZK" data-decimals="0"><span class="price">175 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Zeleninový salát s kuřecím masem</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>PŘÍLOHA NAVÍC</h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Placka navíc</h5><div class="glf-mor-restaurant-menu-item-price" data-price="10" data-currency="CZK" data-decimals="0"><span class="price">10 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Maximálně 1 příloha navíc ke každé porci, nelze objednat k polévce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Rýže navíc</h5><div class="glf-mor-restaurant-menu-item-price" data-price="15" data-currency="CZK" data-decimals="0"><span class="price">15 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Maximálně 1 příloha navíc ke každé porci, nelze objednat k polévce</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Plain Naan</h5><div class="glf-mor-restaurant-menu-item-price" data-price="45" data-currency="CZK" data-decimals="0"><span class="price">45 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Pro velké jedlíky celý naan za standartní cenu, lze objednat jakékoli množství</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Basmati Rice</h5><div class="glf-mor-restaurant-menu-item-price" data-price="45" data-currency="CZK" data-decimals="0"><span class="price">45 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Pro velké jedlíky velká porce rýže za standartní cenu, lze objednat jakékoli množství</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>OSTATNÍ</h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Vlastní taška</h5><div class="glf-mor-restaurant-menu-item-price" data-price="0" data-currency="CZK" data-decimals="0"><span class="price">0 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Pro ty z vás, kteří tašku nepotřebují - možné pouze pro vyzvednutí</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Rekrabička</h5><div class="glf-mor-restaurant-menu-item-price" data-price="0" data-currency="CZK" data-decimals="0"><span class="price">0 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Jídlo vám zabalíme do Rekrabiček https://www.rekrabicka.cz/ dle skutečného počtu krabiček vám následně napočítáme zálohu 80 Kč/kus. Nemusíte si tedy lámat hlavu, kolik krabiček zvolit. Platba za zálohu možná pouze hotově. Možné pouze pro osobní vyzvednutí.</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Papírová taška</h5><div class="glf-mor-restaurant-menu-item-price" data-price="5" data-currency="CZK" data-decimals="0"><span class="price">5 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Pokud zvolíte papírovou tašku, celou objednávku vám zabalíme do papírové tašky</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>CHUTNEY</h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Mátové Chutney</h5><div class="glf-mor-restaurant-menu-item-price" data-price="15" data-currency="CZK" data-decimals="0"><span class="price">15 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Chilli Chutney</h5><div class="glf-mor-restaurant-menu-item-price" data-price="15" data-currency="CZK" data-decimals="0"><span class="price">15 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>PIVO</h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Svijanský máz</h5><div class="glf-mor-restaurant-menu-item-price" data-price="35" data-currency="CZK" data-decimals="0"><span class="price">35 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">0,5l plechovka</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Bakalář nealko</h5><div class="glf-mor-restaurant-menu-item-price" data-price="39" data-currency="CZK" data-decimals="0"><span class="price">39 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">0,5l plechovka</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Kingfisher</h5><div class="glf-mor-restaurant-menu-item-price" data-price="49" data-currency="CZK" data-decimals="0"><span class="price">49 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Indické pivo</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Pilsner Urquell</h5><div class="glf-mor-restaurant-menu-item-price" data-price="55" data-currency="CZK" data-decimals="0"><span class="price">55 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">0,5l láhev</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>NÁPOJE</h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Coca-Cola 0,33 l" src="https://www.fbgcdn.com/pictures/b149b6f6-e47d-453b-96f0-e759e8e7f70a.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Coca-Cola 0,33 l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="49" data-currency="CZK" data-decimals="0"><span class="price">49 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Ginger Beer 0,33 l" src="https://www.fbgcdn.com/pictures/52ca020b-1b87-4e14-990f-2f611f2eb436.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Ginger Beer 0,33 l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="49" data-currency="CZK" data-decimals="0"><span class="price">49 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Zázvorová limonáda</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Rubicon Guava" src="https://www.fbgcdn.com/pictures/9911baf6-595d-486c-83b6-d367be20d1ad.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Rubicon Guava</h5><div class="glf-mor-restaurant-menu-item-price" data-price="49" data-currency="CZK" data-decimals="0"><span class="price">49 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Indické limonády s ovocnou složkou</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Rubicon Mango" src="https://www.fbgcdn.com/pictures/9b5367d5-87a4-4bc4-8db2-2bac2bed5931.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Rubicon Mango</h5><div class="glf-mor-restaurant-menu-item-price" data-price="49" data-currency="CZK" data-decimals="0"><span class="price">49 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Indické limonády s ovocnou složkou</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Coca-Cola 1l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Sprite 1l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Fanta 1l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Tonic Kinley 1,5</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Red Bull 0,25" src="https://www.fbgcdn.com/pictures/4a1585ed-45c8-42e4-8406-aa81b1d697c4.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Red Bull 0,25</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Relax hruška 1l" src="https://www.fbgcdn.com/pictures/53a211f4-724e-486d-ad79-5b9c363d6642.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Relax hruška 1l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Relax Jahoda 1l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Relax jablko 1l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Relax pomeranč 1l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="69" data-currency="CZK" data-decimals="0"><span class="price">69 CZK</span></div>
                                </div>
                                
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>LASSI<div class="glf-mor-restaurant-menu-category-description">Indický jogurtový nápoj</div></h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Mango Lassi 0,5 l" src="https://www.fbgcdn.com/pictures/fc45a663-c5bd-47bc-9202-efd16dba9290.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Mango Lassi 0,5 l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="79" data-currency="CZK" data-decimals="0"><span class="price">79 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Indický jogurtový sladký nápoj s mangem</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Strawberry Lassi 0,5 l" src="https://www.fbgcdn.com/pictures/da7196fc-a978-427d-bf2f-ecb384fd4406.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Strawberry Lassi 0,5 l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="79" data-currency="CZK" data-decimals="0"><span class="price">79 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Indický jogurtový sladký nápoj s jahodami</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Salt Lassi 0,5l" src="https://www.fbgcdn.com/pictures/1b72f1a0-e9ac-43b0-9f38-2e3373f1d45a.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Salt Lassi 0,5l</h5><div class="glf-mor-restaurant-menu-item-price" data-price="79" data-currency="CZK" data-decimals="0"><span class="price">79 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Indický jogurtový slaný nápoj</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>ZMRZLINA</h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Magnum Almond" src="https://www.fbgcdn.com/pictures/5b42f7c1-459e-4fdc-88ea-65caf4af327b.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Magnum Almond</h5><div class="glf-mor-restaurant-menu-item-price" data-price="229" data-currency="CZK" data-decimals="0"><span class="price">229 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Vanilková zmrzlina protkaná a obklopená křupavou Magnum čokoládou s kousky mandlí.</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Magnum White Chocolate" src="https://www.fbgcdn.com/pictures/ac0e31c2-c042-4eb1-afc4-f9d64277f20b.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Magnum White Chocolate</h5><div class="glf-mor-restaurant-menu-item-price" data-price="229" data-currency="CZK" data-decimals="0"><span class="price">229 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Vanilková zmrzlina protkaná a obklopená bílou křupavou Magnum čokoládou.</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Magnum Classic" src="https://www.fbgcdn.com/pictures/810d6aa8-8157-448a-87b6-acb43d92437b.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Magnum Classic</h5><div class="glf-mor-restaurant-menu-item-price" data-price="229" data-currency="CZK" data-decimals="0"><span class="price">229 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Sametová vanilková zmrzlina je protkaná a obklopená křupavou Magnum čokoládou.</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Ben&Jerry's Peanut Butter Cup" src="https://www.fbgcdn.com/pictures/e14d94ff-0832-46fb-b002-91e046f07246.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Ben&Jerry's Peanut Butter Cup</h5><div class="glf-mor-restaurant-menu-item-price" data-price="249" data-currency="CZK" data-decimals="0"><span class="price">249 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Arašídová zmrzlina plná kakaových košíčků s arašídovým krémem.</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Ben&Jerry's Cookie Dough" src="https://www.fbgcdn.com/pictures/9d76b9d9-68b9-44bd-84d1-127603a6d949.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Ben&Jerry's Cookie Dough</h5><div class="glf-mor-restaurant-menu-item-price" data-price="249" data-currency="CZK" data-decimals="0"><span class="price">249 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Vanilková zmrzlina s velkou porcí čokolády a sušenkového těstíčka.</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Ben&Jerry's Chocolate Fudge Brownie" src="https://www.fbgcdn.com/pictures/b456c0d3-731b-47d8-803b-0a5276b8a588.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Ben&Jerry's Chocolate Fudge Brownie</h5><div class="glf-mor-restaurant-menu-item-price" data-price="249" data-currency="CZK" data-decimals="0"><span class="price">249 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Čokoládová zmrzlina s kousky brownies.</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner"><picture>
                                            <img decoding="async" class="" alt="Ben&Jerry's Vegan Netflix & Chilll'd 465ml" src="https://www.fbgcdn.com/pictures/b2e28b05-bb8b-4d3f-be3a-4f760da1ff42.jpg">
                                        </picture>
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Ben&Jerry's Vegan Netflix & Chilll'd 465ml</h5><div class="glf-mor-restaurant-menu-item-price" data-price="259" data-currency="CZK" data-decimals="0"><span class="price">259 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Zmrzlina s arašídovou příchutí, preclíkovými spirálkami a kousky brownies</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Ben&Jerry's Netflix & Chilll'd</h5><div class="glf-mor-restaurant-menu-item-price" data-price="249" data-currency="CZK" data-decimals="0"><span class="price">249 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Arašídová zmrzlina s krémem ze slaných a sladkých preclíků a kousky brownies.</div>
                            </div>
                        </div></div><hr></div><div class="glf-mor-restaurant-menu-category"><h3>DEZERTY</h3><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Gulab Jamun</h5><div class="glf-mor-restaurant-menu-item-price" data-price="55" data-currency="CZK" data-decimals="0"><span class="price">55 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuličky ze sušeného mléka ve sladkém sirupu</div>
                            </div>
                        </div></div><hr>

                            <div class="glf-mor-restaurant-menu-item"><div class="glf-mor-restaurant-menu-item-inner">
                            <div style="width: 100%">
                                <div class="glf-mor-restaurant-menu-item-header"><h5 class="glf-mor-restaurant-menu-item-name">Rasgulla</h5><div class="glf-mor-restaurant-menu-item-price" data-price="55" data-currency="CZK" data-decimals="0"><span class="price">55 CZK</span></div>
                                </div>
                                <div class="glf-mor-restaurant-menu-item-description">Kuličky vyrobené z mléka, cukru, vody, pšeničné mouky a sóji, zdobeno kokosem</div>
                            </div>
                        </div></div><hr></div></div>
            <script type="text/javascript">
                document.addEventListener( "DOMContentLoaded", function ( event ) {
                if (typeof jQuery != "undefined") {
                    jQuery(document).ready(function() {
                           jQuery(".glf-mor-restaurant-menu-item-price").each(function() {
                                const el=jQuery(this);
                                const el_Price=jQuery(this).find("> span.price");
                                const price=parseFloat(el.data("price"));
                                const currency= el.data("currency")
                                const numberOfDigits = parseInt( el.data("decimals") );
                                const localeStringOptions = {
                                    style:"currency",
                                    currency: currency,
                                    minimumFractionDigits: numberOfDigits,
                                    maximumFractionDigits: numberOfDigits                                    
                                }; 
                                el_Price.html(price.toLocaleString('cs', localeStringOptions))
                            });
                       });
                    }
                });
            </script>
<p>&nbsp;</p>
<p><img decoding="async" class="size-full wp-image-80 aligncenter" src="/wp-content/uploads/2018/08/decorative-line.png" alt="" width="354" height="28" srcset="https://padagali.cz/wp-content/uploads/2018/08/decorative-line.png 354w, https://padagali.cz/wp-content/uploads/2018/08/decorative-line-300x24.png 300w" sizes="(max-width: 354px) 100vw, 354px" /></p>
<p align="center">Denní menu vydáváme každý všední den od 11 do 15 hodin<br />
K jídlům je v ceně placka Naan, rýže, či kombinace obojího, k salátu dáváme Naan</p>
<p align="center">Během výdeje denního menu nevaříme jídla z jídelního lístku. Děkujeme za pochopení</p>
<p align="center"><strong>Informace o alergenech:</strong><br />
&#8211; Všechny omáčky kromě Vindaloo, Jalfrezi, Madrasu a Falu obsahují smetanu<br />
&#8211; Polévky obsahují lepek a mléko, a mohou obsahovat stopové množství arašídů, sojových bobů, skořápkových plodů, hořčice a sezamu<br />
&#8211; Korma, Butter a Mango obsahují ořechy a kešu<br />
&#8211; Placky a obsahují lepek, vejce a mléko<br />
&#8211; Dum Aloo a Kofta obsahují ořechy a lepek<br />
&#8211; Paneer obsahuje mléko</p>
<p align="center">Seznam alergenů <a href="/seznam-alergenu/" target="_blank" rel="noopener">najdete zde</a>.</p>
<p>&nbsp;</p>
\t\t\t\t\t\t</div><!-- .entry-content.u-content-width -->

\t\t\t\t\t


\t\t\t\t\t\t\t\t\t\t<!-- pixelgrade_before_entry_main_end -->

\t\t\t\t</div><!-- .o-layout__main -->

\t\t\t\t\t\t\t\t<!-- pixelgrade_after_entry_main -->

\t\t\t\t
\t\t\t</div><!-- .o-layout -->

\t\t\t\t\t\t<!-- pixelgrade_before_entry_end -->

\t\t</div><!-- .o-wrapper.u-container-width -->
\t</div><!-- .u-container-sides-spacing -->

\t</div>\t<!-- pixelgrade_before_entry_article_end -->

</article><!-- #post-75 -->


<footer class="site-footer u-footer-background u-container-sides-spacing">
\t<div class="o-wrapper u-container-width">

\t\t
\t\t
<div class="c-footer  u-footer-top-spacing  u-footer-bottom-spacing">

\t
\t\t<div class="c-footer__zone c-footer__zone--middle">

\t\t\t
<aside class="widget-area widget-area--sidebar-footer c-gallery c-footer__gallery o-grid o-grid--4col-@lap">
\t<div id="nav_menu-8" class="c-gallery__item  widget  widget--footer  c-footer__widget  widget_nav_menu"><div class="o-wrapper u-container-width"><h3 class="widget__title h3">Objednání a rozvoz</h3><div class="menu-rezervace-a-rozvoz-container"><ul id="menu-rezervace-a-rozvoz" class="menu"><li id="menu-item-4160" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4160"><a href="https://padagali.cz/objednat/" data-color="#333333">Vyzvednutí v restauraci</a></li>
<li id="menu-item-3749" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3749"><a href="https://wolt.com/cs/cze/brno/restaurant/padagali" data-color="#333">Wolt</a></li>
<li id="menu-item-2415" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2415"><a target="_blank" rel="noopener" href="https://www.damejidlo.cz/padagali" data-color="#333">Dáme jídlo</a></li>
</ul></div></div></div><div id="text-12" class="c-gallery__item  widget  widget--footer  c-footer__widget  widget_text"><div class="o-wrapper u-container-width"><h3 class="widget__title h3">Otevírací doba</h3>\t\t\t<div class="textwidget"><p>Restaurace: Pondělí &#8211; neděle 11 &#8211; 22</p>
<p>Denní menu: PO &#8211; PÁ  11 &#8211; 15</p>
</div>
\t\t</div></div><div id="text-11" class="c-gallery__item  widget  widget--footer  c-footer__widget  widget_text"><div class="o-wrapper u-container-width"><h3 class="widget__title h3">Adresa a kontakty</h3>\t\t\t<div class="textwidget">Kotlářská 51a<br>
602 00 Brno<br>
<br>
Telefon: 607 525 055<br>
E-mail: <span id="eeb-174247-924498"></span><script type="text/javascript">(function(){var ml="c.ipedgu4s%r0tzal",mi=";49=?7;?04:8<3?5?6?@210>",o="";for(var j=0,l=mi.length;j<l;j++){o+=ml.charAt(mi.charCodeAt(j)-48);}document.getElementById("eeb-174247-924498").innerHTML = decodeURIComponent(o);}());</script><noscript>*protected email*</noscript></div>
\t\t</div></div><div id="nav_menu-12" class="c-gallery__item  widget  widget--footer  c-footer__widget  widget_nav_menu"><div class="o-wrapper u-container-width"><h3 class="widget__title h3">Sociální sítě</h3><div class="menu-socialni-site-container"><ul id="menu-socialni-site-1" class="menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2129"><a target="_blank" rel="noopener" href="https://www.facebook.com/padagalibrno" data-color="#333">Facebook</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2131"><a target="_blank" rel="noopener" href="https://www.instagram.com/padagalibrno/" data-color="#333">Instagram</a></li>
</ul></div></div></div></aside>


\t\t</div><!-- .c-footer__zone -->

\t
\t\t<div class="c-footer__zone c-footer__zone--bottom">

\t\t\t<div class="c-footer__copyright-text">
<br>Provozovatel: Gold of India s.r.o., IČ 05903882, Brno, zapsaný v Obchodním rejstříku vedeném Krajským soudem v Brně, oddíl C, vložka č. 98776<br>2024 © Padagali
</div>

\t\t</div><!-- .c-footer__zone -->

\t
</div><!-- .c-footer -->

\t\t\t</div><!-- .o-wrapper.u-container-width.content-area -->
</footer>


</div><!-- .barba-container -->

<div class="js-map-pin  u-hidden"><span class="c-pin__img"><svg width="62" height="75" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M31 69s27-18 27-40C58 14.0883 46 2 31 2S4 14.0883 4 29c0 22 27 40 27 40zm7.725-31.2065c-4.2598 4.2753-11.2639 4.2753-15.5291 0-4.2612-4.2767-4.2612-11.3049 0-15.587 4.2598-4.2753 11.2638-4.2753 15.529 0 4.3668 4.2821 4.3668 11.3049 0 15.587z" id="b"/><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="a"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/></filter></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/></g></svg>
</span></div>
<div class="c-border"></div>
<div class="c-cursor"></div>

\t\t\t\t\t<script>
\t\t\t\t\t\tlet customifyTriggerFontsLoadedEvents = function() {
\t\t\t\t\t\t\t// Trigger the 'wf-active' event, just like Web Font Loader would do.
\t\t\t\t\t\t\twindow.dispatchEvent(new Event('wf-active'));
\t\t\t\t\t\t\t// Add the 'wf-active' class on the html element, just like Web Font Loader would do.
\t\t\t\t\t\t\tdocument.getElementsByTagName('html')[0].classList.add('wf-active');
\t\t\t\t\t\t}

\t\t\t\t\t\t// Try to use the modern FontFaceSet browser APIs.
\t\t\t\t\t\tif ( typeof document.fonts !== 'undefined' && typeof document.fonts.ready !== 'undefined' ) {
\t\t\t\t\t\t\tdocument.fonts.ready.then(customifyTriggerFontsLoadedEvents);
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t// Fallback to just waiting a little bit and then triggering the events for older browsers.
\t\t\t\t\t\t\twindow.addEventListener('load', function() {
\t\t\t\t\t\t\t\tsetTimeout( customifyTriggerFontsLoadedEvents, 300 );
\t\t\t\t\t\t\t});
\t\t\t\t\t\t}
\t\t\t\t\t</script>
\t\t\t\t\t<script type="text/javascript" src="//maps.google.com/maps/api/js?language=cs" id="google-maps-js"></script>
<script type="text/javascript" id="mediaelement-core-js-before">
/* <![CDATA[ */
var mejsL10n = {"language":"cs","strings":{"mejs.download-file":"St\u00e1hnout soubor","mejs.install-flash":"Pou\u017e\u00edv\u00e1te prohl\u00ed\u017ee\u010d, kter\u00fd nem\u00e1 nainstalovan\u00fd nebo povolen\u00fd Flash Player. Zapn\u011bte Flash Player nebo si st\u00e1hn\u011bte nejnov\u011bj\u0161\u00ed verzi z adresy https:\\/\\/get.adobe.com\\/flashplayer\\/","mejs.fullscreen":"Cel\u00e1 obrazovka","mejs.play":"P\u0159ehr\u00e1t","mejs.pause":"Pozastavit","mejs.time-slider":"\u010casov\u00fd posuvn\u00edk","mejs.time-help-text":"Pou\u017eit\u00edm \u0161ipek vlevo\\/vpravo se posunete o jednu sekundu, \u0161ipkami nahoru\\/dol\u016f se posunete o deset sekund.","mejs.live-broadcast":"\u017div\u011b","mejs.volume-help-text":"Pou\u017eit\u00edm \u0161ipek nahoru\\/dol\u016f zv\u00fd\u0161\u00edte nebo sn\u00ed\u017e\u00edte \u00farove\u0148 hlasitosti.","mejs.unmute":"Zapnout zvuk","mejs.mute":"Ztlumit","mejs.volume-slider":"Ovl\u00e1d\u00e1n\u00ed hlasitosti","mejs.video-player":"Video p\u0159ehr\u00e1va\u010d","mejs.audio-player":"Audio p\u0159ehr\u00e1va\u010d","mejs.captions-subtitles":"Titulky","mejs.captions-chapters":"Kapitoly","mejs.none":"\u017d\u00e1dn\u00e1","mejs.afrikaans":"Afrik\u00e1n\u0161tina","mejs.albanian":"Alb\u00e1n\u0161tina","mejs.arabic":"Arab\u0161tina","mejs.belarusian":"B\u011bloru\u0161tina","mejs.bulgarian":"Bulhar\u0161tina","mejs.catalan":"Katal\u00e1n\u0161tina","mejs.chinese":"\u010c\u00edn\u0161tina","mejs.chinese-simplified":"\u010c\u00edn\u0161tina (zjednodu\u0161en\u00e1)","mejs.chinese-traditional":"\u010c\u00edn\u0161tina (tradi\u010dn\u00ed)","mejs.croatian":"Chorvat\u0161tina","mejs.czech":"\u010ce\u0161tina","mejs.danish":"D\u00e1n\u0161tina","mejs.dutch":"Holand\u0161tina","mejs.english":"Angli\u010dtina","mejs.estonian":"Eston\u0161tina","mejs.filipino":"Filip\u00edn\u0161tina","mejs.finnish":"Dokon\u010dit","mejs.french":"Francou\u017e\u0161tina","mejs.galician":"Galicij\u0161tina","mejs.german":"N\u011bm\u010dina","mejs.greek":"\u0158e\u010dtina","mejs.haitian-creole":"Haitsk\u00e1 kreol\u0161tina","mejs.hebrew":"Hebrej\u0161tina","mejs.hindi":"Hind\u0161tina","mejs.hungarian":"Ma\u010far\u0161tina","mejs.icelandic":"Island\u0161tina","mejs.indonesian":"Indon\u00e9\u0161tina","mejs.irish":"Ir\u0161tina","mejs.italian":"Ital\u0161tina","mejs.japanese":"Japon\u0161tina","mejs.korean":"Korej\u0161tina","mejs.latvian":"Loty\u0161tina","mejs.lithuanian":"Litev\u0161tina","mejs.macedonian":"Makedon\u0161tina","mejs.malay":"Malaj\u0161tina","mejs.maltese":"Malt\u0161tina","mejs.norwegian":"Nor\u0161tina","mejs.persian":"Per\u0161tina","mejs.polish":"Pol\u0161tina","mejs.portuguese":"Portugal\u0161tina","mejs.romanian":"Rumun\u0161tina","mejs.russian":"Ru\u0161tina","mejs.serbian":"Srb\u0161tina","mejs.slovak":"Sloven\u0161tina","mejs.slovenian":"Slovin\u0161tina","mejs.spanish":"\u0160pan\u011bl\u0161tina","mejs.swahili":"Svahil\u0161tina","mejs.swedish":"\u0160v\u00e9d\u0161tina","mejs.tagalog":"Tagal\u0161tina","mejs.thai":"Thaj\u0161tina","mejs.turkish":"Ture\u010dtina","mejs.ukrainian":"Ukrajin\u0161tina","mejs.vietnamese":"Vietnam\u0161tina","mejs.welsh":"Vel\u0161tina","mejs.yiddish":"Jidi\u0161"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://padagali.cz/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=4.2.17" id="mediaelement-core-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-includes/js/mediaelement/mediaelement-migrate.min.js?ver=6.4.2" id="mediaelement-migrate-js"></script>
<script type="text/javascript" id="mediaelement-js-extra">
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\\/wp-includes\\/js\\/mediaelement\\/","classPrefix":"mejs-","stretching":"responsive","audioShortcodeLibrary":"mediaelement","videoShortcodeLibrary":"mediaelement"};
/* ]]> */
</script>
<script type="text/javascript" src="https://padagali.cz/wp-includes/js/mediaelement/wp-mediaelement.min.js?ver=6.4.2" id="wp-mediaelement-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-includes/js/imagesloaded.min.js?ver=5.0.0" id="imagesloaded-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-includes/js/masonry.min.js?ver=4.2.2" id="masonry-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-content/themes/osteria/assets/js/slick.min.js?ver=1.9.0" id="slick-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-content/themes/osteria/assets/js/main.js?ver=2.3.2" id="osteria-main-scripts-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-content/themes/osteria/components/hero/js/jquery.rellax.js?ver=1.0.5" id="rellax-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-content/themes/osteria/components/blog/js/navigation.js?ver=20180101" id="pixelgrade-navigation-js"></script>
<script type="text/javascript" src="https://padagali.cz/wp-content/plugins/menu-ordering-reservations/assets/js/public-scripts.js?ver=2.4.0" id="restaurant_system_public_scripts_js-js"></script>
<script type="text/javascript">
(function() {
\t\t\t\tvar expirationDate = new Date();
\t\t\t\texpirationDate.setTime( expirationDate.getTime() + 31536000 * 1000 );
\t\t\t\tdocument.cookie = "pll_language=cs; expires=" + expirationDate.toUTCString() + "; path=/; secure; SameSite=Lax";
\t\t\t}());

</script>
        <script>
            /(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
        </script>
\t\t
</div><!-- #barba-wrapper -->


</body>
</html>
`