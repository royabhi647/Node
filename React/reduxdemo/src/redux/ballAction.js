export const buyBall = (qty) =>{
    console.log("buy balls");
    return{
        type: "BUY_BALL",
        payload:qty
    }
}