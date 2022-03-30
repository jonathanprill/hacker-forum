async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);


/////IDLE LOGOUT///////
//SOURCE https://stackoverflow.com/questions/572938/force-logout-users-if-users-are-inactive-for-a-certain-period-of-time


// idleTime = 0;
// $(document).ready(function () {

//     var idleInterval = setInterval("timerIncrement()", 10000); 
//     $(this).mousemove(function (e) {
//         idleTime = 0;
//     });
//     $(this).keypress(function (e) {
//         idleTime = 0;
//     });

// });

// function timerIncrement() {

//     idleTime = idleTime + 1;

//     if (idleTime >= 5) {
//         logout();
//     }
// }
