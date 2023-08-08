import { axiosNotAuth } from "./../config/axiosConfig";

export const getCategory=()=>{
    return axiosNotAuth.get("categories");
}