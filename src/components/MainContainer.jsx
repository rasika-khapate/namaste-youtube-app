import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import { OpenMenu } from "../redux/appSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MainContainer = () => {
  const disptach = useDispatch();

  useEffect(() => {
    disptach(OpenMenu());
  });

  return (
    <div className="shadow-lg w-10/12">
      {/* MainContainer */}
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
