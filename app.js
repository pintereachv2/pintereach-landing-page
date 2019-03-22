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
        let bioArticle = document.querySelector(`article[data-bio='${bioID}']`);
        
        articles.forEach( article => {
            if (article === bioArticle) {
                article.classList.add('clicked');
            } else {
                article.classList.remove('clicked');
            }
        } );
            
            TweenMax.to(member, 1, {scale: 1.3});
            TweenMax.from(bioArticle, 2, {opacity: 0, delay:1});
        
            if (bioID === 'amir')  {
                TweenMax.to(bioArticle, 1, {y: -400});
            }
        
            if (bioID === 'cynthia') {
                TweenMax.to(bioArticle, 1, {y: -400});
            }
        
            if (bioID === 'will') {
                TweenMax.to(bioArticle, 1, {y: -350, x: 300});
            }
        
            if (bioID === 'hargo') {
                TweenMax.to(bioArticle, 1, {y: -400, x: -300});
            }          
        
        members.forEach( member => {
            if (member !== clicked) {
                TweenMax.to(member, 1, {opacity: .2, scale: .5});
                member.classList.remove('clicked');
                
            } else {
                TweenMax.to(member, 1, {opacity: 1});
                member.classList.add('clicked');
            }
        });
        
        console.log(clicked);
        clicked.addEventListener('click',() => {
            clicked.classList.remove('clicked');
            bioArticle.classList.remove('clicked');
            TweenMax.to(clicked, 1, {scale:1});
        });
        
    });
});











