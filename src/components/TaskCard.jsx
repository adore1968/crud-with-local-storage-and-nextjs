import useApp from "@/hooks/useApp";
import Link from "next/link";

function TaskCard({ task }) {
  const { deleteTask } = useApp();

  return (
    <div className="hover:bg-gray-800 last-of-type:mb-5 flex flex-col gap-5 p-5 transition-colors ease-in bg-gray-700 rounded">
      <div>
        <h3 className="sm:text-2xl text-xl font-medium">{task.title}</h3>
        <p className="sm:text-xl my-1 text-lg text-gray-200">
          {task.description}
        </p>
        <span className="sm:text-xl my-1 text-lg text-gray-200">{task.id}</span>
      </div>
      <div className="sm:text-xl flex justify-between text-lg">
        <Link
          href={`/update-task/${task.id}`}
          className="bg-emerald-700 hover:bg-emerald-600 inline-block px-4 py-2 transition-colors ease-in"
        >
          Update
        </Link>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-rose-700 hover:bg-rose-600 inline-block px-4 py-2 transition-colors ease-in"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
