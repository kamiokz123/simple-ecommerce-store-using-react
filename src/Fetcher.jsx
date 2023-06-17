const Base_url = "http://localhost:3004";


export const fetcher = async (url) =>{
    let responseObj = {
        errorMessage:"",
        data: []
    }
    try {
        const responseData = await fetch(Base_url+url);
        if(!responseData.ok){
            throw new Error(`HTTP error ${responseData.status}`);
        }
        const response = await responseData.json();
        responseObj.errorMessage = "";
        responseObj.data = response ;

        return responseObj;
    } catch (error) {
        responseObj.errorMessage= error.message;

        return responseObj;
    }
}

export const getCategories = () => {
    return fetcher("/categories");
}


export const getProducts = (id) => {
    return fetcher(`/products?catId=${id}`);
}

export const getProductById = (id) => {
    return fetcher("/products/"+id);
}

export const getProductByQuery = (query) => {
    return fetcher("/products?q="+query);
}