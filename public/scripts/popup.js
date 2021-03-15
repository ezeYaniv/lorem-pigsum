window.addEventListener('DOMContentLoaded', (event) => {
  //***This code is for a full-on modal pop-up***
  //   const modal = document.getElementById('popup');
  //   const closeX = document.getElementById('popup__close');
  //   const overlay = document.getElementById('overlay');

  //   document.getElementById('scroll__link').addEventListener('click', function () {
  //     modal.classList.toggle('popup--show');
  //   });

  //   overlay.addEventListener('click', function(event) {
  //       if(event.target !== modal) {
  //           modal.classList.toggle('popup--show');
  //       }
  //   })

  //   closeX.addEventListener('click', function() {
  //       modal.classList.remove('popup--show');
  //   })

  //define a common function for closing actions
  function onClose() {
    $('.scroll__text').slideToggle(function () {
      setTimeout(function () {
        $('.scroll-wrapper').toggleClass('scroll-wrapper--show');
      }, 100);
      $('.overlay').toggleClass('overlay--show');
    });
  }

  $('.scroll__text').hide();

  //when the link is pressed (open and close)
  $('#scroll__link').click(function () {
    // $('#popup').toggleClass('popup--show');
    if ($('.overlay').hasClass('overlay--show')) {
      onClose();
    } else {
      $('.scroll-wrapper').toggleClass('scroll-wrapper--show');
      $('.scroll__text').delay(400).slideToggle();
      $('.overlay').toggleClass('overlay--show');
    }
  });

  $('.overlay, #scroll__close').click(function () {
    onClose();
  });

  //this adds a class called 'active' to the scroll text
//   const scroll = document.getElementById('scroll__link');
//   const scrollText = document.getElementsByClassName('scroll__text')[0];
  //   scroll.addEventListener('click', function() {
  //       scrollText.classList.toggle('active');
  //   })

  //   //this uses slideToggle to reveal the scroll text
  //   $('.scroll__link').click(function () {
  //     $('.scroll__text').slideToggle();

  //     $('.overlay').toggleClass('overlay--show');
  //     $('.scroll-wrapper').toggleClass('scroll-wrapper--show');
  //   });
});
