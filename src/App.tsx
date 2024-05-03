import { Suspense, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import { ThemeContext } from "./context/theme";
import { MatchesProvider } from "./context/matches/context";
import { MatchesDetailProvider } from "./context/matchdetail/context";
import { TrendingNewsProvider } from "./context/trendingnews/context";


const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <TrendingNewsProvider>
        <MatchesProvider>
          <MatchesDetailProvider>
            <Suspense fallback={<>Loading...</>}>
              <RouterProvider router={router} />
            </Suspense>
          </MatchesDetailProvider>
        </MatchesProvider>
      </TrendingNewsProvider>

    </div>
  );
}
export default App;