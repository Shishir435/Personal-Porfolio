import React from "react";
import IMG1 from "../../assets/Weather-app.png";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/newsLetter.png";
import IMG4 from "../../assets/my-1st-site.png";
import IMG5 from "../../assets/youtubeClone.png";
import IMG6 from "../../assets/tindog.png";
import "./portfolio.css";

const data = [
  {
    id: 5,
    image: IMG5,
    title: "YouTube-Clone",
    github: "https://github.com/Shishir435/youtube-clone",
    demo: "https://cloneyoutubeap.netlify.app/",
  },
  {
    id: 1,
    image: IMG1,
    title: "Weather-App",
    github: "https://github.com/Shishir435/Weather-app",
    demo: " https://shishir-weather-app.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Todo-List",
    github: "https://github.com/Shishir435/todo",
    demo: "https://listsv1.onrender.com/",
  },
  
  {
    id: 3,
    image: IMG3,
    title: "Newsletter-Signup",
    github: "https://github.com/Shishir435/Newsletter-signup",
    demo: "https://newsletterv1.onrender.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Tin-Dog",
    github: "https://github.com/Shishir435/Tin-dog",
    demo: "https://shishir435.github.io/Tin-dog/",
  },
  {
    id: 4,
    image: IMG4,
    title: "My-1st-Site",
    github: "https://github.com/Shishir435/My-1st-site",
    demo: "https://shishir435.github.io/My-1st-site/",
  },
 
];

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__conatiner">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
