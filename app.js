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

const members = document.querySelectorAll('.member');
const articles = document.querySelectorAll('.bio');


members.forEach( member => {
    member.addEventListener('click', event => {
        
        
//        event.stopPropagation(); //
        let clicked = event.currentTarget;
//      console.log(clicked === event.currentTarget); //true
        
        if (clicked.classList.contains('clicked')) {
            clickOff();
        }
        
        function clickOff () {
            console.log('clickOff is run');
           let clickedMembers = document.querySelectorAll('.member.clicked');
           console.log(clickedMembers);
           let clickedBios = document.querySelectorAll('.bio.clicked');
            console.log(clickedBios);
            
            clickedMembers.forEach( clickedMem => clickedMem.classList.remove('.clicked'));
            
            clickedBios.forEach( clickedBio.classList.remove('.clicked'));
            
//             document.querySelectorAll('.member').forEach(member => TweenMax.to(member, 1, {scale:1, opacity: 1}));
            
//             window.removeEventListener('click', clickOff);
        }
        
        
        
        
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
                
                if (window.innerWidth > 500) {
                    TweenMax.to(bioArticle, 1, {y: -400});
                } else {
                    TweenMax.to(bioArticle, 1, {y: -1050});
                }
            }
        
            if (bioID === 'cynthia') {
                if (window.innerWidth > 500) {
                TweenMax.to(bioArticle, 1, {y: -400});
                }
            }
        
            if (bioID === 'will') {
                if (window.innerWidth > 500) {
                TweenMax.to(bioArticle, 1, {y: -350, x: 300});
                } else {
                    TweenMax.to(bioArticle, 1, {y: -700, x: 0});
                }
            }
        
            if (bioID === 'hargo') {
                if (window.innerWidth > 500) {
                    TweenMax.to(bioArticle, 1, {y: -400, x: -300});
                } else {
                    TweenMax.to(bioArticle, 1, {y: -320});
                }
            }
        
//        window.addEventListener('click', clickOff);
        
        members.forEach( member => {
            if (member !== clicked) {
                TweenMax.to(member, 1, {opacity: .2, scale: .5});
                member.classList.remove('clicked');
                
            } else {
                TweenMax.to(member, 1, {opacity: 1});
                member.classList.add('clicked');
                member.addEventListener('click', cb);
            }
        });
        
        function cb(event) {
            member.classList.remove('clicked');
            bioArticle.classList.remove('clicked');
            TweenMax.to(clicked, 1, {scale:1});
            //remove event listener
            member.removeEventListener('click',cb);
        }
        
        console.log(clicked);
        
        
    });
});











