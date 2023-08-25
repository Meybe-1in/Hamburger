const d = document,
w= window;

export default function responsiveMedia(id,mq,mobileContent,destopContent){

    let breakpoint = w.matchMedia(mq);
    //objeto mathMedia tiene un event listener normal, revisa la media query y cuando no lo cumple cambia el contenido
    breakpoint.addEventListener("change", responsive) 
}

