import "./Home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Background, Parallax } from "react-parallax";
import bg from "../images/bg.jpg";
import Navbar from "./Navbar";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Projects from "./Projects";
import mern from "../documents/MERNwebapp.pdf";
import resume from "../documents/resume.pdf";
import homelab from "../documents/Homelab.pdf";

export default function Home() {
  return (
    <>
      <Parallax className="home" blur={2} bgImage={bg} strength={900}>
        <Navbar />
        <div className="home__contents">
          <section className="home__whoami" id="whoami">
            <div className="home__intro">
              Hello world, I am
              <h1>SIMANT</h1>
              <p>
                A computer enthusiast. I like the art of programming. I am
                interested in networking and computer security.
              </p>
              <div className="contacts">
                <p>shrestha01123@gmail.com</p>
                <p>
                  <Link
                    to={{ pathname: "https://github.com/Simant0" }}
                    target="_blank"
                  >
                    <AiFillGithub />
                    Simant0
                  </Link>
                </p>
                <p>
                  <Link to={{ pathname: resume }} target="_blank">
                    My Resume
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="home__education" id="education">
            <div className="title">
              <h2>Education</h2>
            </div>
            <div className="contents">
              <div className="contents__date">
                <p>2017-2021</p>
              </div>
              <div className="contents__event">
                <p>Bachelor's of Science in Computer Science</p>
                <p>Truman State University</p>
              </div>
            </div>
          </section>
          <section className="home__skills" id="skills">
            <div className="title">
              <h2>Skills</h2>
            </div>
            <div className="home__skillsContent">
              <div className="home__skillsBox">
                <h2>Programming Languages</h2>
                <div className="contents">
                  <ul style={{ "list-style-type": "none" }}>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C, C++</li>
                    <li>C#</li>
                    <li>HTML, CSS, javascript</li>
                    <li>Assembly(MIPS)</li>
                    <li>Frameworks: Reactjs, Express</li>
                  </ul>
                </div>
              </div>
              <div className="home__skillsBox">
                <h2>Tools and programs</h2>
                <div className="contents">
                  <ul style={{ "list-style-type": "none" }}>
                    <li>nmap, metasploit, beef</li>
                    <li>pfsense, snort</li>
                    <li>wireshark, postman, burpsuite</li>
                    <li>git, docker</li>
                    <li>mongodb, mysql</li>
                    <li>proxmox, vmware, virtualbox</li>
                    <li>unity3d, word, excel, powerpoint, latex</li>
                    <li>linux</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="home__projects" id="projects">
            <div className="title">
              <h2>My Projects</h2>
            </div>

            <Projects />
          </section>
          <section className="home__documents">
            <div className="title">
              <h2>Documents</h2>
            </div>
            <div className="documents">
              <div>
                <Link to={{ pathname: resume }} target="_blank">
                  Resume
                </Link>
              </div>
              <div>
                <Link to={{ pathname: mern }} target="_blank">
                  Full stack MERN web application paper
                </Link>
              </div>
              <div>
                <Link to={{ pathname: homelab }} target="_blank">
                  Homelab paper
                </Link>
              </div>
            </div>
          </section>
          <section className="home__end"></section>
        </div>
      </Parallax>
    </>
  );
}
