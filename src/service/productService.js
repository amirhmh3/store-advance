import { axiosNotAuth } from "./../config/axiosConfig";

export const getCategory=()=>{
    return axiosNotAuth.get("categories");
}

export const getAllProducts=()=>{
    return axiosNotAuth.get("products");
}