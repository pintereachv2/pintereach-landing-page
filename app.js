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
//scale the selfie
//opacity to the remaining selfies
//fade in a bio for that member

console.log();





const members = document.querySelectorAll('.member');

members.forEach( member => {
    member.addEventListener('click', () => {
        let clicked = member;
        let bioID = member.dataset.bio;
        console.log(bioID);
        
//        let bioArticle = document.querySelector(`article[data-bio='${bioID}]'`);
        
        let bioArticle = document.querySelector(`article[data-bio='${bioID}']`);
        
//        console.log(bioArticle);
        
        bioArticle.style.display = 'inline-block';
//        
//        let animation = new TimelineLite();
//     
//        animation .to(member, 1, {scale: 1.3})
//            .from(bio, 1, {opacity: 0});
        
            TweenMax.to(member, 1, {scale: 1.3});
            TweenMax.from(bioArticle, 1, {opacity: 0, delay:1});
        
        members.forEach( member => {
            if (member !== clicked) {
                TweenMax.to(member, 1, {opacity: .2, scale: .5});
                member.classList.remove('clicked');
            } else {
                TweenMax.to(member, 1, {opacity: 1});
                member.classList.add('clicked');
            }
        });
    });
});


//click on a selfie
//fade in the article box

                            
//                            
//    let clicked = member;
//    
//    members.forEach( member => {
//        if (member !== clicked) {
//            TweenMax.to(member, 1, {opacity: .2});
//        }
//    }));




//
//members.forEach(member => TweenMax.to('.member', 3, {opacity : '.2', x:-300, rotation: 180, scaleY: 1}));

//
//members.forEach( member => 
//TweenMax.to(member, 2, {width:'500px'}));





                         
                        




