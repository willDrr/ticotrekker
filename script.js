// https://sweetalert2.github.io/#examples
function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
}

function translate_test_english() {
    document.getElementById('ptextp').innerHTML = i18next.t('textpresentationeng');
}

function translate_test_espanish() {
    document.getElementById('ptextp').innerHTML = i18next.t('textpresentationesp');
}

document.getElementById('english').addEventListener('click', function() {
    translate_test_english();
});

document.getElementById('spanish').addEventListener('click', function() {
    translate_test_espanish();
});


// Get a reference to the button
const openPopupBtn = document.getElementById('firelink');

function make() {
    // Add event listener to the button
    openPopupBtn.addEventListener('click', function() {
      // Display SweetAlert2 popup
      Swal.fire({
          title: "<strong>HTML <u>example</u></strong>",
          icon: "info",
          html: `
            You can use <b>bold text</b>,
            <a href="#">links</a>,
            and other HTML tags
          `,
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great!
          `,
          confirmButtonAriaLabel: "Thumbs up, great!",
          cancelButtonText: `
            <i class="fa fa-thumbs-down"></i>
          `,
          cancelButtonAriaLabel: "Thumbs down"
      });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    var hamburgermenus = document.querySelectorAll('.hamburger-menu');

    var hamburgerMenu = hamburgermenus[0];
    var hamburgerMenuMobile = hamburgermenus[1];

    var slideMenu = document.querySelector('.slide-menu');
    var closeBtn = document.querySelector('#closeBtn');
    
    var menuItems = slideMenu.querySelectorAll('li');

    // Function to hide the slide menu
    var hideSlideMenu  = () => {
        slideMenu.classList.remove('active');
        slideMenu.classList.toggle('inactive');
    }

    // Add click event listeners to each list item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            hideSlideMenu(); // Call hideSlideMenu function when a list item is clicked
        });
    });

    hamburgerMenu.addEventListener('click', function() {
        slideMenu.classList.remove('inactive');
        slideMenu.classList.toggle('active');
    });

    hamburgerMenuMobile.addEventListener('click', function() {
        slideMenu.classList.remove('inactive');
        slideMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        slideMenu.classList.remove('active');
        slideMenu.classList.toggle('inactive');
    });


    // https://www.i18next.com/overview/getting-started
    i18next.init({
        lng: 'en', // if you're using a language detector, do not define the lng option
        debug: true,
        resources: {
            en: {
            translation: {
                "textpresentationeng": "Welcome to Ticotrekker a tourism transportation company in Costa Rica! We are proud to offer you the best drivers and excellent buses to guarantee you a safe, comfortable and memorable travel experience. With our modern and well maintained fleet, we are ready to take you to explore Costa Rica's wonderful tourist destinations. From pristine beaches to lush rainforests, we are here to make your trip unforgettable. Book with us and discover the beauty of Costa Rica in comfort and style.",
                "textpresentationesp": "Bienvenidos a Ticotrekker una empresa de transporte de turismo en Costa Rica! Nos enorgullece ofrecerle los mejores conductores y excelentes busetas para garantizarle una experiencia de viaje segura, cómoda y memorable. Con nuestra flota moderna y bien mantenida, estamos listos para llevarlo a explorar los maravillosos destinos turísticos de Costa Rica. Desde las playas vírgenes hasta las exuberantes selvas tropicales, estamos aquí para hacer que su viaje sea inolvidable. ¡Reserve con nosotros y descubra la belleza de Costa Rica con comodidad y estilo."
                }
            }
        }
    });

});

