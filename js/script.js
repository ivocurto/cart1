
let stock = [],
    carrito = []

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorProductosM = document.getElementById("contenedorProductosM");
const cerrarCarrito = document.getElementById("cerrarCarrito");

fetch("./js/stock.json").then((res) => res.json()).then((data) => {
    stock = data;
    //agregar productos al html
    data.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <h3>${product.nombre}</h3>
                <img src="${product.imagen}" alt=""/>
                <div class="productFooter">
                    <p>$${product.precio}</p>
                    <button id="button${product.id}">Comprar</button>
                </div>`
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`button${product.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(product.id);
            //agregar productos del carrito a la lista del carrito
            carrito.forEach((product) => {
                const div = document.createElement("div");
                div.classList.add("productoM");
                div.innerHTML = `
        <img src="${product.imagen}" alt=""/>
        <div class="contenedorData">
        <h3>${product.nombre}</h3>
        <p>Precio: $${product.precio}</p>
        <p>Cantidad: 1</p>
        </div>
        <div class="contenedorCerrar"><button id="cerrarCarrito" onClick="eliminarDelCarrito()">x</button></div>`
                contenedorProductosM.appendChild(div);
            });
        });
    });
});

//pushear producto al carrito
const agregarAlCarrito = (prodId) => {
    const item = stock.find((prod) => prod.id === prodId)
    carrito = []
    carrito.push(item);
    console.log(carrito);
}

//eliminar producto del carrito             ------------continuar
const eliminarDelCarrito = (e) => {
    console.log(getId);
}

//Abrir el modal al tocar el carrito y que se muestren de manera ordenada los productos de los arrays

const BtnMostrarCarrito = document.getElementById(`BtnMostrarCarrito`);
BtnMostrarCarrito.addEventListener("click", () => {
    const modal = document.getElementById(`fondoModal`);
    modal.style.display = "block";
})
//cerrar el modal del carrito
const BtnCerrarModal = document.getElementById(`cerrarModal`);
BtnCerrarModal.addEventListener("click", () => {
    const modal = document.getElementById(`fondoModal`);
    modal.style.display = "none";
})

    //mostrar divs con un array por cada producto que muestre cantidad, precio y nombre

