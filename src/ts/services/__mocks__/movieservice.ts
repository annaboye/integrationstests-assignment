import { IMovie } from "../../models/Movie";
import { test, expect, jest } from "@jest/globals";

export const mockData: IMovie[] = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Type: "movie",
    Year: "2001",
    imdbID: "tt0120737",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    Title: "Alfons Åberg",
    Type: "movie",
    Year: "2001",
    imdbID: "tt0120737",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    Title: "Harry Potter",
    Type: "movie",
    Year: "2001",
    imdbID: "tt0120737",
  },
];

export const getData = async (searchText: string): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    if (searchText) resolve(mockData);
    else reject([]);
  });
};
