import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

const testProps = {
            caption: "test-caption",
            src: "test-src",
            currNum: "test-currNum",
            totalNum: "test-totalNum"
}

it("card renders without crashing", function() {
  render(<Card {...testProps}/>);
});

it("works when you click on the right arrow", function() {
  const { container } = render(<Card {...testProps}/>);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[src="test-src"]')
  ).toBeInTheDocument();
});

it("matches snapshot", function() {
  const { container } = render(<Card {...testProps}/>);
  expect(container).toMatchSnapshot();
})