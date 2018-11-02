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
    card.innerHTML = `
                     <div>
                     <h4>${info[i].name}</p>
                     <img src="${info[i].image}"/>
                     <p>${info[i].text}</p>
                     </div>
                        
                        
                    `;
    wrapper.appendChild(card)
}
}

section.appendChild(h1);
section.appendChild(wrapper);





//tanke - kanske ska alla apenchild osv komma längst ner i filen. 

