
import Button from './Button.jsx';

export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-2/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl sidebar-background">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Task Schedules</h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add a new Task
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200';
          } else {
            cssClasses += ' text-stone-400';
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}>
                {project.description}_{project.option}_TaskStart-{project.dueDate}_TaskDeadline-{project.endDate}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
