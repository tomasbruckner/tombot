import AlCapone from "../../src/menus/AlCapone";

let requestMock;
let testedClass: AlCapone;

beforeAll(() => {
    requestMock = jest.fn();
});

beforeEach(() => {
    testedClass = new AlCapone({ get: requestMock });
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

afterEach(() => {
    requestMock.mockReset();
});

const expectedSlackMenu = {
    as_user: true,
    attachments:
        [{
            color: '#5da7ac',
            fallback: 'Restaurant menu',
            footer: '',
            text: 'Zeleninová polévka',
            title: 'Al Capone',
            title_link: 'http://www.pizzaalcapone.cz/brno/poledni-menu'
        },
        {
            color: '#5da7ac',
            fallback: 'Restaurant menu',
            footer: 'Cena: 79 Kč',
            text: 'Menu 1 - Špagety s tomatovou omáčkou, grilovanými kousky kuřecího masa zakáplé bazalkovým pestem'
        },
        {
            color: '#5da7ac',
            fallback: 'Restaurant menu',
            footer: 'Cena: 94 Kč',
            text: 'Menu 2 - Smažená vepřová kotleta s vídeňským salátem a limetou'
        },
        {
            color: '#5da7ac',
            fallback: 'Restaurant menu',
            footer: 'Cena: 109 Kč',
            text: 'Menu 3 - Grilovaný hermelín na salátovém lůžku s paprikou a rajčaty, brusinková omáčka, bagetky'
        }],
    channel: 'channel',
    text: ''
};

const response = `<html lang="cs" class=" js cssanimations"><head>
		
<link href="http://fonts.googleapis.com/css?family=Yellowtail%7cCabin:400,500,600,700,400italic,700italic%7cLibre+Baskerville:400italic%7cGreat+Vibes%7cOswald:400,300,700%7cOpen+Sans:600italic,700" rel="stylesheet" type="text/css">

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="keywords" content="">
<meta name="robots" content="index, follow">
<meta name="format-detection" content="telephone=no">

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/elixir.css">
<link href="/js/owl-carousel/owl.carousel.css" rel="stylesheet">
<link href="/js/owl-carousel/owl.theme.css" rel="stylesheet">
<link href="/js/owl-carousel/owl.transitions.css" rel="stylesheet">
<link href="/css/YTPlayer.css" rel="stylesheet">
<link rel="stylesheet" href="/css/swipebox.css">
<link rel="stylesheet" href="/css/menu.css" media="all">

<!--[if lt IE 9]>
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    <script src="/js/html5shiv.js"></script>
    <script src="/js/respond.js"></script>
<![endif]-->
		<title>Polední menu v Pizzerii Al Capone Brno</title>
		<meta name="description" content="Pizzeria Al Capone Brno je rodinná pizzerie na Hrnčířské, kde na vás čekají Italské speciality a každý den polední menu.">

		<style>
			section.menu {
				background: none;
			}

			#header {
				position: fixed;
				top:0px;
				left: 0px;
				z-index:1001;
				width: 100%;
				height: 90px;
				font-family: 'Open Sans', sans-serif;
				background-color: #fff!important;
				box-shadow: 0 1px 3px rgba(0,0,0,0.11);
				padding-top: 20px;
			}

			#header .menu-item a {
				color: #818181;
			}
			#header.overflow {
				top:-100px;
				left: 0px;
				background-color: #fff!important;
				box-shadow: 0 1px 3px rgba(0,0,0,0.11);
				-webkit-transition: all 0.3s ease-in;
				-o-transition: all 0.3s ease-in;
				transition: all 0.3s ease-in;
				-webkit-font-smoothing: antialiased;
			}
			#about .container .jt_row.jt_row-fluid.row .col-md-6.jt_col.column_container .heading.font-smoothing .text {
				font-family: Georgia, "Times New Roman", Times, serif;
				font-size: 24px;
			}
			#about .container .jt_row.jt_row-fluid.row .col-md-6.col-md-offset-3.jt_col.column_container .section-subtitle #subheader div h3 {
				font-family: Georgia, "Times New Roman", Times, serif;
				font-style: normal;
			}
			#about .container .jt_row.jt_row-fluid.row .col-md-6.col-md-offset-3.jt_col.column_container .section-subtitle #subheader div p {
				font-family: Georgia, "Times New Roman", Times, serif;
			}
			.poledni-menu{
				margin-bottom: 1em;
			}
		</style>
	</head>
	<body class="gold">
		
<div id="mask" style="display: none;">
	<div class="loader" style="display: none;">
		<img src="/svg-loaders/tail-spin.svg" alt="loading">
	</div>
</div>

<!-- BEGIN HEADER -->
<header id="header" role="banner" class="fixed">
	<div class="jt_row container visible">
		<div class="navbar-header page-scroll">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
				<i class="fa fa-bars"></i>
			</button>
			<a class="navbar-brand normal logo" href="/brno"><div class="logo_elixir"></div></a>
			<a class="navbar-brand mini" href="/brno"><div class="logo_elixir dark"></div></a>
			<a class="navbar-brand mini darker" href="/brno"><div class="logo_elixir dark"></div></a>
		</div>

		<!-- BEGIN NAVIGATION MENU-->
		<nav class="collapse navbar-collapse navbar-right navbar-main-collapse" role="navigation">
			<ul id="nav" class="nav navbar-nav navigation">
				<li class="menu-item"><a href="/brno">ÚVOD</a></li>
				<li class="menu-item"><a href="pizza-alcapone">O NÁS</a></li>
				<li class="menu-item"><a href="poledni-menu">POLEDNÍ MENU</a></li>
				<li class="menu-item"><a href="jidelni-listek">JÍDELNÍ LÍSTEK</a></li>
				<li class="menu-item"><a href="napojovy-listek">NÁPOJOVÝ LÍSTEK</a></li>
				<li class="menu-item"><a href="fotogalerie">FOTOGALERIE</a></li>
				<li class="menu-item"><a href="kontakt">KONTAKT</a></li>
			</ul>
		</nav>
		<!-- EN NAVIGATION MENU -->
	</div>
</header>
<!-- END HEADER -->

		<section id="menu" class="section menu">

            <div class="container">
				<div class="jt_row jt_row-fluid row visible">


					<div class="jt_row jt_row-fluid row visible">
						<div class="col-md-12 jt_col column_container">
								<div class="title first">Polední menu</div>
	<div class="voffset10"></div>
	<div class="subtitle">Týden: 04.-10. 06. 2018</div>
	<div class="voffset10"></div>
	<div class="jt_row row visible">
		<div class="col-xs-12 col-md-6 col-md-offset-3 jt_col">

			<p class="poledni-menu">
				<strong>Pondělí, 04. 06. 2018</strong><br>

				Krupicová polévka s vejcem<br>Menu 1 - Kuřecí prsíčko v pivním těstíčku, jogurtový dip, vařené brambory<br>Menu 2 - Pizza Salame (sýr, salám, kukuřice<br>Menu 3 - Gratinovaná kotleta se slaninou a mozzarellou, bramborové dolárky s česnekem<br>			</p>

			<p class="poledni-menu active-day">
				<strong>Úterý, 05. 06. 2018</strong><br>

				Zeleninová polévka<br>Menu 1 - Špagety s tomatovou omáčkou, grilovanými kousky kuřecího masa zakáplé bazalkovým pestem<br>Menu 2 - Smažená vepřová kotleta s vídeňským salátem a limetou<br>Menu 3 - Grilovaný hermelín na salátovém lůžku s paprikou a rajčaty, brusinková omáčka, bagetky<br>			</p>

			<p class="poledni-menu">
				<strong>Středa, 06. 06. 2018</strong><br>

				Drůbeží vývar se zeleninou a nudlemi<br>Menu 1 - Bazalkové kuřecí špízky, restované brambory se slaninou<br>Menu 2 - Pizza Americana (sýr, šunka, cibule, kečup)<br>Menu 3 - Grilovaná vepřová panenka plněná sušenými rajčaty a uzeným sýrem, bramborové pyré<br>			</p>

			<p class="poledni-menu">
				<strong>Čtvrtek, 07. 06. 2018</strong><br>

				Pórková polévka<br>Menu 1 - Kuřecí směs se zeleninou, smetanová rýže<br>Menu 2 - Sekaný steak s kapary a sýrem, majonézovo-pepřový dip, šťouchané brambory<br>Menu 3 - Vepřové medailonky na rozmarýnu, opékané brambory s chilli papričkami<br>			</p>

			<p class="poledni-menu">
				<strong>Pátek, 08. 06. 2018</strong><br>

				Uzená polévka s kroupami<br>Menu 1 - Kuřecí filet na grilu se sázeným vejcem, mačkané brambory s cibulkou<br>Menu 2 - Pizza Ronaldo (sýr, slanina, kozí rohy)<br>Menu 3 - Smažené plátky cukety podávané na listovém salátě s rajčaty, bylinkový dip, bagetky<br>			</p>

			<p class="poledni-menu">

				<br>Menu 1 - 79 Kč / Menu 2 - 94 Kč / Menu 3 - 109 Kč<br>				<br>
				Menu podáváme do 13:30
			</p>

				<p>
			<em>Přejeme Vám dobrou chuť.</em> <img src="/images/logo-red.svg" alt="polední menu v Alcapone" class="img" width="110" height="50"><br>
		</p>
		<div class="ornament"></div>
	</div>
</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
<!-- BEGIN CONTACT SECTION -->
<section id="contact" class="section contact dark">
	<div class="container">
		<div class="jt_row jt_row-fluid row">

			<div class="col-md-12 jt_col column_container">
				<h2 class="section-title">Kde nás najdete</h2>
			</div>
			<div class="col-md-6 col-md-offset-3 jt_col column_container">
				<div class="section-subtitle">
					<p>Pizzeria Al Capone</p>
					<p>Hrnčířská 6<br>
						Brno - Královo Pole<br>
						602 00</p>
					<h4><strong>Provozní doba: <br>
                        </strong></h4>
					<p><strong>po-ne 11:00 - 23:30</strong></p>
					<p>Teplá kuchyně do 23:00 <br>
						<br>
						<strong>Tel. +420 541 210 555</strong><br>
						<a href="mailto:info@pizzaalcapone.cz">info@pizzaalcapone.cz</a></p>
					<p>&nbsp;</p>
				</div>
			</div>

			<div class="col-xs-12 jt_col column_container">
				<!-- BEGIN FOOTER -->
				<footer id="footer" class="section" role="contentinfo">
					<ul class="social">
						<li><a href="https://www.facebook.com/pizzaalcaponebrno?fref=ts" class="icon fb"><i class="fa fa-facebook"></i></a></li>
					</ul>
				</footer>
				<!-- END FOOTER -->
			</div>

			<form action="/mail.php" method="post" id="contactform" class="contact-form" novalidate="novalidate">
				<div class="col-md-6 jt_col column_container">    
					<input type="text" id="name" name="name" class="text name required" placeholder="Jméno">
					<input type="email" id="email" name="email" class="tex email required" placeholder="Email">
					<input type="text" id="phone" name="phone" placeholder="Telefon">
					<input type="hidden" id="web" name="web" value="Brno">
				</div>

				<div class="col-md-6 jt_col column_container">    
					<textarea id="message" name="message" class="text area required" placeholder="zpráva" rows="10"></textarea>
				</div>

				<div class="col-md-4 col-md-offset-4 jt_col column_container">  
					<div class="formSent"><strong>Zpráva byla odeslána</strong> <br>Děkujeme že jste nás kontaktovali</div>   
					<input type="submit" class="button contact center" value="Odeslat">
				</div>

			</form>
			<div class="voffset100"></div>
		</div>
		<div class="voffset50"></div>
	</div>

</section>
<!-- END CONTACT SECTION -->

		
<a href="#0" class="cd-top">Top</a>
   
<script async="" src="//www.google-analytics.com/analytics.js"></script><script src="/js/modernizr.custom.js"></script>
<script src="/js/jquery.js"></script>
<script src="/js/classie.js"></script>
<script src="/js/pathLoader.js"></script>
<script src="/js/owl-carousel/owl.carousel.min.js"></script>
<script src="/js/jquery.inview.js"></script>
<script src="/js/jquery.nav.js"></script>
<script src="/js/jquery.mb.YTPlayer.js"></script>
<script src="/js/jquery.form.js"></script>
<script src="/js/jquery.validate.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/default.js"></script>
<script src="/js/plugins.js"></script>
<script type="text/javascript" src="/js/jquery.isotope.min.js"></script>
<script type="text/javascript" src="/js/jquery.prettyPhoto.js"></script>
<script src="/js/jquery.swipebox.js"></script>
<script type="text/javascript">
    ;( function( $ ) {

        $( '.swipebox' ).swipebox();

    } )( jQuery );
    </script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-54321752-2', 'auto');
  ga('send', 'pageview');
</script>

	
</body></html>`;
