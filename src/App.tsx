import { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <PrimeReactProvider>
      <h1>Joshua Guyette</h1>
      <h2
        style={{
          paddingBottom: "5rem",
        }}
      >
        <i>Fullstack Software Engineer</i> | <i>React Native</i> |{" "}
        <i>Express.js</i>
      </h2>
      <Button
        label="About Me"
        className="p-button-raised p-button-rounded"
        style={{
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          marginBottom: "0.25rem",
          width: "8rem",
        }}
        onClick={() => setVisible(true)}
      />
      <Button
        label="Resume"
        className="p-button-raised p-button-rounded"
        style={{
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          marginBottom: "0.25rem",
          width: "8rem",
        }}
        onClick={() =>
          window.open("https://joshguyette.com/resume.pdf", "_blank")
        }
      />
      <Button
        label="LinkedIn"
        className="p-button-raised p-button-rounded"
        style={{
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          marginBottom: "0.25rem",
          width: "8rem",
        }}
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
        style={{
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          marginBottom: "0.25rem",
          width: "8rem",
        }}
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
