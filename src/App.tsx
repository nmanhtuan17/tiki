import {useEffect} from 'react'
import {useAppDispatch} from "./store";
import {getAllBooks} from "./store/actions/app.action.ts";
import MainNavigation from "./navigation/MainNavigation";

function App() {
  const dispatch = useAppDispatch();
  const getBook = () => {
    // @ts-ignore
    dispatch(getAllBooks())
  }
  useEffect(() => {
    getBook();
    console.log('get---')
  })
  return (
    <MainNavigation/>
  )
}

export default App
