import { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Resume from "./assets/resume.pdf";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <PrimeReactProvider>
      <h1>Joshua Guyette's Portfolio</h1>
      <Button
        label="About"
        className="p-button-raised p-button-rounded"
        style={{ marginRight: "1rem" }}
        onClick={() => setVisible(true)}
      />
      <Button
        label="Resume"
        className="p-button-raised p-button-rounded"
        style={{ marginRight: "1rem" }}
        onClick={() =>
          // window.open("https://joshguyette.com/resume.pdf", "_blank")
          console.log(Resume)
        }
      />
      <Button
        label="LinkedIn"
        className="p-button-raised p-button-rounded"
        style={{ marginRight: "1rem" }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/joshua-guyette-854311113/",
            "_blank"
          )
        }
      />
      <Button
        label="GitHub"
        className="p-button-raised p-button-rounded"
        onClick={() => window.open("https://github.com/nightness", "_blank")}
      />
      <Dialog
        header="About Me"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">Work in progress</p>
      </Dialog>
    </PrimeReactProvider>
  );
}

export default App;
