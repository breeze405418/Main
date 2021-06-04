var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#000000', '#192a56', '#192a56', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'lastPage'],
    menu: '#menu',
    afterLoad: function(origin, destination, direction){
        //section 2
        if(destination.index == 1){
            document.querySelector('#section2').querySelector('h3').style.left = 0 + 'px';
            document.querySelector('#section2').querySelector('.contentfakehr').style.left = 0 + 'px';
            document.querySelector('#section2').querySelector('.content').style.opacity = 1;
        
        }

        //back to original state
        else if(origin && origin.index == 1){
            document.querySelector('#section2').querySelector('h3').style.left = 130 + '%';
            document.querySelector('#section2').querySelector('.contentfakehr').style.left = 130 + '%';
            document.querySelector('#section2').querySelector('.content').style.opacity = 0;
        }
        //section 3
        if(destination.index == 2){
            document.querySelector('#section3').querySelector('h3').style.left = 0 + 'px';
            document.querySelector('#section3').querySelector('.contentfakehr').style.left = 0 + 'px';
            document.querySelector('#section3').querySelector('.content').style.opacity = 1;
        
        }

        //back to original state
        else if(origin && origin.index == 2){
            document.querySelector('#section3').querySelector('h3').style.left = 130 + '%';
            document.querySelector('#section3').querySelector('.contentfakehr').style.left = 130 + '%';
            document.querySelector('#section3').querySelector('.content').style.opacity = 0;
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