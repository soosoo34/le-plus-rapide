/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


 const N = parseInt(readline());
 let bestTime = '';
 let bestTimeInsecondes = 0;
 let splitedTime = [];
 
 
 
 for (let i = 0; i < N; i++) {
     const t = readline();
 
     
     splitedTime = t.split(':')
     splitedTime[0] = splitedTime[0] * 3600;
     splitedTime[1] = splitedTime[1] * 60
 
     let splitedInSeconds = splitedTime[0] + splitedTime[1] + splitedTime[2];
 
     console.error(' temps des courreurs : ' + t + ' Temps en secondes ' + splitedInSeconds)
     if  ( i === 0 || BigInt(splitedInSeconds) < BigInt(bestTimeInsecondes) ) {
         bestTimeInsecondes = splitedInSeconds;
         bestTime = t
         console.error(' temps des courreurs : ' + t + ' Temps en secondes ' + splitedInSeconds + " best time is : " + bestTime + ' variable i ' + i)
         
     }
 
     
 }
 
 console.error(bestTime)
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(bestTime);
 