const d = document,
w= window;

export default function responsiveMedia(id,mq,mobileContent,desktopContent){

    let breakpoint = w.matchMedia(mq);
   
    const responsive = (e) => {
     if (e.matches) {
        d.getElementById(id).innerHTML = desktopContent;
    } else {
        d.getElementById(id).innerHTML = mobileContent; 
    }
    // console.log(e.matches);
    };
   
   
   
   
    //objeto mathMedia tiene un event listener normal, revisa la media query y cuando no lo cumple cambia el contenido
    breakpoint.addEventListener("change", responsive) 
    responsive(breakpoint);
}

