import AlCapone from "../../src/menus/AlCapone";

describe("Al Capone", () => {
    let requestMock;
    let testedClass: AlCapone;

    beforeAll(() => {
        requestMock = jest.fn();
    });

    beforeEach(() => {
        testedClass = new AlCapone({get: requestMock});
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
        "text": "Polévka: Hovězí vývar s bylinkovým kapáním 1,3,7,9",
        "title": "Al Capone",
        "title_link": "https://www.pizzaalcapone.cz/poledni-menu",
    },
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "Cena: 99 Kč",
        "text": "MENU 1: Srbská kotleta, krokety 1",
    },
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "Cena: 109 Kč",
        "text": "MENU 2: Pizza Carbonara (smetana, sýr, slanina, cibule, vejce)\n\t\t\t\t\t\t\t\t1,3,7",
    },
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "Cena: 119 Kč",
        "text": "MENU 3: Křupavé kuřecí nugetky, sýrová omáčka, mačkané brambory\n\t\t\t\t\t\t\t\t1,3,7",
    },
    {
        "color": "#5da7ac",
        "fallback": "Restaurant menu",
        "footer": "Cena: 149 Kč",
        "text": "MENU 4: Risotto con Salmone (krémové rizoto s grilovaným lososem, listovým špenátem,\n\t\t\t\t\t\t\t\tparmazánem a limetkou 4,7",
    },
];

const response = `<!DOCTYPE html>
<html lang="cs" class="external-fonts-loaded js-focus-visible">



<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
\t<meta name="viewport"
\t\tcontent="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

\t<!-- metas -->
\t<meta charset="utf-8">

\t<meta name="description" content="">
\t<meta name="robots" content="">
\t<meta name="author" content="ArtFocus, ArtWeby.cz">

\t<!-- Twitter Card data -->
\t<meta name="twitter:card" content="summary">

\t<!-- Open Graph data -->
\t<meta property="og:type" content="website">
\t<meta property="og:site_name" content="Pizza Al Capone">
\t<meta property="og:title" content="Polední menu | Pizza Al Capone">
\t<meta property="og:description" content="">
\t<meta property="og:image" content="https://www.pizzaalcapone.cz/project/images/logo.jpg">
\t<meta property="og:url" content="https://www.pizzaalcapone.cz/poledni-menu">

\t<link rel="canonical" href="https://www.pizzaalcapone.cz/poledni-menu">

\t<link rel="alternate" type="application/rss+xml" title="RSS" href="/service/rss/">


\t<!-- stylesheets -->
\t<link rel="stylesheet" href="/project/templates/boston/front.css?382c0f6b">

\t<link rel="stylesheet" href="/project/templates/boston/custom-colors.css?658d3346">
\t<link rel="stylesheet" href="/project/templates/boston/custom-dimension-properties.css?8cabe18b">
\t<link rel="stylesheet" href="/project/templates/boston/custom.css?f1d6c06c">

\t<!-- icons -->

\t<link rel="shortcut icon" href="/project/favicon.ico">

\t<!-- javascript -->
\t<script>
\t\tvar APPLICATION_BASEPATH = "";
\tvar AF_MONEY_DECIMALS = 2;
\t</script>

\t<link href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600;700;800;900&display=swap"
\t\trel="stylesheet">
\t<link href="https://fonts.googleapis.com/css?family=Source Sans Pro:300,400,700,900&amp;subset=latin-ext"
\t\trel="stylesheet">
\t<link href="https://fonts.googleapis.com/css?family=Exo 2:300,400,700,900&amp;subset=latin-ext" rel="stylesheet">

\t<script src="/temp/22ab4e92.js?5d78abae"></script>

\t<link rel="stylesheet" href="/components/bower/fancybox/source/jquery.fancybox.css?f86d0749">



\t<!--[if lt IE 9]>
    <script src="/temp/200e6cab.js?abcdc154"></script>
    <![endif]-->

\t<title id="snippet--title">Polední menu | Pizza Al Capone</title>

</head>


<body class="sub">
\t<script>
\t\tvar af = af || {};
\taf.campaignTracking = {
\t\tconfig: {
\t\t\ttarget: "https://www.pizzaalcapone.cz/poledni-menu?do=campaignTracking-track",
\t\t\ttoken: "9wn0lka01v",
\t\t\tlocation: window.location
\t\t},
\t\tdata: {
\t\t\turl: window.location.href,
\t\t\treferrer: "https://www.pizzaalcapone.cz/poledni-menu?id=0fda65605cdd11eca4000cc47a0ca484&do=chooseAlcBranch"
\t\t}
\t};
\t</script>
\t<script src="/temp/80a4abf2.js?0ece297a" async defer></script>

\t<div id="snippet--analytics:start"></div>

\t<!-- page content -->
\t<div id="snippet--cartInfo.modal"></div>

\t<div id="snippet--flashMessages">

\t</div>





\t<script>
\t\t$('#site-info-message .close-info-message').on('click', function () {
\t\t$(this).parents('#site-info-message').slideUp();
\t\tCookies.set('site-info-message-' + $(this).data('info-message'), true, {expires: 7776000});
\t});
\t</script>

\t<header id="header" class="wrap">
\t\t<div class="top">
\t\t\t<div class="in">
\t\t\t\t<ul>
\t\t\t\t\t<li class="branch">
\t\t\t\t\t\t<span>Brno</span>
\t\t\t\t\t\t<a href="#" id="choose-branch">změnit restauraci <i class="flaticon-right-arrow-1"></i></a>
\t\t\t\t\t</li>
\t\t\t\t\t<li>
\t\t\t\t\t\t<a>tel.:</a> <a href="tel:+420 541 210 555">+420 541 210 555</a></li>
\t\t\t\t\t<li><a href="mailto:info@pizzaalcapone.cz"><span>info@pizzaalcapone.cz</span></a></li>
\t\t\t\t\t<li><a href="/kontakt">Kontakty</a></li>
\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t\t<div class="nav">
\t\t\t<div class="in">

\t\t\t\t<div class="logo">




\t\t\t\t\t<a class="" href="/">
\t\t\t\t\t\t<img logo src="/upload/images/logo-alcapone.png" >
    </a>

\t\t\t\t</div>

\t\t\t\t<ul class="toggles">
\t\t\t\t\t<li class="header-search">
\t\t\t\t\t\t<span class="search-toggle"><i class="flaticon-search"></i></span>
\t\t\t\t\t\t<div class="hidden-mobile">


\t\t\t\t\t\t\t<form action="/vyhledavani" method="get" id="frm-search-search" class="search toggle">
\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t<li class="keyword">
\t\t\t\t\t\t\t\t\t\t<input type="text" name="search" placeholder="Chci najít..." id="suggest-desktop" required data-nette-rules='[{"op":":filled","msg":"Pole Hledat: by mělo být vyplněné."}]' class="sg-input search-suggestion" autocomplete="off">
        </li>
\t\t\t\t\t\t\t\t\t<li class="submit">
\t\t\t\t\t\t\t\t\t\t<button type="submit" name="send" value=""><i class="flaticon-search"></i></button>
\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t<div class="cleaner"></div>

\t\t\t\t\t\t\t\t<div class="suggestion search-suggestion-html" style="z-index:5000;"></div>

\t\t\t\t\t\t\t\t<input type="hidden" name="do" value="search-search-submit">
\t\t\t\t\t\t\t\t<!--[if IE]><input type=IEbug disabled style="display:none"><![endif]-->
\t\t\t\t\t\t\t</form>


\t\t\t\t\t\t</div>
\t\t\t\t\t</li>







\t\t\t\t\t<li class="header-user">
\t\t\t\t\t\t<a class="user-toggle" href="#"><i class="flaticon-user"></i></a>
\t\t\t\t\t</li>

\t\t\t\t\t<li id="snippet--cartInfo:summary">




\t\t\t\t\t\t<a class="basket-toggle" href="/kosik">
\t\t\t\t\t\t\t<i class="flaticon-shopping-cart"></i>

\t\t\t\t\t\t\t<span>Prázdný košík</span>
\t\t\t\t\t\t</a>

\t\t\t\t\t</li>
\t\t\t\t\t<li><span class="menu-toggle"><i class="flaticon-menu"></i></span></li>
\t\t\t\t</ul>
\t\t\t\t<nav id="crazy-menu-test" class="menu toggle">



\t\t\t\t\t<div id="crazy-menu" class="main">
\t\t\t\t\t\t<ul>

\t\t\t\t\t\t\t<li class="crazy-item ">
\t\t\t\t\t\t\t\t<a href="/jidelni-listek" class="has-submenu">
\t\t\t\t\t\t\t\t\tOBJEDNAT JÍDLO <i
                                class="flaticon-down-arrow"></i>
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t<div class="submenu">
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/pizza">
\t\t\t\t\t\t\t\t\t\t\t<h2>Pizza</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/testoviny">
\t\t\t\t\t\t\t\t\t\t\t<h2>Těstoviny</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/burgery">
\t\t\t\t\t\t\t\t\t\t\t<h2>Burgery</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/smazene">
\t\t\t\t\t\t\t\t\t\t\t<h2>Smažené</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/polevky">
\t\t\t\t\t\t\t\t\t\t\t<h2>Polévky</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/predkrmy">
\t\t\t\t\t\t\t\t\t\t\t<h2>Předkrmy</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/rizota">
\t\t\t\t\t\t\t\t\t\t\t<h2>Rizota</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/ryby">
\t\t\t\t\t\t\t\t\t\t\t<h2>Ryby</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/prilohy-a-salaty">
\t\t\t\t\t\t\t\t\t\t\t<h2>Přílohy a saláty</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/maso-a-omacky">
\t\t\t\t\t\t\t\t\t\t\t<h2>Maso a omáčky</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/dezerty">
\t\t\t\t\t\t\t\t\t\t\t<h2>Dezerty</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</li>

\t\t\t\t\t\t\t<li class="crazy-item ">
\t\t\t\t\t\t\t\t<a href="/poledni-menu">
\t\t\t\t\t\t\t\t\tPOLEDNÍ MENU </a>
\t\t\t\t\t\t\t</li>

\t\t\t\t\t\t\t<li class="crazy-item ">
\t\t\t\t\t\t\t\t<a href="/o-nas">
\t\t\t\t\t\t\t\t\tO NÁS </a>
\t\t\t\t\t\t\t</li>

\t\t\t\t\t\t\t<li class="crazy-item hidden">
\t\t\t\t\t\t\t\t<a href="/fotogalerie" class="has-submenu">
\t\t\t\t\t\t\t\t\tFOTOGALERIE <i
                                class="flaticon-down-arrow"></i>
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t<div class="submenu">
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/restaurace-brno">
\t\t\t\t\t\t\t\t\t\t\t<h2>Al Capone Brno</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="item">

\t\t\t\t\t\t\t\t\t\t<a href="/restaurace-rajhrad">
\t\t\t\t\t\t\t\t\t\t\t<h2>Al Capone Rajhrad</h2>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li class="space"></li>
\t\t\t\t\t\t\t<li class="more ">
\t\t\t\t\t\t\t\t<span class="menu-toggle"><i class="flaticon-menu"></i></span>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="other" id="other-items">
\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t<li class="hidden">

\t\t\t\t\t\t\t\t<a href="/jidelni-listek">
\t\t\t\t\t\t\t\t\t<span>OBJEDNAT JÍDLO</span>
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li class="hidden">

\t\t\t\t\t\t\t\t<a href="/poledni-menu">
\t\t\t\t\t\t\t\t\t<span>POLEDNÍ MENU</span>
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li class="hidden">

\t\t\t\t\t\t\t\t<a href="/o-nas">
\t\t\t\t\t\t\t\t\t<span>O NÁS</span>
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t\t<a href="/fotogalerie">
\t\t\t\t\t\t\t\t\t<span>FOTOGALERIE</span>
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t</div>


\t\t\t\t\t<script>
\t\t\t\t\t\tfunction crazyMenu() {
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
\t\t\t\t\t</script>

\t\t\t\t</nav>

\t\t\t\t<div class="visible-mobile">


\t\t\t\t\t<form action="/vyhledavani" method="get" id="frm-search-search" class="search toggle">
\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t<li class="keyword">
\t\t\t\t\t\t\t\t<input type="text" name="search" placeholder="Chci najít..." id="suggest-desktop" required data-nette-rules='[{"op":":filled","msg":"Pole Hledat: by mělo být vyplněné."}]' class="sg-input search-suggestion" autocomplete="off">
        </li>
\t\t\t\t\t\t\t<li class="submit">
\t\t\t\t\t\t\t\t<button type="submit" name="send" value=""><i class="flaticon-search"></i></button>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t\t<div class="cleaner"></div>

\t\t\t\t\t\t<div class="suggestion search-suggestion-html" style="z-index:5000;"></div>

\t\t\t\t\t\t<input type="hidden" name="do" value="search-search-submit">
\t\t\t\t\t\t<!--[if IE]><input type=IEbug disabled style="display:none"><![endif]-->
\t\t\t\t\t</form>



\t\t\t\t\t<script>
\t\t\t\t\t\t$(function () {
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
\t\t\t\t\t</script>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</header>

\t<div id="branch-popup-back"></div>
\t<div id="branch-popup" style="display: none">
\t\t<div class="branch-popup-front">
\t\t\t<h2>Vyberte si prosím pobočku</h2>
\t\t</div>
\t\t<div class="branch-popup-front">
\t\t\t<div>
\t\t\t\t<a href="/poledni-menu?id=0fda65605cdd11eca4000cc47a0ca484&amp;do=chooseAlcBranch">
\t\t\t\t\t<img src="/upload/images/brno.jpg">
            </a>
\t\t\t</div>
\t\t\t<div>
\t\t\t\t<a href="/poledni-menu?id=f8ea20c05cdc11ec9cd70cc47a0ca484&amp;do=chooseAlcBranch">
\t\t\t\t\t<img src="/upload/images/rajhrad-3.jpg">
            </a>
\t\t\t</div>
\t\t</div>
\t</div>

\t<script>
\t\t$(function () {
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
\t</script>


\t<section class="wrap">



\t\t<div class="breadcrumbs">
\t\t\t<div class="in">
\t\t\t\t<a href="/">Úvodní strana</a>
\t\t\t\t<i class="flaticon-right-arrow"></i>

\t\t\t\tPOLEDNÍ MENU
\t\t\t</div>
\t\t</div>

\t\t<div class="in">
\t\t\t<div class="content">
\t\t\t\t<h1>Polední menu</h1>
\t\t\t\t<p>
\t\t\t\t\t<h2 style="text-align: center;">Vychutnejte si&nbsp;naše obědová menu v naší brněnské pobočce</h2>

\t\t\t\t\t<p style="text-align: center;">Tento týden můžete vybírat z následující nabídky:</p>

\t\t\t\t\t<div style="text-align:left;">
\t\t\t\t\t\t<h2>Pondělí 14.3.2022</h2>

\t\t\t\t\t\t<p>Polévka:&nbsp;Hovězí vývar s bylinkovým kapáním 1,3,7,9</p>

\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t<p>MENU 1: Srbská kotleta, krokety 1<span style="float:right;">99 Kč</span></p>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t<p>MENU 2: Pizza Carbonara (smetana, sýr, slanina, cibule, vejce)
\t\t\t\t\t\t\t\t1,3,7<span style="float:right;">109 Kč</span></p>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t<p>MENU 3: Křupavé kuřecí nugetky, sýrová omáčka, mačkané brambory
\t\t\t\t\t\t\t\t1,3,7<span style="float:right;">119 Kč</span></p>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 3px solid black;">
\t\t\t\t\t\t\t<p>MENU 4: Risotto con Salmone (krémové rizoto s grilovaným lososem, listovým špenátem,
\t\t\t\t\t\t\t\tparmazánem a limetkou 4,7<span style="float:right;">149 Kč</span></p>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<h2><br>
Úterý 15.3.2022</h2>

\t\t\t\t\t\t\t<p>Polévka: Hráškový krém 7</p>

\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t<p>MENU 1: Karbenátky s mozzarellou, vařené brambory, okurek
\t\t\t\t\t\t\t\t\t1,3,7<span style="float:right;">99 Kč</span></p>
\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t<p>MENU 2: Pizza Buffala (tomat, mozzarella, chorizo, rajčata, pepř)
\t\t\t\t\t\t\t\t\t1,3,7<span style="float:right;">109 Kč</span></p>
\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t<p>MENU 3: Zapečená krkovička se sýrem a smetanou, hranolky
\t\t\t\t\t\t\t\t\t1,7<span style="float:right;">119 Kč</span></p>
\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 3px solid black;">
\t\t\t\t\t\t\t\t<p>MENU 4: Kuřecí Tikka Masala, tortilla 1,3,7<span style="float:right;">149 Kč</span>
\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t<h2><br>
Středa 16.3.2022</h2>

\t\t\t\t\t\t\t\t<p>Polévka: Bramboračka s houbami 1</p>

\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t<p>MENU 1: Kuře na paprice, kolínka 1,3,7
\t\t\t\t\t\t\t\t\t\t<span style="float:right;">99 Kč</span></p>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t<p>MENU 2: Pizza Quattro Staggioni (1/4 sýr, 1/4 šunka, 1/4 žampiony, 1/4 slanina)
\t\t\t\t\t\t\t\t\t\t1,3,7<span style="float:right;">109 Kč</span></p>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t<p>MENU 3: Smažená vepřová kapsa plněná nivou, bramborová kaše 1,3,7
\t\t\t\t\t\t\t\t\t\t<span style="float:right;">119 Kč</span></p>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 3px solid black;">
\t\t\t\t\t\t\t\t\t<p>MENU 4: Burger s trhaným vepřovým masem, ementálem, ledovým salátem, rajčetem,
\t\t\t\t\t\t\t\t\t\tmajonézou, hranolky 1,3,7<span style="float:right;">149 Kč</span></p>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<h2><br>
Čtvrtek 17.3.2022</h2>

\t\t\t\t\t\t\t\t\t<p>Polévka: Valašská kyselica s uzeninou 1,7</p>

\t\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t\t<p>MENU 1: Pečené kuře s nádivkou, petrželková rýže, zelný salát 1,3,7
\t\t\t\t\t\t\t\t\t\t\t<span style="float:right;">99 Kč</span></p>
\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t\t<p>MENU 2: Pizza Al Capone (tomat, sýr, šunka, salám, žampiony, vejce)
\t\t\t\t\t\t\t\t\t\t\t1,3,7<span style="float:right;">109 Kč</span></p>
\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t\t<p>MENU 3: Krůtí řízek v bylinkové strouhance, mačkané brambory s polníčkem
\t\t\t\t\t\t\t\t\t\t\t1,3,7 <span style="float:right;">119 Kč</span></p>
\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 3px solid black;">
\t\t\t\t\t\t\t\t\t\t<p>MENU 4: Zeleninový salát s pečenými paprikami, olivami, sušenou šunkou,
\t\t\t\t\t\t\t\t\t\t\tparmazánem, zálivkou, pitta chléb
\t\t\t\t\t\t\t\t\t\t\t1,3,4,7,10<span style="float:right;">149 Kč</span></p>
\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t<h2><br>
Pátek 18.3.2022</h2>

\t\t\t\t\t\t\t\t\t\t<p>Polévka: Žampiónový smetanový krém 1,7</p>

\t\t\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t\t\t<p>MENU 1: Vepřový vrabec, bílé zelí, houskový knedlík
\t\t\t\t\t\t\t\t\t\t\t\t1,3,7<span style="float:right;">99 Kč</span></p>
\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t\t\t<p>MENU 2: Pizza Bologna (tomat, sýr, grilované kuřecí kousky, cheddar, BBQ,
\t\t\t\t\t\t\t\t\t\t\t\tkukuřice) 1,3,7<span style="float:right;">109 Kč</span></p>
\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 1px solid black;">
\t\t\t\t\t\t\t\t\t\t\t<p>MENU 3: Filírované kuřecí prsíčko na zeleninovém pyré, vařené brambory s
\t\t\t\t\t\t\t\t\t\t\t\tlibečkem 1<span style="float:right;">119 Kč</span></p>
\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t<div class="image-clearfix" style="border-bottom: 3px solid black;">
\t\t\t\t\t\t\t\t\t\t\t<p>MENU 4: Hovězí roštěná na houbách s hráškem, americké brambory 1
\t\t\t\t\t\t\t\t\t\t\t\t<span style="float:right;">149 Kč</span></p>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</p>
\t\t\t</div>

\t\t</div>
\t</section>






\t<style>
\t\t#newsletter .in ul li.email input.sg-input {
\t\t\tbackground-color: #ffffff;
\t\t}
\t</style>


\t<section id="newsletter" class="wrap" style="background-image: url('/upload/images/newletter-linka.jpg');">


\t\t<form class="in" action="/" method="post" id="frm-banner-subscriptionControl-form">
\t\t\t<p>Dovezeme vám novinky</p>
\t\t\t<h2>Přihlašte se k odběru newsletterů</h2>
\t\t\t<ul>
\t\t\t\t<li class="email">
\t\t\t\t\t<span>
                <input type="text" name="email" id="frm-banner-subscriptionControl-form-email" required data-nette-rules='[{"op":":filled","msg":"Pole E-mail: by mělo být vyplněné."},{"op":":email","msg":"Zadejte e-mail ve správném formátu."}]' class="sg-input" placeholder="Vaše e-mailová adresa">
            </span>
\t\t\t\t</li>
\t\t\t\t<li class="submit">
\t\t\t\t\t<button class="sg-button black icon right-arrow" type="submit" name="send" value="Přihlásit">
                Přihlásit se k odběru <i class="flaticon-right-arrow-1"></i>
            </button>
\t\t\t\t</li>
\t\t\t</ul>
\t\t\t<div class="agree">
\t\t\t\t<label for="frm-banner-subscriptionControl-form-agree"><input type="checkbox" name="agree" id="frm-banner-subscriptionControl-form-agree" required data-nette-rules='[{"op":":filled","msg":"Musíte protvrdit souhlas se zpracováním osobních údajů"}]'> Souhlasím se <a target="_blank" href="/zpracovani-osobnich-udaju">zpracováním osobních údajů</a> . </label>
\t\t\t</div>
\t\t\t<input type="hidden" name="_aspm_" value="http://" class="aspm-control"><input type="hidden" name="_aspm_delay_" value="d943ad4e4e"><input type="hidden" name="_do" value="banner-subscriptionControl-form-submit"></form>
\t</section>


\t<footer id="footer" class="wrap">
\t\t<div class="in">






\t\t\t<div class="box ">

\t\t\t\t<h4>O nákupu <i class="flaticon-down-arrow"></i></h4>
\t\t\t\t<div class="content">
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/o-nas">O nás</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/obchodni-podminky">Obchodní podmínky</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/zasady-zpracovani-osobnich-udaju">Zásady zpracování osobních údajů</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/kontakt">Kontakty</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t</ul>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<div class="box ">

\t\t\t\t<h4>Menu <i class="flaticon-down-arrow"></i></h4>
\t\t\t\t<div class="content">
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/jidelni-listek">Hlavní menu</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/poledni-menu">Polední menu</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t</ul>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<div class="box ">

\t\t\t\t<h4>Kategorie <i class="flaticon-down-arrow"></i></h4>
\t\t\t\t<div class="content">
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/pizza">Pizza</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/testoviny">Těstoviny</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/burgery">Burgery</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/smazene">Smažené</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/polevky">Polévky</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/predkrmy">Předkrmy</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/rizota">Rizota</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/ryby">Ryby</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/prilohy-a-salaty">Přílohy a saláty</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/maso-a-omacky">Maso a omáčky</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a href="/dezerty">Dezerty</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t</ul>
\t\t\t\t</div>
\t\t\t</div>


\t\t\t<div class="box payment">





\t\t\t\t<h4>Platební možnosti</h4>
\t\t\t\t<div class="logos">
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<img Visa src="/tmpl/boston/img/default/visa.svg" >
                </li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<img Mastercard src="/tmpl/boston/img/default/mastercard1.svg" >
                </li>
\t\t\t\t\t</ul>
\t\t\t\t</div>






\t\t\t\t<h4>Sociální sítě</h4>
\t\t\t\t<div class="social">
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li>

\t\t\t\t\t\t\t<a class="facebook" href="https://www.facebook.com/pizzaalcaponebrno/" target="_blank">
\t\t\t\t\t\t\t\t<i class="flaticon-facebook"></i>
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</li>
\t\t\t\t\t</ul>
\t\t\t\t</div>


\t\t\t</div>
\t\t</div>
\t\t<div class="in copyright">
\t\t\t<p>Copyright 2022 <a href="" target="_blank"></a>. Všechna práva vyhrazena.</p>
\t\t\t<p class="author">Vytvořila <a href="https://www.hipromotion.cz/" target="_blank">Hi Promotion</a>
\t\t\t\t<span>|</span> Powered by <a href="https://www.shopfocus.cz/" target="_blank">ShopFocus</a></p>
\t\t</div>
\t</footer>

\t<!-- Modal -->

\t<div id="login" class="sg-modal">
\t\t<div class="in">
\t\t\t<form action="/poledni-menu" method="post" id="frm-user-loginForm" class="form" data-ajax-container="self">
\t\t\t\t<div class="content">
\t\t\t\t\t<h2>Přihlášení</h2>
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<label class="title" for="modal-login">E-mail</label>
\t\t\t\t\t\t\t<span class="form">
\t\t\t\t\t\t\t<input type="text" name="email" id="frm-user-loginForm-email" required data-nette-rules='[{"op":":filled","msg":"Zadejte e-mail."},{"op":":email","msg":"Zadejte e-mail ve správném tvaru uzivatel&#64;example.com"}]' class="sg-input">
\t\t\t\t\t\t</span>
\t\t\t\t\t\t</li>
\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t<label class="title" for="modal-password">Heslo</label>
\t\t\t\t\t\t\t<span class="form">
\t\t\t\t\t\t\t<input type="password" name="password" id="frm-user-loginForm-password" required data-nette-rules='[{"op":":filled","msg":"Pole Heslo: by mělo být vyplněné."}]' class="sg-input">
\t\t\t\t\t\t</span>
\t\t\t\t\t\t</li>
\t\t\t\t\t</ul>
\t\t\t\t\t<p class="nav">
\t\t\t\t\t\t<button class="sg-button black icon right-arrow" type="submit" name="send" value="Přihlásit se">Přihlásit <i class="flaticon-right-arrow-1"></i></button>
\t\t\t\t\t</p>
\t\t\t\t\t<span class="close"><i class="flaticon-close"></i></span>
\t\t\t\t\t<p>
\t\t\t\t\t\t<a href="/zapomenute-heslo">Zapomenuté heslo (obnovení hesla)</a><br>
\t\t\t\t\tNemáte účet? <a href="/registrace" target="_blank">Registrujte se</a>
\t\t\t\t\t</p>
\t\t\t\t</div>
\t\t\t\t<input type="hidden" name="_aspm_" value="http://" class="aspm-control"><input type="hidden" name="_aspm_delay_" value="d943b2d30a"><input type="hidden" name="_do" value="user-loginForm-submit"></form>

\t\t</div>
\t</div>


\t<script type="application/ld+json">
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
\t</script>


\t<div class="cookie-law-wrapper">
\t\t<div class="page cookie-law">
\t\t\t<div class="text">
\t\t\t\t<div class="cookie-law">
\t\t\t\t\t<p>Provozovateli webu, společnost ROBE GROUP S.R.O., HRNČÍŘSKÁ 6, BRNO, 60200, IČO:05891043
\t\t\t\t\t\ta&nbsp;společnost WERO GROUP S.R.O., Tovární 22, Rajhrad, 66461, IČO:05891876,&nbsp;jako správci
\t\t\t\t\t\tosobních údajů, zpracovávají na webu&nbsp;<a href="http://www.pizzaalcapone.cz/"
\t\t\t\t\t\t\trel="noreferrer" target="_blank">www.pizzaalcapone.cz</a>&nbsp;soubory cookies, které jsou
\t\t\t\t\t\tpotřebné pro fungování webových stránek a pro analytické účely&nbsp;a v případě Vašeho souhlasu
\t\t\t\t\t\ttaké pro remarketing.&nbsp;</p>
\t\t\t\t</div>

\t\t\t</div>
\t\t\t<div class="buttons">
\t\t\t\t<a class="more sg-button black" target="_blank" href="/zpracovani-osobnich-udaju">Více informací</a>
\t\t\t\t<a class="close sg-button" href="#">Zavřít</a>
\t\t\t</div>
\t\t</div>
\t</div>
\t<!-- javascript -->

\t<script>
\t\tvar _hwq = _hwq || [];
    _hwq.push(['setKey', "test"]);_hwq.push(['setTopPos', '160']);_hwq.push(['showWidget', '21']);(function() {
        var ho = document.createElement('script'); ho.type = 'text/javascript'; ho.async = true;
        ho.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.' + "heureka.cz" + '/direct/i/gjs.php?n=wdgt&sak=' + "test";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ho, s);
    })();
\t</script>
\t<div id="snippet--analytics:end">



\t</div>




\t<script src="/temp/b40b1ada.js?8ce42bfe"></script>

\t<script src="/temp/033b1aee.js?85f7377b"></script>

\t<script src="/temp/3e974379.js?4e4af06c"></script>




</body>

</html>
`;
