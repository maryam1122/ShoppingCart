export interface Category{
    id: number,
    name : string,
    image :string
}

export type CreateCategory = "Clothes"|"Electronics"|"Furniture"|"Shoes"|"Others"
export type ProductCategoryType =  "All"| "Clothes"| "Electronics"| "Furniture"| "Shoes"| "Others";