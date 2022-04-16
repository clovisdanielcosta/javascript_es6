
function relogio(s){
    
    s = s.replace("AM", " AM").replace("PM", " PM");
    s = new Date("01/01/2019 " + s);
    s = s.toLocaleTimeString('pt-PT', {hour12: false});
    return(s);
}

console.log(relogio("07:05:45PM"));
