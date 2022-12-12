const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');  






const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}











const buttonPrev2 = document.getElementById('button-prev2');
const buttonNext2 = document.getElementById('button-next2');
const track2 = document.getElementById('track2');
const slickList2 = document.getElementById('slick-list2');  






const slick2 = document.querySelectorAll('.slick');

const slickWidth2 = slick2[0].offsetWidth;

buttonPrev2.onclick = () => Movex(1);
buttonNext2.onclick = () => Movex(2);

function Movex(value) {
    const trackWidth2 = track2.offsetWidth;
    const listWidth2 = slickList2.offsetWidth;

    track2.style.left == "" ? leftPosition = track2.style.left = 0 : leftPosition = parseFloat(track2.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth2 - listWidth2) && value == 2) {
        track2.style.left = `${-1 * (leftPosition + slickWidth2)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track2.style.left = `${-1 * (leftPosition - slickWidth2)}px`;
    }
} 