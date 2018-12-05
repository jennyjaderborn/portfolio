let myText = "Jenny Jäderborn";
let myArray = myText.split('');
let timer; 

loopingText = () => {

    if(myArray.length > 0){
 
    document.getElementById('myName').innerHTML += myArray.shift();
    } else {
        clearTimeout(timer);
    }

    timer = setTimeout('loopingText()', 100);
}

loopingText();


const section = document.getElementById('section2');

const h1 = document.createElement('h1');
h1.innerText = 'Portfolio';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

let info;
fetch('./info.json')
.then(response => response.json())
.then(data => {
  info = data;
    createCards()
})
.catch(error => console.error(error)
)





createCards = () => {
for(let i = 0; i < info.length; i++){
    let card = document.createElement('div');
    card.className = `cardRow`;
    card.innerHTML = `
                    <div class="infoImage">
                    <img class='projectImg' src="${info[i].image}"/>
                    <a href=${info[i].link} target="_blank"><button class="imgBtn">${info[i].buttonText}</button></a>
                    </div>
                    <div class="infoBox">
                     <h4>${info[i].name}</h4>
                     <p>${info[i].text}</p>
                     </div>
                        
                    `;
    wrapper.appendChild(card)
    }
}


section.appendChild(h1);
section.appendChild(wrapper);





//tanke - kanske ska alla apenchild osv komma längst ner i filen.

