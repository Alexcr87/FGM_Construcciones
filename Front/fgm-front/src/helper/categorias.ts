export const getCategorias = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/category`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`Error`, error);
    }
}


export const getCategoriasId = async (id: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/category/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`Error`, error);
    }
}

export const getAllProducts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/product`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getProductosByID = async (id: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/product/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}