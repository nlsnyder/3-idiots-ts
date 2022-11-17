import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import SubHeading from "../layout/SubHeading";
import RowCol from "../wrappers/RowCol";
import Container from "../wrappers/Container";

import "../../assets/css/home/ListenNow.css";
import "../../assets/css/ui/Modal.css";
import SpotifyLogo from "../../assets/img/home/listen-now/spotify-logo-image.png";
import ApplePodcastLogo from "../../assets/img/home/listen-now/apple-podcast-logo-image.png";

import { defaultAxiosParams } from "../../data/http-constants";
import Loader from "../ui/Loader";
import Modal from "../ui/Modal";
import ErrorsList from "../ui/ErrorsList";
import { BaseAxiosRequest } from "../../models/interfaces/http-interfaces";
import { ApiRequestError } from "../../models/interfaces/form-interfaces";
import useAxios from "../../hooks/useAxios";

const grabClientParams = async () => {
  let axiosParams: BaseAxiosRequest = { ...defaultAxiosParams };
  axiosParams.url = axiosParams.url + "/api/spotify/getClientParams";

  return await axios.request(axiosParams);
};

const ListenNow: React.FC<{}> = () => {
  const showRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorList, setErrorList] = useState<Array<ApiRequestError>>([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isLoading, errors, sendRequest, clearError } = useAxios();
  const clientParams: any = useQuery(
    "clientParams",
    useCallback(grabClientParams, []),
    {
      retry: 0,
    }
  );

  let errorListToShow = errors.concat(errorList);
  let loading = clientParams.isLoading || isLoading;
  let showError = showErrorModal || errors.length > 0;

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setErrorList([]);
    clearError();
    navigate("/home", {
      replace: true,
    });
  };

  const authorizeOrClearEpisodes = () => {
    //if there are podcast episodes already rendered, it means they wanted to clear the episodes
    if (podcastEpisodes.length > 0) {
      setPodcastEpisodes([]);
    } else {
      window.location.href =
        "https://accounts.spotify.com/authorize?" +
        new URLSearchParams(clientParams.data?.data).toString();
    }
  };

  useEffect(() => {
    (async function getSpotifyPodcastEpisodes() {
      let accessCode = searchParams.get("code");
      let error = false;
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
          error = tokens?.status === 'failed';
        } catch (err) {
          errorList.push({
            msg: "An unknown error occurred. Please refresh the page and try again.",
          });
          error = true;
        }

        let requestShowsParams = { ...defaultAxiosParams };
        requestShowsParams.url = requestShowsParams.url + "/api/spotify/shows";
        requestShowsParams.method = "POST";
        requestShowsParams.data = {
          accessToken: tokens?.access_token,
        };

        if (!error) {
          try {
            const { shows } = await sendRequest(requestShowsParams);
            setPodcastEpisodes(shows.items);
            //we want items[0].id to include in url https://open.spotify.com/embed/episode/{id}?utm_source=generator

            navigate("/home?state=" + searchParams.get("state"), {
              replace: true,
            });

            //scroll to the shows as they render
            showRef.current.scrollIntoView();
          } catch (err) {
            errorList.push({
              msg: "An unknown error occurred. Please refresh the page and try again.",
            });
          }
        }
      } else if (searchParams.get("error")) {
        errorList.push({
          msg: "An error occurred trying to grab the latest podcast episodes.",
        });
        setShowErrorModal(true);
      }
    })();
  }, [searchParams, navigate, sendRequest, errorList]);

  return (
    <>
      {loading && <Loader />}

      <Modal
        show={showError}
        header="Error"
        type="error"
        footer={
          <button onClick={closeErrorModal} className="btnCommon">
            Close
          </button>
        }
        onClose={closeErrorModal}
      >
        <ErrorsList errors={errorListToShow} />
      </Modal>

      {/* Listen now section */}
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
        <div className="row justify-content-center" ref={showRef}>
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
