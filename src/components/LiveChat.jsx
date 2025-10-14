import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../redux/chatSlice";
import { generateRandomName, getRandomSentence } from "../utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const chatMsgs = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // API POLLING
    const interval = setInterval(() => {
      // console.log("API polling");
      dispatch(
        addChatMessages({
          name: generateRandomName(),
          message: getRandomSentence(),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[420px] rounded-lg border border-gray-400 bg-slate-100 shadow-lg overflow-y-auto flex flex-col-reverse">
        {chatMsgs.map((c, i) => {
          return <ChatMessage key={i} name={c.name} message={c.message} />;
        })}
      </div>
      <form
        className="flex gap-x-3 mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChatMessages({
              name: "Sampreeth Chetti",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="border border-gray-600 w-full rounded-lg px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-orange-300 px-2 rounded-lg ">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
