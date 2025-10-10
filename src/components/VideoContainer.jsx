import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/Constants";
import VideoCards, { RedBorderVideoCard } from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  // console.log(videos);

  useEffect(() => {
    const videoApi = async () => {
      try {
        const apiData = await fetch(YOUTUBE_API);
        const json = await apiData.json();
        // console.log(json.items);
        setVideos(json.items);
      } catch (error) {
        console.error("Error fetching Video");
      }
    };

    videoApi();
  }, []);

  // const RedBorderedCard = RedBorderVideoCard(VideoCards);

  return (
    <div className="flex flex-wrap justify-start gap-5 ml-2">
      {videos.map((videoItem, index) => (
        <Link key={videoItem.id} to={"/watch?v=" + videoItem.id}>
          {index % 2 === 0 ? (
            <RedBorderVideoCard info={videoItem} />
          ) : (
            // <RedBorderedCard info={videoItem} />
            <VideoCards info={videoItem} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
