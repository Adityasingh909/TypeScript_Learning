function getChai(kind:string| number){
    if(typeof kind=='string'){
        return `making ${kind} chaii...`

    }
    return  `chai order.. ${kind}`
}


console.log( getChai('masala'));
console.log( getChai(23));


function serverchai(msg?:String){
    if(msg){
       return `serving ${msg}`
    }
    return `serving defult chaii ${msg}`
}

function orderChai(size:'small'| 'medium' | 'large' | number){
    if(size=='small'){
        return `small cutting chaii...`
    }
    if(size=='medium' || size =='large'){
        return `making extraaa cutting chaii...`
    }
    return `making ${size} chaii...`
}


class kulhadChai{
    serve(){
        return  `Serving kulhad chai`
    }
}
class cutingChai{
    serve(){
        return  `Serving cuting chai`
    }
}


function serve(chai:kulhadChai| cutingChai){
    if(chai instanceof kulhadChai){
        return chai.serve()
    }
}


//making your own types

type Chaiorder ={
    type :string
    sugar:number
}

function ischaiorder(obj:any):obj is Chaiorder{
    return(
        typeof obj =='object' &&
        obj != null &&
        typeof obj.type == 'string' &&
        typeof obj.sugar == 'number'
    )
}

