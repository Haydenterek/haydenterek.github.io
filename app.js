/*
window.onload = function(event) {
    fetch('https://api.nhle.com/stats/rest/en/team', {
        mode: 'no-cors'
    })
        .then(response => {
            if(!response.ok) {
                throw new Error('Could not connect to API');
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

function dropdownFunction() {
    document.getElementById("teamDropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.dropdownBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for(var i = 0; i < dropdowns.length; i++) {
            if(dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}
*/

const url = 'https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))