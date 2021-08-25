let myfrm   = document.addfrm;
let input   = myfrm.add;
let ul      = document.querySelector('.todos');

function add(item)
{
    str=` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`

    ul.innerHTML+=str;
}
myfrm.addEventListener('submit',(e)=>{
    e.preventDefault();
    item=input.value;
    add(item);
    input.value='';
});

ul.addEventListener('click',(e)=>{
    if(e.target.nodeName=='I')
    {
        e.target.parentElement.remove();
    }
});

let form= document.querySelector('.search');
let searchInput=form.search;
let li=ul.children
searchInput.addEventListener('keyup',()=>{
   for (let x of li)
   {
       if(x.innerText.toLowerCase().includes(searchInput.value))
       {
            x.classList.remove('filtered');
       }
       else
       {
           x.classList.add('filtered')
       }
   }
});