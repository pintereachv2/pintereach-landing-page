const connect = document.querySelector('address');
const form = document.querySelector('form');
const buttons = document.getElementsByClassName('button');
const formBtn = buttons[3];

console.log(formBtn);

connect.children[1].addEventListener('click', () => {
     connect.children[0].style.display = 'none';
     connect.children[1].style.display = 'none';
     form.style.display = 'block';
});

formBtn.addEventListener('click', () => {
    connect.children[0].style.display = 'block';
    connect.children[1].style.display = 'block';
    form.style.display = 'none';
})



                         
                        




