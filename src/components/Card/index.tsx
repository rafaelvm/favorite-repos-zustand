import { Repo } from "../../queries/repo/type";
import "./styles.css";

type CardProps = {
  repo: Repo;
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: boolean;
};

export default function Card({
  repo,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}: CardProps) {
  function handleToggleFavorites() {
    if (isFavorite) {
      removeFromFavorites(repo?.id);
    } else {
      addToFavorites(repo?.id);
    }
  }

  return (
    <div className="card">
      <h2>{repo?.name}</h2>

      <div className="card-buttons">
        <button onClick={handleToggleFavorites}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
}
