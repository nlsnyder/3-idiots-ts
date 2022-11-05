import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SubHeading from "../layout/SubHeading";
import RowCol from "../wrappers/RowCol";
import Container from "../wrappers/Container";

import "../../assets/css/home/ListenNow.css";
import "../../assets/css/ui/Modal.css";
import SpotifyLogo from "../../assets/img/home/listen-now/spotify-logo-image.png";
import ApplePodcastLogo from "../../assets/img/home/listen-now/apple-podcast-logo-image.png";
import useAxios from "../../hooks/useAxios";

import { defaultAxiosParams } from "../../data/http-constants";
import Loader from "../ui/Loader";
import Modal from "../ui/Modal";
import ErrorsList from "../ui/ErrorsList";

const ListenNow: React.FC = () => {
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const [spotifyParams, setSpotifyParams] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { isLoading, errors, sendRequest, clearError, setErrors } = useAxios();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const closeErrorModal = () => {
    clearError();
    setShowErrorModal(false);
  };

  const authorizeOrClearEpisodes = () => {
    //if there are podcast episodes already rendered, it means they wanted to clear the episodes
    if (podcastEpisodes.length > 0) {
      setPodcastEpisodes([]);
      return;
    }
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
      let accessCode = searchParams.get('code');
      console.log(`code = ${accessCode}`);
      if (accessCode) {
        let requestAccessTokenParams = { ...defaultAxiosParams };
        requestAccessTokenParams.url =
          requestAccessTokenParams.url + "/api/spotify/accessToken";
        requestAccessTokenParams.method = "POST";
        requestAccessTokenParams.data = {
          code: accessCode,
        };

        let tokens: any;
        try {
          tokens = await sendRequest(requestAccessTokenParams);
        } catch (err) {
          console.log("Oh no! An error occured.");
        }

        let requestShowsParams = { ...defaultAxiosParams };
        requestShowsParams.url = requestShowsParams.url + "/api/spotify/shows";
        requestShowsParams.method = "POST";
        requestShowsParams.data = {
          accessToken: tokens.access_token,
        };

        //MUST CACHE THESE EPISODES SO A NEW REQUEST DOESN'T NEED TO BE MADE
        try {
          const { shows } = await sendRequest(requestShowsParams);
          setPodcastEpisodes(shows.items);
          //we want items[0].id to include in url https://open.spotify.com/embed/episode/{id}?utm_source=generator

          navigate("/home?state=" + searchParams.get('state'), { replace: true });
        } catch (err) {
          console.log("Oh no! An error occurred.");
        }
      } else if (searchParams.get('error')) {
        setErrors([{ msg: "An error occurred trying to grab the latest podcast episodes." }]);
        setShowErrorModal(true);
      }
    })();
  }, [sendRequest, navigate, searchParams, setErrors]);

  return (
    <>
      {isLoading && <Loader />}
      <Modal
        show={errors || showErrorModal ? true : false}
        header="Error"
        type="error"
        footer={
          <button onClick={closeErrorModal} className="btnCommon">
            Close
          </button>
        }
        onClose={closeErrorModal}
      >
        {errors && <ErrorsList errors={errors} />}
      </Modal>

      <div id="listen-now">
        <RowCol
          rowClasses="row justify-content-center"
          colClasses="col-11 col-lg-10"
        >
          <SubHeading
            sectionHeading="Listen"
            title="Available now on Spotify and Apple Podcasts"
          />
          <Container container="listen-now-section overflow-hidden">
            <div className="row d-flex flex-row">
              <div className="col-12 col-md-3 col-xl-2">
                <div className="listenNowLinks">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://open.spotify.com/show/173jVGeywfKnIW9mp6gG71"
                  >
                    <img
                      src={SpotifyLogo}
                      alt="Spotify logo"
                      className="listenNowLogo"
                    />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://podcasts.apple.com/us/podcast/3-idiots-and-a-star-wars-podcast/id1591536603"
                  >
                    <img
                      src={ApplePodcastLogo}
                      alt="Apple Podcasts logo"
                      className="listenNowLogo"
                    />
                  </a>
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
                      onClick={authorizeOrClearEpisodes}
                      type="button"
                      className="primaryButton"
                    >
                      {podcastEpisodes.length > 0
                        ? "Hide the Latest Episodes"
                        : "Get the Latest Episodes"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </RowCol>
        <div className="row justify-content-center">
          {podcastEpisodes.map((episode: any, index: number) => {
            return (
              <div className="col-10" key={index}>
                <iframe
                  title={`Podcast episode ${index}`}
                  style={{ borderRadius: "1.2rem" }}
                  src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator&theme=0`}
                  width="100%"
                  height="200"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListenNow;
