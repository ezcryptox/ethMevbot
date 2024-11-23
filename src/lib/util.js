export const handleUSDtoFIXED = ((num)=>{
    if(!Number(num)){
        return 0
    }
    else if(!num){
        return 0
    }else{
        return num.toFixed(2)
    }
})
export const handleETHtoFIXED = ((num)=>{
    if(!Number(num)){
        return 0
    }else if(!num){
        return 0
    }
    else{
        return num.toFixed(5)
    }
})