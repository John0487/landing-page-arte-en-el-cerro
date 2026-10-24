
/* Galería audiovisual - Arte en el Cerro */

(() => {
    const galeria = document.querySelector(
        "#galeria .galeria-video"
    );

    if (!galeria) return;

    const video = galeria.querySelector(
        "#reproductor-octubre"
    );

    const fuente = video?.querySelector("source");

    const titulo = galeria.querySelector(
        "#video-titulo"
    );

    const descripcion = galeria.querySelector(
        "#video-descripcion"
    );

    const opciones = [
        ...galeria.querySelectorAll(".video-opcion")
    ];

    if (!video || !fuente || !titulo ||
        !descripcion || !opciones.length) return;

    opciones.forEach((opcion) => {
        opcion.addEventListener("click", () => {

            const ruta = opcion.dataset.videoSrc;
            const nuevoTitulo = opcion.dataset.videoTitulo;
            const nuevaDescripcion =
                opcion.dataset.videoDescripcion;

            if (!ruta) return;

            // Evitar recargar el video ya seleccionado
            if (fuente.getAttribute("src") === ruta) {
                return;
            }

            // Detener la reproducción anterior
            video.pause();

            // Cambiar el archivo
            fuente.setAttribute("src", ruta);
            video.setAttribute(
                "aria-label",
                `Presentación de ${nuevoTitulo}`
            );

            // Recargar el reproductor
            video.load();

            // Actualizar los textos
            titulo.textContent = nuevoTitulo;
            descripcion.textContent = nuevaDescripcion;

            // Destacar la opción seleccionada
            opciones.forEach((boton) => {
                const activo = boton === opcion;

                boton.classList.toggle(
                    "is-active",
                    activo
                );

                boton.setAttribute(
                    "aria-pressed",
                    String(activo)
                );
            });

        });
    });
})();
