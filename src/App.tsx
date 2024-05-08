import { Suspense, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import { ThemeContext } from "./context/theme";
import { MatchesProvider } from "./context/matches/context";
import { MatchesDetailProvider } from "./context/matchdetail/context";
import { TrendingNewsProvider } from "./context/trendingnews/context";
import { TrendingNewsDetailProvider } from "./context/trendingnewsdetail/context";
import { SportProvider } from "./context/sports/context";
import { FavoritesProvider } from "./context/favorites/context";


const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <FavoritesProvider>
      <SportProvider>
      <TrendingNewsDetailProvider>
        <TrendingNewsProvider>
          <MatchesProvider>
            <MatchesDetailProvider>
              <Suspense fallback={<>Loading...</>}>
                <RouterProvider router={router} />
              </Suspense>
            </MatchesDetailProvider>
          </MatchesProvider>
        </TrendingNewsProvider>
      </TrendingNewsDetailProvider>
      </SportProvider>
      </FavoritesProvider>
    </div>
  );
}
export default App;