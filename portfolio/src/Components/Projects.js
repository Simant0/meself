import "./Projects.css";
import React from "react";
import { Link } from "react-router-dom";
import homelab from "../documents/Homelab.pdf";

export const ProjectLists = [
  {
    title: "Full Stack web development",
    language: "Language used: javascript",
    info:
      "Developed a prototype website using React, Nodejs, Express and Mongodb. Website is for a restaturant with features like online ordering, order status tracking for customers and the admin can manage products and orders while employees can set the status of the order.",
    link: "https://99fud.com",
  },
  {
    title: "High Availability Cluster Prototype",
    language: "Language used: java",
    info:
      "A prototype of high availability cluster for peer-to-peer and server-client networks which recovers the failed server. It uses heart-beat protocol for detecting failed nodes in the network",
    link: "https://github.com/Simant0/HACprototype",
  },
  {
    title: "Phylogenetic tree constructor",
    language: "Language used: python",
    info:
      "A python program to calculate genetic distance between a set of dna inputs and finds the appropriate phylogenetic tree. The algorithm used is Neighbour-Joining algorithm. Pairwise comparision is carried out to find the genetic differences. Dynamic programming for string alignment is implemented for comparing dna.",
    link: "https://github.com/Simant0/NeighbourJoining",
  },
  {
    title: "Home lab secure network",
    language: "",
    info:
      "Home lab setup with pfsense as router( gateway to internet) on old computer, proxmox as hypervisor, vulnerable virtual machine( dvwa, metasploitable), windows and kali linux.",
    link: homelab,
  },
];

function Projects() {
  const projectCard = (project) => {
    return (
      <div className="projectCard">
        <Link to={{ pathname: project.link }} target="_blank">
          <div className="projectCardTitle">
            <div>
              {project.title}
              <div> {project.language}</div>
            </div>
          </div>
          <div className="projectCardInfo">{project.info}</div>
        </Link>
      </div>
    );
  };

  return (
    <div className="projects">
      {ProjectLists.map((val, key) => {
        return projectCard(val);
      })}
    </div>
  );
}

export default Projects;
