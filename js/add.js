
const allbtn = document.getElementsByClassName('A');
let count = 0;
for (const btn of allbtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        const seatName = e.target.childNodes[0].data;
        const seatPrice = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[3].childNodes[0].innerText;
        
        const seatContainer = document.getElementById('Seat-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = seatPrice;
        li.appendChild(p);
        li.appendChild(p2);
        seatContainer.appendChild(li);
       

        

        
        //  console.log(sitName)
        setInnerText('set-count', count)
        
        


    })
}


function setInnerText(Id, value) {
    document.getElementById(Id).innerText = value;
}