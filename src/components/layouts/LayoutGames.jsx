import React from "react";
import { makeStyles } from "@material-ui/styles";

const content = {
  marginLeft: "1%",
  marginTop: "7%"
};

function LayoutGames(props) {
  return <div style={content}>{props.children}</div>;
}

export default LayoutGames;
