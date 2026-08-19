import { HiShieldExclamation } from "react-icons/hi2";
import { Link } from "react-router";

const Forbidden = () => {
  

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-200 px-6">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <HiShieldExclamation className="text-5xl text-red-600" />
        </div>

        <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-slate-900">
          403
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-slate-800">
         Unauthorized Access
        </h2>

        <p className="mt-4 leading-8 text-slate-500">
         You do not have permission to access this page
          <br />
         If you believe this is a mistake, please contact the system administrator.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-xl bg-[#2A2D53] px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
          >
           Back to Home Page
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Forbidden;
