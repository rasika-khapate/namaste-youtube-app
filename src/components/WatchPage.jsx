import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HideMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { getYouTubeVideoDetailsAPI } from "../utils/Constants";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState();

  const videoId = searchParams.get("v");

  const disptach = useDispatch();

  useEffect(() => {
    disptach(HideMenu());

    const fetchVideoDetails = async () => {
      const fetchedWatchAPI = await fetch(getYouTubeVideoDetailsAPI(videoId));
      const json = await fetchedWatchAPI.json();
      // console.log(json.items);
      setVideoInfo(json.items[0]);
    };
    fetchVideoDetails();
  }, [videoId, disptach]);

  // console.log(videoInfo);

  return (
    <div className="mx-14 my-5 ">
      <iframe
        width="800"
        height="420"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-lg"
      ></iframe>

      {videoInfo && (
        <div>
          <h1 className="text-2xl font-bold">
            {videoInfo.snippet.localized.title}
          </h1>
          <div className="flex items-center">
            <p className="text-lg font-medium">
              {videoInfo.snippet.channelTitle}
            </p>
            <span className="ml-4">{videoInfo.statistics.viewCount} views</span>
          </div>
        </div>
      )}

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
