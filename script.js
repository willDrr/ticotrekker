// https://sweetalert2.github.io/#examples
function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

});

