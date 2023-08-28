const d = document;
let x = 0, y = 0;
// 40 ⬇️
// 38 ⬆️
// 37 ⬅️
// 39 ➡️

export function moveBall (e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage =d.querySelector(stage),
    // es u metodo que nos da un objeto con la anchura altura la posicion en x y
    // y que tan alejado esta de los margenes top botton left right
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
    // console.log(limitBall, limitStage)
        
    
    switch (e.keyCode) {
        case 37:
            // el stage es igual a 32 en left 
            if (limitBall.left > limitStage.left) {
            e.preventDefault();
            x--;}
            break;
        case 38:
            if (limitBall.top > limitStage.top) {
                e.preventDefault();
                y--;}
            break;
        case 39:
            // se invierte a menos que por que estamos del otro lado del stage
            if (limitBall.right < limitStage.right) {
                e.preventDefault();
                x++;}
            break;
        case 40:
            if (limitBall.bottom < limitStage.bottom) {
                e.preventDefault();
                y++;}
            break;
    
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}


export function shortCuts(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.keyCode);
    // console.log(`ctrl:${e.ctrlKey}`);
    // console.log(`Alt:${e.altKey}`);
    // console.log(`Shift:${e.shiftKey}`);


    if (e.key === "l" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    }
    
    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confimacion con el teclado");
    }
    
    if (e.key === "a" && e.altKey) {
        prompt("Haz lanzado un aviso con el teclado");
    }
    
}