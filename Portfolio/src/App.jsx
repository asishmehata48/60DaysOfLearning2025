import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './App.css'

function App() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Computer Engineer.^1000",
        "Graphics Designer.^1000",
        "Engineering Student.^1000",
        "Techno Geek.^1000",
        "Pychopath.^1000",
        "Sleeper Cell.^1000",
        "Writer.^1000"
      ],
      typeSpeed: 50,
      fadeOut: true,
      showCursor: true,
      smartBackspace: false,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <header>
        <a href="#" className="logo">
          Asish <span className="slate">Mehata</span>.
        </a>
      </header>

      <section className="home" id="home">
        <div className="social newCl">
          <a href="https://www.instagram.com/asishmehata48/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@ash-iess" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-youtube"></i>
          </a>
          <a href="https://github.com/asishmehata48" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/asishmehata48/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://x.com/asish_mehata" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://t.me/asishmehata48" target="_blank" rel="noopener noreferrer">
            <i className="bx bx-paper-plane"></i>
          </a>
        </div>

        <div className="home-img">
          <img
            className="pho-img"
            src="https://github.com/asishmehata48/asishmehata48.github.io/blob/main/portfolio/Profile.jpg?raw=true"
            alt="photo"
          />
        </div>

        <div className="home-text newCl">
          <article className="home-text-1">
            <span>Hello, I'm</span>
            <h1 className="slate">Asish Mehata</h1>
            <h2 className="org">
              <span ref={typedElement}></span>
            </h2>
          </article>

          <article className="home-text-2">
            <p>
              A Sleeper Cell<br />
              who loves Technology, Anime and Music <br />
              On the Computer Engineering Journey.
            </p>
            <a href="mailto:asishmehata48@gmail.com" className="btn" target="_blank" rel="noopener noreferrer">
              Let's Talk
            </a>
          </article>
        </div>
      </section>

      <div className="copyright">
        &#169; asishmehata | All Right Reserved.
      </div>
    </>
  );
}

export default App;
