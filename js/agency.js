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

  var languages = {
    eng: {
      services: 'Uslugi',
      desc: 'dOur large charter bus selection is one of the best. Wiktoria knows how important comfort is. That’s why we offer roomy charter buses with up to 57 seats, and for a great price.We are traveling all over Polands bigger cities',
      school: 'We also provide school shuttles to whole different places. You can check out the whole list and prices please get in touch with us via contact form.'
    },
    pl: {
      services: 'Services'
    },
    de: {
      services: 'Uslugi'
    }
  }
  // preparing language file
  var aLangKeys = new Array();
  aLangKeys['en'] = new Array();
  aLangKeys['ru'] = new Array();
  aLangKeys['de'] = new Array();
  aLangKeys['pl'] = new Array();
  aLangKeys['en']['button'] = 'EN';
  aLangKeys['en']['peoples'] = 'Peoples >>';
  aLangKeys['en']['all_list'] = 'All list';
  aLangKeys['en']['online'] = 'Online';
  aLangKeys['en']['articles'] = 'Articles >>';
  aLangKeys['en']['js'] = 'JavaScript';
  aLangKeys['en']['php'] = 'PHP';
  aLangKeys['en']['html'] = 'HTML';
  aLangKeys['en']['css'] = 'CSS';
  aLangKeys['en']['contact_us'] = 'Contact us';
  aLangKeys['en']['welcome'] = 'Welcome guests';
  aLangKeys['ru']['button'] = 'RU';
  aLangKeys['ru']['peoples'] = '???????????? >>';
  aLangKeys['ru']['all_list'] = '???? ??????';
  aLangKeys['ru']['online'] = '? ????';
  aLangKeys['ru']['articles'] = '?????? >>';
  aLangKeys['ru']['js'] = '?????????';
  aLangKeys['ru']['php'] = '???';
  aLangKeys['ru']['html'] = '????';
  aLangKeys['ru']['css'] = '???';
  aLangKeys['ru']['contact_us'] = '???????? ???';
  aLangKeys['ru']['welcome'] = '????? ??????????';
  aLangKeys['de']['button'] = 'DE';
  aLangKeys['de']['peoples'] = '???????????? >>';
  aLangKeys['de']['all_list'] = '???? ??????';
  aLangKeys['de']['online'] = '? ????';
  aLangKeys['de']['articles'] = '?????? >>';
  aLangKeys['de']['js'] = '?????????';
  aLangKeys['de']['php'] = '???';
  aLangKeys['de']['html'] = '????';
  aLangKeys['de']['css'] = '???';
  aLangKeys['de']['contact_us'] = '???????? ???';
  aLangKeys['de']['welcome'] = '????? ??????????';
  aLangKeys['pl']['button'] = 'PL';
  aLangKeys['pl']['peoples'] = '???????????? >>';
  aLangKeys['pl']['all_list'] = '???? ??????';
  aLangKeys['pl']['online'] = '? ????';
  aLangKeys['pl']['articles'] = '?????? >>';
  aLangKeys['pl']['js'] = '?????????';
  aLangKeys['pl']['php'] = '???';
  aLangKeys['pl']['html'] = '????';
  aLangKeys['pl']['css'] = '???';
  aLangKeys['pl']['contact_us'] = '???????? ???';
  aLangKeys['pl']['welcome'] = '????? ??????????';

  $(document).ready(function () {
    // onclick behavior
    $('.lang').click(function () {
      var lang = $(this).attr('id'); // obtain language id
      // translate all translatable elements
      $('.tr').each(function (i) {
        $(this).text(aLangKeys[lang][$(this).attr('key')]);
      });
    });
  });




})(jQuery); // End of use strict