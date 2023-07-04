import { Card } from "primereact/card";

function IdentityPanel() {
  return (
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
  );
}

export default IdentityPanel;
