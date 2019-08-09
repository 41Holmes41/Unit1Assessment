let add = document.querySelector('.add');
let minus = document.querySelector('.minus');
let input = document.querySelector('input');
let counter = document.querySelector('.counter');
let total = 0;

add.addEventListener('click', function(){
    total += parseInt(input.value);
    render();
})

minus.addEventListener('click', function(){
    total-=parseInt(input.value);
    render();
})

function render() {

    counter.innerHTML=total;

    if (total<0){
        counter.style.color = "red";
    }

}