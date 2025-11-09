# Proyecto "Mi Tienda"

Este proyecto fue desarrollado como parte del parcial de **Desarrollo Web con Vue.js**.  
La idea principal es simular una pequeña tienda donde el usuario puede iniciar sesión, ver los productos disponibles y navegar entre diferentes vistas.  


## Descripción general del negocio

**Mi Tienda** es una aplicación sencilla que representa un negocio de ventas en línea.  
El usuario puede ingresar con sus datos, ver los productos disponibles y explorar el panel principal.  
El objetivo es mostrar el uso de componentes, rutas y consumo de datos simulando una API.


## Estructura del proyecto

src/
│
├── assets/
│   └── usuarios.json             → datos locales (simulación de API)
│
├── components/                   → componentes reutilizables
│   ├── FooterComponent.vue
│   ├── NavbarComponent.vue
│   ├── ProductCardComponent.vue
│   └── SidebarComponent.vue
│
├── router/
│   └── index.js                  → configuración de rutas
│
├── services/
│   └── productService.js         → servicio para manejar la “API” de productos
│
├── views/                        → vistas principales
│   ├── DashboardView.vue
│   ├── LoginView.vue
│   └── ProductView.vue
│
├── App.vue                       → componente raíz
└── main.js                       → punto de entrada de la app


## Modularización

El proyecto está dividido por módulos:
- Cada **componente** tiene su propio archivo `.vue` con HTML, CSS y JS separados.  
- Las **rutas** se manejan con `vue-router` desde `src/router/index.js`.  
- La **lógica del negocio** para productos se maneja desde `productService.js`, simulando peticiones a una API.


## Consumo de API simulada

El consumo de datos se hace desde el archivo `usuarios.json` ubicado en `assets`.  
Desde `productService.js` se leen los datos como si fueran respuestas de una API externa.

Ejemplo de uso:
```js
import products from "@/assets/usuarios.json"
```


## Comunicación entre componentes

La comunicación se realiza usando props y eventos personalizados.
Por ejemplo, ProductCardComponent recibe la información de cada producto como prop desde ProductView.vue.

## Trabajo colaborativo

Durante el desarrollo se trabajó en diferentes ramas, haciendo commits, pulls y pushes al repositorio principal:
https://github.com/JohnSR333/Parcial-2-Desarrollo.git
Cada integrante aportó en la parte visual, el manejo de rutas, los componentes y la integración general.


## Estilo y diseño

Se usaron colores vivos y un diseño limpio con componentes visuales llamativos.
El sitio es totalmente responsivo y muestra una interfaz moderna para el usuario.


## Conclusión

El proyecto "Mi Tienda" demuestra el uso práctico de Vue.js con modularización, rutas, componentes, y simulación de una API.
Fue una experiencia útil para entender la estructura completa de un proyecto Vue moderno.