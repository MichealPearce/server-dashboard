import {combineReducers} from 'redux'

import staticDataReducer from './staticDataReducer'
import dynamicDatareducer from './dynamicDataReducer'
import apacheReducer from './apacheReducer'

export default combineReducers({
    staticData: staticDataReducer,
    dynamicData: dynamicDatareducer,
    apache: apacheReducer
})