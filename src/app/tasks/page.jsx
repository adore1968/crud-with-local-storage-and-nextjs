"use client";
import TaskCard from "@/components/TaskCard";
import useApp from "@/hooks/useApp";

function TasksPage() {
  const { tasks } = useApp();

  return (
    <div className="container mx-auto">
      <h2 className="text-center mb-2.5 text-2xl sm:text-3xl font-bold">
        Tasks list
      </h2>
      <div className="sm:grid-cols-2 grid grid-cols-1 gap-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
