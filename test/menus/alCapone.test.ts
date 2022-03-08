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
            "text": "Polévka: Rajská",
            "title": "Al Capone",
            "title_link": "https://www.pizzaalcapone.cz/poledni-menu",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 119 Kč",
            "text": "Čočka na kyselo s klobásou",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 129 Kč",
            "text": "Tortilla s kuřecím stripsem",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135 Kč",
            "text": "Vepřová panenka s americkými bramborami",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 159 Kč",
            "text": "Grilovaný losos se zeleným salátkem a rozpečenou bagetkou",
        },
    ],
    "channel": "channel",
    "text": "",
};

const response = `<!DOCTYPE html>
<html lang="cs" class="external-fonts-loaded js-focus-visible">



<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
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
    <link rel="stylesheet" href="/project/templates/boston/front.css?801417f0">

        <link rel="stylesheet" href="/project/templates/boston/custom-colors.css?1973ac59">
        <link rel="stylesheet" href="/project/templates/boston/custom-dimension-properties.css?481dc2b7">
        <link rel="stylesheet" href="/project/templates/boston/custom.css?f1d6c06c">

    <!-- icons -->

        <link rel="shortcut icon"
              
              
              
              href="/project/favicon.ico"
       >

    <!-- javascript -->
<script>
\tvar APPLICATION_BASEPATH = "";
\tvar AF_MONEY_DECIMALS = 2;
</script>

    <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source Sans Pro:300,400,700,900&amp;subset=latin-ext" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Exo 2:300,400,700,900&amp;subset=latin-ext" rel="stylesheet">

    <script src="/temp/22ab4e92.js?4d9285d1"></script>

    <link rel="stylesheet" href="/components/bower/fancybox/source/jquery.fancybox.css?f86d0749">

    

    <!--[if lt IE 9]>
    <script src="/temp/200e6cab.js?016b4970"></script>
    <![endif]-->

    <title id="snippet--title">Polední menu | Pizza Al Capone</title>
\t\t
</head>

\t
\t<body class="sub">
<script>
\tvar af = af || {};
\taf.campaignTracking = {
\t\tconfig: {
\t\t\ttarget: "https://www.pizzaalcapone.cz/poledni-menu?do=campaignTracking-track",
\t\t\ttoken: "go8s4m3fd1",
\t\t\tlocation: window.location
\t\t},
\t\tdata: {
\t\t\turl: window.location.href,
\t\t\treferrer: ""
\t\t}
\t};
</script>
<script src="/temp/80a4abf2.js?5b391bfe" async defer></script>

<div id="snippet--analytics:start"></div>

\t\t\t<!-- page content -->
<div id="snippet--cartInfo.modal"></div>

<div id="snippet--flashMessages">

</div>





<script>
\t$('#site-info-message .close-info-message').on('click', function () {
\t\t$(this).parents('#site-info-message').slideUp();
\t\tCookies.set('site-info-message-' + $(this).data('info-message'), true, {expires: 7776000});
\t});
</script>

<header id="header" class="wrap">
    <div class="top">
        <div class="in">
            <ul>
                <li class="branch">
                        <a href="#" id="choose-branch">vyberte restauraci <i class="flaticon-right-arrow-1"></i></a>
                </li>
                <li>
                        <a href="tel:">Brno: +420 541 210 555 a Rajhrad: +420 547 212 916</a></li>
                <li><a href="mailto:info@pizzaalcapone.cz"><span>info@pizzaalcapone.cz</span></a></li>
                <li><a href="/kontakt">Kontakty</a></li>
            </ul>
        </div>
    </div>
    <div class="nav">
        <div class="in">

            <div class="logo">




    <a class="" href="/">
        <img logo src="/upload/images/logo-alcapone.png" >
    </a>

            </div>

            <ul class="toggles">
                <li class="header-search">
                    <span class="search-toggle"><i class="flaticon-search"></i></span>
                    <div class="hidden-mobile">


<form action="/vyhledavani" method="get" id="frm-search-search" class="search toggle">
    <ul>
        <li class="keyword">
            <input type="text" name="search" placeholder="Chci najít..." id="suggest-desktop" required data-nette-rules='[{"op":":filled","msg":"Pole Hledat: by mělo být vyplněné."}]' class="sg-input search-suggestion" autocomplete="off">
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
            
                <li class="crazy-item ">
                    <a href="/jidelni-listek" class="has-submenu">
                        OBJEDNAT JÍDLO <i
                                class="flaticon-down-arrow"></i>
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

                <li class="crazy-item ">
                    <a href="/poledni-menu">
                        POLEDNÍ MENU                     </a>
                </li>

                <li class="crazy-item ">
                    <a href="/o-nas">
                        O NÁS                     </a>
                </li>

                <li class="crazy-item hidden">
                    <a href="/fotogalerie" class="has-submenu">
                        FOTOGALERIE <i
                                class="flaticon-down-arrow"></i>
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
                <li class="space"></li>
                <li class="more ">
                    <span class="menu-toggle"><i class="flaticon-menu"></i></span>
                </li>
        </ul>
    </div>

    <div class="other" id="other-items">
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
            <li>
                
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


<form action="/vyhledavani" method="get" id="frm-search-search" class="search toggle">
    <ul>
        <li class="keyword">
            <input type="text" name="search" placeholder="Chci najít..." id="suggest-desktop" required data-nette-rules='[{"op":":filled","msg":"Pole Hledat: by mělo být vyplněné."}]' class="sg-input search-suggestion" autocomplete="off">
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

            $(function () {
                $('#branch-popup-back').show();
                $('#branch-popup').show();
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
\t\t\t\t<p><div class="ckeditor" data-ckeditor-type="doctrine" data-ckeditor-id="93" data-ckeditor-options='{"key":"content","class":"Plugins\\\\Structure\\\\Models\\\\Data"}'><p>Vychutnejte si u nás naše obědová menu.</p>

<div style="text-align:left;">
<h2>Pondělí</h2>

<p>Polévka:&nbsp;Franfurtská</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Čočka na kyselo s klobásou <span style="float:right;">119 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Tortilla s kuřecím stripsem<span style="float:right;">129 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Vepřová panenka s americkými bramborami<span style="float:right;">135 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>Grilovaný losos se zeleným salátkem a rozpečenou bagetkou<span style="float:right;">159 Kč</span></p>
</div>

<h2><br>
Úterý</h2>

<p>Polévka: Rajská</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Čočka na kyselo s klobásou <span style="float:right;">119 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Tortilla s kuřecím stripsem<span style="float:right;">129 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Vepřová panenka s americkými bramborami<span style="float:right;">135 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>Grilovaný losos se zeleným salátkem a rozpečenou bagetkou<span style="float:right;">159 Kč</span></p>
</div>

<h2><br>
Středa</h2>

<p>Polévka: Kulajda</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Čočka na kyselo s klobásou <span style="float:right;">119 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Tortilla s kuřecím stripsem<span style="float:right;">129 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Vepřová panenka s americkými bramborami<span style="float:right;">135 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>Grilovaný losos se zeleným salátkem a rozpečenou bagetkou<span style="float:right;">159 Kč</span></p>
</div>

<h2><br>
Čtvrtek</h2>

<p>Polévka: Selská</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Čočka na kyselo s klobásou <span style="float:right;">119 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Tortilla s kuřecím stripsem<span style="float:right;">129 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Vepřová panenka s americkými bramborami<span style="float:right;">135 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>Grilovaný losos se zeleným salátkem a rozpečenou bagetkou<span style="float:right;">159 Kč</span></p>
</div>

<h2><br>
Pátek</h2>

<p>Polévka: Gulášová</p>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Čočka na kyselo s klobásou <span style="float:right;">119 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Tortilla s kuřecím stripsem<span style="float:right;">129 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 1px solid black;">
<p>Vepřová panenka s americkými bramborami<span style="float:right;">135 Kč</span></p>
</div>

<div class="image-clearfix" style="border-bottom: 3px solid black;">
<p>Grilovaný losos se zeleným salátkem a rozpečenou bagetkou<span style="float:right;">159 Kč</span></p>
</div>
</div>
</div></p>
\t\t</div>

\t</div>
</section>






    <style>
\t\t#newsletter .in ul li.email input.sg-input {
\t\t\tbackground-color: #ffffff;
\t\t}
    </style>

    
    <section id="newsletter" class="wrap" style="background-image: url('/upload/images/newletter-linka.jpg');">


<form class="in" action="/" method="post" id="frm-banner-subscriptionControl-form">
    <p>Dovezeme vám novinky</p>
    <h2>Přihlašte se k odběru newsletterů</h2>
    <ul>
        <li class="email">
            <span>
                <input type="text" name="email" id="frm-banner-subscriptionControl-form-email" required data-nette-rules='[{"op":":filled","msg":"Pole E-mail: by mělo být vyplněné."},{"op":":email","msg":"Zadejte e-mail ve správném formátu."}]' class="sg-input" placeholder="Vaše e-mailová adresa">
            </span>
        </li>
        <li class="submit">
            <button class="sg-button black icon right-arrow" type="submit" name="send" value="Přihlásit">
                Přihlásit se k odběru <i class="flaticon-right-arrow-1"></i>
            </button>
        </li>
    </ul>
    <div class="agree">
        <label for="frm-banner-subscriptionControl-form-agree"><input type="checkbox" name="agree" id="frm-banner-subscriptionControl-form-agree" required data-nette-rules='[{"op":":filled","msg":"Musíte protvrdit souhlas se zpracováním osobních údajů"}]'> Souhlasím se <a target="_blank" href="/zpracovani-osobnich-udaju">zpracováním osobních údajů</a> . </label>
    </div>
<input type="hidden" name="_aspm_" value="http://" class="aspm-control"><input type="hidden" name="_aspm_delay_" value="d949e0db9b"><input type="hidden" name="_do" value="banner-subscriptionControl-form-submit"></form>
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
                    <img Visa src="/tmpl/boston/img/default/visa.svg" >
                </li>
                <li>
                    <img Mastercard src="/tmpl/boston/img/default/mastercard1.svg" >
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
\t\t<form action="/poledni-menu" method="post" id="frm-user-loginForm" class="form" data-ajax-container="self">
\t\t\t<div class="content">
\t\t\t\t<h2>Přihlášení</h2>
\t\t\t\t<ul>
\t\t\t\t\t<li>
\t\t\t\t\t\t<label class="title" for="modal-login">E-mail</label>
\t\t\t\t\t\t<span class="form">
\t\t\t\t\t\t\t<input type="text" name="email" id="frm-user-loginForm-email" required data-nette-rules='[{"op":":filled","msg":"Zadejte e-mail."},{"op":":email","msg":"Zadejte e-mail ve správném tvaru uzivatel&#64;example.com"}]' class="sg-input">
\t\t\t\t\t\t</span>
\t\t\t\t\t</li>
\t\t\t\t\t<li>
\t\t\t\t\t\t<label class="title" for="modal-password">Heslo</label>
\t\t\t\t\t\t<span class="form">
\t\t\t\t\t\t\t<input type="password" name="password" id="frm-user-loginForm-password" required data-nette-rules='[{"op":":filled","msg":"Pole Heslo: by mělo být vyplněné."}]' class="sg-input">
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
\t\t<input type="hidden" name="_aspm_" value="http://" class="aspm-control"><input type="hidden" name="_aspm_delay_" value="d949e04e9d"><input type="hidden" name="_do" value="user-loginForm-submit"></form>

\t</div>
</div>


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
</script>


<div class="cookie-law-wrapper">
    <div class="page cookie-law">
        <div class="text">
            <div class="cookie-law">
<p>Provozovateli webu, společnost ROBE GROUP S.R.O., HRNČÍŘSKÁ 6, BRNO, 60200, IČO:05891043 a&nbsp;společnost WERO GROUP S.R.O., Tovární 22, Rajhrad, 66461, IČO:05891876,&nbsp;jako správci osobních údajů, zpracovávají na webu&nbsp;<a href="http://www.pizzaalcapone.cz/" rel="noreferrer" target="_blank">www.pizzaalcapone.cz</a>&nbsp;soubory cookies, které jsou potřebné pro fungování webových stránek a pro analytické účely&nbsp;a v případě Vašeho souhlasu také pro remarketing.&nbsp;</p>
</div>

        </div>
        <div class="buttons">
            <a class="more sg-button black" target="_blank" href="/zpracovani-osobnich-udaju">Více informací</a>
            <a class="close sg-button" href="#">Zavřít</a>
        </div>
    </div>
</div>
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


<script src="/temp/b40b1ada.js?4980f309"></script>

<script src="/temp/033b1aee.js?e80c378a"></script>

<script src="/temp/3e974379.js?fdda142f"></script>




\t</body>
</html>
`;
