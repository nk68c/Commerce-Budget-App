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
    window.location.href = "Goals.aspx";
}

document.getElementById('wallet_m').onclick = function () {
    window.location.href = 'Wallet.aspx';
}

document.getElementById('profile_m').onclick = function () {
    window.location.href = 'Profile.aspx';
}

document.getElementById('help_m').onclick = function () {
    if (collapsed) {
        document.getElementById('content').setAttribute('style', 'display: block;');
        collapsed = false;
    } else {
        document.getElementById('content').setAttribute('style', 'display: none;');
        collapsed = true;
    }
}

//Expand Questions
var q1 = document.getElementById('searchTransactionsTopic');
var a1 = document.getElementById('searchTransactionSteps');
var q1expanded = false;
q1.onclick = function () {
    if (q1expanded) {
        a1.setAttribute('style', 'display: none;');
        q1expanded = false;
    } else {
        a1.setAttribute('style', 'display: block;');
        q1expanded = true;
    }
}

var q2 = document.getElementById('editTransactionTopic');
var a2 = document.getElementById('editTransactionSteps');
var q2expanded = false;
q2.onclick = function () {
    if (q2expanded) {
        a2.setAttribute('style', 'display: none;');
        q2expanded = false;
    } else {
        a2.setAttribute('style', 'display: block;');
        q2expanded = true;
    }
}

var q3 = document.getElementById('addBudgetTopic');
var a3 = document.getElementById('addBudgetSteps');
var q3expanded = false;
q3.onclick = function () {
    if (q3expanded) {
        a3.setAttribute('style', 'display: none;');
        q3expanded = false;
    } else {
        a3.setAttribute('style', 'display: block;');
        q3expanded = true;
    }
}

var q4 = document.getElementById('editBudgetTopic');
var a4 = document.getElementById('editBudgetSteps');
var q4expanded = false;
q4.onclick = function () {
    if (q4expanded) {
        a4.setAttribute('style', 'display: none;');
        q4expanded = false;
    } else {
        a4.setAttribute('style', 'display: block;');
        q4expanded = true;
    }
}

var q5 = document.getElementById('removeBudgetTopic');
var a5 = document.getElementById('removeBudgetSteps');
var q5expanded = false;
q5.onclick = function () {
    if (q5expanded) {
        a5.setAttribute('style', 'display: none;');
        q5expanded = false;
    } else {
        a5.setAttribute('style', 'display: block;');
        q5expanded = true;
    }
}

var q6 = document.getElementById('favoriteTopic');
var a6 = document.getElementById('favoriteSteps');
var q6expanded = false;
q6.onclick = function () {
    if (q6expanded) {
        a6.setAttribute('style', 'display: none;');
        q6expanded = false;
    } else {
        a6.setAttribute('style', 'display: block;');
        q6expanded = true;
    }
}

var q7 = document.getElementById('addGoalTopic');
var a7 = document.getElementById('addGoalSteps');
var q7expanded = false;
q7.onclick = function () {
    if (q7expanded) {
        a7.setAttribute('style', 'display: none;');
        q7expanded = false;
    } else {
        a7.setAttribute('style', 'display: block;');
        q7expanded = true;
    }
}

var q8 = document.getElementById('addGoalFundsTopic');
var a8 = document.getElementById('addGoalFundsSteps');
var q8expanded = false;
q8.onclick = function () {
    if (q8expanded) {
        a8.setAttribute('style', 'display: none;');
        q8expanded = false;
    } else {
        a8.setAttribute('style', 'display: block;');
        q8expanded = true;
    }
}

var q9 = document.getElementById('editGoalTopic');
var a9 = document.getElementById('editGoalSteps');
var q9expanded = false;
q9.onclick = function () {
    if (q9expanded) {
        a9.setAttribute('style', 'display: none;');
        q9expanded = false;
    } else {
        a9.setAttribute('style', 'display: block;');
        q9expanded = true;
    }
}

var q10 = document.getElementById('deleteGoalTopic');
var a10 = document.getElementById('deleteGoalSteps');
var q10expanded = false;
q10.onclick = function () {
    if (q10expanded) {
        a10.setAttribute('style', 'display: none;');
        q10expanded = false;
    } else {
        a10.setAttribute('style', 'display: block;');
        q10expanded = true;
    }
}

var q11 = document.getElementById('findActiveInactiveGoalTopic');
var a11 = document.getElementById('findActiveInactiveGoalSteps');
var q11expanded = false;
q11.onclick = function () {
    if (q11expanded) {
        a11.setAttribute('style', 'display: none;');
        q11expanded = false;
    } else {
        a11.setAttribute('style', 'display: block;');
        q11expanded = true;
    }
}

var q12 = document.getElementById('viewUserProfileTopic');
var a12 = document.getElementById('viewUserProfileSteps');
var q12expanded = false;
q12.onclick = function () {
    if (q12expanded) {
        a12.setAttribute('style', 'display: none;');
        q12expanded = false;
    } else {
        a12.setAttribute('style', 'display: block;');
        q12expanded = true;
    }
}

var q13 = document.getElementById('viewAchievementsTopic');
var a13 = document.getElementById('viewAchievementsSteps');
var q13expanded = false;
q13.onclick = function () {
    if (q13expanded) {
        a13.setAttribute('style', 'display: none;');
        q13expanded = false;
    } else {
        a13.setAttribute('style', 'display: block;');
        q13expanded = true;
    }
}

var q14 = document.getElementById('notificationsTopic');
var a14 = document.getElementById('notificationsSteps');
var q14expanded = false;
q14.onclick = function () {
    if (q14expanded) {
        a14.setAttribute('style', 'display: none;');
        q14expanded = false;
    } else {
        a14.setAttribute('style', 'display: block;');
        q14expanded = true;
    }
}