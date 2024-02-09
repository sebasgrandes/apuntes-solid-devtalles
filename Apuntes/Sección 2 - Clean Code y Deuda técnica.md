# Sección 2: Clean Code y Deuda técnica

## Introducción a la sección.

## Breve exposición - Deuda técnica y Clean Code

**Deudad técnica**: La falta de calidad en el código, que genera una deuda que repercutirá en costos futuros

Costos económicos

-   Tiempo en realizar mantenimientos.
-   Tiempo en refactorizar código.
-   Tiempo en comprender el código.
-   Tiempo adicional en la transferencia del código.

Esquema de deuda técnica de Martin Fowler

-   Imprudente: No hay tiempo, sólo copia y pega eso de nuevo. (consciente)
-   Inadvertido: "¿Qué son patrones de diseños?" (se genera por desconocimiento, por ejemplo juniors. es peligroso)
-   Prudente: Tenemos que entregar rápido, ya refactorizaremos.
-   Prudente e inadvertida: "Ahora sabemos como deberíamos haber hecho".

Caer en deuda técnica es normal y a menudo es inevitable.

¿Cómo se paga una deuda técnica?

-   Refactorización: Es simplemente un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.

Usualmente para que una refactorización fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automáticas.
Usualmente esto produce el famoso: "Si funciona, no lo toques"

La mala calidad en el software siempre la acaba pagando o asumiendo alguien.
Ya sea el cliente, el proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo programando sobre un sistema frágil.

**Clean Code**

-   "Código Limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda." - Carlos Blé
-   "Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito". — Grady Booch
-   "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga". — Donald Knuth

## Nombres pronunciables y expresivos

Los nombres deben ser pronunciables.

```ts
// mejor
// esta forma se llama lower cammel case
const number0fUnits = 53;
const tax = 0.15;
const category = "T - Shirts";
const birthDate = new Date("August 15, 1965");
```

Los nombres por ejemplo de clases no deberian tener información técnica.

```ts
// mejor
class User
interface User
```

## Nombres según el tipo de dato

-   Recuerda que las variables deben explicarse solas. Si necesitas un comentario para explicar una variable... entonces estás haciendo mal las cosas.

Arreglos - Arrays

```ts
// mejor
const fruitNames = ["manzana", "platano", "fresa"];
```

Booleanos - Booleans

```ts
// mejor
const is0pen = true;
const canWrite = true;
const hasFruit = true;
const isActive = false;
const hasValues = false;
const isEmpty = false;
```

Numbers

```ts
//better
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 3;
const tota10fCars = 5;
```

Funciones

```ts
// mejor
createUser();
updateUser();
sendEmail();
```

## Consideraciones para las clases

Consideraciones

-   El nombre es lo más importante de la clase.
-   Formados por un sustantivo o frases de sustantivo.
-   No deben de ser muy genéricos.
-   Usar UpperCamelCase

3 preguntas para determinar saber si es un buen nombre.

-   ¿Qué exactamente hace la clase?
-   ¿Cómo exactamente esta clase realiza cierta tarea?
-   ¿Hay algo específico sobre su ubicación?
-   Si algo no tiene sentido, remuévelo o refactoriza.

Más palabras !== Mejor nombre

## Nombres de funciones, argumentos y parámetros

Funciones

"Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica". - Ward Cunningham

Parámetros

-   Se recomeinda limitar solo a 3 parámetros posicionales... o 1.
-   Si tienes más de 3 se recomienda crear un "interface" de TypeScript... para una mejor lectura de tu funcion.
    -   También ordenar tu "interface" de manera ascendente.

## Detalles adicionales sobre funciones

Otras recomendaciones

-   Simplicidad es fundamental.
-   Funciones de tamaño reducido. (cuando las funciones tienen muchas lineas de codigo, es que esta haciendo MAS COSAS DE LO QUE DEBERÍA HACER)
-   Funciones de una sola línea sin causar complejidad.
-   Menos de 20 líneas.
-   Evita el uso del "else".
-   Prioriza el uso de la condicional ternaria.

## Principio DRY

DRY: Don't Repeat Yourself

> "Si quieres ser un programador productivo esfuérzate en escribir código legible".
>
> -   Robert C. martin

Principio:

-   Simplemente es evitar tener duplicidad de código.
-   Simplifica las pruebas.
-   Ayuda a centralizar procesos.
-   Aplicar el principio DRY, usualmente lleva a refactorizar.
