import { test, expect, jest } from "@jest/globals";
import { getData } from "../ts/services/movieservice";
import axios from "axios";
import { mockData } from "../ts/services/__mocks__/movieservice";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("should get mock data", async () => {
  mockedAxios.get.mockResolvedValue({ data: { Search: mockData } });
  let searchText: string = "vad som";

  const result = await getData(searchText);

  expect(result.length).toBe(3);
});

test(" should return emty list", async () => {
  mockedAxios.get.mockRejectedValue({ data: { Search: mockData } });
  let text: string = "anything";

  const catchValue = await getData(text);

  expect(catchValue).toStrictEqual([]);
  expect(catchValue.length).toBe(0);
});
