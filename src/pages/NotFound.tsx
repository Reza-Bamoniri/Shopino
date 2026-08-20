import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-dvh items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-purple-200">
          <HiMagnifyingGlass className="h-14 w-14 text-purple-600" />
        </div>

        <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-slate-900">
          404
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-slate-800">
         Not Found Page
        </h2>

        <p className="mt-4 leading-8 text-slate-500">
         The page you are looking for does not exist or may have been removed,
          the address may have changed, or the link may have been entered incorrectly.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-xl bg-[#2A2D53] px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-[#5d63af] hover:shadow-lg"
          >
           Back to Home Page
          </Link>

          <button
            onClick={() => navigate("/")}
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100"
          >
           Return
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
