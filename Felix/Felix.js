var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#000000', '#666666', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    afterLoad: function(origin, destination, direction){
        //section 2
        if(destination.index == 1){
            document.querySelector('#section2').querySelector('img').style.right = 0 + 'px';
            document.querySelector('#section2').querySelector('p').style.opacity = 1;
        }

        //back to original state
        else if(origin && origin.index == 1){
            document.querySelector('#section2').querySelector('img').style.right = 130 + '%';
            document.querySelector('#section2').querySelector('p').style.opacity = 0;
        }

        // section 3 is using the state classes to fire the animation
        // see the CSS code above!
       
        if(destination.index == 3){
            document.querySelector('#section4').querySelector('img').style.right = 0 + 'px';
            document.querySelector('#section4').querySelector('p').style.opacity = 1;
        }

        //back to original state
        else if(origin && origin.index == 3){
            document.querySelector('#section4').querySelector('img').style.right = 130 + '%';
            document.querySelector('#section4').querySelector('p').style.opacity = 0;
        }
        

    }
});