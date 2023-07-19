const products = [
    {
        id: "1",
        titulo: "ACANA LIGHT & FIT PERRO",
        imagen: "https://riquelmecata.github.io/TIENDA-DE-MASCOTAS-JS/img/11.jpg",
        categoria: 'perros',
        stock: 5,
        precio: 48428,
        descripcion: "Fórmula libre de granos para cachorros de todas las razas (4 semanas a 12 meses)"

    },
    {
        id: "2",
        titulo: "AMITY SP LOW GRAIN SALMON ADULT 4 KG",
        imagen: "https://riquelmecata.github.io/TIENDA-DE-MASCOTAS-JS/img/12.jpg",
        categoria: "perros",
        stock: 8,
        precio: 18990

    },
    {
        id: "3",
        titulo: "BRIT CARE SENSITIVE VENISON & POTATO",
        imagen: "https://riquelmecata.github.io/TIENDA-DE-MASCOTAS-JS/img/13.png",
        categoria: "perros",
        stock: 15,
        precio: 74990

    }
]

export const pedirDatos = () => {

    return new Promise((resolve, reject)=> {
        setTimeout( () => {
            resolve(products);
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsbyCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.categoria === categoryId))
        }, 500)
    })
}