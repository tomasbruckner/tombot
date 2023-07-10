import Tao from "../../src/menus/Tao";

describe("Tao", () => {
    let requestMock;
    let testedClass: Tao;

    beforeAll(() => {
        requestMock = jest.fn();
    });

    beforeEach(() => {
        testedClass = new Tao({get: requestMock});
    });

    test("Resolve menu response", done => {
        const menu = testedClass.getSlackMenu({channel: "channel"});

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
            "footer": "Cena: 119kc",
            "text": "1. Bún Nem - Jarní závitky, ledový salát, rýžové nudle, rybí zálivka ...1,3..̌.🇻🇳",
            "title": "Tao",
            "title_link": "https://www.taorestaurant.cz/tydenni_menu/nabidka/",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149kč",
            "text": "2. Bún Cha: 🇻🇳Grilovaný vepřový bůček, ledový salát, rýžové nudle, rybí zálivka 11",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 135kč",
            "text": "3. Pho Bo;🇻🇳Hovězí polévka 800ml",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 145kč",
            "text": "4. Bún bo Nam bo;🇻🇳 hovězí 5,6,9",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 145kč",
            "text": "5. 🇻🇳Tofu Nam bo; Tofu, salát, nudle…6,5,9",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 149kč",
            "text": "6. 🇹🇭Thajské kari s chicken katsu a rýži ..1,3,7",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 189kč",
            "text": "7. Smažená kachna se zeleninou a rýži ..1",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155kč",
            "text": "8. 🇹🇭Padthaj kuřecí, široké rýzové nudle, citron, Arašídy ..1,3,5",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 229kč",
            "text": "9. Sushi Menu: 🇯🇵🍣🥢24ks Maki ; losos, Tunák, krabí..2,3",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 155kč",
            "text": "Pondělí: 🍱BENTO BOX: 3ks Gyoza, chicken teriyaki, rýže, kimchi",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 145kč",
            "text": "Úterý: 🇯🇵JAPONSKÉ KARI: chicken katsu, rýže ..1,3",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 189kč",
            "text": "Středa: 🇻🇳BO LÚC LAC: Restované hovězí maso( medium) s zeleninou( na panvici) a rýži",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 199kč",
            "text": "Čtvrtek: BIBIMBAP: kuřecí, vejce, mrkev, cuketa, kimchi, pakchoi zelí , sezam, bimbap omáčka ..3,11, .😋",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 165kč",
            "text": "Pátek: GA SA OT: Restované kuřecí s citronovou trávou a česnek, jemně pikantní , rýže ..(na panvici) .👍",
        },
    ],
    "channel": "channel",
    "text": "",
};

const response = `<!DOCTYPE html>
<html lang="cs" >
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<!-- WP_HEAD() START -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name='robots' content='max-image-preview:large, noindex, nofollow' />
<title>Táo Viet Nam Home Cooking &amp; Sushi Bar | Týdenní Menu</title>
<link rel='stylesheet' id='wp-block-library-css'  href='https://www.taorestaurant.cz/wp-includes/css/dist/block-library/style.min.css?ver=5.8.2' type='text/css' media='all' />
<link rel='stylesheet' id='wphb-1-css'  href='https://www.taorestaurant.cz/wp-content/uploads/hummingbird-assets/7eae1bd3c7c14ee642ac011bb14e5908.css' type='text/css' media='all' />
<script type='text/javascript' src='https://www.taorestaurant.cz/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js'></script>
<link rel="https://api.w.org/" href="https://www.taorestaurant.cz/wp-json/" /><link rel="alternate" type="application/json" href="https://www.taorestaurant.cz/wp-json/wp/v2/tydenni_menu/160" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.taorestaurant.cz/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.taorestaurant.cz/wp-includes/wlwmanifest.xml" /> 
<link rel='shortlink' href='https://www.taorestaurant.cz/?p=160' />
<link rel="alternate" type="application/json+oembed" href="https://www.taorestaurant.cz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.taorestaurant.cz%2Ftydenni_menu%2Fnabidka%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.taorestaurant.cz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.taorestaurant.cz%2Ftydenni_menu%2Fnabidka%2F&#038;format=xml" />
<!-- SEO meta tags powered by SmartCrawl https://wpmudev.com/project/smartcrawl-wordpress-seo/ -->
<meta name="description" content="Specializujeme se na vietnamskou, korejskou, thajskou kuchyni, ve které najdete i originál sushi, speciální asijské nápoje. Naše restaurace spolupracuje se společnostmi jako je Dáme jídlo nebo Wolt, které vám jídlo rozvezou po vašem městě." />
<script type="application/ld+json">{"@context":"https:\/\/schema.org","@graph":[{"@type":"Organization","@id":"https:\/\/www.taorestaurant.cz\/#schema-publishing-organization","url":"https:\/\/www.taorestaurant.cz","name":"TAO Restaurant"},{"@type":"WebSite","@id":"https:\/\/www.taorestaurant.cz\/#schema-website","url":"https:\/\/www.taorestaurant.cz","name":"TAO Restaurant","encoding":"UTF-8","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.taorestaurant.cz\/search\/{search_term_string}\/","query-input":"required name=search_term_string"}},{"@type":"WebPage","@id":"https:\/\/www.taorestaurant.cz\/tydenni_menu\/nabidka\/#schema-webpage","isPartOf":{"@id":"https:\/\/www.taorestaurant.cz\/#schema-website"},"publisher":{"@id":"https:\/\/www.taorestaurant.cz\/#schema-publishing-organization"},"url":"https:\/\/www.taorestaurant.cz\/tydenni_menu\/nabidka\/"},{"@type":"Article","mainEntityOfPage":{"@id":"https:\/\/www.taorestaurant.cz\/tydenni_menu\/nabidka\/#schema-webpage"},"author":{"@type":"Person","@id":"https:\/\/www.taorestaurant.cz\/author\/tao\/#schema-author","name":"Tao","url":"https:\/\/www.taorestaurant.cz\/author\/tao\/"},"publisher":{"@id":"https:\/\/www.taorestaurant.cz\/#schema-publishing-organization"},"dateModified":"2021-11-08T10:19:03","datePublished":"2020-11-25T12:59:24","headline":"T\u00e1o Viet Nam Home Cooking & Sushi Bar | T\u00fddenn\u00ed Menu","description":"Specializujeme se na vietnamskou, korejskou, thajskou kuchyni, ve kter\u00e9 najdete i origin\u00e1l sushi, speci\u00e1ln\u00ed asijsk\u00e9 n\u00e1poje. Na\u0161e restaurace spolupracuje se spole\u010dnostmi jako je D\u00e1me j\u00eddlo nebo Wolt, kter\u00e9 v\u00e1m j\u00eddlo rozvezou po va\u0161em m\u011bst\u011b.","name":"Nab\u00eddka"}]}</script>
<meta property="og:type" content="article" />
<meta property="og:url" content="https://www.taorestaurant.cz/tydenni_menu/nabidka/" />
<meta property="og:title" content="Táo Viet Nam Home Cooking &amp; Sushi Bar | Týdenní Menu" />
<meta property="og:description" content="Specializujeme se na vietnamskou, korejskou, thajskou kuchyni, ve které najdete i originál sushi, speciální asijské nápoje. Naše restaurace spolupracuje se společnostmi jako je Dáme jídlo nebo Wolt, které vám jídlo rozvezou po vašem městě." />
<meta property="article:published_time" content="2020-11-25T12:59:24" />
<meta property="article:author" content="Tao" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Táo Viet Nam Home Cooking &amp; Sushi Bar | Týdenní Menu" />
<meta name="twitter:description" content="Specializujeme se na vietnamskou, korejskou, thajskou kuchyni, ve které najdete i originál sushi, speciální asijské nápoje. Naše restaurace spolupracuje se společnostmi jako je Dáme jídlo nebo Wolt, které vám jídlo rozvezou po vašem městě." />
<!-- /SEO -->
					<!-- Google Analytics tracking code output by Beehive Analytics Pro -->
						<script async src="https://www.googletagmanager.com/gtag/js?id=UA-99337993-72&l=beehiveDataLayer"></script>
		<script>
						window.beehiveDataLayer = window.beehiveDataLayer || [];
			function beehive_ga() {beehiveDataLayer.push(arguments);}
			beehive_ga('js', new Date())
						beehive_ga('config', 'UA-99337993-72', {
				'anonymize_ip': false,
				'allow_google_signals': false,
			})
					</script>
		<link rel="icon" href="https://www.taorestaurant.cz/wp-content/uploads/2020/08/cropped-tao-32x32.png" sizes="32x32" />
<link rel="icon" href="https://www.taorestaurant.cz/wp-content/uploads/2020/08/cropped-tao-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.taorestaurant.cz/wp-content/uploads/2020/08/cropped-tao-180x180.png" />
<meta name="msapplication-TileImage" content="https://www.taorestaurant.cz/wp-content/uploads/2020/08/cropped-tao-270x270.png" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,500,600,700,800,900|Montserrat:100,200,300,400,500,600,700,800,900|Array:100,200,300,400,500,600,700,800,900|Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet"><link rel='stylesheet' id='oxygen-styles-css'  href='//www.taorestaurant.cz/tydenni_menu/nabidka/?xlink=css&#038;ver=5.8.2' type='text/css' media='all' />
<style type="text/css" id="branda-cookie-notice-css">
#branda-cookie-notice {
	color: #fff;
	background-color: #f43a43;
}
#branda-cookie-notice a,
#branda-cookie-notice a:link {
	color: #ffffff;
}
#branda-cookie-notice a:visited {
	color: #ffffff;
}
#branda-cookie-notice a:hover {
	color: #ffffff;
}
#branda-cookie-notice a:active {
	color: #ffffff;
}
#branda-cookie-notice a:focus {
	color: #ffffff;
}
#branda-cookie-notice .button,
#branda-cookie-notice .button:link {
	color: #f43a43;
	border-color: ;
	background-color: #ffffff;
	border-style: solid;
	border-width: 1px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
}
#branda-cookie-notice .button:visited {
}
#branda-cookie-notice .button:hover {
	color: #f43a43;
	border-color: ;
	background-color: #f4f4f4;
}
#branda-cookie-notice .button:active {
	color: #f43a43;
	border-color: ;
	background-color: #f4f4f4;
}
#branda-cookie-notice .button:focus {
	color: #f43a43;
	border-color: ;
	background-color: #f4f4f4;
}
</style>
<!-- END OF WP_HEAD() -->
</head>
<body data-rsssl=1 class="tydenni_menu-template-default single single-tydenni_menu postid-160  wp-embed-responsive oxygen-body" >



						<header id="_header-1-24" class="oxy-header-wrapper oxy-sticky-header oxy-overlay-header oxy-header" ><div id="_header_row-2-24" class="oxy-header-row" ><div class="oxy-header-container"><div id="_header_left-3-24" class="oxy-header-left" ><a id="div_block-23-24" class="ct-link" href="/"   ><img id="image-21-24" alt="" src="/wp-content/uploads/2020/08/tao.png" class="ct-image"/><div id="text_block-11-24" class="ct-text-block" >VietNam Home&nbsp;<br>Cooking &amp; Sushi Bar</div></a></div><div id="_header_center-4-24" class="oxy-header-center" ></div><div id="_header_right-5-24" class="oxy-header-right" >
		<div id="-pro-menu-7-24" class="oxy-pro-menu "><div class="oxy-pro-menu-mobile-open-icon  oxy-pro-menu-off-canvas-trigger oxy-pro-menu-off-canvas-left" data-off-canvas-alignment="left"><svg id="-pro-menu-7-24-open-icon"><use xlink:href="#Lineariconsicon-menu"></use></svg></div>

                
        <div class="oxy-pro-menu-container  oxy-pro-menu-dropdown-links-visible-on-mobile oxy-pro-menu-dropdown-links-toggle oxy-pro-menu-show-dropdown" data-aos-duration="400" 

             data-oxy-pro-menu-dropdown-animation="fade-up"
             data-oxy-pro-menu-dropdown-animation-duration="0.4"
             data-entire-parent-toggles-dropdown="true"

                          data-oxy-pro-menu-off-canvas-animation="zoom-out-right"
             
                          data-oxy-pro-menu-dropdown-animation-duration="0.4"
             
                          data-oxy-pro-menu-dropdown-links-on-mobile="toggle">
             
            <div class="menu-menu-container"><ul id="menu-menu" class="oxy-pro-menu-list"><li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-22"><a href="https://www.taorestaurant.cz/" data-ps2id-api="true">O nás</a></li>
<li id="menu-item-103" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-103"><a href="#" data-ps2id-api="true">Menu</a>
<ul class="sub-menu">
	<li id="menu-item-19" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="https://www.taorestaurant.cz/pobocka-hrncirska/" data-ps2id-api="true">Pobočka Hrnčířská</a></li>
	<li id="menu-item-70" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-70"><a href="https://www.taorestaurant.cz/pobocka-horova/" data-ps2id-api="true">Pobočka Horova</a></li>
</ul>
</li>
<li id="menu-item-66" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"><a href="https://www.taorestaurant.cz/sushi-menu/" data-ps2id-api="true">Sushi menu</a></li>
<li id="menu-item-163" class="menu-item menu-item-type-post_type menu-item-object-tydenni_menu current-menu-item menu-item-163"><a href="https://www.taorestaurant.cz/tydenni_menu/nabidka/" aria-current="page" data-ps2id-api="true">Týdenní MENU</a></li>
<li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="https://www.taorestaurant.cz/kontakt/" data-ps2id-api="true">Kontakt</a></li>
</ul></div>
            <div class="oxy-pro-menu-mobile-close-icon"><svg id="svg--pro-menu-7-24"><use xlink:href="#Lineariconsicon-cross"></use></svg></div>

        </div>

        </div>

		<script type="text/javascript">
			jQuery('#-pro-menu-7-24 .oxy-pro-menu-show-dropdown .menu-item-has-children > a', 'body').each(function(){
                jQuery(this).append('<div class="oxy-pro-menu-dropdown-icon-click-area"><svg class="oxy-pro-menu-dropdown-icon"><use xlink:href="#FontAwesomeicon-chevron-down"></use></svg></div>');
            });
            jQuery('#-pro-menu-7-24 .oxy-pro-menu-show-dropdown .menu-item:not(.menu-item-has-children) > a', 'body').each(function(){
                jQuery(this).append('<div class="oxy-pro-menu-dropdown-icon-click-area"></div>');
            });			</script><a id="div_block-12-24" class="ct-link" href="https://www.facebook.com/pages/category/Kitchen-Cooking/T%C3%A1o-Viet-Nam-Home-Cooking-Sushi-Bar-1857934510936812/" target="_blank"  ><div id="fancy_icon-13-24" class="ct-fancy-icon" ><svg id="svg-fancy_icon-13-24"><use xlink:href="#FontAwesomeicon-facebook"></use></svg></div></a><a id="link-19-24" class="ct-link" href="https://www.instagram.com/tao_restaurace_brno/" target="_blank"  ><div id="fancy_icon-20-24" class="ct-fancy-icon" ><svg id="svg-fancy_icon-20-24"><use xlink:href="#FontAwesomeicon-instagram"></use></svg></div></a></div></div></div></header>
				<script type="text/javascript">
			jQuery(document).ready(function() {
				var selector = "#_header-1-24",
					scrollval = parseInt("300");
				if (!scrollval || scrollval < 1) {
										if (jQuery(window).width() >= 1121){
											jQuery("body").css("margin-top", jQuery(selector).outerHeight());
						jQuery(selector).addClass("oxy-sticky-header-active");
										}
									}
				else {
					var scrollTopOld = 0;
					jQuery(window).scroll(function() {
						if (!jQuery('body').hasClass('oxy-nav-menu-prevent-overflow')) {
							if (jQuery(this).scrollTop() > scrollval 
																) {
								if (
																		jQuery(window).width() >= 1121 && 
																		!jQuery(selector).hasClass("oxy-sticky-header-active")) {
									if (jQuery(selector).css('position')!='absolute') {
										jQuery("body").css("margin-top", jQuery(selector).outerHeight());
									}
									jQuery(selector)
										.addClass("oxy-sticky-header-active")
																			.addClass("oxy-sticky-header-fade-in");
																	}
							}
							else {
								jQuery(selector)
									.removeClass("oxy-sticky-header-fade-in")
									.removeClass("oxy-sticky-header-active");
								if (jQuery(selector).css('position')!='absolute') {
									jQuery("body").css("margin-top", "");
								}
							}
							scrollTopOld = jQuery(this).scrollTop();
						}
					})
				}
			});
		</script><section id="section-2-127" class=" ct-section" ><div class="ct-section-inner-wrap"></div></section><section id="section-145-127" class=" ct-section" ><div class="ct-section-inner-wrap"><div id="div_block-146-127" class="ct-div-block" ><h1 id="headline-147-127" class="ct-headline">Týdenní menu</h1><h2 id="headline-182-127" class="ct-headline">11:00-15:00</h2></div></div></section><section id="section-3-127" class=" ct-section" ><div class="ct-section-inner-wrap"><div id="div_block-10-127" class="ct-div-block" ><h2 id="headline-4-127" class="ct-headline">Týdenní MENU</h2><div id="text_block-175-127" class="ct-text-block" ><b><span id="span-179-127" class="ct-span" >08.11.2021</span> - <span id="span-181-127" class="ct-span" >12.11.2021</span></b></div><div id="div_block-115-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-118-127" class="ct-text-block tydenni-menu-text" ><b>1.</b> <span id="span-119-127" class="ct-span" >Bún Nem - Jarní závitky, ledový salát, rýžové nudle, rybí zálivka ...1,3..119kč.🇻🇳</span></div></div><div id="div_block-121-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-122-127" class="ct-text-block tydenni-menu-text" ><b>2.</b> <span id="span-123-127" class="ct-span" >Bún Cha: 🇻🇳Grilovaný vepřový bůček, ledový salát, rýžové nudle, rybí zálivka 11..149kč.</span></div></div><div id="div_block-124-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-125-127" class="ct-text-block tydenni-menu-text" ><b>3.</b> <span id="span-126-127" class="ct-span" >Pho Bo;🇻🇳Hovězí polévka 800ml...135kč.</span></div></div><div id="div_block-127-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-128-127" class="ct-text-block tydenni-menu-text" ><b>4.</b> <span id="span-129-127" class="ct-span" >Bún bo Nam bo;🇻🇳 hovězí 5,6,9. 145kč.</span></div></div><div id="div_block-130-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-131-127" class="ct-text-block tydenni-menu-text" ><b>5.</b> <span id="span-132-127" class="ct-span" >🇻🇳Tofu Nam bo; Tofu, salát, nudle…6,5,9.  145kč.</span></div></div><div id="div_block-133-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-134-127" class="ct-text-block tydenni-menu-text" ><b>6.</b> <span id="span-135-127" class="ct-span" >🇹🇭Thajské kari s chicken katsu a rýži ..1,3,7.  149kč.</span></div></div><div id="div_block-136-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-137-127" class="ct-text-block tydenni-menu-text" ><b>7.</b> <span id="span-138-127" class="ct-span" >Smažená kachna se zeleninou a rýži ..1.   189kč.</span></div></div><div id="div_block-139-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-140-127" class="ct-text-block tydenni-menu-text" ><b>8.</b> <span id="span-141-127" class="ct-span" >🇹🇭Padthaj kuřecí, široké rýzové nudle, citron, Arašídy ..1,3,5. 155kč.</span></div></div><div id="div_block-142-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-143-127" class="ct-text-block tydenni-menu-text" ><b>9.</b> <span id="span-144-127" class="ct-span" >Sushi Menu: 🇯🇵🍣🥢24ks Maki ; losos, Tunák, krabí..2,3..229kč.</span></div></div><div id="div_block-171-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-172-127" class="ct-text-block tydenni-menu-text" ><b>10.</b> <span id="span-173-127" class="ct-span" ></span></div></div></div><div id="div_block-12-127" class="ct-div-block" ><h2 id="headline-13-127" class="ct-headline">Speciální</h2></div><div id="div_block-49-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-50-127" class="ct-text-block tydenni-menu-text" ><b>Pondělí:</b>&nbsp;<span id="span-51-127" class="ct-span" >🍱BENTO BOX: 3ks Gyoza, chicken teriyaki, rýže, kimchi…155kč.</span></div></div><div id="div_block-31-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-32-127" class="ct-text-block tydenni-menu-text" ><b>Úterý:</b>&nbsp;<span id="span-39-127" class="ct-span" >🇯🇵JAPONSKÉ KARI: chicken katsu, rýže ..1,3, 145kč.</span></div></div><div id="div_block-34-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-35-127" class="ct-text-block tydenni-menu-text" ><b>Středa:</b>&nbsp;<span id="span-36-127" class="ct-span" >🇻🇳BO LÚC LAC: Restované hovězí maso( medium) s zeleninou( na panvici) a rýži …189kč.</span></div></div><div id="div_block-37-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-38-127" class="ct-text-block tydenni-menu-text" ><b>Čtvrtek:</b>&nbsp;<span id="span-33-127" class="ct-span" >BIBIMBAP: kuřecí, vejce, mrkev, cuketa, kimchi, pakchoi zelí , sezam, bimbap omáčka ..3,11,  199kč.😋</span></div></div><div id="div_block-40-127" class="ct-div-block tydenni-menu-div" ><div id="text_block-41-127" class="ct-text-block tydenni-menu-text" ><b>Pátek:</b>&nbsp;<span id="span-42-127" class="ct-span" >GA SA OT: Restované kuřecí s citronovou trávou a česnek, jemně pikantní , rýže ..(na panvici) 165kč.👍</span></div></div><div id="div_block-166-127" class="ct-div-block" ><div id="text_block-170-127" class="ct-text-block" >Jídlo sebou balíme do krabičky za 10kč</div><h2 id="headline-167-127" class="ct-headline">Přejeme vám dobrou chuť</h2></div></div></section><section id="section-149-127" class=" ct-section" ><div class="ct-section-inner-wrap"><div id="text_block-150-127" class="ct-text-block" >Platební karty<br></div><h2 id="headline-151-127" class="ct-headline">přijímáme Platební karty<br></h2><div id="div_block-152-127" class="ct-div-block" ><img id="image-153-127" alt="" src="/wp-content/uploads/2020/10/ms.png" class="ct-image"/><img id="image-154-127" alt="" src="/wp-content/uploads/2020/10/visa.png" class="ct-image"/></div></div></section><section id="section-15-24" class=" ct-section" ><div class="ct-section-inner-wrap"><div id="div_block-16-24" class="ct-div-block" ><div id="code_block-17-24" class="ct-code-block" >&copy; 2021 VIETNAM HOME 
COOKING & SUSHI BAR | Vyrobilo studio <a target="_blank" style="vertical-align: baseline; margin-left: 3px" href="https://www.formedia.cz"><img src="https://drive.google.com/uc?id=1zZ4U7wLvdfBNf4Tm1uHVsljyaLgOfkzV"></a></div><a id="link_text-18-24" class="ct-link-text" href="/wp-content/uploads/2020/10/tao.pdf" target="_blank"  >Zásady ochrany osobních údajů</a></div></div></section>	<!-- WP_FOOTER -->
<style>.ct-FontAwesomeicon-facebook{width:0.57142857142857em}</style>
<style>.ct-FontAwesomeicon-instagram{width:0.85714285714286em}</style>
<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"><defs><symbol id="FontAwesomeicon-chevron-down" viewBox="0 0 28 28"><title>chevron-down</title><path d="M26.297 12.625l-11.594 11.578c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.578c-0.391-0.391-0.391-1.031 0-1.422l2.594-2.578c0.391-0.391 1.016-0.391 1.406 0l8.297 8.297 8.297-8.297c0.391-0.391 1.016-0.391 1.406 0l2.594 2.578c0.391 0.391 0.391 1.031 0 1.422z"/></symbol><symbol id="FontAwesomeicon-facebook" viewBox="0 0 16 28"><title>facebook</title><path d="M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z"/></symbol><symbol id="FontAwesomeicon-instagram" viewBox="0 0 24 28"><title>instagram</title><path d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM18.156 14c0 3.406-2.75 6.156-6.156 6.156s-6.156-2.75-6.156-6.156 2.75-6.156 6.156-6.156 6.156 2.75 6.156 6.156zM19.844 7.594c0 0.797-0.641 1.437-1.437 1.437s-1.437-0.641-1.437-1.437 0.641-1.437 1.437-1.437 1.437 0.641 1.437 1.437zM12 4.156c-1.75 0-5.5-0.141-7.078 0.484-0.547 0.219-0.953 0.484-1.375 0.906s-0.688 0.828-0.906 1.375c-0.625 1.578-0.484 5.328-0.484 7.078s-0.141 5.5 0.484 7.078c0.219 0.547 0.484 0.953 0.906 1.375s0.828 0.688 1.375 0.906c1.578 0.625 5.328 0.484 7.078 0.484s5.5 0.141 7.078-0.484c0.547-0.219 0.953-0.484 1.375-0.906s0.688-0.828 0.906-1.375c0.625-1.578 0.484-5.328 0.484-7.078s0.141-5.5-0.484-7.078c-0.219-0.547-0.484-0.953-0.906-1.375s-0.828-0.688-1.375-0.906c-1.578-0.625-5.328-0.484-7.078-0.484zM24 14c0 1.656 0.016 3.297-0.078 4.953-0.094 1.922-0.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656 0.094-3.297 0.078-4.953 0.078s-3.297 0.016-4.953-0.078c-1.922-0.094-3.625-0.531-5.031-1.937s-1.844-3.109-1.937-5.031c-0.094-1.656-0.078-3.297-0.078-4.953s-0.016-3.297 0.078-4.953c0.094-1.922 0.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-0.094 3.297-0.078 4.953-0.078s3.297-0.016 4.953 0.078c1.922 0.094 3.625 0.531 5.031 1.937s1.844 3.109 1.937 5.031c0.094 1.656 0.078 3.297 0.078 4.953z"/></symbol></defs></svg><?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"><defs><symbol id="Lineariconsicon-cross" viewBox="0 0 20 20"><title>cross</title><path class="path1" d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"/></symbol><symbol id="Lineariconsicon-menu" viewBox="0 0 20 20"><title>menu</title><path class="path1" d="M17.5 6h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"/><path class="path2" d="M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"/><path class="path3" d="M17.5 16h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"/></symbol></defs></svg>
        <script type="text/javascript">

            function oxygen_init_pro_menu() {
                jQuery('.oxy-pro-menu-container').each(function(){
                    
                    // dropdowns
                    var menu = jQuery(this),
                        animation = menu.data('oxy-pro-menu-dropdown-animation'),
                        animationDuration = menu.data('oxy-pro-menu-dropdown-animation-duration');
                    
                    jQuery('.sub-menu', menu).attr('data-aos',animation);
                    jQuery('.sub-menu', menu).attr('data-aos-duration',animationDuration*1000);

                    oxygen_offcanvas_menu_init(menu);
                    jQuery(window).resize(function(){
                        oxygen_offcanvas_menu_init(menu);
                    });

                    // let certain CSS rules know menu being initialized
                    // "10" timeout is extra just in case, "0" would be enough
                    setTimeout(function() {menu.addClass('oxy-pro-menu-init');}, 10);
                });
            }

            jQuery(document).ready(oxygen_init_pro_menu);
            document.addEventListener('oxygen-ajax-element-loaded', oxygen_init_pro_menu, false);
                
            jQuery(".oxygen-body")
            .on('mouseenter', '.oxy-pro-menu-show-dropdown:not(.oxy-pro-menu-open-container) .menu-item-has-children', function() {
                var subMenu = jQuery(this).children('.sub-menu');
                subMenu.addClass('aos-animate oxy-pro-menu-dropdown-animating').removeClass('sub-menu-left');

                var duration = jQuery(this).parents('.oxy-pro-menu-container').data('oxy-pro-menu-dropdown-animation-duration');

                setTimeout(function() {subMenu.removeClass('oxy-pro-menu-dropdown-animating')}, duration*1000);

                var offset = subMenu.offset(),
                    width = subMenu.width(),
                    docWidth = jQuery(window).width();

                    if (offset.left+width > docWidth) {
                        subMenu.addClass('sub-menu-left');
                    }
            })
            
            .on('mouseleave', '.oxy-pro-menu-show-dropdown .menu-item-has-children', function() {
                jQuery(this).children('.sub-menu').removeClass('aos-animate');

                var subMenu = jQuery(this).children('.sub-menu');
                subMenu.addClass('oxy-pro-menu-dropdown-animating-out');

                var duration = jQuery(this).parents('.oxy-pro-menu-container').data('oxy-pro-menu-dropdown-animation-duration');
                setTimeout(function() {subMenu.removeClass('oxy-pro-menu-dropdown-animating-out')}, duration*1000);
            })

            // open icon click
            .on('click', '.oxy-pro-menu-mobile-open-icon', function() {    
                var menu = jQuery(this).parents('.oxy-pro-menu');
                // off canvas
                if (jQuery(this).hasClass('oxy-pro-menu-off-canvas-trigger')) {
                    oxygen_offcanvas_menu_run(menu);
                }
                // regular
                else {
                    menu.addClass('oxy-pro-menu-open');
                    jQuery(this).siblings('.oxy-pro-menu-container').addClass('oxy-pro-menu-open-container');
                    jQuery('body').addClass('oxy-nav-menu-prevent-overflow');
                    jQuery('html').addClass('oxy-nav-menu-prevent-overflow');
                    
                    oxygen_pro_menu_set_static_width(menu);
                }
                // remove animation and collapse
                jQuery('.sub-menu', menu).attr('data-aos','');
                jQuery('.oxy-pro-menu-dropdown-toggle .sub-menu', menu).slideUp(0);
            });

            function oxygen_pro_menu_set_static_width(menu) {
                var menuItemWidth = jQuery(".oxy-pro-menu-list > .menu-item", menu).width();
                jQuery(".oxy-pro-menu-open-container > div:first-child, .oxy-pro-menu-off-canvas-container > div:first-child", menu).width(menuItemWidth);
            }

            function oxygen_pro_menu_unset_static_width(menu) {
                jQuery(".oxy-pro-menu-container > div:first-child", menu).width("");
            }

            // close icon click
            jQuery('body').on('click', '.oxy-pro-menu-mobile-close-icon', function(e) {
                
                var menu = jQuery(this).parents('.oxy-pro-menu');

                menu.removeClass('oxy-pro-menu-open');
                jQuery(this).parents('.oxy-pro-menu-container').removeClass('oxy-pro-menu-open-container');
                jQuery('.oxy-nav-menu-prevent-overflow').removeClass('oxy-nav-menu-prevent-overflow');

                if (jQuery(this).parent('.oxy-pro-menu-container').hasClass('oxy-pro-menu-off-canvas-container')) {
                    oxygen_offcanvas_menu_run(menu);
                }

                oxygen_pro_menu_unset_static_width(menu);
            });

            // dropdown toggle icon click
            jQuery('body').on(
                'touchstart click', 
                '.oxy-pro-menu-dropdown-links-toggle.oxy-pro-menu-off-canvas-container .menu-item-has-children > a > .oxy-pro-menu-dropdown-icon-click-area,'+
                '.oxy-pro-menu-dropdown-links-toggle.oxy-pro-menu-open-container .menu-item-has-children > a > .oxy-pro-menu-dropdown-icon-click-area', 
                function(e) {
                    e.preventDefault();

                    // fix for iOS false triggering submenu clicks
                    jQuery('.sub-menu').css('pointer-events', 'none');
                    setTimeout( function() {
                        jQuery('.sub-menu').css('pointer-events', 'initial');
                    }, 500);

                    // workaround to stop click event from triggering after touchstart
                    if (window.oxygenProMenuIconTouched === true) {
                        window.oxygenProMenuIconTouched = false;
                        return;
                    }
                    if (e.type==='touchstart') {
                        window.oxygenProMenuIconTouched = true;
                    }
                    oxygen_pro_menu_toggle_dropdown(this);
                }
            );

            function oxygen_pro_menu_toggle_dropdown(trigger) {

                var duration = jQuery(trigger).parents('.oxy-pro-menu-container').data('oxy-pro-menu-dropdown-animation-duration');

                jQuery(trigger).closest('.menu-item-has-children').children('.sub-menu').slideToggle({
                    start: function () {
                        jQuery(this).css({
                            display: "flex"
                        })
                    },
                    duration: duration*1000
                });
            }
                    
            // fullscreen menu link click
            var selector = '.oxy-pro-menu-open .menu-item a';
            jQuery('body').on('click', selector, function(event){
                
                if (jQuery(event.target).closest('.oxy-pro-menu-dropdown-icon-click-area').length > 0) {
                    // toggle icon clicked, no need to hide the menu
                    return;
                }
                else if ((jQuery(this).attr("href") === "#" || jQuery(this).closest(".oxy-pro-menu-container").data("entire-parent-toggles-dropdown")) && 
                         jQuery(this).parent().hasClass('menu-item-has-children')) {
                    // empty href don't lead anywhere, treat it as toggle trigger
                    oxygen_pro_menu_toggle_dropdown(event.target);
                    // keep anchor links behavior as is, and prevent regular links from page reload
                    if (jQuery(this).attr("href").indexOf("#")!==0) {
                        return false;
                    }
                }

                // hide the menu and follow the anchor
                if (jQuery(this).attr("href").indexOf("#")===0) {
                    jQuery('.oxy-pro-menu-open').removeClass('oxy-pro-menu-open');
                    jQuery('.oxy-pro-menu-open-container').removeClass('oxy-pro-menu-open-container');
                    jQuery('.oxy-nav-menu-prevent-overflow').removeClass('oxy-nav-menu-prevent-overflow');
                }
                jQuery(this).click();
            });

            // off-canvas menu link click
            var selector = '.oxy-pro-menu-off-canvas .menu-item a';
            jQuery('body').on('click', selector, function(event){
                if (jQuery(event.target).closest('.oxy-pro-menu-dropdown-icon-click-area').length > 0) {
                    // toggle icon clicked, no need to trigger it 
                    return;
                }
                else if ((jQuery(this).attr("href") === "#" || jQuery(this).closest(".oxy-pro-menu-container").data("entire-parent-toggles-dropdown")) && 
                    jQuery(this).parent().hasClass('menu-item-has-children')) {
                    // empty href don't lead anywhere, treat it as toggle trigger
                    oxygen_pro_menu_toggle_dropdown(event.target);
                    // keep anchor links behavior as is, and prevent regular links from page reload
                    if (jQuery(this).attr("href").indexOf("#")!==0) {
                        return false;
                    }
                }
            });

            // off canvas
            function oxygen_offcanvas_menu_init(menu) {

                // only init off-canvas animation if trigger icon is visible i.e. mobile menu in action
                var offCanvasActive = jQuery(menu).siblings('.oxy-pro-menu-off-canvas-trigger').css('display');
                if (offCanvasActive!=='none') {
                    var animation = menu.data('oxy-pro-menu-off-canvas-animation');
                    setTimeout(function() {menu.attr('data-aos', animation);}, 10);
                }
                else {
                    // remove AOS
                    menu.attr('data-aos', '');
                };
            }
            
            function oxygen_offcanvas_menu_run(menu) {

                var container = menu.find(".oxy-pro-menu-container");
                
                if (!container.attr('data-aos')) {
                    // initialize animation
                    setTimeout(function() {oxygen_offcanvas_menu_toggle(menu, container)}, 0);
                }
                else {
                    oxygen_offcanvas_menu_toggle(menu, container);
                }
            }

            var oxygen_offcanvas_menu_toggle_in_progress = false;

            function oxygen_offcanvas_menu_toggle(menu, container) {

                if (oxygen_offcanvas_menu_toggle_in_progress) {
                    return;
                }

                container.toggleClass('aos-animate')

                if (container.hasClass('oxy-pro-menu-off-canvas-container')) {
                    
                    oxygen_offcanvas_menu_toggle_in_progress = true;
                    
                    var animation = container.data('oxy-pro-menu-off-canvas-animation'),
                        timeout = container.data('aos-duration');

                    if (!animation){
                        timeout = 0;
                    }

                    setTimeout(function() {
                        container.removeClass('oxy-pro-menu-off-canvas-container')
                        menu.removeClass('oxy-pro-menu-off-canvas');
                        oxygen_offcanvas_menu_toggle_in_progress = false;
                    }, timeout);
                }
                else {
                    container.addClass('oxy-pro-menu-off-canvas-container');
                    menu.addClass('oxy-pro-menu-off-canvas');
                    oxygen_pro_menu_set_static_width(menu);
                }
            }
        </script>

    <link rel='stylesheet' id='oxygen-aos-css'  href='https://www.taorestaurant.cz/wp-content/uploads/hummingbird-assets/dad4794aee79613a3c7fffb74af79845.css' type='text/css' media='all' />
<script type='text/javascript' id='wphb-2-js-extra'>
/* <![CDATA[ */
var ub_cookie_notice = {"id":"#branda-cookie-notice","cookie":{"domain":"","name":"Branda_Cookie_Notice_1","path":"\/","secure":"on","timezone":3600,"value":86400},"reloading":"off","animation":null,"ajaxurl":"https:\/\/www.taorestaurant.cz\/wp-admin\/admin-ajax.php","logged":"no","user_id":"0","nonce":"4eb170f408"};;;var mPS2id_params = {"instances":{"mPS2id_instance_0":{"selector":"a[href*='#']:not([href='#'])","autoSelectorMenuLinks":"true","excludeSelector":"a[href^='#tab-'], a[href^='#tabs-'], a[data-toggle]:not([data-toggle='tooltip']), a[data-slide], a[data-vc-tabs], a[data-vc-accordion], a.screen-reader-text.skip-link","scrollSpeed":800,"autoScrollSpeed":"true","scrollEasing":"easeInOutQuint","scrollingEasing":"easeOutQuint","forceScrollEasing":"false","pageEndSmoothScroll":"true","stopScrollOnUserAction":"false","autoCorrectScroll":"false","autoCorrectScrollExtend":"false","layout":"vertical","offset":"60","dummyOffset":"false","highlightSelector":"","clickedClass":"mPS2id-clicked","targetClass":"mPS2id-target","highlightClass":"mPS2id-highlight","forceSingleHighlight":"false","keepHighlightUntilNext":"false","highlightByNextTarget":"false","appendHash":"false","scrollToHash":"true","scrollToHashForAll":"true","scrollToHashDelay":0,"scrollToHashUseElementData":"true","scrollToHashRemoveUrlHash":"false","disablePluginBelow":0,"adminDisplayWidgetsId":"true","adminTinyMCEbuttons":"true","unbindUnrelatedClickEvents":"false","unbindUnrelatedClickEventsSelector":"","normalizeAnchorPointTargets":"false","encodeLinks":"false"}},"total_instances":"1","shortcode_class":"_ps2id"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.taorestaurant.cz/wp-content/uploads/hummingbird-assets/21c5d58c77f96c4ccc7d17ed51bd71a5.js' id='wphb-2-js'></script>
<script type="text/javascript" id="ct-footer-js">
	  	AOS.init({
	  		  		  		  		  		  		  				  			})
		
				jQuery('body').addClass('oxygen-aos-enabled');
		
		
	</script><div id="branda-cookie-notice" role="banner" class="ub-position-bottom ub-style-none"><div class="cookie-notice-container"><div class="branda-cn-container"><span id="ub-cn-notice-text" class="branda-cn-column">Pro správnou funkci stránek shromažďujeme údaje, uvedené v našich Zásadách ochrany osobních údajů. Stisknutím tlačítka s tím souhlasíte.</span><span class="branda-cn-column"><a href="#" class="button ub-cn-set-cookie">Souhlasím</a></span></div></div></div><!-- /WP_FOOTER --> 
</body>
</html>
`;
