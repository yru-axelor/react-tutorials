import React from "react";
import profileImg from "./../assets/profile.jpg";
function Work() {
  return (
    <div class="work">
      <h3>my portfolio</h3>
      <div id="work">
        <div class="card">
          <img src={profileImg} alt="project" />
          <p>description</p>
        </div>
        <div class="card">
          <img src={profileImg} alt="project" />
          <p>description</p>
        </div>
        <div class="card">
          <img src={profileImg} alt="project" />
          <p>description</p>
        </div>
        <div class="card">
          <img src={profileImg} alt="project" />
          <p>description</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
