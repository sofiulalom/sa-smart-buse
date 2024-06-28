
const allbtn = document.getElementsByClassName('A');
let countminas = 40;
let count = 0;

for (const btn of allbtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        countminas = countminas - 1;
      
        
        const seatName = e.target.childNodes[0].data;
        const seatPrice = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[3].childNodes[0].innerText;
        

        //  console.log(sitName)
        if (count <= 2) {

         const seatContainer = document.getElementById('Seat-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = seatPrice;
        li.appendChild(p);
        li.appendChild(p2);
        seatContainer.appendChild(li);
        const totalCost = document.getElementById('total-cost').innerText;
      
        const totalCostInt = parseInt(totalCost);
        const price = parseInt(seatPrice);
        const total = totalCostInt + price;
        setInnerText('total-cost', total)

        setInnerText('grend-total', total)
            
            setInnerText('seat-ablable', countminas)
            setInnerText('set-count', count)
            getBackgroundByAdd(e)
        }
        
      
    
        

    })
}

function getBackgroundByAdd(e) {
    e.target.style.backgroundColor = '#45CB43'
    e.target.style.color = 'white';
   
}

function setInnerText(Id, value) {
    document.getElementById(Id).innerText = value;
}

