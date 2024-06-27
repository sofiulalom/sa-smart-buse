
const allbtn = document.getElementsByClassName('A');
let count = 0;
for (const btn of allbtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
      

        

        
        //  console.log(sitName)
        setInnerText('set-count', count)
        
        


    })
}


function setInnerText(Id, value) {
    document.getElementById(Id).innerText = value;
}