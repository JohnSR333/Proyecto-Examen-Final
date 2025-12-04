# Proyecto "Mi Tienda"

**Mi Tienda** es una aplicación web desarrollada con **Vue.js 3, Bootstrap 5 y MockAPI**, diseñada para gestionar productos y usuarios mediante operaciones CRUD completas.
El sistema incluye autenticación, protección de rutas, uso de modales personalizados, alertas reutilizables y un flujo de navegación totalmente funcional.

El proyecto fue realizado como entregable final para el curso de **Desarrollo de Aplicaciones Web**. 


## Descripción general del negocio

**Mi Tienda** representa un sistema básico de administración para una tienda virtual de productos electrónicos.
Los administradores pueden:

-Iniciar sesión

-Gestionar usuarios (crear, editar, eliminar)

-Gestionar productos (crear, editar, eliminar)

-Ver información organizada por tarjetas

-Usar modales elegantes y alertas informativas

-Navegar por rutas protegidas para evitar accesos sin login

La aplicación simula un panel administrativo real, permitiendo demostrar el manejo profesional de un CRUD completo y una arquitectura organizada.


## Estructura del proyecto
```
src/
│── assets/
|   ├── styles.css
│── components/
│   ├── DeleteModal.vue
│   ├── Navbar.vue
│   ├── ProductModal.vue
│   ├── UserModal.vue
│── views/
│   ├── LoginView.vue
│   ├── UsersView.vue
│   ├── ProductsView.vue
│── services/
│   ├── api.js
│   ├── authService.js
│   ├── userService.js
│   ├── productService.js
│── App.vue
│── main.js
│── router.js
```

## Modularización

El proyecto está dividido por módulos:
- Cada **componente** tiene su propio archivo `.vue` con HTML, CSS y JS separados.  
- Las **rutas** se manejan con `vue-router` desde `src/router/index.js`.  
- La **lógica del negocio** para productos se maneja desde `productService.js`, simulando peticiones a una API.


## Consumo de API (MockAPI)

A diferencia de versiones anteriores, ahora todos los datos reales provienen de una API en línea creada con **MockAPI** ("https://691d0054d58e64bf0d34ac65.mockapi.io").

Cada recurso del proyecto tiene su propio endpoint:

-Usuarios

-Productos

-Login simulado

Ejemplo desde productService.js:
```js
import api from "./api";

export const productService = {
  getAll() {
    return api.get("/productos");
  },
  create(data) {
    return api.post("/productos", data);
  },
  update(id, data) {
    return api.put(`/productos/${id}`, data);
  },
  delete(id) {
    return api.delete(`/productos/${id}`);
  }
};

```


## Comunicación entre componentes

La comunicación sigue las buenas prácticas de Vue:

✔ Props

Los modales reciben datos desde la vista principal:
```html
<ProductModal :producto="productoEditado" />
```
✔ Emits (eventos personalizados)

Los modales notifican a la vista cuando una acción debe ejecutarse:
```js
this.$emit("productoCreado");
```
✔ Estado controlado desde las views

Las vistas (ProductsView.vue y UsersView.vue) controlan:

-Lista de productos/usuarios

-Mostrar u ocultar modales

-Ejecutar los métodos del servicio correspondiente

Esto permite que todo esté ordenado y fácil de mantener.

## Trabajo colaborativo

Durante el desarrollo se trabajó en diferentes ramas, haciendo commits, pulls y pushes al repositorio principal:
https://github.com/JohnSR333/Proyecto-Examen-Final.git
Cada integrante aportó en la parte visual, el manejo de rutas, los componentes y la integración general.


## Estilo y diseño

Se usaron colores vivos y un diseño limpio con componentes visuales llamativos.
El sitio es totalmente responsivo y muestra una interfaz moderna para el usuario.


## Conclusión

Mi Tienda es una aplicación completa que demuestra dominio de:

-Vue.js 3

-Componentes reutilizables

-CRUD profesionales

-Manejo de rutas con protección

-Consumo de API REST con Axios

-Modales y alertas personalizadas

-Separación de servicios

-Buenas prácticas de arquitectura web

El proyecto permitió comprender cómo se estructura un sistema real y cómo se comunican las diferentes partes de una aplicación moderna.

Fue una experiencia enriquecedora que fortaleció el uso de Vue.js, Axios, Bootstrap y la comunicación entre componentes.