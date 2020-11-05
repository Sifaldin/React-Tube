// React core
import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../organisms/Header";


export default function Video({ match, information }) {



  const ID = Number(match.params.id);

  // Note:
  // Instead of receiving a specific video, we receive the entire list and then filter it by match.
  // This may seen ineficient, but think of servers instead of local content. There is not guarantee that
  // the data from information.json would have changed since the last visit if the author change the settings.

  const video = information.find((object) => object.id === ID);

  const {
    videoURL,
    title,
    views,
    uploadDate,
    channelThumb,
    channelName,
    suscribers,
    description,
  } = video;


  return (

    <div className="video-page">

      <Header />

      <div className="video-container">
        <video controls>
          <source src={videoURL} type="video/mp4" />
        </video>
      </div>

      <div className="body-container">
        <h1 className="title">{title}</h1>
        <p className="description"> {views} • {uploadDate}</p>

        <hr />

        <div className="meta-data">
          <div className="left">
            <img className="channel-thumb" src={channelThumb} alt="channel-thumbnail" />
          </div>
          <div className="right">
            <h1 className="title">{channelName}</h1>
            <p className="description">{suscribers} subscribers</p>
            <p className="description">{description}</p>
          </div>
        </div>

        <hr />

        <Link className = "button" to = "/">
          Home
        </Link>


      </div>


    </div>



  );
}

