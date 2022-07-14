import React from "react";
import user from "../data/user";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <h3>Links</h3>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <link href="{props.Links.linkedin}"/>
    </div>
  );
}

export default About;
