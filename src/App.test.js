import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("App component", () => {
  test("it shows a list of images", () => {
    act(() => {
      render(<App />, container);
    });
  });
});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/No Data Available/i);
  expect(linkElement).toBeInTheDocument();
});

describe("App component", () => {
  test("it shows a list of images", async () => {
    const fakeResponse = [{ name: "img.classistatic.de/api/v1/mo-storytest/images/HqEAAOxyIPNTcg-F" }, { name: "img.classistatic.de/api/v1/mo-storytest/images/GpoAAOxyZzlTcg-F" }];

    await act(async () => {
      render(<App />, container);
    });

    expect(container.textContent).toBe("");

  });
});

