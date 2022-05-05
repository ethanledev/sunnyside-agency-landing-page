/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./App.module.css";
import logo from "../images/logo.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as ArrowDown } from "../images/icon-arrow-down.svg";
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { useState } from "react";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <img src={logo} alt="sunnyside logo" />
          <div className={styles.headerLinks}>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">CONTACT</a>
          </div>
          {showMenu && (
            <div className={`${styles.headerLinks} ${styles.mobileMenu}`}>
              <div>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">CONTACT</a>
              </div>
            </div>
          )}
          <div
            className={styles.hamburgerIcon}
            onClick={() => setShowMenu(!showMenu)}
          >
            <Hamburger />
          </div>
        </nav>
        <h1>WE ARE CREATIVES</h1>
        <ArrowDown />
      </header>
      <main>
        <section>
          <div className={styles.textGrid}>
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency speciallizing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <span className={styles.learnMoreLink} id={styles.yellowLearnMore}>
              <a href="#">
                <div className={styles.underline}></div>LEARN MORE
              </a>
            </span>
          </div>
          <div id={styles.transform}></div>
          <div id={styles.standOut}></div>
          <div className={styles.textGrid}>
            <h1>Stand out to the right audience</h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <span className={styles.learnMoreLink} id={styles.redLearnMore}>
              <a href="#">
                <div className={styles.underline}></div>LEARN MORE
              </a>
            </span>
          </div>
          <div id={styles.graphicDesign}>
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
          <div id={styles.photography}>
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </section>
        <section>
          <h1>CLIENT TESTIMONIALS</h1>
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <img src={emily} alt="Emily R." />
              <blockquote>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </blockquote>
              <div className={styles.name}>Emily R.</div>
              <div className={styles.occupation}>Marketing Director</div>
            </div>
            <div className={styles.testimonial}>
              <img src={thomas} alt="Thomas S." />
              <blockquote>
                Sunnyside's enthusiasm coupled with their keen interest in our
                brand's success made it a satisfying and enjoyable experience.
              </blockquote>
              <div className={styles.name}>Thomas S.</div>
              <div className={styles.occupation}>Chief Operating Officer</div>
            </div>
            <div className={styles.testimonial}>
              <img src={jennie} alt="Jennie F." />
              <blockquote>
                Incredible end result! Out sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </blockquote>
              <div className={styles.name}>Jennie F.</div>
              <div className={styles.occupation}>Business Owner</div>
            </div>
          </div>
        </section>
        <section>
          <div id={styles.milkBottle}></div>
          <div id={styles.orange}></div>
          <div id={styles.cone}></div>
          <div id={styles.sugarCubes}></div>
        </section>
      </main>
      <footer>
        <Logo />
        <nav>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </nav>
        <nav className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">
            <Pinterest />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default App;
