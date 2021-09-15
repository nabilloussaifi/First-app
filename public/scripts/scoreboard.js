// alert('hello hello')
// /v2/competitions/2018/matches/





let page2 = document.querySelector(".page2")
let results = document.querySelector(".results")
let apiKey = 'ea21939548df4a25870eeb893bb13dcd'



const receiveCompName = () => {

    fetch('/api/receivename', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            let a = data["names"]
            console.log(a)
            console.log(a[4].name)
            console.log(a.length - 1)
            let b = a[a.length - 1]
            console.log(b)
            let c = b.name
            console.log(c)

            page2.insertAdjacentHTML('beforeend', c)


        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

receiveCompName()
















const fetchMatch1 = () => {
    fetch(`https://api.football-data.org/v2/teams/765/matches/`, { headers: { 'X-Auth-Token': apiKey } })
        .then(response => response.json())
        .then((data) => {
            // console.log(data);
            let a = data.matches[1]
            // console.log(a)
            let b = a.homeTeam.name + " vs " + a.awayTeam.name
            console.log(b)
            let c = a.score.fullTime.homeTeam + " : " + a.score.fullTime.awayTeam
            console.log(c)

            let display = document.querySelector('.display ol');
            display.insertAdjacentHTML("beforeend", `<li>${b + " " + c}</li >`)

        });

}

const fetchMatch2 = () => {
    fetch(`https://api.football-data.org/v2/teams/805/matches/`, { headers: { 'X-Auth-Token': apiKey } })
        .then(response => response.json())
        .then((data) => {
            // console.log(data);
            let a = data.matches[2]
            // console.log(a)
            let b = a.homeTeam.name + " vs " + a.awayTeam.name
            console.log(b)
            let c = a.score.fullTime.homeTeam + " : " + a.score.fullTime.awayTeam
            console.log(c)

            let display = document.querySelector('.display ol');
            display.insertAdjacentHTML("beforeend", `<li>${b + " " + c}</li > `)

        });

}

const fetchMatch3 = () => {
    fetch(`https://api.football-data.org/v2/teams/770/matches/`, { headers: { 'X-Auth-Token': apiKey } })
        .then(response => response.json())
        .then((data) => {
            // console.log(data);
            let a = data.matches[2]
            // console.log(a)
            let b = a.homeTeam.name + " vs " + a.awayTeam.name
            console.log(b)
            let c = a.score.fullTime.homeTeam + " : " + a.score.fullTime.awayTeam
            console.log(c)

            let display = document.querySelector('.display ol');
            display.insertAdjacentHTML("beforeend", `<li>${b + " " + c}</li > `)

        });
}

const fetchMatch4 = () => {
    fetch(`https://api.football-data.org/v2/teams/773/matches/`, { headers: { 'X-Auth-Token': apiKey } })
        .then(response => response.json())
        .then((data) => {
            // console.log(data);
            let a = data.matches[2]
            // console.log(a)
            let b = a.homeTeam.name + " vs " + a.awayTeam.name
            console.log(b)
            let c = a.score.fullTime.homeTeam + " : " + a.score.fullTime.awayTeam
            console.log(c)

            let display = document.querySelector('.display ol');
            display.insertAdjacentHTML("beforeend", `<li>${b + " " + c}</li > `)

        });
}

const match5 = () => {
    let display = document.querySelector('.display ol');
    display.insertAdjacentHTML("beforeend", `<li>${"Brazil " + " vs " + "Colombia " + "2" + " : " + "1"}</li > `)
}






results.addEventListener('click', (e) => {
    fetchMatch1()
    setTimeout(fetchMatch2, 100)
    setTimeout(fetchMatch3, 200)
    setTimeout(fetchMatch4, 300)
    setTimeout(match5, 700)

})








