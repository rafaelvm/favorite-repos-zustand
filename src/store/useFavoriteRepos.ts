import create from "zustand";
import { persist } from "zustand/middleware";

type FavoriteRepoStore = {
  favoriteRepoIds: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

const useFavoriteRepos = create(
  persist<FavoriteRepoStore>(
    (set) => ({
      favoriteRepoIds: [],
      addToFavorites: (repoId: number) => {
        set((state) => ({
          favoriteRepoIds: [...state.favoriteRepoIds, repoId],
        }));
      },
      removeFromFavorites: (repoId: number) => {
        set((state) => ({
          favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId),
        }));
      },
    }),
    {
      name: "@repo-storage",
    }
  )
);

export default useFavoriteRepos;
