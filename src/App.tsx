import { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <PrimeReactProvider>
      <Card
        title="Joshua Guyette"
        subTitle="New Glarus, WI"
        style={{
          marginBottom: "3rem",
          backgroundColor: "#ffffff80",
          boxShadow: "-1em 1em 0.5em #5558",
        }}
      >
        <i>Fullstack Software Engineer</i> | <i>React Native</i> |{" "}
        <i>Express.js</i>
      </Card>
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
