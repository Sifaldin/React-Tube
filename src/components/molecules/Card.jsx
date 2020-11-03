// React core
import React from "react";
import { Link } from "react-router-dom";


export default function Card({ data }) {


    const {
        id,
        title,
        description,
        channelName,
        channelThumb,
        views,
        videoThumb,
    } = data;

    return (

        <article>
            <Link to={`video/${id}`}>
                <img className="thumbnail" src={videoThumb} alt={description} />
            </Link>


            <aside className="meta-data">
                <div className="left">
                    <img className="channel-thumb" src={channelThumb} alt="channel-thumbnail" />
                </div>

                <div className="right">
                    <h3 className="title">{title}</h3>
                    <p className="description">{channelName}</p>
                    <p className="description">{views} views</p>
                </div>

            </aside>

        </article>

    )

}