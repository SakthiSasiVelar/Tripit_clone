import homePageSevice from "../Api/Services/homePageService";


export const getContents = async () =>{
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await homePageSevice.getAllContents();
        return response.data;
    }
    catch(error){
        throw error;
    }
}