import React from "react";
// import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul class="left_list">
      <li class="list_1 profile">
        <div class="list_icon">
          <span class="material-icons"> brightness_7 </span>
        </div>
        <div class="list__Sub">
          <strong>ChoiSeoEun</strong>
        </div>
      </li>
      <li class="list Now">
        <div class="list_icon">
          <span class="material-icons"> remove_red_eye </span>
        </div>
        <div class="list__Sub">
          <strong>My-Agora</strong>
        </div>
      </li>
      <li class="list">
        <div class="list_icon">
          <span class="material-icons"> calculate </span>
        </div>
        <div class="list__Sub">My-Calculator</div>
      </li>
      <li class="list">
        <div class="list_icon">
          <span class="material-icons"> assignment_ind </span>
        </div>
        <div class="list__Sub">Mini-Hack</div>
      </li>
      <li class="list">
        <div class="list_icon">
          <span class="material-icons"> wb_incandescent </span>
        </div>
        <div class="list__Sub">Mini-Hack</div>
      </li>
      <li class="list">
        <div class="list_icon">
          <span class="material-icons"> center_focus_weak </span>
        </div>
        <div class="list__Sub">Mini-Hack</div>
      </li>
    </ul>
  );
};

export default Sidebar;
