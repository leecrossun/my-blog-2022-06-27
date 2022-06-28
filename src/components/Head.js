
import React from "react";
import { Link } from "gatsby";
function Head() {
  return (
      <header style={{display:"flex", gap: 10}}>
          <Link to="/" style={{padding:10}}>logo</Link>
          <Link to="/about" style={{padding:10}}>about</Link>
          <Link to="/test" style={{padding:10}}>test</Link>
          <Link to="/test-space" style={{padding:10}}>test-space</Link>
        </header>
  );
}

export default Head;