import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ProductContext from "./context/ProductContext";



function App() {
  

  return (
    <div>
      <ProductContext>
      <RouterProvider router={routes} />
      </ProductContext>

    </div>
  );
}

export default App;
