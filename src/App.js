import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import SamosaComponent from "./components/SamosaComponent";
import SamosaWithConnect from "./components/SamosaWithConnect";
import AsyncActionDemo from "./components/AsyncActionDemo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SamosaComponent />
        <SamosaWithConnect />
        <AsyncActionDemo />
      </div>
    </Provider>
  );
}

export default App;
