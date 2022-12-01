import { IMovie } from "../ts/models/Movie";
import { movieSort } from "../ts/functions";
import { test, expect } from "@jest/globals";

test("should sort list a-ö", () => {
  let mockMovies: IMovie[] = [
    { Title: "bcd", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
    { Title: "cbc", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
    { Title: "abc", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
    { Title: "abc", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
    { Title: "öad", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
  ];
  movieSort(mockMovies, true);

  expect(mockMovies[0].Title).toBe("abc");
  expect(mockMovies[4].Title).toBe("öad");
});

test("should sort list ö-a", () => {
  let mockMovies = [
    { Title: "bcd", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
    { Title: "cbc", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
    { Title: "abc", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
    { Title: "abc", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
    { Title: "öad", imdbID: "abc", Type: "abc", Poster: "abc", Year: "abc" },
  ];
  movieSort(mockMovies, false);

  expect(mockMovies[0].Title).toBe("öad");
  expect(mockMovies[4].Title).toBe("abc");
});
