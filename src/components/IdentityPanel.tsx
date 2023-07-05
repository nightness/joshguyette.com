import { Card } from "primereact/card";

function IdentityPanel() {
  return (
    <Card
      title="Joshua Guyette"
      subTitle="New Glarus, WI"
      style={{
        marginBottom: "3rem",
        color: "#FFFFFF",
        backgroundColor: "#ffa500bb",
        boxShadow: "-1em 1em 0.5em #FFA50060",
      }}
    >
      <i>Fullstack Software Engineer</i> | <i>React</i> | <i>React Native</i> |{" "}
      <i>Express.js</i>
    </Card>
  );
}

export default IdentityPanel;
