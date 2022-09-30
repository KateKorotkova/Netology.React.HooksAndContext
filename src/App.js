import './App.css';
import {List} from "./firstTask/list";
import {SuccessUsing} from "./secondTask/successUsing";
import {ErrorUsing} from "./secondTask/errorUsing";
import {LoadingUsing} from "./secondTask/loadingUsing";


function App() {
  let isFirstTask = true;
  
  return (
          <> { isFirstTask ? <List/> : <> <SuccessUsing/> <ErrorUsing/> <LoadingUsing/> </> } </>
        );
}



export default App;
