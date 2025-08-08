export const getCategorias = async () => {
    try {
        const response = await fetch(`http://localhost:4000/category`)

        const data = await response.json()
        return data


    } catch (error) {
        console.log(`Error`, error);
    }
}


export const getCategoriasId = async (id: string) => {

    try {
        const response = await fetch(`http://localhost:4000/category/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`Error`, error);

    }


}

export const getAllProducts = async () => {

    try {
        const response = await fetch(`http://localhost:4000/product`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

export const getProductosByID = async (id: string) => {

    try {
        const response = await fetch(`http://localhost:4000/product/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);

    }


}