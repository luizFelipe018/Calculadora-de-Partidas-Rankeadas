function partidas(vitoria,derrota){
    let resultado = vitoria - derrota;
    return resultado;
}


function rank (){
    let resultadorank = partidas(110,0) 
    let nivel = "";


    if(resultadorank < 10){
        nivel = "Ferro";
    }else if(resultadorank >10 && resultadorank  <= 20){
        nivel = "Bronze";
    }else if(resultadorank >20 && resultadorank  <= 50){
        nivel = "Prata";
    }else if(resultadorank >50 && resultadorank  <= 80){
        nivel = "Ouro";
    }else if(resultadorank >80 && resultadorank  <= 90){
        nivel = "Diamante";
    }else if(resultadorank >90 && resultadorank  <= 100){
        nivel = "Lendário";
    }else{
        nivel = "Imortal";
    }
    console.log("O Herói tem de saldo de "+ resultadorank + " está no nível de " + nivel
    )
}


rank();