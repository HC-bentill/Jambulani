import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.scss";
import PageLayout from "./components/layout/PageLayout";
import Landing from "./page/Landing";
import ProductDescription from "./page/ProductDescription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/product-description" element={<ProductDescription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
