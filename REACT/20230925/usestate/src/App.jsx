import React, { useState } from "react";

function Resume(props) {
  const [like, setLike] = useState("");
  function clickLike() {
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
     
      <button onClick={clickLike}>like</button> <span>{like}</span>
    </div>
  );
}

export default Resume;