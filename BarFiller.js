const bars = document.getElementsByClassName('Bar')
const caps = []
const filled = []
var i;
console.log("Please work");

for (i = 0; i <bars.length; i++){
    caps[i] = parseFloat(bars[i].getAttribute('data-cap'));
    filled[i] = false
}

    setInterval(() => {
        for (i = 0; i < bars.length; i++){
            if (!filled[i]){
                const computedStyle = getComputedStyle(bars[i])
                const width = parseFloat(computedStyle.getPropertyValue('--cur')) || 0
                if (width > caps[i]){
                    bars[i].style.setProperty('--cur', caps[i])
                    filled[i] = true
                }else{
                    bars[i].style.setProperty('--cur', width + .75)
                }


            }
        }
    },1)