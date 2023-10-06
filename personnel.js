const container = document.getElementById('container')

console.log(1)

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => {
    console.log(res)
    res.forEach(person => {
        const eleDiv = document.createElement('div')
        const eleP1 = document.createElement('p')
        const eleP2 = document.createElement('p')
        eleP1.innerText = person.name;
        eleP2.innerText = person.email;
        eleDiv.appendChild(eleP1);
        eleDiv.appendChild(eleP2);
        eleDiv.classList.add('line');
        container.appendChild(eleDiv);
    })
    })
    .catch(err => console.log(err)) // catch err msg, if failed
    .finally(window.alert('fello!')) //final settled

console.log(2)
