const Google_API_Key = "AIzaSyB1tYRmA_kyIQg_GbD6agRPtXYP-J1VMI4";

// AIzaSyALnhmhCNfWFiZrB_GAgFeEi9QRQsis9Iw - October 8, 2025 at 8:06:12 PM GMT+5 - My Project 38742

// AIzaSyASvYQ2I1fCKXB1VrMvqIGSz-k35-DqKQM - October 8, 2025 at 8:11:14 PM GMT+5 - My Project 89309

// AIzaSyB1tYRmA_kyIQg_GbD6agRPtXYP-J1VMI4 - October 7, 2025 at 6:26:48 PM - My Project 38742

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=15&key=" +
  Google_API_Key;

export const getYouTubeVideoDetailsAPI = (videoId) => {
  return `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${Google_API_Key}`;
};

export const getYoutubeSearchAPI = (searchId) => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchId}&key=${Google_API_Key}`;
};
