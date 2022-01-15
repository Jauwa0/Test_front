
/* ANIMATION MANAGEMENT */
/* cancel animation during resize windows */

let resizeTimer;
window.addEventListener("resize", () => {
    document.getElementById('header').classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.   body.classList.remove("resize-animation-stopper");
    }, 400);
});

// ----------------------------------------------------------------

/* ICON ANIMATED */

/*const iconAnimated = document.querySelector('.icon-animated-1').querySelectorAll('.icon-face');
var iconNumber = 0, firstTime = true, timeAnimation = 0;*/

/*function iconRotation() {
    if (firstTime){
        console.log('iconNumber = ' + iconNumber);

        iconAnimated[iconNumber].style.setProperty('display', 'inherit');
        iconAnimated[iconNumber].classList.add('animate__animated', 'animate__flipInX');

        iconNumber++;
        firstTime = false;
        setTimeout(iconRotation(), 1000);
    } else {
        iconAnimated[iconNumber-1].classList.remove('animate__animated', 'animate__flipInX');
        iconAnimated[iconNumber-1].classList.add('animate__animated', 'animate__flipOutX');
        iconAnimated[iconNumber-1].addEventListener('animationend', () => {
            iconAnimated[iconNumber-1].style.setProperty('display', 'none');
            iconAnimated[iconNumber-1].classList.remove('animate__animated', 'animate__flipOutX');

            console.log('iconNumber = ' + iconNumber);

            if(iconNumber === iconAnimated.length) { iconNumber = 0; }

            console.log('iconNumber = ' + iconNumber);

            iconAnimated[iconNumber].style.setProperty('display', 'inherit');
            iconAnimated[iconNumber].classList.add('animate__animated', 'animate__flipInX');
            iconAnimated[iconNumber].addEventListener('animationend', () => {
                iconNumber++;
                console.log('iconNumber = ' + iconNumber);
                setTimeout(iconRotation(), 3000);
            });
        });
    }
}*/

// ----------------------------------------------------------------

/* COUNTER TIMER */

// Set the date we're counting down to
var countDownDate = new Date(2022,3, 15, 11, 0, 0).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    days = days.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = hours.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    // Display the result in an element with id="demo"
    /*document.getElementById("countdown-next-month").innerHTML = days + " : " +
        hours + " : " + minutes + " : " + seconds + "";*/
    document.getElementById("countdown-day").innerHTML = days;
    document.getElementById("countdown-hour").innerHTML = hours;
    document.getElementById("countdown-minute").innerHTML = minutes;
    document.getElementById("countdown-seconde").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// ----------------------------------------------------------------

// BUTTON FORMULAIRE CONFIG BOX

/* --- PRIMARY --- */
function displayBoxDetails(numberList, numberGroupDetail) {

    /* Hidden all secondary icons */
    var idSearch = "list-icon-form-detail-" + numberList;
    var reqSearch = "[id^=" + idSearch + "]";
    var children = document.querySelectorAll(reqSearch);

    console.log("idSearch = " + idSearch);
    console.log('Children length = ' + children.length);

    /* Hide all */
    children.forEach( child => {
        child.style.display = "none";
        console.log("child = " + child);
    });

    /* Show selection */
    document.getElementById("list-icon-form-detail-" + numberList + "-" + numberGroupDetail)
        .style.setProperty('display', 'block');

    /* Display selection */
    /*var idListIconSecondary = "list-icon-form-detail-" + numberList + "-" + numberGroupDetail;
    var secondaryIcons = document.getElementById(idListIconSecondary);
    secondaryIcons.style.setProperty('display', 'inherit');*/
}

/* --- SECONDARY --- */
/*function displayBoxDetailsSupp(detailsGroup) {
    /* Hidden all */
    /*var contentStyle = document.getElementsByClassName("config-box-details-supp");
    for(var i = 0; i < contentStyle.length; i++){
        contentStyle[i].style.setProperty('display', 'none');
    }

    /* Show */
    /*var elemStyle = document.getElementsByClassName("config-box-details-supp")[detailsGroup];
    elemStyle.style.setProperty('display', 'inherit');
}*/

/* --- --- */

function addConsommableBoxForm() {
    document.getElementById("button-add-consommable")
        .style.setProperty('display', 'none');

    document.getElementById("config-box-conso-supplementaire")
        .style.setProperty('display', 'inherit');
}

function deleteConsommableBoxForm() {
    document.getElementById("button-add-consommable")
        .style.setProperty('display', 'inherit');

    document.getElementById("config-box-conso-supplementaire")
        .style.setProperty('display', 'none');
}

// ----------------------------------------------------------------

// COLLAPS
var coll = document.getElementsByClassName("collaps");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// ----------------------------------------------------------------
