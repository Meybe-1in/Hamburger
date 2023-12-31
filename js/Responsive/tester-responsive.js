const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e) =>{
        if (e.target === $form) {
            // prevenir que se procese el formulario
            e.preventDefault();
            // alert("Formulario enviado");
            tester = window.open($form.direccion.value,"tester",
            `innerWidth=${$form.ancho.value},
            innerHeight=${$form.alto.value}`);
        }
    });

    d.addEventListener("click", e =>{
        if (e.target === $form.cerrar) tester.close();
    })
} 