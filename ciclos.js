let productos = []
let producto = prompt('Ingrese Producto/Escriba Salir para terminar la lista.').toUpperCase()
while (producto != 'SALIR') {
    
     producto = prompt('Ingrese Producto/Escriba Salir paraterminar la lista.').toUpperCase()
     productos.push(producto)
}
productos.pop()
alert(productos)