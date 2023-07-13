
      let running = true;
      let ms = 0;
      let seconds = 0;
      let minutes = 0;
      let hours = 0;
      let days = 0;
      document.querySelector('.time').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s : ${ms}`
      
      let msID;
      let secondsID;
      let minutesID;
      let hoursID;
      let daysID;


      function start() {
        if(running === true){
          clear();
          msID = setInterval( function() {
            if( ms === 99){
              ms = 0;
            } else {
              ms++;
            }
            document.querySelector('.time').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s : ${ms}`
          },10)
          secondsID = setInterval( function() {
            if(seconds === 59) {
              seconds = 0;
            } else {
              seconds++;
            }
            document.querySelector('.time').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s : ${ms}`
          }, 1000);

          minutesID = setInterval( function() {
            if( minutes === 59 ) {
              minutes = 0;
            } else {
              minutes++;
            }
            document.querySelector('.time').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s : ${ms}`
          }, 60000);

          hoursID = setInterval( function(){
            if(hours === 23){
              hours = 0;
            } else {
              hours++;
            };
            document.querySelector('.time').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s : ${ms}`
            }, 3600000);

          daysID = setInterval( function() {
            days++;
          }, 86400000);
          document.querySelector('.time').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s : ${ms}`;

        } else {
          clear();
          return null;
        }

      }


    function stop(){
        running = false;
        clear();
    }


    function restart() {
      
      running = true; 
      start();
    }

    function reset() {
      
      stop();
      ms = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;
      days = 0;

      document.querySelector('.time').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s : ${ms}`
      clear();
    }

    function clear() {
      clearInterval(msID);
      clearInterval(secondsID);
      clearInterval(minutesID);
      clearInterval(hoursID);
      clearInterval(daysID);
    }

    