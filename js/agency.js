(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 4
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $(".navbar").removeClass("d-none");
  })

  //remove spinner
  var loadingSpinner = function () {
    $("html").removeClass("loading");
  }
  setTimeout(function () {
    loadingSpinner();
  }, 2000);

  // animated bg
  $('.masthead').vide({
    mp4: "img/bg-vid.mp4",
    poster: "img/bus.jpg"
  }, {
    posterType: 'jpg'
  });

  // preparing language file
  var aLangKeys = new Array();
  aLangKeys['en'] = new Array();
  aLangKeys['pl'] = new Array();
  aLangKeys['en']['language'] = 'PL 🇵🇱';
  aLangKeys['en']['services'] = 'Services';
  aLangKeys['en']['fleet'] = 'Fleet';
  aLangKeys['en']['fleetDesc'] = 'We always stay ahead!';
  aLangKeys['en']['about'] = 'About';
  aLangKeys['en']['contact'] = 'Contact';
  aLangKeys['en']['contactDesc'] = 'Do you want to book a trip?';
  aLangKeys['en']['welcome'] = 'Welcome on board!';
  aLangKeys['en']['come'] = 'Come In';
  aLangKeys['en']['call'] = 'Call us';
  aLangKeys['en']['close'] = 'Close';
  aLangKeys['en']['travel'] = 'We travel all around the world!';
  aLangKeys['en']['trips'] = 'Workers shuttles';
  aLangKeys['en']['tripDesc'] = 'You have to know that when you travel with us you are always in good hands. We know how much our customers value their comfort and enjoymnet during the ride that is why we come ahead and fullfill newest standart requirements having top quality fleet.';
  aLangKeys['en']['intl'] = 'International Tours';
  aLangKeys['en']['intlDesc'] = 'We work with all kinds of travel agencies from countries of Europe, Asia and North America namely Netherlands, China, Germany, USA, France. We provide them best quility service as we always step up to their smallest needs';
  aLangKeys['en']['🏫'] = 'Schools';
  aLangKeys['en']['🏫Desc'] = 'Moreover, we work provide our service to local schools and kidnergardens. Mainly we provide them with shuttles to local places of entertainment but it also happend that we travel abroad. We are really flexible!';
  aLangKeys['en']['equip'] = 'Equipped with';
  aLangKeys['en']['seats'] = 'Seats';
  aLangKeys['en']['year'] = 'Year';
  aLangKeys['en']['exp'] = 'Experience';
  aLangKeys['en']['clients'] = 'Clients that we work with';
  aLangKeys['en']['history'] = 'Company Hisotry 🚌';
  aLangKeys['en']['historyDesc'] = 'How we developed and got to this point';
  aLangKeys['en']['beggining'] = 'Very first beggining';
  aLangKeys['en']['history1'] = 'We started off with transporting home and garden supplies';
  aLangKeys['en']['history2'] = 'People transportation';
  aLangKeys['en']['history3'] = 'Later on, we provided transport to the people as well';
  aLangKeys['en']['lech'] = 'KKS Lech Poznań';
  aLangKeys['en']['lech-desc'] = 'We worked as a contractor for soccer klub located in Poznan, Poland';
  aLangKeys['en']['international'] = 'International services';
  aLangKeys['en']['internationalDesc'] = 'We provided international shuttles to Italy and France';
  aLangKeys['en']['foreign'] = 'Cooworking with foreign companies';
  aLangKeys['en']['foreign-desc'] = 'Our operations were mainly focused on internationl tourism - during the season our coaches constantly hit the roads';
  aLangKeys['en']['now'] = 'Today';
  aLangKeys['en']['now-desc'] = 'Recently we acquire 23 luxury coaches with capacity of 17 through 20 to 50 and 60 seats. Moreover, we have 40 school and local trips buses';
  aLangKeys['en']['bePart'] = 'Be part of our story!';

  aLangKeys['pl']['language'] = 'EN 🏴󠁧󠁢󠁥󠁮󠁧󠁿';
  aLangKeys['pl']['services'] = 'Usługi';
  aLangKeys['pl']['fleet'] = 'Flota';
  aLangKeys['pl']['fleetDesc'] = 'Zasze staramy sie nie zostawac z tylu!';
  aLangKeys['pl']['about'] = 'O Nas';
  aLangKeys['pl']['contact'] = 'Kontakt';
  aLangKeys['pl']['contactDesc'] = 'Chcesz z nami pojechać na wycieczkę';
  aLangKeys['pl']['welcome'] = 'Witamy na pokładzie!';
  aLangKeys['pl']['come'] = 'Wejdź';
  aLangKeys['pl']['call'] = 'Zadzwoń';
  aLangKeys['pl']['close'] = 'Zamknij';
  aLangKeys['pl']['travel'] = 'Podróżujemy dookoła świata!';
  aLangKeys['pl']['trips'] = 'Przewozy Pracownicze';
  aLangKeys['pl']['tripDesc'] = 'Korzystanie z naszych autobusow na liniach miedzymiastowych jest naprawde udana decyzja.  Wiemy jak wazny jest comfort i zadowolenie naszych klientow dlatego  chcemy wyjsc temu naprzeciw spelniajac najnowoczesniejsze wymogi Nasze autobusy sa swietne w swojej jakosci..';
  aLangKeys['pl']['intl'] = 'Wycieczki Miedzynarodowe';
  aLangKeys['pl']['intlDesc'] = 'Pracuejmy z biurami podrozy z roznych krjaow Europy, Azji i Ameryki  takich jak  Nederlands, China, Germany, France, USA. We  provide them best quility service as we always step up to their smallest needs';
  aLangKeys['pl']['🏫'] = 'Szkoły';
  aLangKeys['pl']['🏫Desc'] = 'Ponadto swiadczynmy uslugi transportowe w porozumieniu z lokalnymi  szkolami. Glownie sa to wycieczki lokalne lecz zdarzaja sie wyjazdy poza granice panstwa. Jestesmy naprwde  elastyczni.';
  aLangKeys['pl']['equip'] = 'Posiada';
  aLangKeys['pl']['seats'] = 'Ilość miejsc';
  aLangKeys['pl']['year'] = 'Rok';
  aLangKeys['pl']['exp'] = 'Doświadczeni';
  aLangKeys['pl']['clients'] = 'Clients that we work with';
  aLangKeys['pl']['history'] = 'Historia Firmy 🚌';
  aLangKeys['pl']['historyDesc'] = 'Jak się rozwijaliśmy i jak dotarliśmy tutaj gdzie jesteśmy...';
  aLangKeys['pl']['beggining'] = 'Sam początek';
  aLangKeys['pl']['history1'] = 'Zaczelismy z transportem torfu.';
  aLangKeys['pl']['history2'] = 'Przewóz osób';
  aLangKeys['pl']['history3'] = 'Pózniej, rozpoczęliśmy działalność na rynku przewozu osób';
  aLangKeys['pl']['lech'] = 'KKS Lech Poznań';
  aLangKeys['pl']['lech-desc'] = 'Współpracowaliśmy z KKS Lech Poznań w zakresie transportu I drużyny';
  aLangKeys['pl']['international'] = 'Usługi miedzynarodowe';
  aLangKeys['pl']['internationalDesc'] = 'Realizowaliśmy międzynarodowe linie przewozu osób do Włoch i Francji.';
  aLangKeys['pl']['foreign'] = 'Współpraca z zagranicznymi firmami';
  aLangKeys['pl']['foreign-desc'] = 'Nasza działalność skupiła się głównie na turystyce międzynarodowej - w sezonie nasze autobusy rzadko zjeżdżają do bazy 😉';
  aLangKeys['pl']['now'] = 'Dzisiaj';
  aLangKeys['pl']['now-desc'] = 'Obecnie dysponujemy 23 autobusów klasy lux o pojemności od 17 przez 20 do 50 i 60 osób, ponadto posiadamy 40 autobusów do przewozów szkolnych i pracowniczych.';
  aLangKeys['pl']['bePart'] = 'Bądź częścią naszej historii!';

  var switchCountryDisplay = false;
  // onclick behavior
  $('.lang').click(function () {
    var lang = switchCountryDisplay ? 'pl' : 'en' // switch language
    switchCountryDisplay = !switchCountryDisplay
    // translate all translatable elements
    $('.tr').each(function (i) {
      $(this).text(aLangKeys[lang][$(this).attr('key')]);
    });
  });
})(jQuery); // End of use strict