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

var profileTab = document.getElementById('profileTab');
var acheivementsTab = document.getElementById('achievementsTab');
var settingsTab = document.getElementById('settingsTab');
var profileContent = document.getElementById('profileContent');
var acheivementsContent = document.getElementById('achievementsContent');
var settingsContent = document.getElementById('settingsContent');


profileTab.setAttribute('style', 'background-color: #00ab75;');


profileTab.onclick = function () {
    profileTab.setAttribute('style', 'background-color: #00ab75;');
    acheivementsTab.setAttribute('style', 'background-color: #006847;');
    settingsTab.setAttribute('style', 'background-color: #006847;');

    profileContent.setAttribute('style', 'display: block;');
    acheivementsContent.setAttribute('style', 'display: none;');
    settingsContent.setAttribute('style', 'display: none;');
}

acheivementsTab.onclick = function () {
    acheivementsTab.setAttribute('style', 'background-color: #00ab75;');
    profileTab.setAttribute('style', 'background-color: #006847;');
    settingsTab.setAttribute('style', 'background-color: #006847;');

    acheivementsContent.setAttribute('style', 'display: block;');
    profileContent.setAttribute('style', 'display: none;');
    settingsContent.setAttribute('style', 'display: none;');
}

settingsTab.onclick = function () {
    settingsTab.setAttribute('style', 'background-color: #00ab75;');
    acheivementsTab.setAttribute('style', 'background-color: #006847;');
    profileTab.setAttribute('style', 'background-color: #006847;');

    settingsContent.setAttribute('style', 'display: block;');
    acheivementsContent.setAttribute('style', 'display: none;');
    profileContent.setAttribute('style', 'display: none;');
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
    window.location.href = "Goals.aspx";
}

document.getElementById('wallet_m').onclick = function () {
    window.location.href = 'Wallet.aspx';
}

document.getElementById('profile_m').onclick = function () {
    if (collapsed) {
        document.getElementById('content').setAttribute('style', 'display: block;');
        collapsed = false;
    } else {
        document.getElementById('content').setAttribute('style', 'display: none;');
        collapsed = true;
    }
}

document.getElementById('help_m').onclick = function () {
    window.location.href = 'Help.aspx';
}