import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import './App.css';
import User from './components/Appcomponents/User';
import createSagaMiddleware from 'redux-saga'
import reducer from './components/Reducer/Reducer';
import { rootSaga } from './components/Saga/Saga';


const sagamiddleware=createSagaMiddleware()
const store=createStore(reducer,applyMiddleware(sagamiddleware))
sagamiddleware.run(rootSaga)


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <User/>
      </Provider>
    </div>
  );
}

export default App;
