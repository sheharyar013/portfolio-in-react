import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Project1.jpeg";
import IMG2 from "../../assets/Project2.jpeg";
import IMG3 from "../../assets/Project3.jpeg";
import IMG4 from "../../assets/Project4.jpeg";
import IMG5 from "../../assets/Project5.jpeg";
import IMG6 from "../../assets/Project1.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What I Did</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Magic Clean</h3>

          <div className="portfolio__item-cta">
            <div>
              <a
                href="https://github.com/sheharyar013"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </div>

            <div>
              <a
                href="https://magiccleanco.com/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Qabool Hai</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sheharyar013"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>The Perfect Snack.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sheharyar013"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Pakistan's 1ST ICEF.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sheharyar013"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Independant Care.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sheharyar013"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://independencehomecaresolutions.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Clean House.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sheharyar013"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://magiccleanco.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
