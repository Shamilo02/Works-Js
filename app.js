const input = document.querySelector('input');
const btn  = document.querySelector('button');
const sagakec = document.querySelector('.sagakec');
const listclass = document.getElementsByClassName('y')
const solakec = document.querySelector('.solakec');
const gorbit = document.querySelector('.gorbit');
const bitgor = document.querySelector('.bitgor');


btn.addEventListener('click', function () {
   document.querySelector(".gorulecek").innerHTML+= `
    <li class="y" onclick="deyis(this)"> ${input.value} <i class="fas fa-times" onclick="sil()"></i> </li>
    `
    input.value="";
})

function deyis(x) {
    for (let i = 0; i < listclass.length; i++) {
        listclass[i].style.backgroundColor ="white"   
    }
    x.style.backgroundColor="green";
  sagakec.addEventListener('click', function () {  
            document.querySelector('.gorulen').appendChild(x);
            for (let i = 0; i < listclass.length; i++) {
                listclass[i].style.backgroundColor ="white"   
            }
            x.style.backgroundColor="green";       
  })
  solakec.addEventListener('click', function () {  
            const gorulecekLi=document.querySelector('.gorulen li');
            document.querySelector('.gorulecek').appendChild(gorulecekLi)
            
            for (let i = 0; i < listclass.length; i++) {
                listclass[i].style.backgroundColor ="white"   
            }
            x.style.backgroundColor="green";
           
  })
  gorbit.addEventListener('click', function () {  
            const gorulecekLi=document.querySelector('.gorulen li');
            document.querySelector('.biten').appendChild(gorulecekLi)
            
            for (let i = 0; i < listclass.length; i++) {
                listclass[i].style.backgroundColor ="white"   
            }
            x.style.backgroundColor="green";
           
  })
  bitgor.addEventListener('click', function () {  
            const bitenli=document.querySelector('.biten li');
            document.querySelector('.gorulen').appendChild(bitenli)
            
            for (let i = 0; i < listclass.length; i++) {
                listclass[i].style.backgroundColor ="white"   
            }
            x.style.backgroundColor="green";
           
  })
  
  
 

  


}
function sil() {
    document.querySelector("ul").lastElementChild.remove();
}