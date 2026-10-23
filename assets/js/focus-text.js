
/* Focus Text - Arte en el Cerro */

(() => {
    const titulo = document.querySelector(
        "#sobre-el-evento .focus-title"
    );

    if (!titulo) return;

    const palabras = Array.from(
        titulo.querySelectorAll(".focus-word")
    );

    if (!palabras.length) return;

    const reducirMovimiento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducirMovimiento) return;

    titulo.classList.add("focus-ready");

    let pendiente = false;

    function actualizar() {
        pendiente = false;

        const rect = titulo.getBoundingClientRect();
        const altoVentana = window.innerHeight;

        if (rect.bottom < 0 ||
            rect.top > altoVentana) {
            return;
        }

        const progreso = Math.max(
            0,
            Math.min(
                0.999,
                (altoVentana - rect.top) /
                (altoVentana + rect.height)
            )
        );

        const indice = Math.floor(
            progreso * palabras.length
        );

        palabras.forEach((palabra, i) => {
            palabra.classList.toggle(
                "is-focused",
                i === indice
            );
        });
    }

    function solicitarActualizacion() {
        if (pendiente) return;

        pendiente = true;
        requestAnimationFrame(actualizar);
    }

    window.addEventListener(
        "scroll",
        solicitarActualizacion,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        solicitarActualizacion
    );

    actualizar();
})();
