var desktopModeToggle = false;

window.onload = function () {
    var width = document.documentElement.clientWidth;
    respondToSize(width);
}

window.onresize = function () {
    if (desktopModeToggle) {
        var width = 1024;
        respondToSize(width);
    } else {
        var width = document.documentElement.clientWidth;
        respondToSize(width);
    }

}

var desktopMode = document.getElementById('desktopMode');

desktopMode.onclick = function () {
    if (desktopModeToggle) {
        var width = document.documentElement.clientWidth;
        respondToSize(width);
        desktopModeToggle = false;
        desktopMode.setAttribute('style', 'color: #006847;');
    } else {
        var width = 1024;
        respondToSize(width);
        desktopModeToggle = true;
        desktopMode.setAttribute('style', 'color: #00ab75;');
    }
}

function respondToSize(screenWidth) {
    
    if (screenWidth < 1024) {
        var navigation = document.getElementById('navigation');
        navigation.setAttribute('style', 'display: none;');

        var content = document.getElementById('content');
        content.className = 'col-xs-12';

        var mobileNavTop = document.getElementById('mobileNavTop');
        mobileNavTop.setAttribute('style', 'display: block;')
        var mobileNavBottom = document.getElementById('mobileNavBottom');
        mobileNavBottom.setAttribute('style', 'display: block;');

    } else {

        var mobileNavTop = document.getElementById('mobileNavTop');
        mobileNavTop.setAttribute('style', 'display: none;')

        var mobileNavBottom = document.getElementById('mobileNavBottom');
        mobileNavBottom.setAttribute('style', 'display: none;');

        var navigation = document.getElementById('navigation');
        navigation.setAttribute('style', 'display: block;');

        var content = document.getElementById('content');
        content.className = 'col-xs-10';
    }
}

//Navigation
var collapsed = false;

document.getElementById('summary').onclick = function () {
    window.location.href = 'Summary.aspx';
}

document.getElementById('budget').onclick = function () {
    window.location.href = 'Budget.aspx';
}

document.getElementById('goals').onclick = function () {
    window.location.href = 'Goals.aspx';
}

document.getElementById('wallet').onclick = function () {
    window.location.href = 'Wallet.aspx';
}

document.getElementById('profile').onclick = function () {
    window.location.href = 'Profile.aspx';
}

document.getElementById('help').onclick = function () {
    window.location.href = 'Help.aspx';
}

document.getElementById('summary_m').onclick = function () {
    window.location.href = 'Summary.aspx';
}

document.getElementById('budget_m').onclick = function () {
    window.location.href = 'Budget.aspx';
}

document.getElementById('goals_m').onclick = function () {
    if (collapsed) {
        document.getElementById('content').setAttribute('style', 'display: block;');
        collapsed = false;
    } else {
        document.getElementById('content').setAttribute('style', 'display: none;');
        collapsed = true;
    }
}

document.getElementById('wallet_m').onclick = function () {
    window.location.href = 'Wallet.aspx';
}

document.getElementById('profile_m').onclick = function () {
    window.location.href = 'Profile.aspx';
}

document.getElementById('help_m').onclick = function () {
    window.location.href = 'Help.aspx';
}

//Add Goal Modal

// Get the modal
var addGoalmodal = document.getElementById('addGoal');

// Get the button that opens the modal
var addGoalbtn = document.getElementById("addGoalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
addGoalbtn.onclick = function () {
    addGoalmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    addGoalmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == addGoalmodal) {
        addGoalmodal.style.display = "none";
    }
}

//Dynamic Radio List
var flatRateRadio = document.getElementById('FlatRate');
var percentRadio = document.getElementById('Percentage');
var freeDepRadio = document.getElementById('FreeDeposit');

var flatRateInput = document.getElementById('flatRateIn');
var percentInput = document.getElementById('percentIn');

flatRateInput.style.display = 'none';
percentInput.style.display = 'none';

flatRateRadio.onclick = function () {
    flatRateInput.style.display = 'block';
    percentInput.style.display = 'none';
}

percentRadio.onclick = function () {
    percentInput.style.display = 'block';
    flatRateInput.style.display = 'none';
}

freeDepRadio.onclick = function () {
    percentInput.style.display = 'none';
    flatRateInput.style.display = 'none';
}