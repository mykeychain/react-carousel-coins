import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("carousel renders without crashing", function() {
  render(<Carousel />);
});

it("works when you click on the right arrow", function() {
  const { container } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  // expect first image to show, after clicking the left arrow
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();
});

it("hides left arrow when on first image", function () {
  const { container } = render(<Carousel />);

  // expect left arrow to be missing when on first image
  expect(
    container.querySelector(".fa-chevron-circle-left")
  ).not.toBeInTheDocument();
});

it("hides right arrow when on last image", function () {
  const { container } = render(<Carousel />);

  // move forward to the last photo of the carousel
  const numberOfPhotos = Carousel.defaultProps.cardData.length;
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  for (let i = 1; i < numberOfPhotos; i++) {
    fireEvent.click(rightArrow);
  }

  // expect right arrow to be missing when on last image
  expect(
    container.querySelector(".fa-chevron-circle-right")
  ).not.toBeInTheDocument();
});

it("matches snapshot", function() {
  const { container } = render(<Carousel />);
  expect(container).toMatchSnapshot();
})
