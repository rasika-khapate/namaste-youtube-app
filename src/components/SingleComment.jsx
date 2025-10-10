const SingleComment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex px-2 py-1 my-2 content-center rounded-lg shadow-md bg-gray-100">
      <img
        src="https://thumbs.dreamstime.com/b/female-user-icon-long-shadow-white-background-235751029.jpg"
        alt="userIcon"
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SingleComment