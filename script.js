let loader=document.querySelector('.loa');
let load1=document.querySelector('.loader');
function load() {
    setTimeout(() => {
        document.querySelector('body').removeChild(loader);

    }, 2000);

}
setTimeout(() => {
    load1.style.top='-100%';
}, 2800);

let btns=document.querySelectorAll('.btns');
let text=document.getElementById('text');
var current_value='X';
let container=document.querySelector('.container');
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',()=>{
        btns[i].innerHTML=current_value;
        btns[i].disabled=true;
        move();
       if (allselected()) {
        
            for(let i=0;i<btns.length;i++){
                btns[i].classList.add('animate');
            }
            setTimeout(() => {
                
                reset();
            }, 3000);
       }
    });
}

function check_for_win() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
    ];
    
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (btns[a].innerHTML !== '' && btns[a].innerHTML === btns[b].innerHTML && btns[a].innerHTML === btns[c].innerHTML) {
            container.style.left='-100%';
            document.getElementById('text').style.top='40%';
            document.getElementById('text').style.fontSize='45px';
            return true;
        }
    }
    return false;
}
function move(){
    if(check_for_win()){
        text.innerHTML="Player "+current_value+' win';
      current_value=current_value==='X' ? 'O ': 'X';

    }
    else{
      current_value=current_value==='X' ? 'O ': 'X';
    }
}
function reset(){
    for(let i=0;i<btns.length;i++){
        btns[i].innerHTML='';
        btns[i].disabled=false;
        btns[i].classList.remove('animate');
    }
    container.style.left='';
    document.getElementById('text').style.top='';
    document.getElementById('text').style.fontSize='';
    text.innerHTML='TIC TAC TOE'
}

let theme=document.querySelector('.btn-container');
theme.addEventListener('change',()=>{
    const body=document.querySelector('body');
   body.classList.toggle('theme-toggler');
});
function allselected() {
    let allSelected = true;
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].innerHTML === '') {
                allSelected = false;
                break;
            }
        }
        return allSelected;
}