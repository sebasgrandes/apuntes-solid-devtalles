type Size = "" | "S" | "M";
class Product {
    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = ""
    ) {}

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case "string":
                    if ((<string>(<unknown>this[key])).length <= 0)
                        throw Error(`${key} is empty`);
                    break;
                case "number":
                    if (<number>(<unknown>this[key]) <= 0)
                        throw Error(`${key} is empty`);
                    break;
                default:
                    throw Error(`${key} is not valid`);
            }
        }
        return true;
    }

    toString() {
        // ! esto incumple el principio DRY
        // if (this.name.length <= 0) throw Error("name is empty");
        // if (this.price <= 0) throw Error("price is empty");
        // if (this.size.length <= 0) throw Error("size is empty");

        // * esto esta mejor
        if (!this.isProductReady) return;
        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product("Blue large pants", 15, "M");
    console.log(bluePants.toString());
})();
