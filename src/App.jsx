import { Provider } from "react-redux";
import { AddAttendence } from "./components/AddAttendence";
import { store } from "./app/store";
import { ShowAttendence } from "./components/ShowAttendence";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Learn Redux</h1>
        <AddAttendence />
        <ShowAttendence />
      </div>
    </Provider>
  );
}
