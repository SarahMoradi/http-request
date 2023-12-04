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
      <button onClick={() => requestHandler(header)}>Htpp Requets With Header</button>
      <button onClick={() => requestHandler()}>Htpp Requets Without Header</button>
    </Fragment>
  )
}

export default App
