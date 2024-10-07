import axiosInstance from "../axiosInstance"


const homePageSevice = {
    getAllContents : ()=>{
        return axiosInstance.get('/contents');
    }
}

export default homePageSevice;