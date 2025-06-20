const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Your feet deserve nothing but the best — and that's exactly what we deliver. Step into comfort, style, and support with our premium footwear designed to care for every step you take.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/amazon.png?raw=true" alt="amazon-logo" />
            <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/flipkart.png?raw=true" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/hero-image.png?raw=true" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;