import ToDo from "./todo-components/ToDo"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AllTodos from "./pages/AllTodos"
import ActiveTodos from "./pages/ActiveTodos"
import CompletedTodos from "./pages/CompletedTodos"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<ToDo/>}>
    <Route index element={<AllTodos/>}/>
    <Route path='active' element={<ActiveTodos/>}/>
    <Route path='completed' element={<CompletedTodos/>}/>
  </Route>

))

function App() {

  return (
    <main className="w-screen h-screen bg-gray-300 flex justify-center items-center">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
