
# 🧾 Inventario Ordenado con Listas Dobles

Este proyecto es una aplicación web creada con **HTML**, **CSS** y **JavaScript** que implementa un sistema de **inventario dinámico** usando una **lista doblemente enlazada ordenada** como estructura principal de datos.

Permite agregar, eliminar, buscar y listar productos en orden, además de recorrer la lista tanto hacia adelante como hacia atrás.

---

## 🚀 Funcionalidades principales

- ➕ **Agregar producto:** Inserta un nuevo producto en su posición ordenada dentro de la lista.  
- 🔍 **Buscar producto:** Localiza un producto por su código o nombre.  
- ❌ **Eliminar producto:** Elimina un producto de la lista según su código.  
- 📃 **Listar productos:** Muestra todos los productos del inventario en orden ascendente.  
- 🔁 **Listar inverso:** Muestra el inventario desde el último hasta el primero.  
- ⏮ **Extraer primero / último:** Permite eliminar y mostrar el primer o último producto de la lista.  
- 🔄 **Cancelar:** Limpia los campos del formulario.

---

## 🧩 Estructura del proyecto

```
/inventarioOrdenadoListasDobles
│
├── index.html           # Interfaz principal de la aplicación
├── js/
│   ├── producto.js          # Clase Nodo (estructura doblemente enlazada)
│   ├── inventario.js    # Clase Inventario (manejo y ordenamiento de nodos)
├── css/
│   └── main.css        # Estilos visuales de la interfaz
└── README.md             # Documentación del proyecto

````

---

## 💻 Tecnologías utilizadas

- **HTML5** → Estructura de la interfaz  
- **CSS3** → Diseño y estilo visual  
- **JavaScript (ES6)** → Lógica del inventario y manipulación del DOM  

---

## 🧠 Concepto clave: Lista doblemente enlazada

Una **lista doblemente enlazada** permite recorrer los elementos **en ambos sentidos** (hacia adelante y hacia atrás).  
Cada nodo contiene:
- `dato` o información del producto  
- `sig` → enlace al siguiente nodo  
- `ant` → enlace al nodo anterior  

Esta estructura facilita la **eliminación, inserción ordenada y recorrido inverso** sin necesidad de estructuras adicionales.

---

## 🧪 Cómo ejecutar el proyecto

1. Clona el repositorio:
```
   git clone https://github.com/JuanEnC/inventarioOrdenadoListasDobles.git
````

2. Entra a la carpeta:

```
   cd inventarioOrdenadoListasDobles
```

3. Abre el archivo `index.html` en tu navegador.

---

## 👤 Autor

**JuanEnC**
🔗 [Repositorio en GitHub](https://github.com/JuanEnC/inventarioOrdenadoListasDobles)

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT License**.
Puedes usarlo libremente con fines educativos.

---

### 💡 Nota

Proyecto desarrollado con fines didácticos para practicar **estructuras dinámicas de datos** (listas doblemente enlazadas) en JavaScript y su integración en una aplicación web.
