## Ecommerce - FREST (Frontend)

<center><img src="https://i.ibb.co/nnL1WdQ/FREST.png" width="70%" /></center>



## Consideraciones

Este proyecto corresponde a la segunda parte de un proyecto persona. Es la parte frontend de un ecommerce donde se implementó el consumo de una API REST (creada en la parte uno del challenge de BSALE [Ir al repositorio ](https://getbootstrap.com/docs/5.2/getting-started/introduction/)), tomando los siguientes puntos en consideración:

* Despliega productos agrupados por la categoría a la que pertenecen.
* Contiene buscador de productos.

## Cliente - ECOMMERCE

Desarrollado utilizando  **HTML**, **CSS**, **JavaScript**, **JavaScript**, **Bootstrap**, **SASS**, **Vue**, **Vuex** y **Font Awesome**. Se implentan funciones que llaman a la base de datos a través de diferentes endpoint utilizando solicitudes HTTP de tipo **GET** a traves de la API creada anteriormente.

### Deploy: 
Se debe descargar el proyecto y escribir en consola npm run serve.

### Caracteristicas del proyecto

<li> Se utilizaron los ciclos de vida de Vue para cargar las primeras funciones de la aplicacion que renderizan la aplicación.</li>
<li> Se Utilizó Fetch para realizar los request al servidor.</li>
<li> El buscador se dispara con el evento onkeyup lo que permite mostrar resultados de busqueda en tiempo real mientras el usuario teclea.</li>
<li> Se aplico el concepto de Diseño Web - *Mobile First*.</li>
<li> Para la responsividad y estilos se uso *Bootstrap* en su mayoria excepto para los colores caracteristicos de la tienda.</li>
<li> Utilice la *metodologia BEM* </li>
<li> Dado que utilice nombres de variables autoexplicativas no fue necesario cargar el codigo con comentarios del funcionamiento.</li>

## Tecnologías

| Recursos utilizados       | Enlace                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Bootstrap 5.2             | [Ir a web ](https://getbootstrap.com/docs/5.2/getting-started/introduction/)        |
| Font Awesome              | [Ir a web ](https://fontawesome.com/)                                        |

## Experiencia Bsale
Dado que he realizado anteriormente Ecommerces se me hizo facil crear la interfaz y realizar las peticiones fetch.
Debido a que la cantidad de productos no es mucha, se decidio no implementar paginación aunque tenemos un endpoint disponible por si en el futuro deseamos implementarlo. 

## Capturas
### Vista Desktop

<center><img src="https://i.ibb.co/nnL1WdQ/FREST.png" width="70%" /></center>

### Vista Mobile
<img src="https://i.ibb.co/vk9Z1q5/frest-mobile.png"/>
