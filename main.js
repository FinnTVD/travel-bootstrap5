// slick-slider visible only smart phone
$('.section3__list').slick({
    infinite: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false,
});


// slick-slider section5
$('.section5__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: "<button type='button' class='slick-prev slick-section5 slick-section5-active slick-section5-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-section5 slick-section5-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
})
const btn_prev_Section5 = document.querySelector(".slick-section5-prev")
const btn_next_Section5 = document.querySelector(".slick-section5-next")
const slickSection5Active = "slick-section5-active"

// custom active button
btn_prev_Section5.onclick = function () {
    let isCheckSection5 = this.getAttribute("aria-disabled")
    if (isCheckSection5 === "true") {
        this.classList.add(slickSection5Active)
    } else {
        btn_next_Section5.classList.remove(slickSection5Active)
    }
}
btn_next_Section5.onclick = function () {
    let isCheckSection5 = this.getAttribute("aria-disabled")
    if (isCheckSection5 === "true") {
        this.classList.add(slickSection5Active)
    } else {
        btn_prev_Section5.classList.remove(slickSection5Active)
    }
}

// modal click btn login

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const toastDate = document.getElementById('toastDate')
function showTime(time) {
    return '⏰' + time.getHours() + ':' + time.getMinutes()
}

if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
        toastDate.innerHTML = showTime(new Date())
        toast.show()
    })
}

// show marquee on screen width >= 992px
if (window.innerWidth >= 992) {
    window.addEventListener('scroll', () => {
        let currentScroll = $(document).scrollTop()
        const nav = document.querySelector(".nav__config")
        const marquee = document.querySelector(".container__marquee")
        if (currentScroll <= 144) {
            nav.style.top = "23.2px"
            marquee.style.top = "0"
        } else if (currentScroll > 144) {
            marquee.style.top = "-24px"
            nav.style.top = "0"
        }
    })
}

window.addEventListener('scroll', () => {
    let currentScroll = $(document).scrollTop()
    console.log(currentScroll)
    if (currentScroll >= 1700) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
})

const btnTop = document.getElementById('btn__top')
btnTop.addEventListener('click', () => {
    window.scrollTo(
        { top: 0, behavior: 'smooth' }
    )
})
