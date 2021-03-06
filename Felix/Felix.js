var myFullpage = new fullpage('#fullpage', {

    sectionsColor: ['#333333', '#111111', '#000000', '#000000', '#000000'],
  
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'lastPage'],
  
    navigationTooltips: ['Cover', 'About', 'Skill', 'Contact'],
  
    navigation: true,
  
    slidesNavigation: true,
  
    menu: '#menu',
    afterLoad: function(origin, destination, direction){
        var section2 = document.querySelector('#section2')
        var section3 = document.querySelector('#section3')
        var section4 = document.querySelector('#section4')
        //section 2
        if(destination.index == 1){
            section2.querySelector('h3').style.left = 0 + 'px';
            section2.querySelector('.contentfakehr').style.left = 0 + 'px';
            section2.querySelector('.content').style.opacity = 1;
        
        }

        //back to original state
        else if(origin && origin.index == 1){
            section2.querySelector('h3').style.left = 130 + '%';
            section2.querySelector('.contentfakehr').style.left = 130 + '%';
            section2.querySelector('.content').style.opacity = 0;
        }
        //section 3
        if(destination.index == 2){
            section3.querySelector('h3').style.left = 0 + 'px';
            section3.querySelector('.s3hr').style.left = 0 + 'px';
            section3.querySelector('.skillbox').style.opacity = 1;
        
        }

        //back to original state
        else if(origin && origin.index == 2){
            section3.querySelector('h3').style.left = 130 + '%';
            section3.querySelector('.s3hr').style.left = 130 + '%';
            section3.querySelector('.skillbox').style.opacity = 0;
        }
        //section 4
        if(destination.index == 3){
            section4.querySelector('h3').style.left = 0 + 'px';
            section4.querySelector('.s3hr').style.left = 0 + 'px';
            section4.querySelector('.worksbox').style.opacity = 1;
        
        }

        //back to original state
        else if(origin && origin.index == 3){
            section4.querySelector('h3').style.left = 130 + '%';
            section4.querySelector('.s3hr').style.left = 130 + '%';
            section4.querySelector('.worksbox').style.opacity = 0;
        }
        

        // section 3 is using the state classes to fire the animation
        // see the CSS code above!
       
        // if(destination.index == 3){
        //     document.querySelector('#section4').querySelector('img').style.right = 0 + 'px';
        //     document.querySelector('#section4').querySelector('p').style.opacity = 1;
        // }

        // //back to original state
        // else if(origin && origin.index == 3){
        //     document.querySelector('#section4').querySelector('img').style.right = 130 + '%';
        //     document.querySelector('#section4').querySelector('p').style.opacity = 0;
        // }
        

    }
});