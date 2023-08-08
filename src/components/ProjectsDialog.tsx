import { Dialog } from "primereact/dialog";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface ProjectsDialogProps {
  projects: Project[];
  visible: boolean;
  onHide: () => void;
}

// Define the constant for max dialog width
const MAX_DIALOG_WIDTH = 1710; // You can adjust this value as needed

function getInterpolatedWidthFactor(screenWidth: number): number {
  const breakpointStart = 500; // start of interpolation range
  const breakpointEnd = 600; // end of interpolation range

  if (screenWidth <= breakpointStart) return 0.9;
  if (screenWidth >= breakpointEnd) return 0.8;

  // Linear interpolation between 0.9 and 0.8
  const t = (screenWidth - breakpointStart) / (breakpointEnd - breakpointStart);
  return 0.9 + t * (0.8 - 0.9);
}

function ProjectsDialog({ projects, visible, onHide }: ProjectsDialogProps) {
  const { width, height } = useWindowDimensions();

  const projectCardWidth = 345;
  const totalWidth = projects.length * projectCardWidth;

  const dialogWidth = Math.min(totalWidth, width, MAX_DIALOG_WIDTH); // Ensure dialog width doesn't exceed the constant
  const maxWidthFactor = width < 600 ? 0.9 : 0.8;

  return (
    <Dialog
      header="Portfolio"
      visible={visible}
      style={{
        width: `${dialogWidth}px`,
        maxWidth: `${width * maxWidthFactor}px`,
      }}
      onHide={onHide}
      closeOnEscape
      dismissableMask
    >
      {/* Container for the overflow */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          userSelect: "none",
          overflow: "visible",
          backgroundColor: "transparent",
        }}
      >
        {/* Container for the cards, this overflow if too many */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            userSelect: "none",
            alignItems: "center",
            justifyContent: "flex-start",
            // borderColor: "red",
            // borderWidth: "2px",
            // borderStyle: "solid",
            gap: "1rem",
            // Add additional spacing to the right to account for the scrollbar
            // transform: "translateX(-1rem)",
            paddingRight: "1rem",
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
