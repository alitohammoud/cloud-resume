$('.navbar').on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



// #Back to top button

var btn = $('#button-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


// Visitor counter for the site

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://l4d76vegp9.execute-api.us-east-1.amazonaws.com/Prod/"
    );
    let data = await response.json();
    counter.innerHTML = `${data}`;
}

updateCounter();
