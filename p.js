var MainTextCSS = document.querySelector('.MainTxt')

var initialOpacity = 0

var timeP = true
var ms = 1

button.addEventListener('click', function ManageOpacity() {
   
    if (!timeP) {
        console.log("returned");
        return;
    }

    timeP = false;

    function Generate() {
        
        setTimeout(() => {
     
            
          
            // if(ms === 2900){
            //     ms = 1
            // }
            ms = 1

            MainTextCSS.style.opacity = initialOpacity.toString();
            initialOpacity += 0.01;

            if (initialOpacity < 1) {
                Generate();
                
            } else {
                timeP = true;
            }
        }, ms);
    }

    Generate();
});