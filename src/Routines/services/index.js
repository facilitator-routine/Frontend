import axios from "axios";

const baseUrl = '/v1'
export async function getRoutines(){
    try{
        const response = await axios({
            url: `${baseUrl}/routines`,
            method: 'GET'
        })
        return response
    }catch (e){
        console.log(e)
        return { errorMessage: e.response?.data?.message || e.message }
    }
}
export async function deleteRoutine(routineData){
    try{
        const response = await axios({
            url: `${baseUrl}/routines/${routineData._id}`,
            method: 'DELETE',
            data: { routine: routineData }
        })
        return response
    }catch (e){
        console.log(e)
        return { errorMessage: e.response?.data?.message || e.message }
    }
}

export async function updateRoutines(routineData){
    try{
        const formData = new FormData()
        formData.append('_id',routineData._id)
        formData.append('name',routineData.name)
        formData.append('description',routineData.description)
        formData.append('alarm',routineData.alarm)
        formData.append('items',routineData.items)
        formData.append('background',routineData.background)

        const response = await axios({
            url: `${baseUrl}/routines/${routineData._id}`,
            method: 'PUT', data:routineData
        })
        return response
    }catch (e){
        return { errorMessage: e.response?.data?.message || e.message }
    }
}
export async function saveRoutine(routineData){
    try{
        const formData = new FormData()
        formData.append('name',routineData.name)
        formData.append('description',routineData.description)
        formData.append('alarm',routineData.alarm)
        formData.append('items',routineData.items)
        formData.append('background',routineData.background)

         const response = await axios({
            url: `${baseUrl}/routines`, method: 'POST',data:routineData
         })
         return response
    }catch (e){
        return { errorMessage: e.response?.data?.message || e.message }
    }
}

export async function findRoutine(routineId){
    try{
        const response = await axios({
            url: `${baseUrl}/routines/${routineId}`,
            method: 'GET'
        })
        return response
    }catch (e){
        console.log(e)
        return { errorMessage: e.response?.data?.message || e.message }
    }
}