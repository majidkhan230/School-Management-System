import apiClient from ".";


//getReq

const getReq = async (path)=>{
    try {
        const response = await apiClient.get(path)
        return response
    } catch (error) {
        console.error(error)
    }
}


const postReq = async (path,data)=>{
    try {
        const response =  await apiClient.post(path,data)
        return response
    } catch (error) {
        console.error(error)
    }
}



const updateReq = async (path,data)=>{
    try {
        const response = await apiClient.put(path,data)
        return response
    } catch (error) {
        console.error(error)
    }
}

const delReq = async (path)=>{
    try {
        const response = await apiClient.delete(path)
        return response
    } catch (error) {
        console.error(error)
    }
}


export {
    delReq,updateReq,postReq,getReq
}