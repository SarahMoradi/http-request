import { Fragment } from "react"
import { useAxios } from "./hooks/useAxios"
import { getTodo } from "./service/api"
import { header} from "./utility/constant"

function App() {
  function requestHandler(header?: boolean){
    useAxios(getTodo, header).then(res => console.log(res))
  }

  return (
    <Fragment>
      <button onClick={() => requestHandler(header)}>Http Request With Header</button>
      <button onClick={() => requestHandler()}>Http Request Without Header</button>
    </Fragment>
  )
}

export default App
