## APP OFERTAS ANGULAR

Este secillo proyecto fue realizado a partir deL planteamiento de una prueba técnica emitida por la empresa "metnet" para el puesto de desarrollador angular, la cual se realiza únicamente con fines académicos. El planteamiento consta del enunciado y un archivo (ofertas.json) el cual esta alojado en el proyecto.

![prueba](https://github.com/Estiiven/offers-angular-NGRX/assets/48731786/badf851d-ed8e-4ce9-bf0b-ecf103eb8563)

El proyecto consta de tres componentes (Offer, Chacacteristics y Prices). En el componente de "Offer" se muestra el id de la oferta y el nombre de la oferta. En el componente de “Characteristics”, se detalla todas las características que tiene la oferta y en el componente “Prices” se listan los precios de la oferta y el monto. En una lista desplegable se listan los nombres de las ofertas y cada vez que se cambia la oferta se despliega la información en los componentes previamente mencionados.

Para la comunicación del componente con la capa de servicios se implementó el patrón reducer, diferenciando cada uno de las capas requeridas Reducer, Effect, Action y  Selector.

## Herramientas utilizadas para realización
ANGULAR 14

## Ejecución del proyecto

Front-End: Dentro de la carpeta del proyecto ejecutar el comando "ng serve", luego en el navegador http://localhost:4200 
API: dentro de la carpeta de la api ejecutar el comando "node src".

## Apariencia - Funcionamiento




## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
