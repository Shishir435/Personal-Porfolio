import React from "react";
import IMG1 from "../../assets/todo.png";
import IMG2 from "../../assets/tindog.png";
import IMG3 from "../../assets/newsLetter.png";
import IMG4 from "../../assets/my-1st-site.png";
import IMG5 from "../../assets/drumkit.png";
import IMG6 from "../../assets/dice.png";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Todo-List",
    github: "https://github.com/Shishir435/todo",
    demo: "https://listsv1.onrender.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Tin-Dog",
    github: "https://github.com/Shishir435/Tin-dog",
    demo: "https://shishir435.github.io/Tin-dog/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Newsletter-Signup",
    github: "https://github.com/Shishir435/Newsletter-signup",
    demo: "https://newsletterv1.onrender.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "My-1st-Site",
    github: "https://github.com/Shishir435/My-1st-site",
    demo: "https://shishir435.github.io/My-1st-site/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Drum-Kit",
    github: "https://github.com/Shishir435/Drum-Kit",
    demo: "https://shishir435.github.io/Drum-Kit/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Dice-Game",
    github: "https://github.com/Shishir435/Dice-game",
    demo: " https://shishir435.github.io/Dice-game/",
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
