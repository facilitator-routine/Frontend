import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL
export async function getRoutines(){
    try{
        const response = await axios({
            url: `${baseUrl}/routines`,
            method: 'GET'
        })
        return response
    }catch (e){
        console.log(e)
    }
}
export async function saveRoutine(routineData){
    try{
        console.log(routineData)
        const formData = new FormData()
        formData.append('name',routineData.name)
        formData.append('description',routineData.description)
        formData.append('alarm',routineData.alarm)
        formData.append('items',routineData.items)
        formData.append('background',routineData.background)



         const response = await axios({
            url: `${baseUrl}/routines`,
             method: 'POST',
            data:routineData
         })
         return response
    }catch (e){
        console.log(e)
    }
}