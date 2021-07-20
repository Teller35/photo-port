import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: "Park Bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onClose handler", () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    fireEvent.click(getByText("Close This Modal"));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
