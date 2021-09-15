let page2 = document.querySelector(".page2")
let buttons = document.querySelectorAll('.btnGame')
let valbtn = document.querySelector('.validation')


//RECEIVE NAME SEND BY THE FRONT FROM THE DB
const receiveCompName = () => {

    fetch('api/receivename', {
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
            console.log(b.name)
            let c = b.name
            console.log(c)

            page2.insertAdjacentHTML('beforeend', c)




        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

receiveCompName()




buttons.forEach((button) => {
    Array.from(button.children).forEach((item) => {
        item.addEventListener('click', (e) => {
            Array.from(button.children).forEach((x) => {
                x.classList.remove('selectedButton')
            })
            item.classList.add("selectedButton")
        })
    })

})


const sendSelection = (selected => {
    fetch('api/sendselection', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selected),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

})



let test = document.querySelector('.test')

test.addEventListener('click', (e) => {

    let selectWinner = document.querySelectorAll('.selectedButton')
    selectWinner.forEach((selection) => {
        console.log(selection.innerText)
        sendSelection({ input: selection.innerText })
    })
})











valbtn.addEventListener('click', (e) => {
    sendSelection()
})































button1.forEach((item) => {
    item.addEventListener('click', (e) => {
        item.classList.toggle("selectedButton")
    })
});




MYWAY

let button1 = document.querySelectorAll('.first')
let button2 = document.querySelector('.second')
let button3 = document.querySelector('.third')



button1.addEventListener('click', (e) => {
    if (button1.className === "first") {
        button1.className = "selectedButton first"
    }
    else if (button1.className === "selectedButton first") {
        button1.className = "first"
    }
})



button2.addEventListener('click', (e) => {
    if (button2.className === "second") {
        button2.className = "selectedButton second"
    }
    else if (button2.className === "selectedButton second") {
        button2.className = "second"
    }
})



button3.addEventListener('click', (e) => {
    if (button3.className === "third") {
        button3.className = "selectedButton third"
    }
    else if (button3.className === "selectedButton third") {
        button3.className = "third"
    }
})



if (item.className === "first") {
    item.className = "selectedButton first"
}
else if (item.className === "selectedButton first") {
    item.className = "first"
}