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
        backgroundColor: "#ffa500bb",
        boxShadow: "-1em 1em 0.5em #FFA50060",
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
