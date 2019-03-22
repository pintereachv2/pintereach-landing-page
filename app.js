/*click Lets Talk Button - CHECK
-animate the fade-in of the form
-fade out the Let's Talk Button
*/

const talkBtn = document.querySelector('address button');
const form = document.querySelector('form');

talkBtn.addEventListener('click', () => {
    form.style.display = 'inline-block';
    TweenMax.from(form, 3, { opacity: 0 });
    talkBtn.style.display = 'none';
});


//const connect = document.querySelector('address');
//const form = document.querySelector('form');
//const buttons = document.getElementsByClassName('button');
//const formBtn = buttons[3];
//console.log(connect);
//console.log(form);
//console.log(buttons);
//console.log(formBtn);
//
//connect.children[1].addEventListener('click', () => {
//     connect.children[0].style.display = 'none';
//     connect.children[1].style.display = 'none';
//     form.style.display = 'block';
//});
//
//formBtn.addEventListener('click', () => {
//    connect.children[0].style.display = 'block';
//    connect.children[1].style.display = 'block';
//    form.style.display = 'none';
//})


//click on a selfie.  
//scale the selfie
//opacity to the remaining selfies
//fade in a bio for that member






const members = document.querySelectorAll('.member');
const articles = document.querySelectorAll('.bio');


members.forEach( member => {
    member.addEventListener('click', () => {
        let clicked = member;
        
        let bioID = member.dataset.bio;
        console.log(bioID);
        
        let bioArticle = document.querySelector(`article[data-bio='${bioID}']`);
        console.log(bioArticle);
        
        articles.forEach( article => {
            if (article === bioArticle) {
                article.classList.add('clicked');
            } else {
                article.classList.remove('clicked');
            }
        } );
//        
//        bioArticle.style.display = 'inline-block';
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
//             bioArticle.classList.remove('clicked');
                
            } else {
                TweenMax.to(member, 1, {opacity: 1});
                member.classList.add('clicked');
//                bioArticle.style.display = 'inline-block';
//                bioArticle.classList.add('clicked');
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





                         
                        




