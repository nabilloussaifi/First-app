// FRONT END FILE TO INTERACT WITH THE DOM

let submitBtn = document.querySelector(".createComp")



const sendCompName = (name) => {
    fetch('api/sendname', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}




submitBtn.addEventListener('click', (e) => {
    let compName = document.querySelector('.compName').value
    console.log(compName)
    sendCompName({ input: compName })
    alert("Good luck and have fun !")

})













