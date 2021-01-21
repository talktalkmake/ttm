import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import AppMarkdown from "../md/october.md";
import ReactMarkdown from "react-markdown";

const Writing = () => {
  const [md, setMd] = useState("");

  useEffect(() => {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown)
      .then(res => res.text())
      .then(setMd);
  });

  return (
    <React.Fragment>
      <header className="banner">
        <section className="girdle">
            <h1><Link to="/">Tom Hart</Link> / Writing</h1>
        </section>
      </header>
      <article className="meat">
        <section className="girdle">
            <h3>Short Stories</h3>
        </section>
        <ul className="story-covers">
          <li><a href="/short-stories#wolf">The Wolf</a></li>
          <li><a href="/short-stories#war">The War</a></li>
          <li><a href="/short-stories#star">The Star</a></li>
          <li><a href="/short-stories#light">The Light</a></li>
          <li><a href="/short-stories#dream">The Dream</a></li>
          <li><a href="/short-stories#desert">The Desert</a></li>
        </ul>
      </article>
    </React.Fragment>
  );
};

export default Writing;
