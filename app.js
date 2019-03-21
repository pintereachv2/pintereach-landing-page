const connect = document.querySelector('address');
const form = document.querySelector('form');
const buttons = document.getElementsByClassName('button');
const formBtn = buttons[3];



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


//click on a selfie.  
//expand the selfie
//opacity to the remaining selfies
//fade in a bio for that member

//click on the selfie again
//shrink it.
//remove opacity from the remaining elements

const members = document.querySelectorAll('.member');

members.forEach(member => TweenMax.to('.member', 5, {opacity : '.2'}));


//
//members.forEach( member => 
//TweenMax.to(member, 2, {width:'500px'}));





                         
                        




