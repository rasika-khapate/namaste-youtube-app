const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-x-4 py-1 shadow-inner rounded-md m-0.5">
      <img
        src="https://yt4.ggpht.com/ytc/AIdro_meLtS1C8gl1i7ctdw977aqXq65ZlRYz3nJcpNHxhajLNpRpb2AVHlBghoDuIef2xu6gQ=s32-c-k-c0x00ffffff-no-rj"
        alt="user_chat_icon"
        className="w-7 h-7 rounded-full ml-4"
      />
      <span className="text-sm text-left font-semibold">{name}</span>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
