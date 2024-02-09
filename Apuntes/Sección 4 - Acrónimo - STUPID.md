# Sección 4: Acrónimo - STUPID

## Introducción a la sección

Esta sección está dedicada a código o cosas que no deberíamos hacer.
**Recurso bueno de práctica:** https://refactoring.guru/es

## CodeSmells - STUPID

Code Smells: posibles indicios de que el codigo no está bien

**6 Code Smells que debemos evitar:**

-   Singleton: patrón singleton.
-   Tight Coupling: alto acoplamiento.
-   Untestability: código no probable (unit test).
-   Premature optimization: optimizaciones prematuras.
-   Indescriptive Naming: nombres poco descriptivos.
-   Duplication: duplicidad de código, no aplicar el principio DRY.

**Patrón Singleton**

Pros:

-   Garantiza una única instancia de la clase a Io largo de toda la aplicación.

¿Por qué code smell? Cons:

-   Vive en el contexto global.
-   Puede ser modificado por cualquiera y en cualquier momento.
-   No es rastreable.
-   Difícil de testar debido a su ubicación.

## Acoplamiento y cohesión

**Alto acoplamiento**  
Desventajas

-   Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos.
-   EI ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos.
-   Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes.

Posibles soluciones

-   "A" tiene un atributo que se refiere a "B".
-   "A" llama a los servicios de un objeto "B".
-   "A" tiene un método que hace referencia a "B" (a través del tipo de retorno o parámetro).
-   "A" es una subclase de (o implementa) la clase "B".

> "Queremos diseñar componentes que sean autocontenidos, auto suficientes e independientes. Con un objetivo y un propósito bien definido."
> — The Pragmatic Programmer

**Cohesión**  
Lo ideal es tener bajo acoplamiento y buena cohesión.

-   La cohesión se refiere a 10 que la clase (o módulo) puede hacer.
-   La baja cohesión significaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
-   Alta cohesión significa que la clase se enfoca en 10 que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase.

**Acoplamiento**  
Lo ideal es tener bajo acoplamiento y buena cohesión.

Se refiere a cuán relacionadas o dependientes son dos clases o
módulos entre sí.

-   En bajo acoplamiento, cambiar algo importante en una clase no debería afectar a la otra.
-   En alto acoplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.

Un buen diseño de software tiene alta cohesión y bajo acoplamiento.

**Evitar**  
Que nuestras clases tengan muchas relaciones con otras clases... y que cuando quieran comunicarse solo sean mediante canales estrictos.

## Code Smells adicionales

<!-- Untestability: código no probable (unit test). -->

**Código no probable**
Código dificilmente testeable

-   Código con alto acoplamiento.
-   Código con muchas dependencias no inyectadas.
-   Dependencias en el contexto global (Tipo Singleton)

Debemos de tener en mente las pruebas desde la creación del código.

<!-- Premature optimization: optimizaciones prematuras. -->

**Optimizaciones prematuras**
Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a 10 que es más importante en una aplicación.  
No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

Complejidad esencial: La complejidad es inherente al problema.  
Complejidad accidental: Cuando implementamos una solución compleja a la mínima indispensable.

Debemso encontrar un balance entre ambas complejidades.

<!-- Indescriptive Naming: nombres poco descriptivos. -->

**Nombres poco descripctivos**

-   Nombres de variables mal nombradas.
-   Nombres de clases genéricas.
-   Nombres de funciones mal nombradas.
-   Ser muy especifico o demasiado genérico. (muy especifico: demasiado dificil de leer || muy generico: puede estar haciendo demasiadas cosas)

<!-- Duplication: duplicidad de código, no aplicar el principio DRY. -->

**Duplicidad**

(se da por...) No aplicar el principio DRY

Accidental

-   Código luce similar pero cumple funciones distintas.
-   Cuando hay un cambio, sólo hay que modificar un sólo lugar.
-   Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.

Real

-   Código es idéntico y cumple la misma función.
-   Un cambio implicaría actualizar todo el código idéntico en varios lugares.
-   Incrementa posibilidades de error humano al olvidar una parte para actualizar.
-   Mayor cantidad de pruebas innecesarias.

## Otros olores honoríficos

**Inflación**

-   Cuando un método se alarga demasiado. (es fácil simplemente ir añadiendo código a una clase por flojera). Lo ideal es dividirlo en partes o submétodos.
-   Cuando una clase se alarga demasiado. Lo ideal es dividirlo en partes o subclases.
-   Obsesión primitiva: el uso de primitivos en lugar de objetos pequeños para tareas simples... o el uso de constantes para codificar información. (es fácil añadir primitivos para solucionar x caso... al principio!)
-   Lista larga de parámetros: Más de 3 o 4 parámetros en 1 método. El tratamiento es comprobar si realmente esos parametros son necesarios. El tratamiento podría ser mandar un objeto de parámetros.

## Acopladores

Todos los olores de este grupo contribuyen al acoplamiento excesivo entre clases o muestran 10 que sucede si el acoplamiento se reemplaza por una delegación excesiva.

**Feature Envy**  
Síntoma: cuando tenemos una clase o modulo y este llama (o hace referencia) a más información que se encuentra en otro lugar que a su misma clase, módulo o función.

**Intimidad inapropiada**  
Síntoma: cuando una clase usa campos o métodos internos de otra clase. las buenas clases deben de saber lo menos posibles de otras clases, lo que ayuda a su lectura, organizacion, simplicidad, reutilización, etc. basicamente debemos separarlos

**Cadenas de mensajes**  
Síntoma: cuando tenemos una funcion o módulo que llama a A y este llama a B y de B a C y así...  
Tratamiento: evitar este tipo de comunicación, comunicandolos directamente, por ejemplo de A a D.

**The Middle Man**  
Síntoma: si una clase realiza solo la accion de delegar el trabajo a otra clase.
