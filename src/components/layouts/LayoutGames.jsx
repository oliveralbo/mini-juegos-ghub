import React from "react";


const content = {
  marginLeft: "1%",
  marginTop: "7%"
};

function LayoutGames(props) {
  return <div style={content}>{props.children}</div>;
}

export default LayoutGames;
