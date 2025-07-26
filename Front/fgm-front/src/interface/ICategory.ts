

export interface ICategory {
    id: string,
    name: string,
    description?: string,
    img: string,
    products?: IProduct[]
}



export interface IProduct {
    id: string,
    name: string,
    description: string,
    img: string,
    dimension:string,
    material:string,
    box:string,
    is_active?: Boolean,
    creation?: Date,
    categories?: ICategory[]
}