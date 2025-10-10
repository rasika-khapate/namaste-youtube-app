import React from "react";

const VideoCards = ({ info }) => {
  if (!info) return null;
  // console.log(info);

  const { snippet, statistics } = info;

  const { channelTitle, thumbnails, title } = snippet;

  const { viewCount } = statistics;
  return (
    <div className="p-2  w-60 shadow-md bg-gray-50 cursor-pointer rounded-md">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-md" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle} ✅</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export const RedBorderVideoCard = ({info}) => {
  return (
    <>
      <div className="p-1  border-2 border-orange-300  bg-teal-100">
        <VideoCards info={info} />
      </div>
    </>
  );
};

// export const RedBorderVideoCard = (VideoCards) => {
//   return (props) => {
//     return (
//       <>
//         <div className="p-1  border-2 border-orange-300  bg-teal-100">
//           <VideoCards {...props} />
//         </div>
//       </>
//     );
//   };
// };

export default VideoCards;
