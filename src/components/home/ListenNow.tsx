import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SubHeading from "../layout/SubHeading";
import RowCol from "../wrappers/RowCol";
import Container from "../wrappers/Container";

import "../../assets/css/home/ListenNow.css";
import SpotifyLogo from "../../assets/img/home/listen-now/spotify-logo-image.png";
import ApplePodcastLogo from "../../assets/img/home/listen-now/apple-podcast-logo-image.png";
import useAxios from "../../hooks/useAxios";

import { defaultAxiosParams } from "../../data/http-constants";
import Loader from "../ui/Loader";

const ListenNow: React.FC = () => {
  const [spotifyParams, setSpotifyParams] = useState({});
  const { isLoading, error, sendRequest } = useAxios();
  let [currentParams, setSearchParams] = useSearchParams();

  const authorizeAccess = () => {
    window.location.href =
      "https://accounts.spotify.com/authorize?" +
      new URLSearchParams(spotifyParams).toString();
  };

  useEffect(() => {
    let params = { ...defaultAxiosParams };
    params.url = params.url + "/api/spotify/getClientParams";

    (async function getSpotifyParams() {
      try {
        let data: object = await sendRequest(params);
        setSpotifyParams(data);
      } catch (err) {
        console.log("Oh no! An error occured.");
      }
    })();

    (async function getSpotifyAccessToken() {
      let accessCode = currentParams.get("code");
      if (accessCode) {
        let requestAccessTokenParams = { ...defaultAxiosParams };
        requestAccessTokenParams.url =
          requestAccessTokenParams.url + "/api/spotify/accessToken";
        requestAccessTokenParams.method = "POST";
        requestAccessTokenParams.data = {
          code: accessCode,
        };

        const tokens: any = await sendRequest(requestAccessTokenParams);

        let requestShowsParams = { ...defaultAxiosParams };
        requestShowsParams.url =
        requestShowsParams.url + "/api/spotify/shows";
        requestShowsParams.method = 'POST';
        requestShowsParams.data = {
          accessToken: tokens.access_token,
        };

        const { items } = await sendRequest(requestShowsParams);

        //we want items[0].id to include in url https://open.spotify.com/embed/episode/{id}?utm_source=generator

        setSearchParams(
          new URLSearchParams("state=" + currentParams.get("state"))
        );

      } else if (currentParams.get("error")) {
        //show error modal
      }
    })();
  }, [sendRequest, currentParams, setSearchParams]);

  return (
    <>
      {isLoading && <Loader />}
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
                      Do not worry, we cover it all on our podcast! Join us as
                      we break down The Mandalorian, Obi-Wan Kenobi, and Andor.
                      We preview upcoming releases as well. Hope to you see you
                      there.
                    </p>
                    <button
                      onClick={authorizeAccess}
                      type="button"
                      className="primaryButton"
                    >
                      Get the Latest Episodes
                    </button>
                  </div>
                  {error && <p>Oh no! Something went wrong!</p>}
                </div>
              </div>
            </div>
          </Container>
        </RowCol>
      </div>
    </>
  );
};

export default ListenNow;
