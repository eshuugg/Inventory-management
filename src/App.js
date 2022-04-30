import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigator from "./Navigator";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
}

export default App;
