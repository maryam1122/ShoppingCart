import { Category } from "./category"

export interface product{
id : number 
title: string,
price : number,
description : string,
category : Category
images:string[]

}
export interface CreateProduct{
    title: string
    description: string
    price: number
    categoryId:number
    images: string[]
}
export interface ProductDetail{
    info: product
}
export interface ProductList{
    list: product[]
}
export interface ProductPagination{

}