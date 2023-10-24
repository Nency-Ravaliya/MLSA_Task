/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/UNPLASH/laptop.jpg";

const imageAltText = "Jay Shree Krishna!";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "HR Management System ",
    description:
      "The objective of this project was to create a dynamic website that could store and retrieve data from a DynamoDB database using AWS Lambda functions.",
    url: "https://github.com/Nency-Ravaliya/upskillcampus.git",
  },
  {
    title: "Basic Banking System ",
    description:
      "A basic banking system which transfers money between multiple users and also record the transaction history.",
    url: "https://github.com/Nency-Ravaliya/Spark-Foundation.git",
  },
  {
    title: "Hand Gesture Recognition ",
    description:
      "It basically python based project where I used mediapipe library to detect hand landmark and its gesture.",
    url: "https://github.com/Nency-Ravaliya/hand-gesture-recognition-mediapipe.git",
  },
  {
    title: "Gcolab",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://github.com/Nency-Ravaliya/Gcolab.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
