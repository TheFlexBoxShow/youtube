const display = document.getElementById('display');
let input = '0';
function update(){
  display.textContent = input;
}
document.querySelectorAll('.btn').forEach(btn => {
  btn.onclick = () =>{
    const num = btn.getAttribute('data-num');
    const op = btn.getAttribute('data-op');
    const id = btn.id;
    if(id === 'clear'){
      input = '0';
    }
    else if (id === 'backspace'){
      input = input.length > 1 ? input.slice(0, -1): '0';
    }
    else if(id === 'equals'){
      try{
        input = String(eval (input.replace(/÷/g, '/').replace(/×/g, '*')));
      }
      catch{
        input = 'Error';
      }
    }
    else if (num !== null){
      input = input === '0' ? num : input + num;
    }
    else if(op !== null){
      const last = input.slice(-1);
      if('+-*/'. includes(last)){
        input = input.slice(0, -1) + op;
      }
      else{
        input += op;
      }
    }
    update();
  };
});
update();