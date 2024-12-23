import AddTask from "../pages/AddTask"
import EditTask from "../pages/EditTask"
import TaskListing from "../pages/TaskListing"

const routes = [
    {
        path:"/",
        element:<TaskListing/>
    },
    {
        path:"/add",
        element:<AddTask/>
    },
    {
        path:"/edit/:id",
        element:<AddTask isEditTask/>
    }
]


export default  routes