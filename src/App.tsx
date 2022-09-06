import { useCallback } from "react";
import "./App.css";
import Card from "./components/Card";
import useFetchRepos from "./queries/repo";
import useFavoriteRepos from "./store/useFavoriteRepos";

function App() {
  const { data } = useFetchRepos("rafaelvm");

  const favoriteRepoIds = useFavoriteRepos((state) => state.favoriteRepoIds);
  const addToFavorites = useFavoriteRepos((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteRepos(
    (state) => state.removeFromFavorites
  );

  const handleAddToFavorites = useCallback((repoId: number) => {
    addToFavorites(repoId);
  }, []);

  const handleRemoveFromFavorites = useCallback((repoId: number) => {
    removeFromFavorites(repoId);
  }, []);

  return (
    <div className="App">
      {data?.map((repo) => (
        <Card
          repo={repo}
          key={repo?.id}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}
          isFavorite={favoriteRepoIds.includes(repo?.id)}
        />
      ))}
    </div>
  );
}

export default App;
