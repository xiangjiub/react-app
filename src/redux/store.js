// 整个应用只有store
import {createStore} from 'redux'

import CountReducer from './count_reducer';

export default createStore(CountReducer)