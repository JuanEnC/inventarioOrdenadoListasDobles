class Producto {
  constructor(id, nombre, cantidad, precio) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.sig = null;
    this.ante = null;
  }
  info() {
    return `Id = ${this.id}| Nombre = ${this.nombre}| Cantidad = ${this.cantidad}| Precio = ${this.precio}| Sig = ${this.sig} \n`;
  }
  infoHtml() {
    return `<h5>Id = ${this.id}| Nombre = ${this.nombre}| Cantidad = ${this.cantidad}| Precio = ${this.precio}| Sig = ${this.sig} \n</h5>`;
  }
}
