import { useState } from "react";

import IdentityPanel from "./components/IdentityPanel";
import ActionMenu from "./components/ActionMenu";
import AboutMeDialog from "./components/AboutMeDialog";

import "./App.css";
import ProjectsDialog from "./components/ProjectsDialog";
import { Project } from "./types";

const projects: Project[] = [
  {
    title: "Delta GPT",
    date: "Jun 2023 - Present",
    description:
      "Delta GPT is a mobile OpenAI chat client. Use at no additional cost to the user because it uses one of your OpenAI API key. [Coming soon for iOS and Android]",
    imageURL: "https://path-to-your-image.jpg",
    link: "https://link-to-project-demo-or-website.com",
    githubLink: "https://github.com/nightness/delta-gps",
  },
  {
    title: "SkateApp",
    date: "June 2022 to Present",
    description:
      "Browse and search for skateboard shops, spots and parks; also bookmark and share your favorite locations. It uses mapbox to display spots on a map. [Available for iOS and Android]",
    imageURL: "https://path-to-your-image.jpg",
    link: "https://skateapp.net",
  },
  {
    title: "TVPal",
    date: "Jan 2021 to April 2022",
    description:
      "TVPal was a mobile app that allows users to create a watch list of their favorite TV shows and movies. Users could also view the latest trending shows and movies, and search for new shows and movies to add to their watch list. [Discontinued and unreleased]",
    imageURL: "https://path-to-your-image.jpg",
  },
  {
    title: "TemPOS - Point of Sale System",
    date: "2010-2012",
    description:
      "Originally a restaurant wanted it, but they changed their minds. I continued the project anyways on my personal time. This was my first large scale project, and I learned a lot from do it. [Unfinished, lacks hardware support]",
    imageURL: "https://path-to-your-image.jpg",
    link: "https://link-to-project-demo-or-website.com",
    githubLink: "https://github.com/nightness/TemPOS",
  },
];

function App() {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  return (
    <div>
      <IdentityPanel
        title="Joshua Guyette"
        subTitle="Software Developer"
        roles={[
          "Fullstack Software Developer",
          "React",
          "React Native",
          "Express.js",
          "Node.js",
        ]}
      />
      <ActionMenu
        actions={[
          {
            label: "About Me",
            onClick: () => setIsAboutMeVisible(true),
          },
          {
            label: "Portfolio",
            onClick: () => setIsProjectsVisible(true),
          },
          {
            label: "Resume",
            onClick: () =>
              window.open(
                `${window.location.href}resume.pdf`,
                "_blank",
                "noopener=true,noreferrer=true"
              ),
          },
          {
            label: "LinkedIn",
            onClick: () =>
              window.open(
                "https://www.linkedin.com/in/joshua-guyette-854311113/",
                "_blank"
              ),
          },
          {
            label: "GitHub",
            onClick: () =>
              window.open("https://github.com/nightness", "_blank"),
          },
        ]}
      />
      <AboutMeDialog
        visible={isAboutMeVisible}
        onHide={() => setIsAboutMeVisible(false)}
      />
      <ProjectsDialog
        projects={projects}
        visible={isProjectsVisible}
        onHide={() => setIsProjectsVisible(false)}
      />
    </div>
  );
}

export default App;
