y= document.getElementById("i1");
var result = false
function input(x){
    switch (x.value) {
        case "=":
            if(y.value){
                y.value = eval(y.value)
            }   
            else 
                y.value =0;
            result=true;
            break;
        case "AC":
            y.value = ""
            break;
        case "del":
            y.value = y.value.slice(0,-1)
            result = false
            break;
        default:{
            if ((result) && !(isNaN(x.value))){
                y.value = x.value;
                }
            else
                y.value += x.value;
            result = false
            }

    }  
}