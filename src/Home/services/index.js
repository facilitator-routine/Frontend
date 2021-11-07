import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL
export async function logout(access_token){
    try{
        const response = await axios({
            url: `${baseUrl}/logout`,
            method: 'DELETE',
            data: {access_token}
        })
        return response
    }catch (e){
        console.log(e)
    }
}