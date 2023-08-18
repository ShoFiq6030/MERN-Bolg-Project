import axios from "axios"

export function Create(ProductName, ProductCode, Img, Qty) {
    let URL = "/api/v1/CreateProduct"
    let PostBody = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        Img: Img,
        UnitPrice: UnitPrice,
        Qty: Qty

    }
    return axios.post(URL, PostBody).then((res) => {
        if (res.status === 200) {
            return true
        }
        else {
            return false
        }
    }).catch((err) => {
        console.log(err)
        return false
    })
}


export function Read() {
    let URL = "/api/v1/ReadProduct"
    axios.get(URL).then(() => {
        if (res.status === 200) {
            return res.data['data']
        }
        else {
            return false
        }
    }).catch((err) => {
        console.log(err)
        return false
    })
}


export function Update(id) {
    let URL = "/api/v1/UpdateProduct" + id
    let PostBody = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        Img: Img,
        UnitPrice: UnitPrice,
        Qty: Qty

    }
    return axios.post(URL, PostBody).then((res) => {
        if (res.status === 200) {
            return true
        }
        else {
            return false
        }
    }).catch((err) => {
        console.log(err)
        return false
    })
}


export function Delete(id) {
    let URL = "/api/v1/DeleteProduct" + id
   return axios.get(URL).then(()=>{
    if (res.status===200){
        return true
    }
    else{
        return false
    }
   }).catch(()=>{
        console.log(err)
        return false
    })
}



// const baseURL = "/api/v1"; // Set your API base URL here

// axios.defaults.baseURL = baseURL;

// // Axios configuration for handling common settings and error handling
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error:", error);
//     return Promise.reject(error);
//   }
// );

// export async function createProduct(productData) {
//   try {
//     const response = await axios.post("/CreateProduct", productData);
//     return response.status === 200;
//   } catch (error) {
//     console.error("Create Error:", error);
//     return false;
//   }
// }

// export async function readProducts() {
//   try {
//     const response = await axios.get("/ReadProduct");
//     if (response.status === 200) {
//       return response.data.data;
//     }
//     return null;
//   } catch (error) {
//     console.error("Read Error:", error);
//     return null;
//   }
// }

// export async function updateProduct(id, productData) {
//   try {
//     const response = await axios.post(`/UpdateProduct/${id}`, productData);
//     return response.status === 200;
//   } catch (error) {
//     console.error("Update Error:", error);
//     return false;
//   }
// }

// export async function deleteProduct(id) {
//   try {
//     const response = await axios.get(`/DeleteProduct/${id}`);
//     return response.status === 200;
//   } catch (error) {
//     console.error("Delete Error:", error);
//     return false;
//   }
// }