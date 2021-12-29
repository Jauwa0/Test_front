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
    document.getElementById("countdown-next-month").innerHTML = days + " : " +
        hours + " : " + minutes + " : " + seconds + "";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


// ----------------------------------------------------------------

// BUTTON FORMULAIRE CONFIG BOX

/* --- PRIMARY --- */

function hiddenAll() {
    document.getElementById("config-box-details-billes")
        .style.setProperty('display', 'none');
    document.getElementById("config-box-details-gaz")
        .style.setProperty('display', 'none');
    document.getElementById("config-box-details-co2")
        .style.setProperty('display', 'none');
}

function displayBilles() {
    /* Hidden all */
    hiddenAll();

    /* Show */
    var contentStyle = document.getElementById("config-box-details-billes");
    contentStyle.setAttribute('id', "config-box-details-billes-active");
    contentStyle.style.setProperty("display", "inherit");

    /*var elemStyle = document.getElementsByClassName("config-box-details-billes-elem");
    for(var elem in elemStyle){
        elemStyle.style.setProperty('animation', 'flipInX');
        elemStyle.style.setProperty('animation-delay', '1s');
        elemStyle.style.setProperty('animation-duration', '2s');
    }*/
}

function displayGas() {
    /* Hidden all */
    hiddenAll();

    /* Show */
    document.getElementById("config-box-details-gaz")
        .style.setProperty('display', 'inherit');
}

function displayCo2() {
    /* Hidden all */
    hiddenAll();

    /* Show */
    document.getElementById("config-box-details-co2")
        .style.setProperty('display', 'inherit');
}

/* --- SECONDARY --- */

function hiddenAllOptionnel() {

}

function displayBillesOptionnel() {

}

function displayGasOptionnel() {

}

function displayCo2Optionnel() {

}



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