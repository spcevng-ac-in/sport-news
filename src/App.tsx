import { Suspense, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import { ThemeContext } from "./context/theme";


const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>

          <Suspense fallback={<>Loading...</>}>
            <RouterProvider router={router} />
          </Suspense>
      
    </div>
  );
}
export default App;