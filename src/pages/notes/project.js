import { useState } from "react";

export const Project = (props) => {
  const [projectName, setProjectName] = useState();

  // const addProject = async () => {
  //   const res = await fetch("http://127.0.0.1:8000/users/2/projects/", {
  //     method: "POST",
  //     body: JSON.stringify({ projectname: projectName }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  return (
    <>
      <div className="text-2xl font-semibold pt-5 items-center justify-center  flex flex-row">
        <img
          className="logo fill-slate-600 w-12 h-12"
          src="logo.svg"
          alt="logo"
        ></img>
        <h1 className="">Domynotes</h1>
      </div>
      <div className="py-3 px-4">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
        />
        {console.log(projectName)}
      </div>
      <div className="flex justify-center pt-2">
        <button
          type="button"
          // onClick={addProject}
          className="py-2 px-2 text-sm font-medium text-blue-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Add Project
        </button>
      </div>

      {props.data.map((projects) => (
        <div key={projects.id} className="pt-4 pl-2 space-y-2">
          <a href="">{projects.projectname}</a>
        </div>
      ))}
    </>
  );
};

export default Project;
