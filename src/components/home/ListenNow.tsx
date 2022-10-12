import React from "react";
import { useState } from "react";

import SubHeading from "../layout/SubHeading";
import RowCol from "../wrappers/RowCol";
import Container from "../wrappers/Container";

import "../../assets/css/home/ListenNow.css";
import SpotifyLogo from "../../assets/img/home/listen-now/spotify-logo-image.png";
import ApplePodcastLogo from "../../assets/img/home/listen-now/apple-podcast-logo-image.png";

const ListenNow: React.FC = () => {
  const [showLatestEp, setShowLatestEp] = useState(false);

  const toggleShowLatestEp: () => void = () => {
    setShowLatestEp((prevState: boolean) => {
      return !prevState;
    });
  };

  return (
    <div id="listen-now">
      <RowCol
        rowClasses="row justify-content-center"
        colClasses="col-11 col-lg-10"
      >
        <SubHeading
          sectionHeading={"Listen"}
          title={"Available now on Spotify and Apple Podcasts"}
        />
        <Container container="listen-now-section overflow-hidden">
          <div className="row d-flex flex-row">
            <div className="col-12 col-md-3 col-xl-2">
              <div className="listenNowLinks">
                <img
                  src={SpotifyLogo}
                  alt="spotify logo"
                  className="listenNowLogo"
                />
                <img
                  src={ApplePodcastLogo}
                  alt="apple podcasts logo"
                  className="listenNowLogo"
                />
              </div>
            </div>
            <div className="col-12 col-sm">
              <div className="listenNowInfo">
                <h3>Keep Up To Date On Our Latest Shows</h3>
                <hr style={{ color: "#0b2272", opacity: "0.75" }} />
                <div className="listenNowDescription">
                  <p>
                    Have you been missing out on the latest Star Wars content?
                    Do not worry, we cover it all on our podcast! Join us as we
                    break down The Mandalorian, Obi-Wan Kenobi, and Andor. We
                    preview upcoming releases as well. Hope to you see
                    you there.
                  </p>
                  <button
                    onClick={toggleShowLatestEp}
                    type="button"
                    className="primaryButton"
                  >
                    {showLatestEp ? 'Hide Latest Episodes' : 'Get the Latest Episodes'}
                  </button>
                </div>
                {showLatestEp && (
                  <div className="row mt-5">
                    <div className="col-12 iFrame">
                      <iframe
                        title="podcast"
                        src="https://open.spotify.com/embed/episode/0VA9eVOXbzvjj83CQUzI1w?utm_source=generator&theme=0"
                        width="100%"
                        height="200"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </RowCol>
    </div>
  );
};

export default ListenNow;
