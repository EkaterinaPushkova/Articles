import { Provider } from "react-redux";

import MainPage from "./pages/MainPage";
import store from "./redux";
import "./styles/global.css";

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
