import AlCapone from "../../src/menus/AlCapone";

describe("Al Capone", () => {
    let requestMock;
    let testedClass: AlCapone;
    const originalDate = global.Date;

    beforeAll(() => {
        requestMock = jest.fn();
        const mockDate: any = function () {
            this.getDay = () => 4;
        };

        global.Date = mockDate;
    });

    beforeEach(() => {
        testedClass = new AlCapone({get: requestMock});
    });


    afterAll(() => {
        global.Date = originalDate;
    });

    test("Resolve menu response", () => {
        expect(testedClass.handleResponse(response)).toEqual(expectedSlackMenu);
    });

    afterEach(() => {
        requestMock.mockReset();
    });
});

const expectedSlackMenu = [
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "",
        "text": "Polévka: Čočková polévka s uzeninou 1",
        "title": "Al Capone",
        "title_link": "https://www.pizzaalcapone.cz/poledni-menu"
    },
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "Cena: 109 Kč",
        "text": "MENU 1: Vepřová pečeně, červené zelí, restované gnocchi 1,3,7"
    },
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "Cena: 119 Kč",
        "text": "MENU 2: Pizza Quattro formaggi s kozími rohy  1,3,7"
    },
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "Cena: 129 Kč",
        "text": "MENU 3: Kuřecí prsíčka zabalená ve slaninovém kabátku, cheddarová omáčka, štouchané brambory 1,7"
    },
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "Cena: 159 Kč",
        "text": "MENU 4: Smažený africký sumeček, bramborové pyré, limetková majonéza 1,3,4,7"
    }
];

const response = `<html lang="cs" class="external-fonts-loaded js-focus-visible no-touch"><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

    <!-- metas -->
    <meta charset="utf-8">

    <meta name="description" content="">
    <meta name="robots" content="">
    <meta name="author" content="ArtFocus, ArtWeby.cz">

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary">

    <!-- Open Graph data -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Pizza Al Capone">
    <meta property="og:title" content="Polední menu | Pizza Al Capone">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://www.pizzaalcapone.cz/project/images/logo.jpg">
    <meta property="og:url" content="https://www.pizzaalcapone.cz/poledni-menu">

    <link rel="canonical" href="https://www.pizzaalcapone.cz/poledni-menu">

    <link rel="alternate" type="application/rss+xml" title="RSS" href="/service/rss/">


    <!-- stylesheets -->
    <link rel="stylesheet" href="/project/templates/boston/front.css?62a241a7">

        <link rel="stylesheet" href="/project/templates/boston/custom-colors.css?658d3346">
        <link rel="stylesheet" href="/project/templates/boston/custom-dimension-properties.css?8cabe18b">
        <link rel="stylesheet" href="/project/templates/boston/custom.css?f1d6c06c">

    <!-- icons -->

        <link rel="shortcut icon" href="/project/favicon.ico">

    <!-- javascript -->
<script type="text/javascript" async="" src="https://ssl.heureka.cz/direct/i/gjs.php?n=wdgt&amp;sak=test"></script><script>
\tvar APPLICATION_BASEPATH = "";
\tvar AF_MONEY_DECIMALS = 2;
</script>

    <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source Sans Pro:300,400,700,900&amp;subset=latin-ext" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Exo 2:300,400,700,900&amp;subset=latin-ext" rel="stylesheet">

    <script src="/temp/22ab4e92.js?86af7d71"></script>

    <link rel="stylesheet" href="/components/bower/fancybox/source/jquery.fancybox.css?f86d0749">

    

    <!--[if lt IE 9]>
    <script src="/temp/200e6cab.js?b13876b4"></script>
    <![endif]-->

    <title id="snippet--title">Polední menu | Pizza Al Capone</title>
\t\t
<script src="/components/bower/smalot-bootstrap-datetimepicker/js/bootstrap-datetimepicker.js"></script><script src="/components/bower/smalot-bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.cs.js"></script><style type="text/css">.fancybox-margin{margin-right:17px;}</style></head>

\t
\t<body class="sub" data-new-gr-c-s-check-loaded="14.1079.0" data-gr-ext-installed="">
<script>
\tvar af = af || {};
\taf.campaignTracking = {
\t\tconfig: {
\t\t\ttarget: "https://www.pizzaalcapone.cz/poledni-menu?do=campaignTracking-track",
\t\t\ttoken: "qfc90i7loc",
\t\t\tlocation: window.location
\t\t},
\t\tdata: {
\t\t\turl: window.location.href,
\t\t\treferrer: "https://www.pizzaalcapone.cz/poledni-menu"
\t\t}
\t};
</script>
<script src="/temp/80a4abf2.js?90c61016" async="" defer=""></script>

<div id="snippet--analytics:start">


</div>

\t\t\t<!-- page content -->
<div id="snippet--cartInfo.modal"></div>

<div id="snippet--flashMessages">

</div>





<script>
\t$('.site-info-message .close-info-message').on('click', function () {
\t\t$(this).parents('.site-info-message').slideUp();
\t\tCookies.set('site-info-message-' + $(this).data('info-message'), true, {expires: 7776000});
\t});

\t$('.site-info-popup .close-info-message').on('click', function () {
\t\tlet popup = $(this).parents('.site-info-popup');
\t\tpopup.hide();
\t\tCookies.set('site-info-message-' + popup.data('info-message'), true, {expires: 7776000});
\t});
\t$('.site-info-popup .modal-content').on('click', function (evt) {
\t\tevt.stopPropagation();
\t});
\t$('.site-info-popup').on('click', function (evt) {
\t\t$(this).hide();
\t});

\t$('.site-info-popup').css('display', 'block');
</script>

<header id="header" class="wrap">
    <div class="top">
        <div class="in">
            <ul>
                <li class="branch">
                        <span>Brno</span>
                        <a href="#" id="choose-branch">změnit restauraci <i class="flaticon-right-arrow-1"></i></a>
                </li>
                <li>
                        <a>tel.:</a> <a href="tel:+420 541 210 555">+420 541 210 555</a></li>
                <li><a href="mailto:info@pizzaalcapone.cz"><span>info@pizzaalcapone.cz</span></a></li>
                <li><a href="/kontakt">Kontakty</a></li>
            </ul>
        </div>
    </div>
    <div class="nav">
        <div class="in">

            <div class="logo">




    <a class="" href="/">
        <img logo="" src="/upload/images/logo-alcapone.png">
    </a>

            </div>

            <ul class="toggles">
                <li class="header-search">
                    <span class="search-toggle"><i class="flaticon-search"></i></span>
                    <div class="hidden-mobile">


<form action="/vyhledavani" method="get" id="frm-search-search" class="search toggle" novalidate="">
    <ul>
        <li class="keyword">
            <input type="text" name="search" placeholder="Chci najít..." id="suggest-desktop" required="" data-nette-rules="[{&quot;op&quot;:&quot;:filled&quot;,&quot;msg&quot;:&quot;Pole Hledat: by mělo být vyplněné.&quot;}]" class="sg-input search-suggestion" autocomplete="off">
        </li>
        <li class="submit">
            <button type="submit" name="send" value=""><i class="flaticon-search"></i></button>
        </li>
    </ul>
    <div class="cleaner"></div>

    <div class="suggestion search-suggestion-html" style="z-index:5000;"></div>

<input type="hidden" name="do" value="search-search-submit"><!--[if IE]><input type=IEbug disabled style="display:none"><![endif]-->
</form>


                    </div>
                </li>







<li class="header-user">
\t<a class="user-toggle" href="#"><i class="flaticon-user"></i></a>
</li>

                <li id="snippet--cartInfo:summary">
                    



\t<a class="basket-toggle" href="/kosik">
\t\t<i class="flaticon-shopping-cart"></i>

\t\t\t<span>Prázdný košík</span>
\t</a>

                </li>
                <li><span class="menu-toggle"><i class="flaticon-menu"></i></span></li>
            </ul>
            <nav id="crazy-menu-test" class="menu toggle">



    <div id="crazy-menu" class="main">
        <ul>
            
                <li class="crazy-item">
                    <a href="/jidelni-listek" class="has-submenu">
                        OBJEDNAT JÍDLO <i class="flaticon-down-arrow"></i>
                    </a>
                    <div class="submenu">
                        <div class="item">
                            
                            <a href="/pizza">
                                <h2>Pizza</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/testoviny">
                                <h2>Těstoviny</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/burgery">
                                <h2>Burgery</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/smazene">
                                <h2>Smažené</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/polevky">
                                <h2>Polévky</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/predkrmy">
                                <h2>Předkrmy</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/rizota">
                                <h2>Rizota</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/ryby">
                                <h2>Ryby</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/prilohy-a-salaty">
                                <h2>Přílohy a saláty</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/maso-a-omacky">
                                <h2>Maso a omáčky</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/dezerty">
                                <h2>Dezerty</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                    </div>
                </li>

                <li class="crazy-item">
                    <a href="/poledni-menu">
                        POLEDNÍ MENU                     </a>
                </li>

                <li class="crazy-item">
                    <a href="/o-nas">
                        O NÁS                     </a>
                </li>

                <li class="crazy-item">
                    <a href="/fotogalerie" class="has-submenu">
                        FOTOGALERIE <i class="flaticon-down-arrow"></i>
                    </a>
                    <div class="submenu">
                        <div class="item">
                            
                            <a href="/restaurace-brno">
                                <h2>Al Capone Brno</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                        <div class="item">
                            
                            <a href="/restaurace-rajhrad">
                                <h2>Al Capone Rajhrad</h2>
                            </a>
                            <ul>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="space" style="flex-grow: 0;"></li>
                <li class="more hidden">
                    <span class="menu-toggle"><i class="flaticon-menu"></i></span>
                </li>
        </ul>
    </div>

    <div class="other" id="other-items" style="display: none;">
        <ul>
            <li class="hidden">
                
                <a href="/jidelni-listek">
                    <span>OBJEDNAT JÍDLO</span>
                </a>
            </li>
            <li class="hidden">
                
                <a href="/poledni-menu">
                    <span>POLEDNÍ MENU</span>
                </a>
            </li>
            <li class="hidden">
                
                <a href="/o-nas">
                    <span>O NÁS</span>
                </a>
            </li>
            <li class="hidden">
                
                <a href="/fotogalerie">
                    <span>FOTOGALERIE</span>
                </a>
            </li>
        </ul>
    </div>


<script>
\tfunction crazyMenu() {
\t\t//console.log('test');
    \tlet $crazyMenu = $('#crazy-menu ul');
\t\tlet $menuBox = $('#header .nav .in');
\t\tlet $toggles = $menuBox.find('.toggles');
\t\tlet $logo = $menuBox.find('.logo');
\t\tlet $moreWidth = $crazyMenu.find('.more').outerWidth(true);
\t\tlet $width = 0;

\t\tlet $crazyItems = $crazyMenu.find('li.crazy-item');
    \t$crazyMenu.find('.space').css('flex-grow', '0');

\t\tlet $isMobileSize = !$('.basket-toggle span').is(':visible');

    \tif ($isMobileSize) {
\t\t\t$crazyItems.removeClass('hidden');
\t\t\tif (!$menuBox.find('.toggles .menu-toggle').hasClass('active')) {
\t\t\t\t$('#header .in .menu').hide();
\t\t\t}
\t\t\treturn;
\t\t}

\t\tlet $menuWidth = $menuBox.innerWidth();
\t\tif ($menuWidth >= 970) {
\t\t\t$menuWidth -= $toggles.outerWidth();
\t\t\t$menuWidth -= $logo.outerWidth();
\t\t}

\t\t$crazyItems.addClass('hidden');
\t\t$('#header .in .menu').show();

    \tlet $counter = 0;
\t\t$crazyItems.each(function () {
\t\t\t$width += $(this).outerWidth(true);
\t\t\tlet $countedMenuWidth = $moreWidth + $width;
\t\t\tif ($countedMenuWidth < $menuWidth) {
\t\t\t\t$(this).removeClass('hidden');
\t\t\t\t$counter++;
\t\t\t} else {
\t\t\t\tif (($counter === ($crazyItems.length - 1)) && ($width < $moreWidth)) {
\t\t\t\t\t$(this).removeClass('hidden');
\t\t\t\t\t$counter++;
\t\t\t\t} else {
\t\t\t\t\t$(this).addClass('hidden');
\t\t\t\t}
\t\t\t}
        });

\t\tif ($counter === $crazyItems.length) {
\t\t\t$crazyMenu.find('.more').addClass('hidden');
\t\t} else {
\t\t\t$crazyMenu.find('.more').removeClass('hidden');
\t\t\t$crazyMenu.find('.space').css('flex-grow', '1');
\t\t}

\t\tlet $otherItems = $('#other-items ul li');
\t\tlet $otherCount = 0;
\t\tlet $hideOther = true;
\t\t$otherItems.each(function () {
\t\t\t$otherCount++;
\t\t\tif ($otherCount > $counter) {
\t\t\t\t$(this).removeClass('hidden');
\t\t\t\t$hideOther = false;
\t\t\t} else {
\t\t\t\t$(this).addClass('hidden');
\t\t\t}
\t\t});

\t\tif ($hideOther) {
\t\t\t$('#other-items').hide();
\t\t\t$crazyMenu.find('.menu-toggle').removeClass('active');
\t\t}

\t}

\t$(function () {
\t\t$('.has-submenu').parent().lazyMenu('open', {
\t\t\tbeforeOpen: function(element) {
\t\t\t\tconsole.log(element);
\t\t\t\tlet menuBox = element.closest('.in');
\t\t\t\telement.find('.submenu').css('left', (menuBox.offset().left - element.offset().left) + 'px');
\t\t\t}
\t\t});

\t\t$(window).on('resize', function () {
\t\t\tcrazyMenu();
        });

\t\tcrazyMenu();
\t});
</script>

            </nav>

            <div class="visible-mobile">


<form action="/vyhledavani" method="get" id="frm-search-search" class="search toggle" novalidate="">
    <ul>
        <li class="keyword">
            <input type="text" name="search" placeholder="Chci najít..." id="suggest-desktop" required="" data-nette-rules="[{&quot;op&quot;:&quot;:filled&quot;,&quot;msg&quot;:&quot;Pole Hledat: by mělo být vyplněné.&quot;}]" class="sg-input search-suggestion" autocomplete="off">
        </li>
        <li class="submit">
            <button type="submit" name="send" value=""><i class="flaticon-search"></i></button>
        </li>
    </ul>
    <div class="cleaner"></div>

    <div class="suggestion search-suggestion-html" style="z-index:5000;"></div>

<input type="hidden" name="do" value="search-search-submit"><!--[if IE]><input type=IEbug disabled style="display:none"><![endif]-->
</form>



<script>
\t$(function () {
\t\tvar suggestion = $('.search-suggestion-html');
\t\tvar searchBox = $(".search-suggestion");

\t\tvar waitRequest = null;
\t\tvar lastQuery = '';
\t\tvar answered = true;
\t\tsearchBox.on('keyup', function (ev) {
\t\t\tsearchBox.val($(this).val());
            if (answered) {
                sendRequest();
            } else {
                retryRequest()
            }
\t\t});

\t\tvar retryRequest = function () {
\t\t\tif (answered) {
\t\t\t\tsendRequest();
            } else {
\t\t\t\tclearTimeout(waitRequest);
\t\t\t\twaitRequest = setTimeout(function () {
\t\t\t\t\tretryRequest()
\t\t\t\t}, 20);
            }
\t\t};

\t\tvar sendRequest = function () {
\t\t\tvar phrase = searchBox.val().trim();
\t\t\tconsole.log(phrase);
\t\t\tif (phrase.length > 1) {
\t\t\t\tif (lastQuery !== phrase) {
\t\t\t\t\tlastQuery = phrase;
\t\t\t\t\tanswered = false;

\t\t\t\t\tvar regexp = new RegExp('^\\/([a-z]+)');
\t\t\t\t\tvar urlLang = window.location.pathname.match(regexp);
\t\t\t\t\tvar htmlLang = document.getElementsByTagName("HTML")[0].getAttribute("lang");

\t\t\t\t\tvar ajaxUrl = '/service/front.ajax-fulltext.search-suggestion';
\t\t\t\t\tif (urlLang && (urlLang[1] === htmlLang)) {
\t\t\t\t\t\tajaxUrl = '/service/' + htmlLang + '/front.ajax-fulltext.search-suggestion';
\t\t\t\t\t}

\t\t\t\t\t$.ajax({
\t\t\t\t\t\turl: ajaxUrl,
\t\t\t\t\t\tdata: {
\t\t\t\t\t\t\t'do': 'suggest',
\t\t\t\t\t\t\t'phrase': phrase,
\t\t\t\t\t\t\t'type': 'product'
\t\t\t\t\t\t}
\t\t\t\t\t}).done(function (data) {
\t\t\t\t\t\tconsole.log(data);
\t\t\t\t\t\tanswered = true;
\t\t\t\t\t\tvar newContent = JSON.parse(data);
\t\t\t\t\t\tsuggestion.html(newContent);
\t\t\t\t\t\tsuggestion.addClass('show');
\t\t\t\t\t});
\t\t\t\t}
\t\t\t}
\t\t};

\t\t$(window).on('mouseup', function (e) {
\t\t\tif (suggestion.hasClass('show') && !searchBox.is(e.target) && !suggestion.is(e.target) && suggestion.has(e.target).length === 0) {
\t\t\t\tsuggestion.removeClass('show');
\t\t\t}
\t\t});
\t});
</script>
            </div>
        </div>
    </div>
</header>

<div id="branch-popup-back"></div>
<div id="branch-popup" style="display: none">
    <div class="branch-popup-front"><h2>Vyberte si prosím pobočku</h2></div>
    <div class="branch-popup-front">
        <div>
            <a href="/poledni-menu?id=0fda65605cdd11eca4000cc47a0ca484&amp;do=chooseAlcBranch">
                <img src="/upload/images/brno.jpg">
            </a>
        </div>
        <div>
            <a href="/poledni-menu?id=f8ea20c05cdc11ec9cd70cc47a0ca484&amp;do=chooseAlcBranch">
                <img src="/upload/images/rajhrad-3.jpg">
            </a>
        </div>
    </div>
</div>

<script>
    $(function () {
        $('#choose-branch').on('click', function () {
            $('#branch-popup-back').toggle();
            $('#branch-popup').toggle();
        });

        $('#branch-popup-back, #branch-popup, .branch-popup-front').on('click', function () {
            $('#branch-popup-back').hide();
            $('#branch-popup').hide();
        });

        $('.branch-popup-front a').on('click', function (ev) {
            ev.stopPropagation();
        });

    })
</script>


<section class="wrap">



<div class="breadcrumbs">
\t<div class="in">
\t\t<a href="/">Úvodní strana</a>
\t\t<i class="flaticon-right-arrow"></i>

POLEDNÍ MENU\t\t\t
\t</div>
</div>

\t<div class="in">
\t\t<div class="content">
\t\t\t<h1>Polední menu</h1>
\t\t\t\t<p></p><h2 style="text-align: center;">Vychutnejte si&nbsp;naše obědová menu v naší brněnské pobočce</h2>

<p style="text-align: center;">Tento týden můžete vybírat z následující nabídky&nbsp;</p>

<h2 style="font-style:italic;"><font face="Georgia, serif">Pondělí 12<span style="font-family:Arial,Helvetica,sans-serif;">.09.2022</span><span style="font-family:Times New Roman,Times,serif;"></span></font></h2>

<p>Polévka: Bramboračka s houbami 1</p>

<p>MENU 1: Fettuccine s kuřecím masem a listovým špenátem, sypané sýrem 1,3,7&nbsp;</p>
109 Kč

<p>MENU 2: Pizza Cardinale s kukuřicí 1,3,7</p>
119 Kč

<p>MENU 3: Smažená vepřová kotleta plněná ementálem, bramborová kaše 1,3,7&nbsp;</p>
129 Kč

<p>MENU 4: &nbsp;Mix listových salátů se zelím, rukolou, polníčkem, vlašskými ořechy, balkánským sýrem, krevetami, toustíky 1,3,4,7,10</p>
159 Kč

<p>Rajčatový salát s cibulí 40,-&nbsp;</p>

<div style="text-align:left;">
<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p><span style="float:right;"></span></p>
</div>

<h2><br>
Úterý 13.09. 2022</h2>

<p>Polévka: Hovězí vývar s kapáním 1,3,7,9&nbsp;</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 1: Holandský řízek, vařené brambory s petrželkou 109 Kč</p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 2: Pizza Al Capone (tomat,sýr, šunka, salám, žampiony, vejce) 1,3,7&nbsp; &nbsp; 119 Kč</p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 3: Panenská svíčková na grilu, Demi glace, opékané brambory 1<span style="float:right;">129 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>MENU 4:&nbsp; Pečená kachna bílé zelí, karlovarský knedlík 1,3,7&nbsp; &nbsp; 159 Kč</p>
</div>
Rajčatový salát s cibulí 40,-

<h2><br>
Středa 14.09. 2022</h2>

<p>Polévka: Gulášová polévka 1</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 1: Masové kuličky v rajské omáčce, kolínka 1,3,7&nbsp;<span style="float:right;">109 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 2: Pizza Carbonara (smetana, sýr, slanina,cibule, vejce) 1,3,7<span style="float:right;">119 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 3: Kuřecí prsíčka v bramborové slámě, mačkané brambory, zelný salát 1,3,7&nbsp; &nbsp; 129 Kč</p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>MENU 4: Roštěná na grilu s opečenou slaninou, , sázené vejce, smetanové brambory&nbsp; &nbsp;159 Kč</p>
</div>
Rajčatový salát s cibulí 40,-

<h2><br>
Čtvrtek 15.09. 2022</h2>

<p>Polévka: Čočková polévka s uzeninou 1</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 1: Vepřová pečeně, červené zelí, restované gnocchi 1,3,7&nbsp;<span style="float:right;">109 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 2: Pizza Quattro formaggi s kozími rohy&nbsp;&nbsp;1,3,7<span style="float:right;">119 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 3: Kuřecí prsíčka zabalená ve slaninovém kabátku, cheddarová omáčka, štouchané brambory 1,7&nbsp; &nbsp;129 Kč</p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>MENU 4: Smažený africký sumeček, bramborové pyré, limetková majonéza 1,3,4,7&nbsp; 159 Kč</p>
</div>
Rajčatový salát s cibulí 40,-

<h2><br>
Pátek 16.09.2022</h2>

<p>Polévka: Hovězí vývar se zeleninou a nudlemi 1,3,7,9&nbsp;</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 1: Krkovička na grilu, pepřová omáčka, americké brambory 1,7&nbsp; &nbsp;109 Kč</p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 2: Pizza Tricolore (1/3 sýr, 1/3 salám, 1/3 šunka) 1,3,7&nbsp;<span style="float:right;">119Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>MENU 3: Smažené kuřecí a vepřové řízečky, bramborová kaše 1,3,7&nbsp; &nbsp; 129 Kč</p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>MENU 4: Žampiony plněné mletým masem a sýrem, steakové hranolky 1&nbsp; &nbsp; &nbsp;159 Kč</p>
</div>
Rajčatový salát s cibulí 40,-</div>
<p></p>
\t\t</div>

\t</div>
</section>






    <style>
\t\t#newsletter .in ul li.email input.sg-input {
\t\t\tbackground-color: #ffffff;
\t\t}
    </style>

    
    <section id="newsletter" class="wrap" style="background-image: url('/upload/images/newletter-linka.jpg');">


<form class="in" action="/" method="post" id="frm-banner-subscriptionControl-form" novalidate="">
    <p>Dovezeme vám novinky</p>
    <h2>Přihlašte se k odběru newsletterů</h2>
    <ul>
        <li class="email">
            <span>
                <input type="text" name="email" id="frm-banner-subscriptionControl-form-email" required="" data-nette-rules="[{&quot;op&quot;:&quot;:filled&quot;,&quot;msg&quot;:&quot;Pole E-mail: by mělo být vyplněné.&quot;},{&quot;op&quot;:&quot;:email&quot;,&quot;msg&quot;:&quot;Zadejte e-mail ve správném formátu.&quot;}]" class="sg-input" placeholder="Vaše e-mailová adresa">
            </span>
        </li>
        <li class="submit">
            <button class="sg-button black icon right-arrow" type="submit" name="send" value="Přihlásit">
                Přihlásit se k odběru <i class="flaticon-right-arrow-1"></i>
            </button>
        </li>
    </ul>
    <div class="agree">
        <label for="frm-banner-subscriptionControl-form-agree"><div class="icheckbox_square-black" style="position: relative;"><input type="checkbox" name="agree" id="frm-banner-subscriptionControl-form-agree" required="" data-nette-rules="[{&quot;op&quot;:&quot;:filled&quot;,&quot;msg&quot;:&quot;Musíte protvrdit souhlas se zpracováním osobních údajů&quot;}]" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> Souhlasím se <a target="_blank" href="/zpracovani-osobnich-udaju">zpracováním osobních údajů</a> . </label>
    </div>
<input type="hidden" name="_aspm_" value="" class="aspm-control" style="display: none;"><input type="hidden" name="_aspm_delay_" value="d92f2d3f23"><input type="hidden" name="_do" value="banner-subscriptionControl-form-submit"></form>
    </section>


<footer id="footer" class="wrap">
    <div class="in">






    <div class="box ">
        
            <h4>O nákupu <i class="flaticon-down-arrow"></i></h4>
        <div class="content">
                <ul>
                    <li>
                        
                        <a href="/o-nas">O nás</a>
                    </li>
                    <li>
                        
                        <a href="/obchodni-podminky">Obchodní podmínky</a>
                    </li>
                    <li>
                        
                        <a href="/zasady-zpracovani-osobnich-udaju">Zásady zpracování osobních údajů</a>
                    </li>
                    <li>
                        
                        <a href="/kontakt">Kontakty</a>
                    </li>
                </ul>
        </div>
    </div>
    <div class="box ">
        
            <h4>Menu <i class="flaticon-down-arrow"></i></h4>
        <div class="content">
                <ul>
                    <li>
                        
                        <a href="/jidelni-listek">Hlavní menu</a>
                    </li>
                    <li>
                        
                        <a href="/poledni-menu">Polední menu</a>
                    </li>
                </ul>
        </div>
    </div>
    <div class="box ">
        
            <h4>Kategorie <i class="flaticon-down-arrow"></i></h4>
        <div class="content">
                <ul>
                    <li>
                        
                        <a href="/pizza">Pizza</a>
                    </li>
                    <li>
                        
                        <a href="/testoviny">Těstoviny</a>
                    </li>
                    <li>
                        
                        <a href="/burgery">Burgery</a>
                    </li>
                    <li>
                        
                        <a href="/smazene">Smažené</a>
                    </li>
                    <li>
                        
                        <a href="/polevky">Polévky</a>
                    </li>
                    <li>
                        
                        <a href="/predkrmy">Předkrmy</a>
                    </li>
                    <li>
                        
                        <a href="/rizota">Rizota</a>
                    </li>
                    <li>
                        
                        <a href="/ryby">Ryby</a>
                    </li>
                    <li>
                        
                        <a href="/prilohy-a-salaty">Přílohy a saláty</a>
                    </li>
                    <li>
                        
                        <a href="/maso-a-omacky">Maso a omáčky</a>
                    </li>
                    <li>
                        
                        <a href="/dezerty">Dezerty</a>
                    </li>
                </ul>
        </div>
    </div>


        <div class="box payment">





        <h4>Platební možnosti</h4>
        <div class="logos">
            <ul>
                <li>
                    <img visa="" src="/tmpl/boston/img/default/visa.svg">
                </li>
                <li>
                    <img mastercard="" src="/tmpl/boston/img/default/mastercard1.svg">
                </li>
            </ul>
        </div>






    <h4>Sociální sítě</h4>
    <div class="social">
        <ul>
                <li>
                    
                            <a class="facebook" href="https://www.facebook.com/pizzaalcaponebrno/" target="_blank">
                                <i class="flaticon-facebook"></i>
                            </a>
                    </li>
        </ul>
    </div>


        </div>
    </div>
    <div class="in copyright">
        <p>Copyright 2022 <a href="" target="_blank"></a>. Všechna práva vyhrazena.</p>
        <p class="author">Vytvořila <a href="https://www.hipromotion.cz/" target="_blank">Hi Promotion</a> <span>|</span> Powered by <a href="https://www.shopfocus.cz/" target="_blank">ShopFocus</a></p>
    </div>
</footer>

<!-- Modal -->

<div id="login" class="sg-modal">
\t<div class="in">
\t\t<form action="/poledni-menu" method="post" id="frm-user-loginForm" class="form" data-ajax-container="self" novalidate="">
\t\t\t<div class="content">
\t\t\t\t<h2>Přihlášení</h2>
\t\t\t\t<ul>
\t\t\t\t\t<li>
\t\t\t\t\t\t<label class="title" for="modal-login">E-mail</label>
\t\t\t\t\t\t<span class="form">
\t\t\t\t\t\t\t<input type="text" name="email" id="frm-user-loginForm-email" required="" data-nette-rules="[{&quot;op&quot;:&quot;:filled&quot;,&quot;msg&quot;:&quot;Zadejte e-mail.&quot;},{&quot;op&quot;:&quot;:email&quot;,&quot;msg&quot;:&quot;Zadejte e-mail ve správném tvaru uzivatel@example.com&quot;}]" class="sg-input">
\t\t\t\t\t\t</span>
\t\t\t\t\t</li>
\t\t\t\t\t<li>
\t\t\t\t\t\t<label class="title" for="modal-password">Heslo</label>
\t\t\t\t\t\t<span class="form">
\t\t\t\t\t\t\t<input type="password" name="password" id="frm-user-loginForm-password" required="" data-nette-rules="[{&quot;op&quot;:&quot;:filled&quot;,&quot;msg&quot;:&quot;Pole Heslo: by mělo být vyplněné.&quot;}]" class="sg-input">
\t\t\t\t\t\t</span>
\t\t\t\t\t</li>
\t\t\t\t</ul>
\t\t\t\t<p class="nav">
\t\t\t\t\t<button class="sg-button black icon right-arrow" type="submit" name="send" value="Přihlásit se">Přihlásit <i class="flaticon-right-arrow-1"></i></button>
\t\t\t\t</p>
\t\t\t\t<span class="close"><i class="flaticon-close"></i></span>
\t\t\t\t<p>
\t\t\t\t\t<a href="/zapomenute-heslo">Zapomenuté heslo (obnovení hesla)</a><br>
\t\t\t\t\tNemáte účet? <a href="/registrace" target="_blank">Registrujte se</a>
\t\t\t\t</p>
\t\t\t</div>
\t\t<input type="hidden" name="_aspm_" value="" class="aspm-control" style="display: none;"><input type="hidden" name="_aspm_delay_" value="d99ede90f4"><input type="hidden" name="_do" value="user-loginForm-submit"></form>

\t</div>
</div>



<script type="application/ld+json">
\t\t{
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@id": "https://www.pizzaalcapone.cz/poledni-menu",
                "name": "POLEDNÍ MENU"
            }
        }
    ]
}
</script>




\t\t<!-- javascript -->

<script>
    var _hwq = _hwq || [];
    _hwq.push(['setKey', "test"]);_hwq.push(['setTopPos', '160']);_hwq.push(['showWidget', '21']);(function() {
        var ho = document.createElement('script'); ho.type = 'text/javascript'; ho.async = true;
        ho.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.' + "heureka.cz" + '/direct/i/gjs.php?n=wdgt&sak=' + "test";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ho, s);
    })();
</script>
<div id="snippet--analytics:end">



</div>

\t\t


<script src="/temp/1788a895.js?5c67edac"></script>

<script src="/temp/d05fa59e.js?1ede4ff7"></script>

<script src="/temp/3e974379.js?4a3f9711"></script>




\t

</body><grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></html>
`;
