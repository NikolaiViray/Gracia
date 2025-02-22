// !!! A friendly message to the people of github (or anyone in this household). !!!

//Yes, this is very messy.
//If you know bout tis, You shall not judge.
//muehehehehe    
    
    
    
    var button = document.querySelector('button');
    var LineLeft = document.querySelector('.Line');
    var LineRight = document.querySelector('.Line2');
    var Parent = document.querySelector('.LineParent')
    var initial = 180
    var wrap = document.querySelector('.wrap')

    var Count = 0
    var time = true


    
    let computedStyle = window.getComputedStyle(LineLeft);
    let height = computedStyle.height;  
    let HCount = parseInt(height, 10);
    
    let comstyle = window.getComputedStyle(LineRight);
    let het = comstyle.height;  

    let RCount = parseInt(het, 10)

button.addEventListener('click', function CreateCircle() {
    if (!time) {
        console.log("returned");
        return;
    }

    time = false;

    function Generate() {
        setTimeout(() => {
            button.style.opacity = 0
            var CloneLeft = LineLeft.cloneNode(true);
            CloneLeft.style.transform = 'rotate(' + initial + 'deg)';
            CloneLeft.style.height = HCount + 'vh';

            // if (initial < 70 && initial > 40) {
            //     HCount = HCount - 0.0005;
            //     console.log("first")
            // } else if (initial > 70) {
            //     HCount = HCount + 0.035;
            //     console.log("second")
            // } else {
            //     HCount = HCount + 0.03;
            //     console.log("third")
            // }

            HCount = HCount + 0.025;

            CloneLeft.style.width = LineLeft.style.width;
            CloneLeft.style.backgroundColor = LineLeft.style.backgroundColor;
            CloneLeft.style.transformOrigin = 'center top';
            CloneLeft.style.position = 'absolute';

            Parent.appendChild(CloneLeft);

            var CloneRight = LineRight.cloneNode(true);
            CloneRight.style.height = HCount + 'vh';
            CloneRight.style.width = LineRight.style.width;
            CloneRight.style.backgroundColor = LineRight.style.backgroundColor;
            CloneRight.style.transformOrigin = 'center top';
            CloneRight.style.transform = `rotate(${-initial}deg)`;
            CloneRight.style.position = 'absolute';

            Parent.appendChild(CloneRight);

            initial = initial - 0.1;
            Count = Count - 0.1;

            if (initial > 0) {
                Generate();
            } else {
                time = true;
            }
        }, 1);
    }

    Generate();
});

