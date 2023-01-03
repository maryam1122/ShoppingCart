import { Category } from "./category"

export interface product{
id : number 
title: string,
price : number,
description : string,
category : Category
images:string[]

}
export interface addProduct{
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

export interface modifyProduct{
    index ?: number | undefined,
    update: product
}

export interface Cart extends product{
    count :number ;
}
export interface ProductCreate {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
  }

export interface ProductUpdate{
    id: number;
    price: number;
    title: string;
    description: string;
}
export type SortType = "None" | "Lowest" | "Highest";
