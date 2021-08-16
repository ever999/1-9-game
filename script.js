let arr = [];
let arr2 = [];
let vin = []
let count = 0;

for(i=0;i<9;i++){ 
  let b = (i+1).toString();
  arr.push(b);
  arr2.push(i+1).toString();
}
arr.sort( () => 0.9 - Math.random() );

for(ii=0;ii<9;ii++){

  let a = document.querySelectorAll('.grid-elem')[ii];
  a.textContent = arr[ii]; 

  a.addEventListener('click', ()=>{
    vin.push(a.textContent);
    if(a.textContent == arr2[count]){
      a.style.backgroundColor = 'blue';
      if(vin.length == 9){
        alert('you won!!!')
        window.location.reload(false)
      }
    } else {
      a.style.backgroundColor = 'red';
      window.location.reload(false)
    }
    count++;
    console.log(vin)
  });
  
}
