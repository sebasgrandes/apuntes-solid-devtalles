// import axios from "axios";

// esta es mi clase adaptadora... ahora solo basta con atacar esta clase por ejemplo si quiero cambiar axios por otro. dado que esta clase esta en todos lados basta con atacar lo que esta dentro de aqui no mas, y no en cada una de los lugares donde se usa (como lo que si sucederia si usaramos axios en cada lugar).
// cuando dependas altamente de una libreria de 3eros esta genial implementar esta clase adaptadora

export class HttpClient {
    // ! ahora por ejemplo puedo usar algo distinto a axios

    // async get(url: string) {
    //     const { data, status } = await axios.get(url);
    //     console.log({ status });
    //     return { data, status };
    // }

    async get(url: string) {
        const resp = await fetch(url);
        const data = await resp.json();

        return { data, status: resp.status };
    }
}
