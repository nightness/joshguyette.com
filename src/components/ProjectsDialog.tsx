import { Dialog } from "primereact/dialog";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";

interface ProjectsDialogProps {
  projects: Project[];
  visible: boolean;
  onHide: () => void;
}

function ProjectsDialog({ projects, visible, onHide }: ProjectsDialogProps) {
  return (
    <Dialog
      header="Portfolio"
      visible={visible}
      style={
        {
          // width: "1000px",
          // maxHeight: "90%",
          // maxWidth: "2000px",
        }
      }
      onHide={onHide}
      closeOnEscape
      dismissableMask
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          userSelect: "none",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.link} project={project} />
        ))}
      </div>
    </Dialog>
  );
}

export default ProjectsDialog;
