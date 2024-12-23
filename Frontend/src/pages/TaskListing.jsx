import React, { useEffect } from "react";
import { getReq } from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllTask } from "../store/features/taskSlice";

function TaskListing() {
const dispatch = useDispatch()
const navigate = useNavigate()
const allTask = useSelector((state)=>state?.tasks)
console.log(allTask)
  const handleAllTask = async ()=>{
try {
  const res = await getReq('/tasks')
  const resp = res?.data?.data
  dispatch(getAllTask(resp))
} catch (error) {
  console.log(error)
}


  }
    const handledeleteTask = async(id)=>{
       await deleteReq(`/tasks/delete/${id}`)
        dispatch(deleteTask(id))
    }
    useEffect(()=>{
        handleAllTask()
    },[])


  return     <div>
  <div className='tasks'>
      <button onClick={()=>navigate('/add')}>Add Task +</button>
      {allTask?.task?.length === 0 ? "No Task found" :
      <table>
          <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Actions</th>

          </tr>
          {
              allTask?.task?.map((item)=>{
                  return(
                      <tr key={item?._id}>
                          <td>{item?.title}</td>
                          <td>{item?.description}</td>
                          <td>{item?.date}</td>
                          <td>
                              <button onClick={()=>handledeleteTask(item?._id)}>Delete</button>
                              <button onClick={()=>navigate( `/edit/${item?._id}`)}>Edit</button>

                          </td>

                      </tr>
                  )
              })
          }
          
          
          
          </table>}
  </div>
</div>;
}

export default TaskListing;
