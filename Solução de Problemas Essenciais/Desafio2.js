var stopped = 0;

while (stopped !== 1 ) {
  
    var cases = gets(); //Recebe quantidade de casos
    
    if (cases === "") {
        stopped = 1;
      } else {
    
            var arr = gets().split(' ');
          
        		for(var i=0; i<arr.length;i++) arr[i] = +arr[i]; //O + faz o papel de parseInt
         		var turtleWin = Math.max(...arr);
            
            if (turtleWin < 10) console.log(1);
            if (turtleWin >= 10 && turtleWin < 20) console.log(2);
            if (turtleWin >= 20) console.log(3);
            
      }
   
}