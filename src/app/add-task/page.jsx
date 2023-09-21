"use client";
import useApp from "@/hooks/useApp";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function AddTaskPage({ params }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const { createTask, getTask, updateTask } = useApp();
  const router = useRouter();
  const { id } = params;

  const onSubmit = handleSubmit((data) => {
    if (!id) createTask(data);
    else updateTask(id, data);
    reset();
    router.push("/tasks");
  });

  useEffect(() => {
    if (id) {
      const task = getTask(id);
      if (task) {
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const setButtonColors = () => {
    if (id) return "bg-emerald-700 hover:bg-emerald-600";
    return "bg-rose-700 hover:bg-rose-600";
  };

  return (
    <div className=" flex justify-center">
      <div className="max-w-2xl">
        <h2 className="sm:text-3xl mb-2.5 text-2xl font-bold text-center">
          {id ? "Update task" : "New task"}
        </h2>
        <form
          onSubmit={onSubmit}
          className="hover:bg-gray-800 p-5 transition-colors ease-in bg-gray-700"
        >
          <label htmlFor="title" className="sm:text-2xl text-xl font-medium">
            The title of the task
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            {...register("title", {
              required: {
                value: true,
                message: "This field must be required",
              },
            })}
            className="bg-gray-950 sm:text-xl w-full p-2 mt-1 mb-5 text-lg text-gray-200 rounded"
          />
          {errors.title && <p>{errors.description.message}</p>}

          <label
            htmlFor="description"
            className="sm:text-2xl text-xl font-medium"
          >
            The description of the task
            <textarea
              id="description"
              rows="5"
              placeholder="Description"
              {...register("description", {
                required: {
                  value: true,
                  message: "This field must be required",
                },
              })}
              className="bg-gray-950 sm:text-xl w-full p-2 mt-1 mb-5 text-lg text-gray-200 rounded resize-none"
            ></textarea>
          </label>
          {errors.description && <p>{errors.description.message}</p>}

          <button
            type="submit"
            className={`${setButtonColors()} px-4 py-2 mx-auto block text-lg sm:text-xl transition-colors ease-in`}
          >
            {id ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskPage;
