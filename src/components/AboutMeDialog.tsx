import { Dialog } from "primereact/dialog";

function AboutMeDialog({
  visible,
  onHide,
}: {
  visible: boolean;
  onHide: () => void;
}) {
  return (
    <Dialog
      header="About Me"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={onHide}
      closeOnEscape
      dismissableMask
    >
      <p className="m-0">Work in progress</p>
    </Dialog>
  );
}

export default AboutMeDialog;
