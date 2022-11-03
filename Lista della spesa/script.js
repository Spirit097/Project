const text = document.querySelector('.text');
const add = document.querySelector('.submit');
const riga = document.querySelector('.riga');
const cancella = document.querySelector('.cancella');
const lista = document.querySelector('.lista');



add.addEventListener('click', function aggiungi () {
    const righe = Array.from(document.getElementsByClassName('inizio'));

    if( text.value.trim() !== ''){
      if(righe.length < 20){
     
      const testo = text.value.trim();
      text.value = '';
      var clone = riga.cloneNode(false);
      clone.classList.add("inizio");
      var p = document.createElement("p");
      lista.appendChild(clone);
      const newInp = document.createElement('div');
      clone.appendChild(newInp);
      newInp.classList.add('input');
      const over = document.createElement('button');
      over.classList.add('overline');
      newInp.appendChild(over);
      over.innerHTML= '&#9998;';
      const newButt = document.createElement('button');
      newInp.appendChild(newButt);
      newButt.classList.add('cino');
      newButt.innerText= 'X';
      p.classList.add('testo');
      clone.appendChild(p);
      p.innerHTML = testo;
      p.style.color = 'white'

     
      newButt.addEventListener('click', function() {
        const parent = newButt.parentElement;
        const parentss = parent.parentElement;
        const superparents = parentss.parentElement;

        superparents.removeChild(parentss)        
            });

      over.addEventListener('click', function() {
        const parent = over.parentElement;
        const parentss = parent.parentElement;
        
        if(parentss.style.background === ''){
          parentss.style.background = 'green';
          // p.style.color = 'white';
          parentss.style.textDecoration = 'line-through'
        }else if(parentss.style.background = 'green'){
          // p.removeAttribute('style');
          parentss.removeAttribute('style');
         }
       
      })
        
      
      } else {
        alert('Limite massimo elementi')
      }
    }else{
      alert('Compilare il campo')
    }
});
      

cancella.addEventListener('click', function vai () {
        var domanda = confirm("Sei sicuro di voler cancellare?");
        if (domanda === true) {
            const righe = Array.from(document.getElementsByClassName('inizio'));  
            righe.forEach(element => {
              element.remove()})
          }
        else {
            alert('Operazione annullata.')
        }
      }
    )

