import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-gray-800">
      <h1 className="sm:text-2xl text-xl font-semibold">
        <Link href="/">Tasks</Link>
      </h1>
      <ul className="sm:text-xl flex items-center gap-10 text-lg text-gray-200">
        <li>
          <Link
            href="/add-task"
            className="bg-emerald-700 hover:bg-emerald-600 inline-block px-4 py-2 transition-colors ease-in"
          >
            Add task
          </Link>
        </li>
        <li>
          <Link
            href="/tasks"
            className="bg-rose-700 hover:bg-rose-600 inline-block px-4 py-2 transition-colors ease-in"
          >
            Tasks
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
