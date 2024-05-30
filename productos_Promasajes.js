const API_PRODUCTOS = "./diferenciales/datos.json"



const obtenerProductos = async () => {

    const resultado = await fetch(API_PRODUCTOS)
    const data = await resultado.json()

    const productos = data.productos
    console.log(data)
    // Seleccionar el contenedor donde se mostrarán los productos
    let divProductos = document.querySelector('#lista-productos')

    // Iterar sobre cada producto, para crear su elemento HTML
    for (let i = 0; i < productos.length; i++) {
        // Crear el HTML para el producto actual
    
        const insertarProducto =`
        <div class="item-producto">
                    <h2>${productos[i].titulo}</h2>
                        <img src="./imagenes${productos[i].imagen_path}">
                        <p class="producto-descripcion">${productos[i].descripcion}</p>
                        <p class="producto-precio">${productos[i].precio}</p>
                </div>

        `;
     
        // Insertar el HTML del prtoducto en el contenedor div de la pagina de productos
        divProductos.insertAdjacentHTML('beforeend', insertarProducto);
    }

}

obtenerProductos();
