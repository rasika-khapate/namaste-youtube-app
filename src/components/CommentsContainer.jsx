import React from "react";
import CommentsData from "../utils/CommentsData";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((eachCom, index) => (
        <div key={index}>
          {/* DISCLAIMER : dont use indexes as keys */}
          <SingleComment data={eachCom} />
          <div className="pl-5 ml-5 border border-l-black">
            {/* RECURSION CONCEPT */}
            <CommentsList comments={eachCom.replies} />
          </div>
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="mt-4">
      <h1 className="font-bold">Comments : </h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;

// Step 1: Create a comment container
// Step 2 : Create a functional component to render a single component
// Steps 3 : Create a functional component to render a LIST of comments (which is the single comment) by consuming the functional component created render a single component
// 3a . Since we pass the entire comments data(which is an array of objects) to commentsList , we have to map over the consumed entire list of CommentsData and then render the single component function, and for this single component pass in the map's eachCom data for it to render data
// 3b. Now for "replies", replies is nothing but again a LIST OF COMMENTS , we already have CommentList component for it , hence we RECURSIVELY call wahi component itself by passing the maps's eachCom variable .replies to access only replies and render it with appropriate styling
