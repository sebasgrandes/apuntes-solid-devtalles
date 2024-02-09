# Sección 5: Principios SOLID

## Introducción a la sección

Con estos principios evitamos code smells.  
Son principios, es decir, recomendaciones, no reglas.

## Principios SOLID - SRP - Responsabilidad Única

**Principios SOLID**

Los principios de SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

Los 5 principios S.O.L.I.D. de diseño de software son:

-   S – Single Responsibility Principle (SRP)
-   O – Open/Closed Principle (OCP)
-   L – Liskov Substitution Principle (LSP)
-   I – Interface Segregation Principle (ISP)
-   D – Dependency Inversion Principle (DIP)

**SRP - Principio de responsabilidad única**

> "Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo".
>
> -   Robert C. Martin

"tener una única responsabilidad" !== "hacer una única cosa"  
(queremos que nuestras clases y módulos realicen procesos estrechamente relacionados entre sí)

Este principio no se basa en crear clases con un solo método sino en diseñar componentes que solo estén expuestos a una fuente de cambios.

## Detectar incumplimiento de SRP

-   Nombres de clases y módulos demasiado genéricos.
-   Cambios en el código suelen afectar la clase o módulo.
-   La clase involucra múltiples capas.
-   Número elevado de importaciones.
-   Cantidad elevada de métodos públicos.
-   Excesivo número de líneas de código.

## OCP - Principio de abierto y cerrado

Es un principio que depende mucho del contexto.
Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.

EI principio abierto-cerrado también se puede lograr de muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia.

## Detectar violaciones de OPC

-   Cambios normalmente afectan nuestra clase o módulo.
-   Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.)

## Principio de Substitución de Liskov

> "Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo".
>
> -   Robert C. martin

**"Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema"**

## Principio de segregación de interfaz

> "Los clientes no deberían estar obligados a depender de interfaces que no utilicen".
>
> -   Robert C. martin

**Este principio establece que los clientes no deberían verse forzados a depender de interfaces que no usan.**

## Detectar violaciones ISP

Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov.

## Principio de inversión de dependencias

> "Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones".
>
> G- Robert C. martin

-   Los módulos de alto nivel no deberían depender de módulos de bajo nivel.
-   Ambos deberían depender de abstracciones.
    -   las clases abstractas dictan como se va a ver las demas clases
-   Las abstracciones no deberían depender de detalles.
-   Los detalles deberían depender de abstracciones.

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.  
Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la CII, la persistencia, la comunicación con API externas, etc.

**Depender de abstracciones**  
Nos estamos refiriendo a clases abstractas o interfaces.  
Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio.

**¿Por qué obtenemos este beneficio?**  
Cada cambio en un componente abstracto implica un cambio en su implementación.  
Por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren cambios en las interfaces que implementa.

**Inyección de dependencias**  
Dependencia en programación, significa que un módulo o componente requiere de otro para poder realizar su trabajo.  
En algún momento nuestro programa o aplicación llegará a estar formado por muchos módulos, Cuando esto pase, es cuando debemos usar inyección de dependencias.
