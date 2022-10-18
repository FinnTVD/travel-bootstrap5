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
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: "<button type='button' class='slick-prev slick-section5 slick-section5-active slick-section5-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-section5 slick-section5-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
})
const btn_prev_Section5 = $(".slick-section5-prev")
const btn_next_Section5 = $(".slick-section5-next")
const slickSection5Active = "slick-section5-active"

btn_prev_Section5.onclick = function () {
    let isCheckSection5 = this.getAttribute("tabindex")
    console.log(isCheckSection5)
    if (isCheckSection5 === "0") {
        this.classList.add(slickSection5Active)
    } else {
        btn_next_Section5.classList.remove(slickSection5Active)
    }
}
btn_next_Section5.onclick = function () {
    let isCheckSection5 = this.getAttribute("tabindex")
    if (isCheckSection5 === "0") {
        this.classList.add(slickSection5Active)
    } else {
        btn_prev_Section5.classList.remove(slickSection5Active)
    }
}

// modal click btn login

const toastTrigger = $('#liveToastBtn')
const toastLiveExample = $('#liveToast')
const toastDtae = $('#toastDate')
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