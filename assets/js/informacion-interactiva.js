/* Efecto Depth Text - Información del evento */

(() => {
    const seccion = document.querySelector("#informacion");

    if (!seccion) return;

    const permiteMovimiento = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!permiteMovimiento || movimientoReducido) return;

    seccion.addEventListener("pointermove", (evento) => {
        const rect = seccion.getBoundingClientRect();

        const x = (evento.clientX - rect.left) / rect.width;
        const y = (evento.clientY - rect.top) / rect.height;

        // Movimiento máximo: 12 píxeles
        const dx = (x - 0.5) * 24;
        const dy = (y - 0.5) * 24;

        seccion.style.setProperty("--depth-x", `${dx}px`);
        seccion.style.setProperty("--depth-y", `${dy}px`);
    }, { passive: true} );

    seccion.addEventListener("pointerleave", () => {
        seccion.style.setProperty("--depth-x", "0px");
        seccion.style.setProperty("--depth-y", "0px");
    });
})();