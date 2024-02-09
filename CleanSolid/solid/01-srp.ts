(() => {
    interface Product {
        id: number;
        name: string;
    }

    // clase para obtener los datos del producto
    class ProductService {
        getProduct(id: number) {
            console.log("Producto: ", { name: "OLED TV" });
        }
        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos
            console.log("Guardando en base de datos", product);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos
            this.productService.saveProduct(product);
        }
        notifyClients() {
            this.mailer.sendEmail(["sebas@google.com"], "to-clients");
        }
    }

    // clase para manejar los emails
    class Mailer {
        private masterEmail: string = "sebastian@google.com";
        sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
            console.log("Enviando correo a los clientes");
        }
    }

    class CartBloc {
        private itemsInCart: Object[] = [];
        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log("Agregando al carrito ", productId);
        }
    }

    // creo estas instancias para que las use mi otra clase
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: "OLED TV" });
    productBloc.notifyClients();
    cartBloc.addToCart(10);
})();
