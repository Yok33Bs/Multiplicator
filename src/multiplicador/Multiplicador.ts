const multiplicador = (x:number , y:number):number =>{
    if(x == 0 || y == 0 ) return 0;

    let result :number = 0;  
    for(let i = 0;i < Math.abs(y);i++){
        result += Math.abs(x);
    };

    if(Math.sign(x) === Math.sign(y)){
        return result
    }  
    else{
        return -result
    }
};
console.log("result:::", multiplicador(3,0));


