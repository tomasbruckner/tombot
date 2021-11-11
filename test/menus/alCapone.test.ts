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
            "text": "Hovězí vývar se zeleninou a nudlemi 1,3,7,9",
            "title": "Al Capone",
            "title_link": "https://www.pizzaalcapone.cz/cz/poledni-menu",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 94,- Kč",
            "text": "Masové kuličky v rajské omáčce, kolínka 1,3,7",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 104,- Kč",
            "text": "Pizza Torio (tomat, mozzarella, slanina, šunka, vejce, paprika) 1,3,7",
        },
        {
            "color": "#5da7ac",
            "fallback": "Restaurant menu",
            "footer": "Cena: 114,- Kč",
            "text": "Mix gril (kuřecí, vepřové), mexické chilli fazole, vařené brambory s petrželkou 1",
        },
    ],
    "channel": "channel",
    "text": "",
};

const response = `<!DOCTYPE html>
<HTML lang="cs">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="Pizzeria Al Capone" />
    <meta name="description" content="Pizzeria Al Capone" />
    <meta name="author" content="UMIX.cz" />
    <meta name="revisit-after" content="3 days" />
    <title>Polední menu - Pizzeria Alcapone - Brno</title>
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="/public/frontend/images/favico/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/public/frontend/images/favico/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/public/frontend/images/favico/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/public/frontend/images/favico/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/public/frontend/images/favico/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/public/frontend/images/favico/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/public/frontend/images/favico/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/public/frontend/images/favico/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/public/frontend/images/favico/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/public/frontend/images/favico/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/public/frontend/images/favico/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/public/frontend/images/favico/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/public/frontend/images/favico/favicon-16x16.png">
    <link rel="manifest" href="/public/frontend/images/favico/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/public/frontend/images/favico/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="/public/frontend/css/bootstrap.min.css">
    <!-- main stylesheet -->
    <link rel="stylesheet" href="/public/frontend/css/style.css?v=1.1939">

    <!-- responsive css -->
    <link rel="stylesheet" href="/public/frontend/css/responsive.css?v=1.3">

    <link href="/public/frontend/css/lightbox.css" rel="stylesheet">

    <!-- select2 -->
    <link href="/vendor/select2/select2/dist/css/select2.min.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Permanent+Marker&display=swap" rel="stylesheet">


        
            <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NJ2MS6G');</script>
        <!-- End Google Tag Manager -->

         <!-- color stylesheet -->
        <link rel="stylesheet" href="/public/frontend/css/colors2.css" id="ui-theme-color">

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152868281-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-152868281-1');
        </script>

    

</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJ2MS6G"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
 
<!-- mobile menu -->
<div class="visible-xs bg2">

    <!-- Brno -->

    
       <div class="row">

           <div class="col-xs-12" style="text-align: left" >
               <a href="tel:+420 541 210 555" class="mobile-xs-menu-rajhrad"> &nbsp; &nbsp;<i class="flaticon-phone-call"></i> &nbsp; &nbsp;+420 541 210 555 - Rezervace</a>
           </div>

           <hr class="hr-menu">
           <div class="col-xs-6">
               <div class="btn-group text-center">
                   <button type="button" class="btn dropdown-toggle text-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-weight: bold; float: right; font-size: 8px;background-color: white">
                       <p> <i class="flaticon-down-arrow"></i> &nbsp; Vybrat restauraci</p>
                   </button>
                   <ul class="dropdown-menu">
                       <li><a href="http://www.pizzaalcapone.cz">Restaurace Brno</a></li>
                       <li><a href="http://www.alcaponerajhrad.cz">Restaurace Rajhrad</a></li>
                   </ul>
               </div>
           </div>

           <div class="col-xs-6">
               <ul class="list-unstyled kosik-mobil" style="color: white;">
                   <li>
                       <a href="/cz/obsah-kosiku">
                           <i class="flaticon-shopping-bag"></i>
                           <span id="header_basket_sum"  >
                                   0 Kč                               </span>
                       </a>
                   </li>
               </ul>

           </div>
       </div>

    
    <!-- END Brno -->

    <!-- Rajhrad -->
    
    <!-- END Rajhrad -->





</div>
<!-- mobile menu END -->


<div id="wrapper">
<div id="wrapper">
    <header class="new-block main-header">
        <div class="main-nav new-block">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="logo">

                            
                                    <a href="/"><img src="/public/frontend/images/logo_brno_nove_black_small.png" alt="Alcapone Brno" class="img-responsive"></a>

                                
                        </div>

                        <div class="location-block hidden-xs">
                            <div class="btn-group">
                                <button type="button" class="btn  btn1 stl1 dropdown-toggle text-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background-color: transparent; font-weight: bold;">
                                    <span>Vybrat restauraci</span>
                                </button>
                                <br>

                                <ul class="dropdown-menu" style="z-index: 999">
                                    <li><a href="http://www.pizzaalcapone.cz/cz/poledni-menu">Restaurace Brno</a></li>
                                    <li><a href="http://www.alcaponerajhrad.cz/cz/poledni-menu">Restaurace Rajhrad</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" class="nav-opener"><i class="fa fa-bars"></i></a>

                        <div class="visible-xs header-phone-black">
                            
                        </div>

                        <nav class="nav">
    <ul class="list-unstyled">

                <!-- Start topmenu-->                        <li>
                        <a  href="/cz/uvod">ÚVOD
                            

                        </a>
                                            </li>

                                        <li>
                        <a  href="/cz/o-nas">O NÁS
                            

                        </a>
                                            </li>

                                        <li>
                        <a  href="/cz/poledni-menu">POLEDNÍ MENU
                            

                        </a>
                                            </li>

                                        <li>
                        <a  href="/cz/jidelni-listek">JÍDELNÍ LÍSTEK
                            

                        </a>
                                            </li>

                                        <li>
                        <a  href="/cz/napojovy-listek">NÁPOJOVÝ LÍSTEK
                            

                        </a>
                                            </li>

                                        <li>
                        <a  href="/cz/fotogalerie">FOTOGALERIE
                            

                        </a>
                                            </li>

                                        <li>
                        <a  href="/cz/kontakt">KONTAKTY
                            

                        </a>
                                            </li>

                <!-- End topmenu-->    </ul>
</nav>
                        <div class="nav-right-block hidden-xs">
        <ul class="list-unstyled" style="color: white;">
        <li><a href="/cz/obsah-kosiku"><i class="flaticon-shopping-bag"></i><span id="header_basket_sum"  >0 Kč</span></a></li>
    </ul>
    </div><!-- nav-login -->
                    </div>
                </div>
            </div>
        </div>
    </header> <!-- header -->






<!-- breadcrumb -->
<section class="page-info new-block">
    <div class="fixed-bg" style="background: url('/public/frontend/images/info-bg.jpg');"></div>
    <div class="overlay"></div>
    <div class="container">
        <h2>Polední menu</h2>

                <div class="clear-fix"></div>
    </div>
</section>
<!-- breadcrumb -->

<section class="about-us-block new-block" style="min-height: 500px;">
    <div class="container">
        <div class="row">
            <div class="dmenu-poznamka" style="padding-top: 50px">
                <p>obědov&eacute; menu pod&aacute;v&aacute;me od 11.00 do 13.30 hodin</p>
            </div>

            <table class="table table-responsive">
                <tbody>

                
                    <tr>
                        <td class="bg1" colspan="3">
                            čtvrtek                            <h3>11.11.2021</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>Polévka</td>
                        <td>
                            <h3>Hovězí vývar se zeleninou a nudlemi 1,3,7,9</h3>
                        </td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>Menu 1</td>
                        <td>
                            <h3>Masové kuličky v rajské omáčce, kolínka 1,3,7</h3>
                        </td>
                        <td>
                            <h3 class="dmenu-cena">94,- Kč</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>Menu 2</td>
                        <td>
                            <h3>Pizza Torio (tomat, mozzarella, slanina, šunka, vejce, paprika) 1,3,7</h3>
                        </td>
                        <td>
                            <h3 class="dmenu-cena">104,- Kč</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>Menu 3</td>
                        <td>
                            <h3>Mix gril (kuřecí, vepřové), mexické chilli fazole, vařené brambory s petrželkou 1</h3>
                        </td>
                        <td>
                            <h3 class="dmenu-cena">114,- Kč</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>Menu 4</td>
                        <td>
                            <h3>Hovězí flank steak, grilovaný kukuřičný klas, demi-glace, americké brambory 1</h3>
                        </td>
                        <td>
                            <h3 class="dmenu-cena">149,- Kč</h3>
                        </td>
                    </tr>

                     
                
                    <tr>
                        <td class="bg1" colspan="3">
                            pátek                            <h3>12.11.2021</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>Polévka</td>
                        <td>
                            <h3>Moravská česneková polévka s vejcem 3,9</h3>
                        </td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>Menu 1</td>
                        <td>
                            <h3>Krkovička na grilu, hrachová kaše s cibulkou, restované brambory 1,7</h3>
                        </td>
                        <td>
                            <h3 class="dmenu-cena">94,- Kč</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>Menu 2</td>
                        <td>
                            <h3>Pizza Carbonara (smetana, sýr, slanina, cibule, rukola) 1,3,7</h3>
                        </td>
                        <td>
                            <h3 class="dmenu-cena">104,- Kč</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>Menu 3</td>
                        <td>
                            <h3>Kuřecí smaženky, sýrová omáčka, bramborové pyré 1,3,7</h3>
                        </td>
                        <td>
                            <h3 class="dmenu-cena">114,- Kč</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>Menu 4</td>
                        <td>
                            <h3>Lasagne dello Cheff (široké nudle s boloňskou masovou směsí, kuřecím masem, cuketou, hříbky, smetanou), zapečené sýrem 1,3,7</h3>
                        </td>
                        <td>
                            <h3 class="dmenu-cena">149,- Kč</h3>
                        </td>
                    </tr>

                     
                
                </tbody>
            </table>

        </div>
    </div>
    <div class="clearfix"></div>
</section><footer class="main-footer home2 new-block">
        <div class="fixed-bg parallax " style="background: url('/public/frontend/images/footer-bg.jpg');"></div>
        <div class="overlay"></div>
        <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-3 col-sm-3 center-block block-footer">

                        
                            <a href="/"><img src="/public/frontend/images/logo_brno_nove_gray_small.png" alt="logo" class="img-responsive center-block" style="padding-bottom: 20px; height: auto ; width: 150px"></a>


                        

                        <p>Jsme rodinn&aacute; pizzerie, kter&aacute; se nach&aacute;z&iacute; kousek od centra Brna. Působ&iacute;me na trhu už 25 let.</p>

                        <a href="/cz/o-nas" class="link">Více o nás</a>

                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 block-footer">

                        <div class="block-stl4">
                            <a href="https://goo.gl/maps/75n44fKgv6QPE6Yr8">
                                <i class="flaticon-placeholder"></i><br/>
                                <span class="font-white">Hrnčířská 6 <br/> 602 00 Brno</span>
                            </a>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-3 block-footer">

                        <div class="block-stl4">
                            <a href="tel:+420 541 210 555">
                                <i class="flaticon-phone-call"></i><br/>
                                <span class="font-white">+420 541 210 555</span>
                            </a>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-3 block-footer">

                        <div class="block-stl4">
                            <a href="mailto:info@pizzaalcapone.cz">
                                <i class="flaticon-message"></i><br/>
                                <span class="font-white">info@pizzaalcapone.cz</span>
                            </a>
                        </div>

                    </div>

                </div>
        </div>

</footer>
<div class="copy-right">
    <div class="container">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12"><p>©2019Pizzeria Alcapone - Brno - Všechna práva vyhrazena</p> </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12"><p> Created by <a href="https://www.umix.cz" target="_blank">UMIX s.r.o </a></p></div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <p>
            <a href="/backend" target="_blank" title="Přihlášení do backendu"><i class="fa fa-gears"></i> Administrace</a>
            </p>
        </div>

    </div>
</div>

<span id="go_to_top" class="go-to-top"><i class="flaticon-up-arrow"></i></span>
</div><!-- #wrapper -->

<div  id="myModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Košík</h4>
            </div>
            <div class="modal-body" id="hlaska_text">
                <p>Položka byla úspěšně přidána do košíku</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Zavřít</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!-- include jQuery -->
<script src="/public/frontend/js/jquery.min.js"></script>
<script src="/vendor/select2/select2/dist/js/select2.js"></script>
<script src="/vendor/select2/select2/dist/js/i18n/cs.js"></script>
<!-- bootstrap -->
<script src="/public/frontend/js/bootstrap.min.js"></script>
<!-- bootstrap -->
<script src="/public/frontend/js/owl.carousel.min.js"></script>
<!-- slick slider  -->
<script src="/public/frontend/js/slick.js"></script>
<!-- dscountdown  -->
<script src="/public/frontend/js/dscountdown.min.js"></script>
<!-- jquery.nice-select -->
<script src="/public/frontend/js/jquery.nice-select.js"></script>
<!-- magnific-popup -->
<script src="/public/frontend/js/jquery.magnific-popup.min.js"></script>
<!-- Mixitup -->
<script src="/public/frontend/js/mixitup.min.js"></script>
<!-- Google Map -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBP1lPhUhDU6MINpruPDinAzXffRlpzzFo"></script>
<script src="/public/frontend/js/map.js"></script>
<!-- custom js -->
<script src="/public/frontend/js/custom.js"></script>




<script type="text/javascript" src="/public/frontend/js/lightbox.js"></script>
<script type="text/javascript" src="/public/frontend/js/alcapone.js"></script>


<script>
    function setTabs() {
        let availableWidth = $('#nav-bar2').outerWidth();
        let liNodes = $('#nav-bar2 li');
        liNodes.removeClass('clear');
        let filledWidth = 0;
        for (var i=liNodes.length-1; i>=0; i--) {
            let currentWidth = $(liNodes[i]).outerWidth();

            if (filledWidth + currentWidth <= availableWidth)
                filledWidth += currentWidth;

            else {
                $(liNodes[i+1]).addClass('clear');
                availableWidth = filledWidth;
                filledWidth = currentWidth;
            }
        }
    }

    setTabs();
    $(window).resize(_.debounce(setTabs, 200));


</script>



<div class="modal fade" tabindex="-1" role="dialog" id="upozorneni">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Svatomartínské hody</h4>
            </div>
            <div class="modal-body">
                                                    <a href="">
                    <img src="http://www.pizzaalcapone.cz/public/frontend/data/upozorneni/3/1635856413shutterstock.jpg" alt="Svatomartínské hody" class="img-responsive">
                    </a>
                            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<script>
    $( document ).ready(function() {
        $('#upozorneni').modal('show')
    });
</script>



<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-54321752-2', 'auto');
    ga('send', 'pageview');
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
    fbq('init', '626758071479320');
    fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"

               src="https://www.facebook.com/tr?id=626758071479320&ev=PageView&noscript=1"
    /></noscript>
<!-- End Facebook Pixel Code -->


</body>
</html>
`;
