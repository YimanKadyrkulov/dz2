import {useDispatch, useSelector} from "react-redux"
import {asyncGetUsers, setNumber} from "./redux/reducers/mainSlice.jsx";
import './App.css'

function App() {
    const { number, usersArr } = useSelector(state => state.mainSlice)
    const dispatch = useDispatch()

    console.log(usersArr)

    return (
        <>
            <button onClick={() => dispatch(setNumber(number - 1))}>
                prev
            </button>

            {number}

            <button onClick={() => dispatch(setNumber(number + 1))}>
                next
            </button>

            <button onClick={() => dispatch(asyncGetUsers())}>
                getMore
            </button>

            {usersArr?.map(item =>
                <div key={item?.id} className={'userCard'}>
                    <p>{item?.id},</p>
                    <p>Name: {item?.name},</p>
                    <p>Adress: {item?.address?.city}</p>
                    <p>Email: {item?.email}</p>
                    <p>userName: {item?.username}</p>
                </div>
            )}
        </>
      )
}

export default App
