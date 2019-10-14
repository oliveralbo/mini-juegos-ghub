import React from "react";

const cont = {
  marginTop: "20%",
  marginLeft: "25%"
};

function LayoutPres(props) {
  return <div style={cont}>{props.children}</div>;
}

export default LayoutPres;
