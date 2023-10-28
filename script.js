let a=document.getElementsByClassName('g1');
let b=document.getElementById('rst');
let b1=document.getElementById('rst1');
let c1=document.getElementById('res');
console.log(a.length);
let c=0,d,e=1;

b.addEventListener('click',()=>{
    d=1;
    console.log(d);
    setTimeout(()=>{  for(let i=0;i<9;i++){
        a[i].innerHTML='';
    }
    c=0; i=0; e=1;  
    c1.innerHTML='';
},250);
});

b1.addEventListener('click',()=>{

  for(let i=0;i<9&&e;i++){
  if(e==1){
  a[i].addEventListener('click',()=>{
    
    if(a[i].innerHTML==''){
    if(c%2==0&&e==1){
    console.log('X');
    a[i].innerHTML='X';
    }
    else if(e==1){
    console.log('O');
    a[i].innerHTML='O';
    }
    else{
    a[i].innerHTML='';
    }
    c++;
    }

if(c>=5){

    if(a[0].innerHTML==a[1].innerHTML&&a[1].innerHTML==a[2].innerHTML){
    if(a[0].innerHTML=='X') { c1.innerHTML='User 1 Wins'; e=0; }
    if(a[0].innerHTML=='O') { c1.innerHTML='User 2 Wins'; e=0; }
   
    }
   else if(a[3].innerHTML==a[4].innerHTML&&a[4].innerHTML==a[5].innerHTML){
        if(a[3].innerHTML=='X'){c1.innerHTML='User 1 Wins'; e=0;}
        if(a[3].innerHTML=='O'){c1.innerHTML='User 2 Wins'; e=0;}
    }
   else if(a[6].innerHTML==a[7].innerHTML&&a[7].innerHTML==a[8].innerHTML){
        if(a[6].innerHTML=='X'){c1.innerHTML='User 1 Wins'; e=0;}
        if(a[6].innerHTML=='O'){c1.innerHTML='User 2 Wins'; e=0;}
    }
    else if(a[0].innerHTML==a[3].innerHTML&&a[3].innerHTML==a[6].innerHTML){
        if(a[0].innerHTML=='X'){c1.innerHTML='User 1 Wins'; e=0;}
        if(a[0].innerHTML=='O'){c1.innerHTML='User 2 Wins'; e=0;}
    }
    else if(a[1].innerHTML==a[4].innerHTML&&a[4].innerHTML==a[7].innerHTML){
        if(a[1].innerHTML=='X'){c1.innerHTML='User 1 Wins';e=0;} 
        if(a[1].innerHTML=='O'){c1.innerHTML='User 2 Wins';e=0;}
    }
    else if(a[2].innerHTML==a[5].innerHTML&&a[5].innerHTML==a[8].innerHTML){
        if(a[2].innerHTML=='X') {c1.innerHTML='User 1 Wins'; e=0;}
        if(a[2].innerHTML=='O') {c1.innerHTML='User 2 Wins'; e=0;}
    }
    else if(a[0].innerHTML==a[4].innerHTML&&a[4].innerHTML==a[8].innerHTML){
        if(a[0].innerHTML=='X'){c1.innerHTML='User 1 Wins'; e=0;}
        if(a[0].innerHTML=='O'){c1.innerHTML='User 2 Wins'; e=0;}
    }
    else if(a[2].innerHTML==a[4].innerHTML&&a[4].innerHTML==a[6].innerHTML){
        if(a[2].innerHTML=='X'){c1.innerHTML='User 1 Wins'; e=0;}
        if(a[2].innerHTML=='O'){c1.innerHTML='User 2 Wins'; e=0;}
    }
    } });
}
}
  
});
