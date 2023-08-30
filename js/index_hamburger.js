import hamburgerMenu from "./menu/menu_hamburger.js";
import {alarm, digitalClock} from "./reloj/reloj.js";
import { moveBall, shortCuts } from "./teclado/teclado.js";
import countdown from "./cuenta regresiva/countdown.js";
import scrollTopBtn from "./menu/btnScroll.js";
import darkTheme from "./DarkLight/themeDL.js";
import responsiveMedia from "./Responsive/responsive.js";
import responsiveTester from "./Responsive/tester-responsive.js";

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

    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc" target="_blank"
        rel="noopener"> Ver video </a>`,
        `<iframe 
        width="560" height="315" 
        src="https://www.youtube.com/embed/6IwUl-4pAzc?si=DDdlRaTF_DmgdzWF" 
        title="YouTube video player" 
        frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>`
        );
        
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/BeXehhGExVypcron6" target="_blank"
        rel="noopener"> Ver Mapa </a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15505.305056993278!2d-89.19430729999998!3d13.698678950000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330ebffdbfb45%3A0x513c506801a25f0e!2sCentro%20Hist%C3%B3rico%20de%20SS%2C%20San%20Salvador!5e0!3m2!1ses-419!2ssv!4v1693195542591!5m2!1ses-419!2ssv" 
        width="600" height="450" style="border:0;" 
        allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>`
        );

    responsiveTester("responsive-tester");
});

// keydown evento cuando presiono una tecla
// keyup evento cuando suelto una tecla
// keypress evento mientra tenga presionada una tecla
d.addEventListener("keydown", (e) =>{
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");