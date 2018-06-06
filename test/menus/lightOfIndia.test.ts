import LightOfIndia from "../../src/menus/LightOfIndia";

let requestMock;
let testedClass: LightOfIndia;
const originalDate = global.Date;
let mockDate;

beforeAll(() => {
	requestMock = jest.fn();
	mockDate = function() {
		this.getDay = () => 2;
	};

	global.Date = mockDate;
});

afterAll(() => {
	global.Date = originalDate;
});

beforeEach(() => {
	testedClass = new LightOfIndia({ get: requestMock });
});

afterEach(() => {
	requestMock.mockReset();
});

test("Resolve menu response", done => {
	const menu = testedClass.getSlackMenu({ channel: "channel" }, "apikey");

	expect(requestMock.mock.calls.length).toBe(1);

	const callback = requestMock.mock.calls[0][1];

	callback(undefined, { statusCode: 200 }, response);

	menu.then(menu => {
		expect(menu).toEqual(expectedSlackMenu);
		done();
	});
});

test("Weekend", done => {
	const originalDate = global.Date;
	const mockDate: any = function() {
		this.getDay = function() {
			return 6;
		}
	};
	global.Date = mockDate;

    const menu = testedClass.getSlackMenu({ channel: "channel" }, "apikey");

    expect(requestMock.mock.calls.length).toBe(1);

    const callback = requestMock.mock.calls[0][1];

    callback(undefined, { statusCode: 200 }, response);

    menu.catch(() => {
		global.Date = originalDate;
        done();
    });
});

const expectedSlackMenu = {
	as_user: true,
	attachments:
		[{
			color: '#e7ef43',
			fallback: 'Restaurant menu',
			footer: 'Cena: 22Kč',
			text: '1.  Chicken soup (kuřecí polévka) (1,3,7)',
			title: 'Light of India',
			title_link: 'http://www.lightofindia.cz/lang-cs/denni-menu'
		},
		{
			color: '#e7ef43',
			fallback: 'Restaurant menu',
			footer: 'Cena: 99Kč',
			text: '2.  Chicken Curry (kuřecí kostky v kari omáčce) 100g (7,8)'
		},
		{
			color: '#e7ef43',
			fallback: 'Restaurant menu',
			footer: 'Cena: 99Kč',
			text: '3.  Chicken Korma (kuřecí kousky v jemné omáčce) 100g (7,8)'
		},
		{
			color: '#e7ef43',
			fallback: 'Restaurant menu',
			footer: 'Cena: 99Kč',
			text: '4.  Aloo Gobi (brambory s květákem v omáčce) 100g (7,8)'
		},
		{
			color: '#e7ef43',
			fallback: 'Restaurant menu',
			footer: '',
			text: '5.  Menu Mix Thali(mix dnešního menu na děleném talíři) 150g (viz jídla)'
		}],
	channel: 'channel',
	text: ''
};

const response = `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="cs-cz" lang="cs-cz" dir="ltr"><head>
<base href="http://www.lightofindia.cz/lang-cs/denni-menu">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="robots" content="index, follow">
<meta name="keywords" content="Indická restaurace Brno,Indická restaurace v Brně, Indická restaurace Light of India,restaurace Light of India,Indická kuchyně,Indické jídlo,restaurace v brne,restaurace v praze,Light of India restaurant,restaurant Light of India,restaurant Light of India,Light of India restaurant,indicke jidlo, vegetariánské jídlo, indian food, indian cuisine, indian cuisine brno, vegetarian food">
<meta name="description" content="Light of India">
<meta name="generator" content="Joomla! 1.5 - Open Source Content Management">
<title>lightofindia.cz - Týdenní menu</title>
<link href="/templates/yoo_shuffle/favicon.ico" rel="shortcut icon" type="image/x-icon">
<link rel="stylesheet" href="/templates/yoo_shuffle/css/template.css.php?colorHeader=hatching2&amp;colorTop=default&amp;colorMiddle=default&amp;colorBottom=sand&amp;colorFooter=default" type="text/css">
<link rel="stylesheet" href="/modules/mod_jflanguageselection/tmpl/mod_jflanguageselection.css" type="text/css">
<script id="facebook-jssdk" src="//connect.facebook.net/cs_CZ/all.js#xfbml=1"></script><script async="" src="//www.google-analytics.com/analytics.js"></script><script type="text/javascript" src="/templates/yoo_shuffle/lib/js/mootools.js.php"></script>
<script type="text/javascript" src="/media/system/js/caption.js"></script>
<script type="text/javascript">
var YtSettings = { tplurl: '/templates/yoo_shuffle', color: '', layout: 'left', fontDefault: 'font-medium', widthDefault: 'width-wide', widthThinPx: 790, widthWidePx: 960, widthFluidPx: 0.9 };
</script>
<script type="text/javascript" src="/templates/yoo_shuffle/lib/js/template.js.php"></script>

<link rel="apple-touch-icon" href="/templates/yoo_shuffle/apple_touch_icon.png">
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44543184-1', 'lightofindia.cz');
ga('send', 'pageview');

</script>
<style type="text/css">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_loader{background-color:#f6f7f9;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100%}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100%;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100%;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{width:auto;height:auto;min-height:initial;min-width:initial;background:none}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{color:#fff;display:block;padding-top:20px;clear:both;font-size:18px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;bottom:0;left:0;right:0;top:0;width:100%;min-height:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #29487d;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f6f7f9;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-repeat:no-repeat;background-position:50% 50%;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50%;z-index:4}
.fb_customer_chat_bounce_in{animation-duration:250ms;animation-name:fb_bounce_in}.fb_customer_chat_bounce_out{animation-duration:250ms;animation-name:fb_fade_out}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}.fb_mobile_overlay_active{background-color:#fff;height:100%;overflow:hidden;position:fixed;visibility:hidden;width:100%}@keyframes fb_fade_out{from{opacity:1}to{opacity:0}}@keyframes fb_bounce_in{0%{opacity:0;transform:scale(.8, .8);transform-origin:100% 100%}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100%{opacity:1;transform:scale(1, 1)}}</style></head>

<body id="page" class="yoopage font-medium width-wide left   ">
<div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div></div></div><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe name="fb_xdm_frame_http" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" id="fb_xdm_frame_http" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" src="http://staticxx.facebook.com/connect/xd_arbiter/r/EIL5DcDc3Zh.js?version=42#channel=f29b80f4d6b6ca4&amp;origin=http%3A%2F%2Fwww.lightofindia.cz" style="border: none;"></iframe><iframe name="fb_xdm_frame_https" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" src="https://staticxx.facebook.com/connect/xd_arbiter/r/EIL5DcDc3Zh.js?version=42#channel=f29b80f4d6b6ca4&amp;origin=http%3A%2F%2Fwww.lightofindia.cz" style="border: none;"></iframe></div></div></div>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/cs_CZ/all.js#xfbml=1";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
	  
  <div id="page-header">
	  <div class="page-header-middle">
		  <div class="page-header-shadow">
			  
			  <div class="page-header-toolbar">
				  <div class="wrapper floatholder">
				  
					  <div id="toolbar">
						  <div class="floatbox ie_fix_floats">
						  
															  <div id="date">
								  Úterý, 05 Červen 2018								</div>
										  
							  
															  <div id="styleswitcher">
																										  <a id="switchfontlarge" href="javascript:void(0)" title="Increase font size"></a>
								  <a id="switchfontmedium" href="javascript:void(0)" title="Default font size"></a>
								  <a id="switchfontsmall" href="javascript:void(0)" title="Decrease font size"></a>
																  </div>
															  
							  

						  </div>
					  </div>
					  <!-- header end -->
			  
				  </div>
			  </div>
			  
			  <div class="wrapper floatholder">
				  
				  <div id="header">
					  
					  
							  
					  <div id="logo">
					  <!--<a href="http://localhost/goa2/index.php">
		  <img src="http://localhost/templates/yoo_shuffle/images/white/back_logo.png"></a>-->
					  <!--<div id="logo" onmouseover="this.style.cursor='pointer';" onclick="window.location.href='http://localhost/goa2/index.php'" onmouseout="this.style.cursor='default';">!-->
						  <div id="jflanguageselection"><ul class="jflanguageselection"><li id="active_language"><a href="/lang-cs/denni-menu"><img src="/components/com_joomfish/images/flags/cs.gif" alt="Čeština" title="Čeština"></a></li><li><a href="/lang-en/denni-menu"><img src="/components/com_joomfish/images/flags/en.gif" alt="English" title="English"></a></li><li><a href="/lang-de/denni-menu"><img src="/components/com_joomfish/images/flags/de.gif" alt="Deutsch" title="Deutsch"></a></li></ul></div><!--Joom!fish V2.0 (BETA)-->
<!-- &copy; 2003-2008 Think Network, released under the GPL. -->
<!-- More information: at http://www.joomfish.net -->
							  </div>
					  
					  
					  
				  </div>
				  <!-- header end -->
		  
			  </div>
			  
		  </div>
	  </div>
  </div>
  
  <div id="page-headerbar">
	  <div class="page-headerbar-middle">
		  <div class="wrapper floatholder">
		  
			  
		  </div>
	  </div>
  </div>
  
	  
  <div id="page-middle">
	  <div class="page-middle-middle">
		  <div class="page-middle-shadow">
			  <div class="wrapper floatholder">
  
				  <div id="middle">

					  <div class="middle-container-t">
						  <div class="middle-tl"></div>
						  <div class="middle-tr"></div>
						  <div class="middle-t"></div>
					  </div>
					  
					  <div class="middle-l">
						  <div class="middle-l-ie6"></div>
						  <div class="middle-r-ie6"></div>
						  <div class="middle-r">
							  <div class="middle-m">
						  
								  <div class="background">

																			  <div id="left">
										  <div id="left_container" class="clearfix">
														  
		  <div class="mod-rounded mod-menu">
			  <div class="module ">
									  <div class="module-2">
					  <div class="module-3">
						  <div class="module-4 deepest">
															  <h3 class="module"><span class="module-2"><span class="module-3"><span class="color">Hlavní</span> nabídka</span></span></h3>
															  <ul class="menu"><li class="level1 item2 first"><a href="http://www.lightofindia.cz/" class="level1 item2 first"><span>Restaurace</span></a></li><li class="level1 item3 active current"><a href="/lang-cs/denni-menu" class="level1 item3 active current"><span>Týdenní menu</span></a></li><li class="level1 item4"><a href="/lang-cs/jidelni-listek" class="level1 item4"><span>Jídelní lístek</span></a></li><li class="level1 item6"><a href="/lang-cs/napojovy-listek" class="level1 item6"><span>Nápojový lístek</span></a></li><li class="level1 item7 last"><a href="/lang-cs/kontakt" class="level1 item7 last"><span>Restaurace Light of India</span></a></li></ul>							</div>
					  </div>
				  </div>
			  </div>
		  </div>
					  <div class="mod-sticker">
			  <div class="module">
									  <div class="module-container-t">
					  <div class="module-tl"></div>
					  <div class="module-tr"></div>
					  <div class="module-t"></div>
				  </div>
				  
				  <div class="module-l">
					  <div class="module-l-ie6"></div>
					  <div class="module-r-ie6"></div>
					  <div class="module-r">
						  <div class="module-m deepest">
							  <div class="ie6">
																	  <h3 class="module"><span class="module-2"><span class="module-3"><span class="color">Otevírací</span> doba</span></span></h3>
																	  <p><strong>PONDĚLÍ - PÁTEK<br></strong><strong>10:30 - 22:30h</strong></p>
<p><strong><strong><strong>SOBOTA- NEĎELE<br></strong></strong></strong><strong><strong><strong>11:30-22:30</strong></strong></strong></p>
<p>Štefánikova 35<br>602 00&nbsp;Brno<br> <strong>Tel.: +420&nbsp;724&nbsp;323&nbsp;211</strong></p>
<p><strong><a href="mailto:info@lightofindia.cz">info@lightofindia.cz</a></strong></p>
<p><a href="/index.php/lang-cs/kontakt">více informací zde</a></p>
<p><strong>Příjmáme platební karty</strong></p>
<p><strong><img src="/images/stories/karty.jpg" alt=""></strong></p>								</div>
						  </div>
					  </div>
				  </div>
					  
				  <div class="module-container-b">
					  <div class="module-bl"></div>
					  <div class="module-br"></div>
					  <div class="module-b"></div>
				  </div>
			  </div>
		  </div>
					  <div class="mod-dotted">
			  <div class="module deepest">
														  <h3 class="module"><span class="module-2"><span class="module-3"><span class="color">Naše</span> další restaurace</span></span></h3>
									  <p><span style="font-size: 12pt;"><strong><a href="http://www.restaurant-goa.cz/" target="_blank">Restaurace GOA - Geislerova</a></strong></span></p>
<p><span style="font-size: 12pt;"><strong><a href="http://www.restaurant-goa-slatina.cz/" target="_blank">Restaurace GOA - Slatina</a></strong></span></p>
<p><span style="font-size: 12pt;"><strong><a href="http://www.campusbrno.cz/thali-of-india.html" target="_blank">Restaurace Thali Of India - Campus Square</a></strong></span></p>				</div>
		  </div>
					  <div class="mod-sticker">
			  <div class="module">
									  <div class="module-container-t">
					  <div class="module-tl"></div>
					  <div class="module-tr"></div>
					  <div class="module-t"></div>
				  </div>
				  
				  <div class="module-l">
					  <div class="module-l-ie6"></div>
					  <div class="module-r-ie6"></div>
					  <div class="module-r">
						  <div class="module-m deepest">
							  <div class="ie6">
																	  <h3 class="module"><span class="module-2"><span class="module-3"><span class="color">Rozvoz</span> jídel</span></span></h3>
																	  <p><strong><span style="color: #00ffff;">Vyberte si jídlo z našeho jídelního lístku a poté zavolejte na jedno z výše uvedených tel. čísel.</span></strong></p>
<p><strong><span style="color: #00ffff;">Cena rozvozu platí pouze pro město Brno.</span></strong></p>
<p><strong><span style="text-decoration: underline; color: #00ffff;">Cena rozvozu jídla:</span></strong></p>
<p><strong>400 Kč a více</strong>&nbsp;= rozvoz ZDARMA.</p>
<p><strong>do 400 Kč</strong>&nbsp;= 79 Kč poplatek za rozvoz.</p>
<p><strong>Minimální objednávka 200 Kč</strong></p>
<p><strong>dle jídelního lístku mimo THALI</strong></p>
<p><span style="background-color: #ffff99;"><strong><span style="color: #ff0000;">Nabídka pro firmy</span></strong></span></p>
<p><span style="color: #ff0000; background-color: #ffff99;"><strong>rozvoz poledniho menu min. 10 ks, objednání 1 den dopředu na Vámi určený čas .<br></strong><strong>Zakoupení Příboru &nbsp;k menu - 5 Kc.</strong></span></p>								</div>
						  </div>
					  </div>
				  </div>
					  
				  <div class="module-container-b">
					  <div class="module-bl"></div>
					  <div class="module-br"></div>
					  <div class="module-b"></div>
				  </div>
			  </div>
		  </div>
					  <div class="mod-dotted">
			  <div class="module deepest">
														  <h3 class="module"><span class="module-2"><span class="module-3"><span class="color">SLEDUJTE</span> NÁS NA FB</span></span></h3>
									  <p><a href="https://www.facebook.com/lightofindia.cz/"><img style="display: block; margin-left: auto; margin-right: auto;" src="/images/stories/1517174_orig.png" alt="" width="86" height="86"></a></p>				</div>
		  </div>
		  
										  </div>
									  </div>
									  <!-- left end -->
															  
									  <div id="main">
										  <div id="main_container" class="clearfix">
			  
														  
											  <div id="mainmiddle" class="floatbox">
		  
																					  
												  <div id="content">
													  <div id="content_container" class="clearfix">
		  
																			  
																							  
														  <div class="floatbox">
															  
															  
<table class="contentpaneopen">
<tbody><tr>
					  <td align="right" width="100%" class="buttonheading">
	  <a href="/lang-cs/denni-menu?format=pdf" title="PDF" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">PDF&nbsp;</a>		</td>
	  
			  <td align="right" width="100%" class="buttonheading">
	  <a href="/lang-cs/denni-menu?tmpl=component&amp;print=1&amp;page=" title="Tisk" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">Array&nbsp;Tisk&nbsp;Array</a>		</td>
	  
				  </tr>
</tbody></table>

<table class="contentpaneopen">



<tbody><tr>
<td valign="top">
<p><style type="text/css">
.hlight {background: #ffff00;color: #000000; height:auto; width:80px; font-size:26; text-align:center;}
</style>
</p><h5>Ke každému menu jako příloha <strong>rýže</strong> nebo <strong>Nan (indický chléb 1,3,7), nově Aloo methi - Brambory s indickými&nbsp;bylinkami(7)</strong>.</h5><br>Týden: 04.06. - 08.06.
<br>&#65279;&#65279;<h2>Pondělí</h2><br>1.  Dal soup (čočková polévka) 22Kč (1,7)<br>2.  Chicken Madras (stř. Pálivé kuřeci maso v omáčce) 100g 99Kč<br>3.  Chicken Lemon (kuřecí maso v omáčce citrónové chuti) 100g 99Kč (7,8)<br>4.  Rajma (červené fazole v nepálivé omáčce) 100g 99Kč (7,8)<br>5.  Menu Mix Thali(mix dnešního menu na děleném talíři) 150g (viz jídla)<br><br><h2>Uterý</h2><br>1.  Chicken soup (kuřecí polévka) 22Kč (1,3,7)<br>2.  Chicken Curry (kuřecí kostky v kari omáčce) 100g 99Kč (7,8)<br>3.  Chicken Korma (kuřecí kousky v jemné omáčce) 100g 99Kč (7,8)<br>4.  Aloo Gobi (brambory s květákem v omáčce) 100g 99Kč (7,8)<br>5.  Menu Mix Thali(mix dnešního menu na děleném talíři) 150g (viz jídla)<br><br><h2>Středa</h2><br>1.  Tomato soup (rajčatová polévka) 22Kč (1,7)<br>2.  Chicken Di Wala (kuřecí kousky v jogurtové omáčce) 100g 99Kč (7)<br>3.  Chicken Tikka (kuřecí kousky marinované ve směsi koření) 100g 119Kč (7,8)<br>4.  Mattar Mushroom (hrášek se žampiony v kari omáčce) 100g 99Kč (7,8)<br>5.  Menu Mix Thali(mix dnešního menu na děleném talíři) 150g (viz jídla)<br><br><h2>Čtvrtek</h2><br>1.  Garlic soup (česneková polévka) 22Kč (1,7)<br>2.  Lamb Masala (jehněčí kousky v jemně pálivé omáčce) 100g 119Kč (7,8)<br>3.  Chicken Do Piyaza (kuřecí kostky v omáčce z rajčat a cibule) 100g 99Kč (7,8)<br>4.  Shahi Paneer (ind. sýr v nepálivé omáčce na másle) 100g 99Kč (7,8)<br>5.  Menu Mix Thali(mix dnešního menu na děleném talíři) 150g (viz jídla)<br><br><h2>Pátek</h2><br>1.  Gobi soup (květáková polévka) 22Kč (1,7)<br>2.  Butter Chicken (kuřecí kousky v omáčce na másle) 100g 99Kč (7,8)<br>3.  Chicken Palak (kuřecí kousky se špenátem) 100g 99Kč (7)<br>4.  Navratan Korma (směs zeleniny a ind. sýra v jemné omáčce) 100g 99Kč (7,8)<br>5.  Menu Mix Thali(mix dnešního menu na děleném talíři) 150g (viz jídla)<p></p>

<p>Obsažené alergeny jsou zapsány v závorkách za daným jídlem.</p>
<p><strong><span style="font-size: 14pt;">Seznam alergenů:</span></strong></p>
<p><strong>1</strong> Obiloviny obsahující lepek<br><strong>2</strong> Korýši<br><strong>3</strong> Vejce<br><strong>4</strong> Ryby<br><strong>5</strong> Arašídy (podzemnice olejná)<br><strong>6</strong> Sójové boby (sója)<br><strong>7</strong> Mléko<br><strong>8</strong> Ořechy, madle, pistácie<br><strong>9</strong> Celer<br><strong>10</strong> Hořčice<br><strong>11</strong> Sezamová semena<br><strong>12</strong> Oxid siřičitý a siřičitany<br><strong>13</strong> Vlčí bob<br><strong>14</strong> Měkkýši</p>

</td>
</tr>

</tbody></table>
<span class="article_separator">&nbsp;</span>

														  </div>
				  
																	  
													  </div>
												  </div>
												  <!-- content end -->
				  
											  </div>
											  <!-- mainmiddle end -->
		  
														  
										  </div>
									  </div>
									  <!-- main end -->

								  </div>
							  
							  </div>
						  </div>
					  </div>
						  
					  <div class="middle-container-b">
						  <div class="middle-bl"></div>
						  <div class="middle-br"></div>
						  <div class="middle-b"></div>
					  </div>
					  
				  </div>
				  <!-- middle end -->

			  </div>
		  </div>
	  </div>
  </div>

  <div id="page-bottom">
	  <div class="page-bottom-middle">
		  <div class="page-bottom-shadow">
			  <div class="wrapper floatholder">

					  
			  </div>
		  </div>
	  </div>
  </div>
  
  <div id="page-footer">
	  <div class="wrapper floatholder">
  
			  <div id="footer">
				  <a class="anchor" href="#page">&nbsp;</a>
				  
				  
			  </div>
			  <!-- footer end -->
	  
	  </div>
  </div>
  

</body></html>`;
