
export const submitTask=(name,task)=>{
    return {
        type:"submit",
        payload:{
            name,
            task
        }
    }
}


export const fetchuser="fetchUser"