(() => {
    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = "input" | "select" | "textarea" | "radio";

    class HtmlElement {
        // el public crea automaticamente una propiedad publica en la clase, con ese nombre y asigna el valor del parametro a esa propiedad

        constructor(public id: string, public type: HtmlType) {}
    }

    class InputAttributes {
        constructor(public value: string, public placeholder: string) {}
    }

    class InputEvents {
        constructor() {} /* también puedes borrar el constructor */

        setFocus() {}
        getValue() {}
        isActive() {}
        removeValue() {}
    }

    //? Idea para la nueva clase InputElement
    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        // (en general) el public crea automaticamente una propiedad publica en la clase, con ese nombre y asigna el valor del parametro a esa propiedad

        // no coloco public en los parametros porque o necesito que sean propiedades de esta clase. solo necesito que sean "parametros" del constructor para poder usar sus valores
        constructor(id: string, value: string, placeholder: string) {
            this.html = new HtmlElement(id, "input");
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement("01", "Fernando", "Enter first name");

    console.log({ nameField });
})();
