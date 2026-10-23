
/* Resplandor interactivo del encabezado */

(() => {
    const header = document.querySelector("#header-wrapper");

    if (!header) return;

    const mouseDisponible = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!mouseDisponible || movimientoReducido) return;

    header.addEventListener("pointerenter", () => {
        header.classList.add("glow-active");
    });

    header.addEventListener("pointermove", (evento) => {
        const rect = header.getBoundingClientRect();

        const x = evento.clientX - rect.left;
        const y = evento.clientY - rect.top;

        header.style.setProperty("--cursor-x", `${x}px`);
        header.style.setProperty("--cursor-y", `${y}px`);
    }, { passive: true });

    header.addEventListener("pointerleave", () => {
        header.classList.remove("glow-active");
    });
})();
