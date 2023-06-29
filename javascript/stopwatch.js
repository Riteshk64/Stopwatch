document.querySelector('.js-start-button').addEventListener('click',() => stopWatch());

        let i = 1,j = 0,k = 0;

        function stopWatch(){
            if(document.querySelector('.js-start-button').innerHTML === 'Start'){
                document.querySelector('.js-start-button').innerHTML = 'Stop';
                startCount();
                clearInterval(blinkId);
                document.querySelector('.js-time').classList.remove('blink');
            }else{
                document.querySelector('.js-start-button').innerHTML = 'Start';
                clearInterval(timeId);
                blink();
            }
        }

        let blinkId;

        function blink(){
            blinkId = setInterval(() =>{
                if(!document.querySelector('.js-time').classList.contains('blink')){
                    document.querySelector('.js-time').classList.add('blink');
                }else{
                    document.querySelector('.js-time').classList.remove('blink');
                }
            },800)
        }

        let timeId;

        function startCount(){
            timeId = setInterval(() => {
                if(i === 60){
                    j++;
                    i = 0;
                }
                if(j === 60){
                   k++;
                   j = 0;
                   i = 0; 
                }

                if(k === 24){
                    k = 0;
                    j = 0;
                    i = 0;
                }
                displaySec(i);
                displayMin(j);
                displayHr(k);
                i++;
            },1000)
        }

        document.querySelector('.js-reset-button').addEventListener('click',() => {
            clearInterval(timeId);
            displaySec(0);
            displayMin(0);
            displayHr(0);
            i = 1;
            j = 0;
            k = 0;
            document.querySelector('.js-start-button').innerHTML = 'Start';
            clearInterval(blinkId);
            document.querySelector('.js-time').classList.remove('blink');
        });

        function displaySec(i){
            if(i < 10){
                document.querySelector('.js-sec').innerHTML = `0${i}`;
            }else{
                document.querySelector('.js-sec').innerHTML = `${i}`;
            }
        }

        function displayMin(j){
            if(j < 10){
                document.querySelector('.js-min').innerHTML = `0${j}`;
            }else{
                document.querySelector('.js-min').innerHTML = `${j}`;
            }
        }

        function displayHr(k){
            if(k < 10){
                document.querySelector('.js-hr').innerHTML = `0${k}`;
            }else{
                document.querySelector('.js-hr').innerHTML = `${k}`;
            }
        }