let a=document.getElementsByClassName('g1');
let b=document.getElementById('rst');

let b1=document.getElementById('rst1');
let c1=document.getElementById('res');
console.log(a.length);
let c=0,d;

b.addEventListener('click',()=>{
   d=1;
    console.log(d);
    setTimeout(()=>{  for(let i=0;i<9;i++){
        a[i].innerHTML='';
    }c=0;i=0;  
    c1.innerHTML='';
    
},250);
});
b1.addEventListener('click',()=>{
for(let i=0;i<9;i++){
a[i].addEventListener('click',()=>{
    if(a[i].innerHTML!='X'&&a[i].innerHTML!='O'){
    if(c%2==0){
    console.log('X');
    a[i].innerHTML='X';
    }
else{
console.log('O');
a[i].innerHTML='O';
}c++;
    
    console.log(a[i].innerHTML);
}

if(c>=5){
    if(a[0].innerHTML==a[1].innerHTML&&a[1].innerHTML==a[2].innerHTML){
    if(a[0].innerHTML=='X')
      c1.innerHTML='User 1 Wins';
    if(a[0].innerHTML=='O')c1.innerHTML='User 2 Wins';
    rs();
    }
   else if(a[3].innerHTML==a[4].innerHTML&&a[4].innerHTML==a[5].innerHTML){
        if(a[3].innerHTML=='X')c1.innerHTML='User 1 Wins';
      
    if(a[3].innerHTML=='O')c1.innerHTML='User 2 Wins';
    rs();
    }
    else if(a[6].innerHTML==a[7].innerHTML&&a[7].innerHTML==a[8].innerHTML){
        if(a[6].innerHTML=='X')c1.innerHTML='User 1 Wins';
      
    if(a[6].innerHTML=='O')c1.innerHTML='User 2 Wins';
    rs();
    }
    else if(a[0].innerHTML==a[3].innerHTML&&a[3].innerHTML==a[6].innerHTML){
        if(a[0].innerHTML=='X')c1.innerHTML='User 1 Wins';
      
        if(a[0].innerHTML=='O')c1.innerHTML='User 2 Wins';
        rs();
    }
    
    else if(a[1].innerHTML==a[4].innerHTML&&a[4].innerHTML==a[7].innerHTML){
        if(a[1].innerHTML=='X')c1.innerHTML='User 1 Wins';
      
        if(a[1].innerHTML=='O')c1.innerHTML='User 2 Wins';
        rs();
    }
    else if(a[2].innerHTML==a[5].innerHTML&&a[5].innerHTML==a[8].innerHTML){
        if(a[2].innerHTML=='X')c1.innerHTML='User 1 Wins';
      
        if(a[2].innerHTML=='O')c1.innerHTML='User 2 Wins';
        rs();
    }
    else if(a[0].innerHTML==a[4].innerHTML&&a[4].innerHTML==a[8].innerHTML){
        if(a[0].innerHTML=='X')c1.innerHTML='User 1 Wins';
      
        if(a[0].innerHTML=='O')c1.innerHTML='User 2 Wins';
rs();
      
    }
    else if(a[2].innerHTML==a[4].innerHTML&&a[4].innerHTML==a[6].innerHTML){
        if(a[2].innerHTML=='X')c1.innerHTML='User 1 Wins';
      
        if(a[2].innerHTML=='O')c1.innerHTML='User 2 Wins';
        rs();
    }
    }
});
}
});

function rs(){
    b1=document.getElementById('rst1');
  setTimeout(()=>{  for(let i=0;i<9;i++){
        a[i].innerHTML='';

    }c=0;i=0;
    c1.innerHTML='';
},3000);
}