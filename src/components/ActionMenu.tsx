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
            backgroundColor: "#55F",
            // borderColor: "#AAF",
            boxShadow: "-0.4em 0.4em 0.5em #5050FF60",
          }}
          onClick={action.onClick}
        />
      ))}
    </>
  );
}

export default ActionMenu;
