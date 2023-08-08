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
      "This is a description of my awesome project. It does X, Y, and Z and uses technologies A, B, and C.",
    imageURL: "https://path-to-your-image.jpg",
    link: "https://link-to-project-demo-or-website.com",
    githubLink: "https://github.com/yourusername/project-repo",
  },
  {
    title: "SkateApp",
    date: "June 2022 to Present",
    description: "",
    imageURL: "https://path-to-your-image.jpg",
    link: "https://skateapp.net",
    githubLink: "https://github.com/yourusername/project-repo",
  },
  {
    title: "My Awesome Project #3",
    date: "Jan 2023",
    description:
      "This is a description of my awesome project. It does X, Y, and Z and uses technologies A, B, and C.",
    imageURL: "https://path-to-your-image.jpg",
    link: "https://link-to-project-demo-or-website.com",
    githubLink: "https://github.com/yourusername/project-repo",
  },
  {
    title: "My Awesome Project #4",
    date: "Jan 2023",
    description:
      "This is a description of my awesome project. It does X, Y, and Z and uses technologies A, B, and C.",
    imageURL: "https://path-to-your-image.jpg",
    link: "https://link-to-project-demo-or-website.com",
    githubLink: "https://github.com/yourusername/project-repo",
  },
  {
    title: "My Awesome Project #5",
    date: "Jan 2023",
    description:
      "This is a description of my awesome project. It does X, Y, and Z and uses technologies A, B, and C.",
    imageURL: "https://path-to-your-image.jpg",
    link: "https://link-to-project-demo-or-website.com",
    githubLink: "https://github.com/yourusername/project-repo",
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
