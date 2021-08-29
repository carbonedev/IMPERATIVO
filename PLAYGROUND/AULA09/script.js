var produto = prompt('Digite o produto desejado');
var tempo = "x";



switch(produto) {
    case "Pipoca":
        var tempo = prompt('O tempo padrão para o preparo de Pipoca é 10 segundos. Digite o tempo de preparo:');
           
        if (tempo > 30 ){
                alert('kabumm');
        }
        else if(tempo > 20){
                alert('comida queimou');
        }
        else if(tempo < 10){
                alert('tempo insuficiente');
        }
        else{
                alert('prato pronto, bom apetite');
        }    
    break;
    case 'Macarrão':
        var tempo = prompt('O tempo padrão para o preparo de Macarrão é 8 segundos. Digite o tempo de preparo:');

        if (tempo > 24 ){
            alert('kabumm');
        }
        else if(tempo > 16){
            alert('comida queimou');
        }
        else if(tempo < 8){
            alert('tempo insuficiente');
        }
        else{
            alert('prato pronto, bom apetite');
        }   
    break;
    case 'Carne':
        var tempo = prompt('O tempo padrão para o preparo de Carne é 15 segundos. Digite o tempo de preparo:');

        if (tempo > 45 ){
            alert('kabumm');
        }
        else if(tempo > 30){
            alert('comida queimou');
        }
        else if(tempo < 15){
            alert('tempo insuficiente');
        }
        else{
            alert('prato pronto, bom apetite');
        }   
    break;
    case 'Feijão':
        var tempo = prompt('O tempo padrão para o preparo de Feijão é 12 segundos. Digite o tempo de preparo:');

        if (tempo > 36 ){
            alert('kabumm');
        }
        else if(tempo > 24){
            alert('comida queimou');
        }
        else if(tempo < 12){
            alert('tempo insuficiente');
        }
        else{
            alert('prato pronto, bom apetite');
        }   
    break;
    case 'Brigadeiro':
        var tempo = prompt('O tempo padrão para o preparo de Brigadeiro é 8 segundos. Digite o tempo de preparo:');
    
        if (tempo > 24 ){
        alert('kabumm');
        }
        else if(tempo > 16){
        alert('comida queimou');
        }
        else if(tempo < 8){
        alert('tempo insuficiente');
        }
        else{
        alert('prato pronto, bom apetite');
        }   
        break;
    default:
        alert('prato inexistente');
  
}

    