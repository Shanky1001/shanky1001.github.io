import { Route } from "react-router-dom";
import data from "./data/data.json";
import Home from "./page/home/Home.tsx";
import RouterProvider from "./providers/RouterProvider.tsx";

function App() {
  return (
    <RouterProvider>
      <Route
        path="/"
        element={
          <div className="bg-gray-100/50 relative dark:bg-grey-900 text-black dark:text-white overflow-x-hidden">
            <Home data={data} />
          </div>
        }
      />
    </RouterProvider>
  );
}

export default App;
