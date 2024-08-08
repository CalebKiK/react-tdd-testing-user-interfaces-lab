import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _____`", () => {
    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with an alt text identifying the content of the image", () => {
    render(<App />);

    const personalImage = screen.getByRole("img", {
        name: "caleb-image",
    });

    expect(personalImage).toBeInTheDocument();
    expect(personalImage).toHaveAttribute("src", "public/assets/A star.JPG")
});

test("a second level heading with the text 'About me'", () => {
    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/,
        level: 2,
        exact: false,
    })

    expect(secondLevelHeading).toBeInTheDocument();
});

test("A paragraph for your biography", () => {
    render(<App />);

    const paragraph = screen.getByText(/I am a successful software engineer/);

    expect(paragraph).toBeInTheDocument();
});

test("Two links, one to your GitHub page, and one to your LinkedIn page", () => {
    render(<App />);

    const githubLink = screen.getByRole("link", {
        name: /github/i,
    })

    const linkedInLink = screen.getByRole("link", {
        name: /linkedin/i,
    })

    expect(githubLink).toBeInTheDocument();
    expect(linkedInLink).toBeInTheDocument();
});
