import { useReducer } from 'react'

const initial = {
    count: 0
}
const actions = {
    "incr": "incr",
    "decr": "decr",
    "reset": "reset"
}
function CounterReducer() {


    const reducer = (state, action) => {
        switch (action.type) {
            case actions.incr:
                {
                    return { ...state, count: state.count + 1 }
                }
            case actions.decr:
                {
                    return { ...state, count: state.count - 1 }
                }
            case actions.reset:
                {
                    return { ...state, count: 0 }
                }
            default: state
        }
    }
    const [state, dispatch] = useReducer(reducer, initial)
    function Increment() {
        dispatch({ type: actions.incr })
    }
    function Decrement() {
        dispatch({ type: actions.decr })
    }
    function Reset() {
        dispatch({ type: actions.reset })
    }

    return (
        <>


            <div classNameName="card row">
                <p>Counter : {state.count}</p>
                {/* <button type="button" className="btn btn-success ms-2" onClick={Increment}>Increment</button>
                <button type="button" className="btn btn-danger ms-2" onClick={Decrement}>Decrement</button>
                <button type="button" className="btn btn-info ms-2" onClick={Reset}>Reset</button> */}

                <button type="button" className="btn btn-success ms-2" onClick={() => dispatch({ type: actions.incr })}>Increment</button>
                <button type="button" className="btn btn-danger ms-2" onClick={() => dispatch({ type: actions.decr })}>Decrement</button>
                <button type="button" className="btn btn-info ms-2" onClick={() => dispatch({ type: actions.reset })}>Reset</button>
            </div>
            <p classNameName="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default CounterReducer
