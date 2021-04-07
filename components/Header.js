import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.height}>
      <div className={headerStyles.insider}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/296625/pexels-photo-296625.jpeg?cs=srgb&dl=pexels-lukas-296625.jpg&fm=jpg"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <div className={headerStyles.captionseffects}>
                  <h3>USBs</h3>
                  <p className={headerStyles.captionsbody}>
                    {" "}
                    Connect your phone to a charge or PC from our USB variety
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src="https://images.pexels.com/photos/696645/pexels-photo-696645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption  d-md-block">
                <div className={headerStyles.captionseffects}>
                  <h3>Phone cases</h3>
                  <p className={headerStyles.captionsbody}>
                    Cover your phone to protect it from dust and shock, we have
                    them all.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/3756943/pexels-photo-3756943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption d-md-block mw-100">
                <div className={headerStyles.captionseffects}>
                  <h3>Headsets</h3>
                  <p className={headerStyles.captionsbody}>
                    Listen to quality sound from our collection of headsets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
