import { Dialog } from "primereact/dialog";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface ProjectsDialogProps {
  projects: Project[];
  visible: boolean;
  onHide: () => void;
}

function ProjectsDialog({ projects, visible, onHide }: ProjectsDialogProps) {
  const { width, height } = useWindowDimensions();

  // Assuming each ProjectCard has a width of 200px (you can adjust this value)
  const projectCardWidth = 345;
  const totalWidth = projects.length * projectCardWidth;

  // Use the smaller value between totalWidth and screen width
  const dialogWidth = Math.min(totalWidth, width);

  return (
    <Dialog
      header="Portfolio"
      visible={visible}
      style={{
        width: `${dialogWidth}px`,
        maxWidth: `${width - 40}px`,
      }}
      onHide={onHide}
      closeOnEscape
      dismissableMask
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          userSelect: "none",
          overflow: "visible",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
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
      </div>
    </Dialog>
  );
}

export default ProjectsDialog;
