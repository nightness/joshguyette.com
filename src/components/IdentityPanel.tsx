import { Card } from "primereact/card";

interface Props {
  title: string;
  subTitle: string;
  roles: string[];
}

function IdentityPanel({ title, subTitle, roles }: Props) {
  return (
    <Card
      title={title}
      subTitle={subTitle}
      style={{
        marginBottom: "3rem",
        color: "#FFFFFF",
        backgroundColor: "#5050FFBB",
        boxShadow: "-0.7em 0.7em 0.6em #5050FF60",
      }}
    >
      {roles.map((role, index) =>
        index + 1 < roles.length ? (
          <>
            <i key={role}>{role}</i> | &nbsp;
          </>
        ) : (
          <i key={role}>{role}</i>
        )
      )}
    </Card>
  );
}

export default IdentityPanel;
