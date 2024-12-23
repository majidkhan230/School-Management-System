import { useForm } from "react-hook-form";
import { postReq, updateReq } from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../store/features/taskSlice";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

export default function AddTask({ isEditTask }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams()

  
const allTask= useSelector((state)=>state?.tasks)
console.log(allTask)
const isEditTaskValues = allTask?.task.find((item)=>item._id == id )
  console.log(isEditTaskValues)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

useEffect(()=>{
  reset({
    title:"",
    description:"",
    date:""
  })
},[])


  // onSubmit
  const onSubmit = async (data) => {
    if (isEditTask) {
    const response =   await updateReq(`/tasks/update/${id}`,data)
console.log(response)
if(response){
  dispatch(updateTask(response))
  navigate('/')
}
    } else {
      const response = await postReq("/tasks/add", data);
      console.log(response);
      if (response) {
        dispatch(addTask(response?.data?.data));
        navigate("/");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{isEditTask ? "Edit Task" : "Add Task"}</h1>
      <input type="text" {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}
      <input type="text" {...register("description", { required: true })} />
      {errors.description && <span>This field is required</span>}
      <input type="date" {...register("date", { required: true })} />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
