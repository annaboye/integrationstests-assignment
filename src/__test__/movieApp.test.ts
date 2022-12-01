/**
 *@jest-environment jsdom
 */
import { IMovie } from "../ts/models/Movie";
import * as functions from "../ts/movieApp";

import { test, expect, jest } from "@jest/globals";
import { mockData } from "../ts/services/__mocks__/movieservice";
import { getData } from "../ts/services/movieservice";

jest.mock("../ts/services/movieservice.ts");

describe("init", () => {
  test("should be able to submit", () => {
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form><div id="movie-container"></div>`;

    let spy = jest.spyOn(functions, "handleSubmit").mockReturnValue(
      new Promise<void>((resolve) => {
        resolve();
      })
    );

    functions.init();

    (document.getElementById("searchForm") as HTMLFormElement).submit();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("displayNoResult", () => {
  test("should show message ", () => {
    document.body.innerHTML = `<div id="movie-container"></div>`;

    let container = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    functions.displayNoResult(container);

    expect(document.querySelectorAll("p").length).toBe(1);
    expect(document.querySelectorAll("p")[0].innerHTML).toBe(
      "Inga sökresultat att visa"
    );
  });
});

describe("createHtml", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should create html", () => {
    document.body.innerHTML = `<form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
      </form><div id="movie-container"></div>`;

    let container = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    functions.createHtml(mockData, container);

    expect(document.querySelectorAll("div.movie").length).toBe(3);
    expect(document.querySelectorAll("img").length).toBe(3);
  });
});

describe("handleSubmit", () => {
  test("should createHtml when getData resolves", async () => {
    document.body.innerHTML = `<form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
      </form><div id="movie-container"></div>`;

    await functions.handleSubmit();
    expect(document.getElementById("movie-container")?.innerHTML).toContain(
      "Harry"
    );
    expect(document.querySelectorAll("div").length).toBe(4);
  });
});
