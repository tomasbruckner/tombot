import UKarla from "../../src/menus/UKarla";

describe("U Karla", () => {
    let requestMock;
    let testedClass: UKarla;
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
        testedClass = new UKarla({get: requestMock});
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
    "as_user": true,
    "attachments": [
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "",
            "text": "Polévka: Hrstková s klobásou (1,9,)",
            "title": "U Karla",
            "title_link": "https://ukarlabrno.cz/denni-menu/"
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 129,- Kč",
            "text": "1) Naše sekaná plněná vejcem a klobásou, vařené brambory maštěné máslem a nakládaná kyselá okurka (1,3,7), 400g"
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 145,- Kč",
            "text": "2) Ceasar Tortilla ( Grilované kuřecí prsíčka, marinované v bylinkách, řimský salát, caesar dressing, cherry rajčátka ) naše hranolky (1,3,7), 400g"
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 139,- Kč",
            "text": "3) Španělský hovězí ptáček plněný slaninou,vejcem, okurkou a klobásou, dušená jasmínová rýže (1,3,7,10) 400g"
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149,- Kč",
            "text": "4) Grilovaný steak z vepřové kotlety, opékané brambory se slaninou, salátek a dresink(1), 400g"
        }
    ],
    "channel": "channel",
    "text": ""
};

const response = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>U Karla</title>
    <meta name="description" content="Daily menu, allotment and great beer Polička and Moravia.">
    <meta name="keywords" content="Pivo, Polička, Restaurace, Restaurace Brno, menu, meníčka, zahrádka, moravia">
    <meta name="author" content="Šikulovi, s.r.o.; info@sikulovi.cz">
    <meta name="facebook-domain-verification" content="nrh4dc2zbp42c240x2m81ryzx8t7oq">
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Web Fonts  -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light" rel="stylesheet" type="text/css">

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/animate/animate.min.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/simple-line-icons/css/simple-line-icons.min.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/owl.carousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/owl.carousel/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/magnific-popup/magnific-popup.min.css">

    <!-- Theme CSS -->
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/css/theme.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/css/theme-elements.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/css/theme-blog.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/css/theme-shop.css">

    <!-- Current Page CSS -->
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/rs-plugin/css/settings.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/rs-plugin/css/layers.css">
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/bower_components/rs-plugin/css/navigation.css">

    <!-- Theme Custom CSS -->
    <link rel="stylesheet" href="https://ukarlabrno.cz/www/css/custom.css">

    <!-- Others -->
            <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5RYQJD26PL"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', "G-5RYQJD26PL");
        </script>
    <script>
        (function(w,d,s,l,i){
            w[l]=w[l]||[];w[l].push({
        'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5V3LNND');
    </script>
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
                                <img alt="U Karla" width="auto" height="80" data-sticky-width="128" data-sticky-height="40" data-sticky-top="33" src="https://ukarlabrno.cz/www/images/restaurace_u_karla.svg">
                            </a>
                        </div>
                    </div>
                    <div class="header-column">
                        <div class="header-row">
                            <nav class="header-nav-top">
                                <ul class="nav nav-pills">
                                    <li>
                                        
                                                <a class="dropdown-menu-toggle" id="dropdownLanguage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" href="/denni-menu/">
                                                    <img src="https://ukarlabrno.cz/www/images/blank.gif" class="flag flag-cz" alt="English"> Čeština
                                                    <i class="fa fa-angle-down"></i>
                                                </a>


                                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownLanguage">
                                            <li><a href="/denni-menu/"><img src="https://ukarlabrno.cz/www/images/blank.gif" class="flag flag-cz" alt="Čeština"> Čeština</a></li>
                                            <li><a href="/en/denni-menu/"><img src="https://ukarlabrno.cz/www/images/blank.gif" class="flag flag-us" alt="English"> English</a></li>
                                        </ul>
                                    </li>
                                    <li class="hidden-xs">
                                        <span class="ws-nowrap"><i class="fa fa-phone"></i> Restaurace 774 458 281</span>
                                    </li>
                                    <li class="hidden-xs">
                                        <span class="ws-nowrap"><i class="fa fa-phone"></i> Rozvoz 776 307 282</span>
                                    </li>
                                    <li>
                                        <ul class="header-social-icons social-icons hidden-xs">
                                            <li class="social-icons-facebook"><a href="https://www.facebook.com/UKarlaBrno/" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
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
                                                        <a href="/rauty-catering-090.html">Rauty/Catering</a>
                                            <li >
                                                        <a href="/denni-menu/">Celodenní menu</a>
                                            <li >
                                                        <a href="/zahradka-295.html">Zahrádka</a>
                                            <li >
                                                        <a href="/fotogalerie/">Fotogalerie</a>
                                            <li >
                                                        <a href="/kariera-u-nas.html">Kariéra u nás</a>
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
<!-- menu na týden -->
<section id="menu">
    <div class="container">
        <div class="row mt-xlg">
            <div class="col-md-12">
                <h4 class="mt-lg mb-sm center">Celodenní <strong>menu</strong></h4>
                <hr class="custom-divider">
                <p style="line-height: 25px; margin: 0px; list-style-type: none; text-align: left;"><br></p>

                <ul class="special-menu pb-xlg">
                            <li class="item-day">
                            <div class="menu-day">16.5. - <h3>Pondělí</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka: Uzená s kroupami a bramborem(1)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) Smažený kuřecí řízek, jarní bramborový salát s medvědím česnekem a jogurtem  (1,3,7), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">135,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) Vepřové výpečky na česneku a kmíně, dušené bílé zelí na slanině, variace knedlíků (1,3,7) 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">135,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) The Butcher Burger ( Hovězí Aberdeen Angus, grilovaný uzený bok, čedar, salát, rajčátka, chilli mayo, máslová houska se sezamem) a naše hranolky (1,3,7) 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">159,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) Grilovaný steak z kuřecích prsíček, marinovaný v česnekovém oleji, silná výpeková omáčka, pečené brambory, bylinkový dip (1,3,7), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">149,- Kč</div>
                            </div>
                            <li class="item-day">
                            <div class="menu-day">17.5. - <h3>Úterý</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka : Frankfurtská s párečky a bramborem(1,7,)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) Kuřecí pikantní směs se zeleninou a bylinkami, bramborové halušky a zakysaná smetana (1,3,7) 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">129,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) Pečené kuřecí stehýnko na rozmarýnu, dušená jasmínová rýže, nádivka se slaninou a pažitkou (1, 3, 7), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">135,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) Smažený sýr s výběrovou šunkou, vařené brambory maštěné máslem a pažitkou, naše tatarská omáčka (1,3,7,10), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">139,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) Steak z vepřové krkovice, tymiánová demi glace, naše hranolky, svěží sladkokyselý salátek (1), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">149,- Kč</div>
                            </div>
                            <li class="item-day">
                            <div class="menu-day">18.5. - <h3>Středa</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka: Hovězí vývar s nudlemi  a petrželkou (1,3,9)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) Vepřová líčka na hrášku a bílém víně, máslová bramborová kaše, výhonky ředkvičky (1,7)</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">139,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2)  The Cow Quesadilla ( Pomalu pečené hovězí na černém pivu, jalapeňo, čedar) naše hranolky (1,3,7) 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">145,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) Smažené kuřecí řízečky v bylinkové strouhance, bramborový salát s majonézou a kyselou okurkou, (1,3) 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">135,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) Dřevorubecká krkovice s vejcem  a grilovanou slaninou, smažené cibulové kroužky, česnekový dip(3,7), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">149,- Kč</div>
                            </div>
                            <li class="item-day">
                            <div class="menu-day">19.5. - <h3>Čtvrtek</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka: Gulášová s bramborem (1,3,7,9)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) Smažený karbanátek z vepřové plece, s restovanou slaninou a hřiby, šťouchané brambory s jarní cibulkou, nakládaná kyselá okurka(1,3,7), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">129,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) Gnocchi s grilovaným kuřecím prsíčkem, sušenými rajčaty a rukolou, sýr Grana Padano (1,3,7) 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">135,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) Thajské kuřecí kari s mungo klíčky, sezamem a zeleninou, pečená basmati rýže (1) 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">135,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) Steak z kuřecích prsíček se demi glace omáčkou, opékané brambory, křupavý zelný salátek (1, 3, 7), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">149,- Kč</div>
                            </div>
                            <li class="item-day">
                            <div class="menu-day">20.5. - <h3>Pátek</h3></div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">Polévka: Hrstková s klobásou (1,9,)</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">1) Naše sekaná plněná vejcem a klobásou, vařené brambory maštěné máslem a nakládaná kyselá okurka (1,3,7), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">129,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">2) Ceasar Tortilla ( Grilované kuřecí prsíčka, marinované v bylinkách, řimský salát, caesar dressing, cherry rajčátka ) naše hranolky (1,3,7), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">145,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">3) Španělský hovězí ptáček plněný slaninou,vejcem, okurkou a klobásou, dušená jasmínová rýže (1,3,7,10) 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">139,- Kč</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-xs-9">4) Grilovaný steak z vepřové kotlety, opékané brambory se slaninou, salátek a dresink(1), 400g</div>
                                <div class="col-sm-2 col-xs-3 special-menu-price">149,- Kč</div>
                            </div>
                </ul>
            </div>
        </div>
    </div>
</section>



    </div>

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
                            <p><i class="fa fa-user"></i> <strong>Firma:</strong> IKI, s.r.o.</p>
                        </li>
                        <li>
                            <p><i class="fa fa-info"></i> <strong>IČO:</strong> 60703199</p>
                        </li>
                        <li>
                            <p><i class="fa fa-map-marker"></i> <strong>Adresa:</strong> Bayerova 578/8, 602 00, Brno</p>
                        </li>
                        <li>
                            <p><i class="fa fa-map-marker"></i> <strong>GPS Souřadnice:</strong> 49°12'21.3"N 16°36'08.7"E    

   
...................... Z kapacitních důvodů nepřijímáme rezervace. Pokud nám i tak chcete napsat, pište email nebo na Facebooku.</p>
                        </li>
                        <li>
                            <p><i class="fa fa-phone"></i> <strong>Telefon restaurace:</strong> 774 458 281</p>
                        </li>
                        <li>
                            <p><i class="fa fa-phone"></i> <strong>Telefon rozvoz:</strong> 776 307 282</p>
                        </li>
                        <li>
                            <p><i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:info@ukarlabrno.cz">info@ukarlabrno.cz</a></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="contact-details">
                    <h4>Otevírací doba restaurace</h4>
                    <ul class="contact">
                        <li><p><i class="fa fa-clock-o"></i> Pondělí - Čtvrtek 11:00 - 00:00</p></li>
                        <li><p><i class="fa fa-clock-o"></i> Pátek - Sobota 11.00 - 01:00</p></li>
                        <li><p><i class="fa fa-clock-o"></i> Neděle  11.00 - 23:00</p></li>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.712726802628!2d16.600492751516953!3d49.2060089792216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294423fba48a5%3A0xfffa5f8bdd1c5baa!2sU+Karla!5e0!3m2!1scs!2scz!4v1523911088254"
                    width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <a href="/" class="logo">
                        <img alt="U Karla" style="height:80px;" class="img-responsive" src="https://ukarlabrno.cz/www/images/restaurace_u_karla_white.svg">
                        <p>&copy; Copyright 2022. Všechna práva vyhrazena.</p>
                    </a>
                </div>
                <div class="col-xs-6 right">
                    <div class="author-text">Created by</div>
                    <a href="http://www.sikulovi.cz" class="logo" target="_blank">
                        <img alt="U Karla" class="img-responsive" src="https://ukarlabrno.cz/www/images/layout/created_sikulovi.svg">
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Vendor -->
<script src="https://ukarlabrno.cz/www/bower_components/modernizr/modernizr.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/jquery/jquery.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/jquery.appear/jquery.appear.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/jquery.easing/jquery.easing.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/jquery-cookie/jquery-cookie.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/bootstrap/js/bootstrap.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/common/common.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/jquery.validation/jquery.validation.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/jquery.easy-pie-chart/jquery.easy-pie-chart.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/jquery.gmap/jquery.gmap.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/jquery.lazyload/jquery.lazyload.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/isotope/jquery.isotope.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/owl.carousel/owl.carousel.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/vide/vide.min.js"></script>

<!-- Theme Base, Components and Settings -->
<script src="https://ukarlabrno.cz/www/js/theme.js"></script>

<!-- Current Page Vendor and Views -->
<script src="https://ukarlabrno.cz/www/bower_components/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>

<!-- Theme Custom -->
<script src="https://ukarlabrno.cz/www/js/custom.js"></script>

<!-- Theme Initialization Files -->
<script src="https://ukarlabrno.cz/www/js/theme.init.js"></script>

<!-- Project Custom -->
<script src="https://ukarlabrno.cz/www/bower_components/nette-forms/src/assets/netteForms.min.js"></script>
<script src="https://ukarlabrno.cz/www/bower_components/nette.ajax.js/nette.ajax.js"></script>

<script>
    $.nette.init();
</script>


</body>
</html>`;
