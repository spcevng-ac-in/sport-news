import { Suspense, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import { ThemeContext } from "./context/theme";
import { MatchesProvider } from "./context/matches/context";


const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <MatchesProvider>
        
        <Suspense fallback={<>Loading...</>}>
          <RouterProvider router={router} />
        </Suspense>
      </MatchesProvider>
    </div>
  );
}
export default App;