import { useState } from "react";
import { PrimeReactProvider } from "primereact/api";

import IdentityPanel from "./components/IdentityPanel";
import ActionMenu from "./components/ActionMenu";
import AboutMeDialog from "./components/AboutMeDialog";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <PrimeReactProvider>
      <IdentityPanel />
      <ActionMenu
        onClickAboutMe={() => setVisible(true)}
        onClickResume={() =>
          window.open(
            `${window.location.href}resume.pdf`,
            "_blank",
            "noopener=true,noreferrer=true"
          )
        }
        onClickLinkedIn={() =>
          window.open(
            "https://www.linkedin.com/in/joshua-guyette-854311113/",
            "_blank"
          )
        }
        onClickGitHub={() =>
          window.open("https://github.com/nightness", "_blank")
        }
      />
      <AboutMeDialog visible={visible} onHide={() => setVisible(false)} />
    </PrimeReactProvider>
  );
}

export default App;
