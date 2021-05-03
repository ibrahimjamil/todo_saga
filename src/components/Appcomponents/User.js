import produce from 'immer'
import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchuser, submitTask } from '../Actions/Actions'

function User() {
    const [obj,setObj]=useState([
        {
            name:"ibrahim"
        },
        {
            name:"jamil"
        }
    ])
    const [name,setName]=useState('')
    const [task,setTask]=useState('')
    const dispatch=useDispatch()
    const array = useSelector(state => state)
    
    useEffect(()=>{
         //passing dispatch to store from there it will pass to rootsaga and then watcher saga then doersagar
        dispatch({type:fetchuser})
    },[])

    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const taskHandler=(e)=>{
        setTask(e.target.value)
    }
    const submitHandler=(e)=>{
        dispatch(submitTask(name,task))
        setObj(prev=>([...prev,{
            name:"do coding"
        }]))
        e.preventDefault()
    }
    return (
        <div>
            
            {/* this will go to store after dispatch and then match from watcher saga to match if not match then pass to reducer directly*/}
            <form onSubmit={submitHandler}>
                <label>NAME</label>
                <input type="text" value={name} onChange={nameHandler}></input><br/>
                <label>TASK</label>
                <textarea type="text" value={task} onChange={taskHandler}></textarea><br/>
                <button type="submit">submit</button>
               {/* wasae */}
                {obj.map((object)=>{
                        return <h1>{object.name}</h1>
                    })}
            </form>
            {/* getting from state*/}            
            {array.map((object)=>{
                return <h1>name: {object.name} tasks local:{object.task}</h1>
            })}            
        </div>
    )
}

export default User
