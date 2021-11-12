import UDrevaka from "../../src/menus/UDrevaka";

describe("U Drevaka", () => {
    let requestMock;
    let testedClass: UDrevaka;
    const originalDate = global.Date;
    let mockDate;

    afterAll(() => {
        global.Date = originalDate;
    });

    beforeAll(() => {
        requestMock = jest.fn();
        mockDate = function () {
            this.getDay = () => 5;
        };

        global.Date = mockDate;
    });

    beforeEach(() => {
        testedClass = new UDrevaka({get: requestMock});
    });

    test("Resolve menu response", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"}, "apikey");

        expect(requestMock.mock.calls.length).toBe(1);

        const callback = requestMock.mock.calls[0][1];

        callback(undefined, {statusCode: 200}, response);

        menu.then(resultMenu => {
            expect(resultMenu).toEqual(expectedSlackMenu);
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
            color: "#5da7ac",
            fallback: "Restaurant menu",
            footer: "",
            text: "Polévka: Čočková s uzeninou (1)",
            title: "U Drevaka",
            title_link: "https://udrevaka.cz/denni-menu/",
        },
            {
                color: "#5da7ac",
                fallback: "Restaurant menu",
                footer: "Cena: 119,- Kč",
                text: "1) 350g Bramborové knedlíky, plněné uzeným masem, smetanový špenát, restovaná cibulka (1,3,7)",
            },
            {
                color: "#5da7ac",
                fallback: "Restaurant menu",
                footer: "Cena: 125,- Kč",
                text: "2) 120g Smažený sýr se šunkou s vařeným bramborem, tatarkou a salátkem(1,3,7,10)",
            },
            {
                color: "#5da7ac",
                fallback: "Restaurant menu",
                footer: "Cena: 135,- Kč",
                text: "3) 170g Trhané vepřové maso v tmavé omáčce s koriandrem,naše bramborové hranolky, chilli mayo (1,6)",
            },
            {
                color: "#5da7ac",
                fallback: "Restaurant menu",
                footer: "Cena: 145,- Kč",
                text: "4) 160g Grilovaný steak z kuřecího prsa marinovaný v bylinkách, bramborová kaše s (3,7,11)",
            }],
    channel: "channel",
    text: "",
};

const response = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>U Dřeváka Beer &amp; Grill</title>
    <meta name="description" content="Burgery, steaky, sandwiche a piva z minipivovarů.">
    <meta name="keywords" content="Beer, Grill, Pivo, Restaurace, Restaurace Brno, burger, hamburge, streak, steakhouse, tortilla, wrap, pulled pork, sandwich, street food">
    <meta name="author" content="Šikulovi, s.r.o.; info@sikulovi.cz">

    <!-- Favicon-->
    <link rel="apple-touch-icon" sizes="57x57" href="https://udrevaka.cz/www/images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="https://udrevaka.cz/www/images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://udrevaka.cz/www/images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="https://udrevaka.cz/www/images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://udrevaka.cz/www/images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="https://udrevaka.cz/www/images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://udrevaka.cz/www/images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://udrevaka.cz/www/images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="https://udrevaka.cz/www/images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="https://udrevaka.cz/www/images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://udrevaka.cz/www/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="https://udrevaka.cz/www/images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://udrevaka.cz/www/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="https://udrevaka.cz/www/images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="https://udrevaka.cz/www/images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Web Fonts  -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light" rel="stylesheet" type="text/css">

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/animate/animate.min.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/simple-line-icons/css/simple-line-icons.min.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/owl.carousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/owl.carousel/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/magnific-popup/magnific-popup.min.css">

    <!-- Theme CSS -->
    <link rel="stylesheet" href="https://udrevaka.cz/www/css/theme.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/css/theme-elements.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/css/theme-blog.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/css/theme-shop.css">

    <!-- Current Page CSS -->
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/rs-plugin/css/settings.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/rs-plugin/css/layers.css">
    <link rel="stylesheet" href="https://udrevaka.cz/www/bower_components/rs-plugin/css/navigation.css">

    <!-- Theme Custom CSS -->
    <link rel="stylesheet" href="https://udrevaka.cz/www/css/custom.css">

    <!-- Others -->
        <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
                {
                    if(f.fbq)return;n=f.fbq=function(){
                    n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '835286750392174');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=835286750392174&ev=PageView&noscript=1"
       ></noscript>
    <!-- End Facebook Pixel Code -->
</head>
<body data-spy="scroll" data-target="#navSecondary" data-offset="170">

<div class="body">
    <header id="header" class="header-narrow" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 57, 'stickySetTop': '-57px', 'stickyChangeLogo': false}">
        <div class="header-body">
            <div class="header-container container">
                <div class="header-row">
                    <div class="header-column">
                        <div class="header-logo">
                            <a href="/">
                                <img alt="U Dřeváka Beer &amp; Grill" width="auto" height="80" data-sticky-width="128" data-sticky-height="40" data-sticky-top="33" src="https://udrevaka.cz/www/images/layout/u_drevaka.svg">
                            </a>
                        </div>
                    </div>
                    <div class="header-column">
                        <div class="header-row">
                            <nav class="header-nav-top">
                                <ul class="nav nav-pills">
                                    <li>
                                        
                                                <a class="dropdown-menu-toggle" id="dropdownLanguage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" href="/denni-menu/">
                                                    <img src="https://udrevaka.cz/www/images/blank.gif" class="flag flag-cz" alt="English"> Čeština
                                                    <i class="fa fa-angle-down"></i>
                                                </a>


                                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownLanguage">
                                            <li><a href="/denni-menu/"><img src="https://udrevaka.cz/www/images/blank.gif" class="flag flag-cz" alt="Čeština"> Čeština</a></li>
                                            <li><a href="/en/denni-menu/"><img src="https://udrevaka.cz/www/images/blank.gif" class="flag flag-us" alt="English"> English</a></li>
                                        </ul>
                                    </li>
                                    <li class="hidden-xs">
                                        <span class="ws-nowrap"><i class="fa fa-phone"></i> Restaurace 724 000 723</span>
                                    </li>
                                    <li class="hidden-xs">
                                        <span class="ws-nowrap"><i class="fa fa-phone"></i> Rozvoz 776 305 252</span>
                                    </li>
                                    <li>
                                        <ul class="header-social-icons social-icons hidden-xs">
                                            <li class="social-icons-facebook"><a href="https://www.facebook.com/UDrevaka/" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header-row">
                            <div class="header-nav">
                                <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                                    <nav>
                                        <ul class="nav nav-pills" id="mainNav">
                                            <li >
                                                        <a href="/">Úvod</a>
                                            <li >
                                                        <a href="/rozvoz-jidla/">Rozvoz jídel a nápojů</a>
                                            <li >
                                                        <a href="/husi-hody.html">Husí hody</a>
                                            <li >
                                                        <a href="/vecirky-rauty.html">Večírky + rauty</a>
                                            <li >
                                                        <a href="/denni-menu/">Polední menu</a>
                                            <li >
                                                        <a href="/menu-restaurace-12f.html">Menu restaurace</a>
                                            <li >
                                                        <a href="/rumy-76b.html">Rumy</a>
                                            <li >
                                                        <a href="/napojovy-listek/">Nápojový lístek</a>
                                            <li >
                                                        <a href="/rezervace/">Rezervace</a>
                                            <li >
                                                        <a href="/fotogalerie/">Fotogalerie</a>
                                            <li >
                                                        <a href="/kariera.html">Kariéra</a>
                                            <li >
                                                        <a href="/kviz-457.html">Kvíz</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div role="main" class="main" id="home">

        <div id="reservation">
            <div class="text">
                <a href="/rezervace/">Rezervace</a>
            </div>
        </div>

    </div>
<!-- menu na týden -->
<section id="menu">
    <div class="container">
        <div class="row mt-xlg">
            <div class="col-md-12">
                <a href="/denni-menu/pdf/"><button type="button" class="mb-xs mt-xs mr-xs btn btn-danger"><i class="fa fa-file-pdf-o"></i> PDF</button></a>
                <h4 class="mt-lg mb-sm center">Denní <strong>menu</strong></h4>
                <p class="center">8.11. - 12.11.</p>
                <hr class="custom-divider">
                <ul class="special-menu pb-xlg" style="margin-bottom: 10px; padding-left: 0px;"><li class="title-meal" style="line-height: 25px; margin: 0px; list-style-type: none; text-align: left;"><br></li></ul>

                <ul class="special-menu pb-xlg">
                            <li class="item-day">
                            <div class="menu-day">8.11. - <h3>Pondělí</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka :Fazolová s uzeninou(1,7)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) 150g Smažený karbanátek z mletého masa s majoránkou a česnekem, vařenými brambory s pažitkou a kyselou okurkou (1,3,7)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) 400g Lasagne s boloňským masovým ragú, parmazánem a salátkem (1,7,9)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) 350g Tortilla plněná grilovanými kuřecími prsíčky, cheddarem, rajčátky ,salátem a dipem, naše bramborové hranolky s dresinkem(1,3,7)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) 160g Grilovaný vepřový steak s krémovou dijonskou omáčkou a pečené slaninové brambory (1,7,9,10)</div>
                            </div>
                            <li class="item-day">
                            <div class="menu-day">9.11. - <h3>Úterý</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka: Drůbeží vývar s rýží a hráškem (1,9)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) 150g Libové vepřové výpečky na česneku a kmínu s moravským zelím a bramborovým knedlík (1,3)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) VYPRODANO  400g Naše halušky s brynzou a uzenou slaninou (1,3)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) 350g Onion burger (hovězí mleté, vídeňská cibulka, salát, sýrovo-česneková majonéza) naše hranolky a dresink (1,3,7,10)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) 350g Grilovaný kuřecí steak plněný sušenými rajčaty a sýrem, šťouchané brambory s máslem, salátek (3,7)</div>
                            </div>
                            <li class="item-day">
                            <div class="menu-day">10.11. - <h3>Středa</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka: Gulášová s brambory (1,3)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) 120g Hovězí nudličky Stroganoff se žampiony, kyselými okurkami a bramboráčky (1,3,7,10,)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) 150g Smažený kuřecí Cordon bleu s bramborovou kaší a lehkým salátkem (1,3,7)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) 350g Kuřecí kebab v tortille se zelným salátkem, okurkami a česnekovým dresinkem, naše hranolky a dip(1,3,7)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) 170g Marinovaná vepřová krkovička s pepřovou omáčkou a selskými bramborami s cibulkou (1,3,7,10,)</div>
                            </div>
                            <li class="item-day">
                            <div class="menu-day">11.11. - <h3>Čtvrtek</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka: Frankfurtská(1,7)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) 350g Čočka na kyselo s grilovanou klobáskou, vařeným vejcem, kyselou okurkou a pečivem (1)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">119,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) 160g Česnekové vepřové řízečky se šťouchanými brambory s restovanou cibulkou (1,3,7)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">125,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) 180g Naše sekaná s anglickou slaninou, bramborovou kaší a kyselou okurkou (1,3,7)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">119,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) 160g Grilované kuřecí prsíčko zapečené šunkou a uzeným sýrem, naše hranolky a lehký salátek (1,3,7)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">145,- Kč</div>
                            </div>
                            <li class="item-day">
                            <div class="menu-day">12.11. - <h3>Pátek</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka: Čočková s uzeninou (1)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) 350g Bramborové knedlíky, plněné uzeným masem, smetanový špenát, restovaná cibulka (1,3,7)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">119,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) 120g Smažený sýr se šunkou s vařeným bramborem, tatarkou a salátkem(1,3,7,10)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">125,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) 170g Trhané vepřové maso v tmavé omáčce s koriandrem,naše bramborové hranolky, chilli mayo (1,6)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">135,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) 160g Grilovaný steak z kuřecího prsa marinovaný v bylinkách, bramborová kaše s (3,7,11)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">145,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">5) 350g Americké lívance s tvarohem a malinovou omáčkou (1,3,7)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">119,- Kč</div>
                            </div>
                </ul>
            </div>
        </div>
    </div>
</section>

</div>

<footer id="footer">
    <div class="container">
        <div class="row">
            <div class="footer-ribbon">
                <span>Kontakt</span>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="contact-details">
                    <h4>Kontakt</h4>
                    <ul class="contact">
                        <li>
                            <p><i class="fa fa-user"></i> <strong>Firma:</strong> Johann Pubs s.r.o.</p>
                        </li>
                        <li>
                            <p><i class="fa fa-info"></i> <strong>IČO:</strong> 04873475</p>
                        </li>
                        <li>
                            <p><i class="fa fa-map-marker"></i> <strong>Adresa:</strong> Dřevařská 22, 602 00, Brno</p>
                        </li>
                        <li>
                            <p><i class="fa fa-map-marker"></i> <strong>GPS Souřadnice:</strong> 49° 12' 32.74"N 16° 36' 3.22"E</p>
                        </li>
                        <li>
                            <p><i class="fa fa-phone"></i> <strong>Telefon restaurace:</strong> 724 000 723</p>
                        </li>
                        <li>
                            <p><i class="fa fa-phone"></i> <strong>Telefon rozvoz:</strong> 776 305 252</p>
                        </li>
                        <li>
                            <p><i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:info@udrevaka.cz">info@udrevaka.cz</a></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="contact-details">
                    <h4>Otevírací doba restaurace</h4>
                    <ul class="contact">
                        <li><p><i class="fa fa-clock-o"></i> Pondělí - Čtvrtek 11:00 - 00:00</p></li>
                        <li><p><i class="fa fa-clock-o"></i> Pátek 11.00 - 01:00</p></li>
                        <li><p><i class="fa fa-clock-o"></i> Sobota 11.30 - 01:00</p></li>
                        <li><p><i class="fa fa-clock-o"></i> Neděle  11.30 - 23:00</p></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="contact-details">
                    <h4>Otevírací doba rozvozové kuchyně</h4>
                    <ul class="contact">
                        <li><p><i class="fa fa-clock-o"></i> Pondělí - Čtvrtek 10:30 - 22:00</p></li>
                        <li><p><i class="fa fa-clock-o"></i> Pátek 10:30 - 22:00</p></li>
                        <li><p><i class="fa fa-clock-o"></i> Sobota - Neděle 10:30 - 22:00</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.5498490366467!2d16.59870701547944!3d49.20909848390296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712946a40767997%3A0xf74137bea884f479!2zRMWZZXZhxZlza8OhIDgwNi8yMiwgNjAyIDAwIEJybm8tc3TFmWVkLVZldmXFmcOt!5e0!3m2!1scs!2scz!4v1489016092819"
                    width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <a href="/" class="logo">
                        <img alt="U Dřeváka Beer &amp; Grill" class="img-responsive" src="https://udrevaka.cz/www/images/layout/u_drevaka_small.svg">
                        <p>&copy; Copyright 2021. Všechna práva vyhrazena.</p>
                    </a>
                </div>
                <div class="col-xs-6 right">
                    <div class="author-text">Created by</div>
                    <a href="http://www.sikulovi.cz" class="logo" target="_blank">
                        <img alt="U Dřeváka Beer &amp; Grill" class="img-responsive" src="https://udrevaka.cz/www/images/layout/created_sikulovi.svg">
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Vendor -->
<script src="https://udrevaka.cz/www/bower_components/modernizr/modernizr.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/jquery/jquery.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/jquery.appear/jquery.appear.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/jquery.easing/jquery.easing.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/jquery-cookie/jquery-cookie.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/bootstrap/js/bootstrap.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/common/common.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/jquery.validation/jquery.validation.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/jquery.easy-pie-chart/jquery.easy-pie-chart.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/jquery.gmap/jquery.gmap.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/jquery.lazyload/jquery.lazyload.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/isotope/jquery.isotope.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/owl.carousel/owl.carousel.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/vide/vide.min.js"></script>

<!-- Theme Base, Components and Settings -->
<script src="https://udrevaka.cz/www/js/theme.js"></script>

<!-- Current Page Vendor and Views -->
<script src="https://udrevaka.cz/www/bower_components/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>

<!-- Theme Custom -->
<script src="https://udrevaka.cz/www/js/custom.js"></script>

<!-- Theme Initialization Files -->
<script src="https://udrevaka.cz/www/js/theme.init.js"></script>

<!-- Project Custom -->
<script src="https://udrevaka.cz/www/bower_components/nette-forms/src/assets/netteForms.min.js"></script>
<script src="https://udrevaka.cz/www/bower_components/nette.ajax.js/nette.ajax.js"></script>

<script>
    $.nette.init();
</script>

    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', "UA-93565908-1", 'auto');
        ga('send', 'pageview');

    </script>
<!-- Facebook Pixel Code -->
<script>
    !function(f,b,e,v,n,t,s)
            {
                if(f.fbq)return;n=f.fbq=function(){
                n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '820898788073219');
    fbq('track', 'PageView');
</script>
<noscript>
    <img height="1" width="1" style="display:none"
         src="https://www.facebook.com/tr?id=820898788073219&ev=PageView&noscript=1">
</noscript>
<!-- End Facebook Pixel Code -->


</body>
</html>`;
