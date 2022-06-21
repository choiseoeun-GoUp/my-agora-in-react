import React, { useState } from "react";

function Discussion({ discussion }) {
  const { id, url, author, avatarUrl, title, createdAt, answer } = discussion;

  return (
    <li class="discussion__container">
      <div class="discussion__inner--main">
        <div class="discussion__avatar--wrapper">
          <img
            class="discussion__avatar--image"
            src={avatarUrl}
            alt={`avatar of ${author}`}
          />
        </div>
        <div class="discussion__content">
          <h2 class="discussion__title">
            <a href={url}>{title}</a>
          </h2>
          <div class="discussion__information">{`${author} / ${new Date(
            createdAt
          ).toLocaleTimeString()}`}</div>
        </div>
        <div class="discussion__answered">
          <input type="checkbox" class="active" checked />
        </div>
      </div>
    </li>
  );
}

export default Discussion;
