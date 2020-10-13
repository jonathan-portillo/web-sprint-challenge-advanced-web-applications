import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ColorList from "./ColorList";
import BubblePage from "./BubblePage";
import { FetchColors as mockFetchColors } from "../utils/FetchColors";

jest.mock("../utils/FetchColors");

const mockData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
];

test("Fetches data and renders the bubbles", async () => {
  mockFetchColors.mockResolvedValueOnce({
    data: mockData,
  });

  const { getAllByTestId } = render(<ColorList colors={mockData} />);

  await waitFor(() => expect(getAllByTestId(/colors/i)).toHaveLength(3));
});
