import React, { useState } from "react";
import DiscussionItem from "./DiscussionItem";

function DiscussionBoard({ discussions }) {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {discussions.map((discussion) => (
          <DiscussionItem discussion={discussion} />
        ))}
      </ul>
    </section>
  );
}

export default DiscussionBoard;
