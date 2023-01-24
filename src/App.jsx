import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";

function App() {
  return (
    <main className="bg-gray-900 h-screen">
      <div className="container mx-auto p-10">
        <TasksForm />
        <TasksList />
      </div>
    </main>
  );
}

export default App;
