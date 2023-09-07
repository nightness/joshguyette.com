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
        backgroundColor: "#2287",
        borderWidth: "0.2rem",
        borderColor: "#448",
        borderStyle: "solid",
        // boxShadow: "-0.7em 0.7em 0.6em #33F7",
        borderRadius: "2.5rem",
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
