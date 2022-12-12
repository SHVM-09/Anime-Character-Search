import React from 'react'
import "./Footer.css";
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
function Footer() {
  return (
    <div className="foot">
      <p>&copy; Shivam Upadhyay</p>
      <p>
        <SiRedux /> <DiReact /> <AiFillHtml5 /> <DiCss3 /> <DiJavascript />
        <SiBootstrap /> <DiCode />
      </p>
    </div>
  );
}

export default Footer