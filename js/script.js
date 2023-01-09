
let stock = [];
let carrito = [];
let modal = [];

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorProductosM = document.getElementById("contenedorProductosM");

document.addEventListener("click", (e) => {
    if(e.target.matches(".contenedorCerrar")){
        let btnid = e.target.dataset.id
        console.log(btnid);
        removeProduct(btnid);
        console.log(carrito);
        //removeProductM(btnid);
    }

    if (e.target.matches(".productBtn")) {
        console.log("agregando")
        agregarAlCarrito(e.target.dataset.agregar)
        agregarAlModal(e.target.dataset.agregar);
    modal.forEach((product) => {
            let div = document.createElement("div");
            div.classList.add("productoM");
            div.innerHTML +=
                `<img src="${product.imagen}" alt=""/>
                <div class="contenedorData">
                    <h3>${product.nombre}</h3>
                    <p>Precio: $${product.precio}</p>
                    <p>Cantidad: 1</p>
                </div>
                <div class="testProduct">
                    <button class="contenedorCerrar" data-id="${product.id}" id="${product.id}">x</button>
                </div>`
            contenedorProductosM.appendChild(div);
        });
    }

});
function removeProduct(btnid) {
    let newCart = carrito.filter(product => product.id != btnid);
    carrito = newCart;
}

//function removeProductM(btnid) {
    //let newModal = modal.filter(product => product.id != btnid);
    //modal = newModal;
//}


fetch("./js/stock.json").then((res) => res.json()).then((data) => {
    stock = data;
    //agregar productos al html
    data.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =
            `<h3>${product.nombre}</h3>
                <img src="${product.imagen}" alt=""/>
                <div class="productFooter">
                    <p>$${product.precio}</p>
                    <button data-agregar="${product.id}"  class="productBtn"  id="button${product.id}">Comprar</button>
                </div>`
        contenedorProductos.appendChild(div);

        });
    });

//pushear producto al carrito
const agregarAlCarrito = (prodId) => {
    const item = stock.find((prod) => prod.id == prodId)
    carrito.push(item);
    console.log(carrito);
}

const agregarAlModal = (prodId) => {
    const item = stock.find((prod) => prod.id == prodId)
    modal = [];
    modal.push(item);
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

//necesito eliminar el div que tenga el mismo id que el boton de eliminar el producto.

    //mostrar divs con un array por cada producto que muestre cantidad, precio y nombre


    const viewModal = () => {
        modal.forEach((product) => {
            contenedorProductosM.innerHTML = ""
            let div = document.createElement("div");
            div.classList.add("productoM");
            div.innerHTML +=
                `<img src="${product.imagen}" alt=""/>
                <div class="contenedorData">
                    <h3>${product.nombre}</h3>
                    <p>Precio: $${product.precio}</p>
                    <p>Cantidad: 1</p>
                </div>
                <div class="testProduct">
                    <button class="contenedorCerrar" data-id="${product.id}" id="${product.id}">x</button>
                </div>`
            contenedorProductosM.appendChild(div);
        });
    }