
/* Galería interactiva - Arte en el Cerro */

(() => {
    const paneles = document.querySelectorAll(
        "#galeria .galeria-panel"
    );

    if (!paneles.length) return;

    function activarPanel(panelSeleccionado) {
        paneles.forEach((panel) => {
            const activo = panel === panelSeleccionado;

            panel.classList.toggle("is-active", activo);
            panel.setAttribute(
                "aria-pressed",
                String(activo)
            );
        });
    }

    paneles.forEach((panel) => {

        // Interacción con mouse
        panel.addEventListener("pointerenter", (evento) => {
            if (evento.pointerType === "mouse") {
                activarPanel(panel);
            }
        });

        // Interacción táctil y clic
        panel.addEventListener("click", () => {
            activarPanel(panel);
        });

        // Navegación mediante teclado
        panel.addEventListener("focus", () => {
            activarPanel(panel);
        });

    });
})();
