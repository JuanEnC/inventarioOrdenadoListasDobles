class Inventario {
  constructor() {
    this.primero = null;
  }

  agregar(producto) {
    let temp = this.primero;
    if (!this.primero) {
      this.primero = producto;
    } else if (producto.id < temp.id) {
      producto.sig = this.primero;
      this.primero.ant = producto;
      this.primero = producto;
    } else {
      while (temp.sig && temp.sig.id < producto.id) {
        temp = temp.sig;
      }
      producto.sig = temp.sig;
      producto.ant = temp;
      if (temp.sig) temp.sig.ant = producto;
      temp.sig = producto;
    }
  }

  buscar(id) {
    let temp = this.primero;
    while (temp && temp.id != id) {
      temp = temp.sig;
    }
    return temp;
  }

  eliminar(id) {
    let temp = this.primero;
    while (temp && temp.id != id) {
      temp = temp.sig;
    }
    if (!temp) return null;

    if (temp.ant) temp.ant.sig = temp.sig;
    else this.primero = temp.sig;

    if (temp.sig) temp.sig.ant = temp.ant;
    return temp;
  }

  extraerPrimero() {
    if (!this.primero) return null;

    let temp = this.primero;
    this.primero = temp.sig;

    if (this.primero) this.primero.ant = null;
    return temp;
  }
  extraerUltimo() {
    if (!this.primero) return null;
    let temp = this.primero;
    while (temp.sig.sig) {
      temp = temp.sig;
    }
    let r = temp.sig;
    temp.sig.ant = null;
    temp.sig = null;
    return r;
  }

  listar() {
    let lista = "";
    let temp = this.primero;
    while (temp) {
      lista += temp.info();
      temp = temp.sig;
    }
    return lista;
  }

  listarInverso() {
    let lista = "";
    let temp = this.primero;
    while (temp.sig) {
      temp = temp.sig;
    }
    while (temp) {
      lista += temp.infoHtml();
      temp = temp.ant;
    }
    return lista;
  }

  /*
    CON RECURSIVIDAD
    listarInverso() {
    let lista = "";

    let temp = this.primero;
    if (!temp) return null;
    while (temp.sig) {
      temp = temp.sig;
    }

    function recorrerInverso(nodo) {
      if (!nodo) return "";
      return nodo.infoHtml() + recorrerInverso(nodo.ant);
    }

    lista = recorrerInverso(temp);
    return lista;
  }
  */

  listarHtml() {
    let lista = "";
    let temp = this.primero;
    while (temp) {
      lista += temp.infoHtml();
      temp = temp.sig;
    }
    return lista;
  }
}
