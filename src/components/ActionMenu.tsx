import { Button } from "primereact/button";

interface Action {
  label: string;
  onClick: () => void;
}

interface Props {
  actions: Action[];
}

function ActionMenu({ actions }: Props) {
  return (
    <>
      {actions.map((action) => (
        <Button
          key={action.label}
          label={action.label}
          className="p-button-raised p-button-rounded"
          style={{
            marginRight: "0.5rem",
            marginLeft: "0.5rem",
            marginBottom: "0.25rem",
            width: "8rem",
            backgroundColor: "#2287",
            // borderColor: "#AAF",
            // boxShadow: "-0.2em 0.2em 0.25em #22A6",
          }}
          onClick={action.onClick}
        />
      ))}
    </>
  );
}

export default ActionMenu;
