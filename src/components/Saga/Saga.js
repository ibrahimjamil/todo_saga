import {put,call,takeEvery, all, delay} from "redux-saga/effects"
import axios from 'axios'
import {fetchuser} from '../Actions/Actions' 

//call will handle api calls
//put is like dipatch 
//take-every take each action and call function of doer fetch

//doer saga
function* doerFetch(){
    let i=1
    while(true){
        let res = yield call(axios,`https://jsonplaceholder.typicode.com/users/${i}`)
        console.log(res)
        let action = {
            type:"submit",
            payload:{
                name:res.data.name,
                task:res.data.email
            }
        }
        yield put(action)
        i++
    }
}

//watcher saga
function* watcherfetch(){
    yield takeEvery(fetchuser,doerFetch)    //it will watch for action if action occurs then it will call doerfetch
} 

//root saga 
export function* rootSaga(){
    yield all([watcherfetch()])
}