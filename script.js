
// Array de productos en formato JSON
const productos = [
    { id: 1, name: "Remera Crochet", precio: 5600, descripcion: "Una remera tejida a mano con estilo único." },
    { id: 2, name: "Top Elastico Soft", precio: 4000, descripcion: "Top cómodo y elástico ideal para días casuales." },
    { id: 3, name: "Remera Bambula", precio: 4400, descripcion: "Una remera suave y fresca para el verano." },
    { id: 4, name: "Remera Beso", precio: 5600, descripcion: "Camiseta con diseño romántico y moderno." },
    { id: 5, name: "Remera Rayas", precio: 6000, descripcion: "Prenda con estampado de rayas clásica." },
    { id: 6, name: "Top Forrado", precio: 6000, descripcion: "Top con forro interno para mayor comodidad." },
    { id: 7, name: "Musculosa Básica Soft", precio: 5000, descripcion: "Musculosa versátil y ligera." },
    { id: 8, name: "Top Morley", precio: 4500, descripcion: "Top ajustado con textura elegante." },
    { id: 9, name: "Remera Papaya", precio: 8000, descripcion: "Camiseta vibrante con color tropical." }
];

// Mostrar los productos en la consola
console.log("Productos disponibles:", productos);

document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".producto");

    // Mostrar descripción en las tarjetas
    tarjetas.forEach((tarjeta, index) => {
        const botonDescripcion = document.createElement("button");
        botonDescripcion.textContent = "Ver descripción";
        botonDescripcion.style.marginTop = "10px";
        botonDescripcion.addEventListener("click", () => {
            let parrafoDescripcion = tarjeta.querySelector(".descripcion");
            if (!parrafoDescripcion) {
                parrafoDescripcion = document.createElement("p");
                parrafoDescripcion.textContent = productos[index].descripcion;
                parrafoDescripcion.className = "descripcion";
                tarjeta.appendChild(parrafoDescripcion);
            }
        });
        tarjeta.appendChild(botonDescripcion);

        // Efecto de expansión en imágenes
        const imagen = tarjeta.querySelector("img");
        imagen.addEventListener("mouseover", () => {
            imagen.style.transform = "scale(1.1)";
            imagen.style.transition = "transform 0.3s ease";
        });
        imagen.addEventListener("mouseout", () => {
            imagen.style.transform = "scale(1)";
        });
    });

    // Lógica del carrito de compras
    const botonesMas = document.querySelectorAll(".cantidad button:nth-child(3)");
    const botonesMenos = document.querySelectorAll(".cantidad button:nth-child(1)");
    const totalElemento = document.getElementById("total");
    let total = 0;
    const cantidades = new Array(productos.length).fill(0);

    botonesMas.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            cantidades[index]++;
            total += productos[index].precio;
            totalElemento.textContent = total;
        });
    });

    botonesMenos.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            if (cantidades[index] > 0) {
                cantidades[index]--;
                total -= productos[index].precio;
                totalElemento.textContent = total;
            }
        });
    });

    // Cambiar el cursor a una mariposa
    const estiloCursor = document.createElement("style");
    estiloCursor.innerHTML = `
        body {
            cursor: url('https://raw.githubusercontent.com/your-repo/magic-wand-cursor/main/butterfly-cursor.png'), auto;
        }
    `;
    document.head.appendChild(estiloCursor);
});
