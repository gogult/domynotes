import Project from "../pages/notes/project";
import NotesList from "../pages/notes/noteslist";
import LargeNotes from "./notes/largenotes";

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/users/2/projectslist/");
  const data = await res.json();
  const response = await fetch(
    "http://127.0.0.1:8000/users/2/projects/1/noteslist/"
  );
  const notesdata = await response.json();

  return {
    props: { projectlist: data, notes: notesdata },
  };
};

export default function NotesPage({ projectlist, notes }) {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-2/12 bg-red-800">
          <Project data={projectlist} />
        </div>
        <div className="w-3/12 bg-orange-900">
          <NotesList data={notes} />
        </div>
        <div className="w-7/12 bg-yellow-500">
          <LargeNotes data={notes} />
        </div>
      </div>
    </>
  );
}
