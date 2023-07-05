import { useState } from "react";

import IdentityPanel from "./components/IdentityPanel";
import ActionMenu from "./components/ActionMenu";
import AboutMeDialog from "./components/AboutMeDialog";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <IdentityPanel
        title="Joshua Guyette"
        subTitle="Software Developer"
        roles={[
          "Fullstack Software Engineer",
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
            onClick: () => setVisible(true),
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
      <AboutMeDialog visible={visible} onHide={() => setVisible(false)} />
    </div>
  );
}

export default App;
