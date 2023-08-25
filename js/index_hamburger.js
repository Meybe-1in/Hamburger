import hamburgerMenu from "./menu/menu_hamburger.js";
import {alarm, digitalClock} from "./reloj/reloj.js";
import { moveBall, shortCuts } from "./teclado/teclado.js";
import countdown from "./cuenta regresiva/countdown.js";
import scrollTopBtn from "./menu/btnScroll.js";
import darkTheme from "./DarkLight/themeDL.js";
import responsiveMedia from "./Responsive/responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown(
        "countdown",
        "August 16, 2023 22:53:29",
        "Hello, Have a good Day!");
    scrollTopBtn(".scroll-top-btn");

    // responsiveMedia(
    //     "youtube",
    //     "(min-width 1024px)",
    //     "Contenido Movil",
    //     "Contenido Escritorio"
    //     );
        
    //     responsiveMedia(
    //         "gmaps",
    //         "(min-width 1024px)",
    //         "Contenido Movil",
    //         "Contenido Escritorio"
    //         );
});

// keydown evento cuando presiono una tecla
// keyup evento cuando suelto una tecla
// keypress evento mientra tenga presionada una tecla
d.addEventListener("keydown", (e) =>{
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");