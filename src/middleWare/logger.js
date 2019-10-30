

let logger = store => next => action => {

      console.group(action.type)
        console.log('action is: ', action)
        console.log('state is: ', store.getState())
        const returnValue = next(action)
      console.groupEnd()

      return returnValue

    }
  
    export default  logger