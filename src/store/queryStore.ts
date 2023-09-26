import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
interface GameQuryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setSearchText: (searchText: string) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useQueryGames = create<GameQuryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useQueryGames;
