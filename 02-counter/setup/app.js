//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList;
        
        if (styles.contains('decrease')){
            count -= 1;
        } else if (styles.contains('increase')){
            count += 1;
        } else {
            count = 0;
        }

        if (count > 0){
            value.style.color = 'green'
        } else if (count < 0){
            value.style.color = 'red'
        } else if (count === 0){
            value.style.color = 'black'
        }

        value.textContent = count;
    });
});