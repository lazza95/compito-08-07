let url = "./users.json";

let users = [];

let container = document.querySelector('.container');
console.log(container);



async function getCard(){

    await fetch(url).then(res=>res.json()).then((res)=>{
        users = res;
        console.log(users);
    }) 

        users.users.forEach((e)=>{

        let card = document.createElement('div');
        let userName = document.createElement('div');
        let email = document.createElement('div');

        console.log(e.name);
        userName = document.createTextNode(e.name);
        email = document.createTextNode(e.email);
        console.log(userName);
        container.appendChild(card);  
        card.appendChild(userName);
        card.appendChild(email);  
        card.classList.add('box');
    })

}

getCard();
