import { Button } from "primereact/button";

interface Props {
  onClickAboutMe: () => void;
  onClickResume: () => void;
  onClickLinkedIn: () => void;
  onClickGitHub: () => void;
}

function ActionMenu({
  onClickAboutMe,
  onClickResume,
  onClickLinkedIn,
  onClickGitHub,
}: Props) {
  return (
    <>
      <Button
        label="About Me"
        className="p-button-raised p-button-rounded"
        style={{
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          marginBottom: "0.25rem",
          width: "8rem",
          backgroundColor: "orange",
          borderColor: "darkorange",
        }}
        onClick={onClickAboutMe}
      />
      <Button
        label="Resume"
        className="p-button-raised p-button-rounded"
        style={{
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          marginBottom: "0.25rem",
          width: "8rem",
          backgroundColor: "orange",
          borderColor: "darkorange",
        }}
        onClick={onClickResume}
      />
      <Button
        label="LinkedIn"
        className="p-button-raised p-button-rounded"
        style={{
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          marginBottom: "0.25rem",
          width: "8rem",
          backgroundColor: "orange",
          borderColor: "darkorange",
        }}
        onClick={onClickLinkedIn}
      />
      <Button
        label="GitHub"
        className="p-button-raised p-button-rounded"
        style={{
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          marginBottom: "0.25rem",
          backgroundColor: "orange",
          borderColor: "darkorange",
          width: "8rem",
        }}
        onClick={onClickGitHub}
      />
    </>
  );
}

export default ActionMenu;
