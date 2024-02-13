import axios from "axios";
var storedData = JSON.parse(localStorage.getItem("data"));
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchtasks = createAsyncThunk("tasks/fetchtasks",async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/tasks");
    return(res.data);
})


export const TasksSlice  = createSlice({
    name:"tasks",
    initialState:{
isLoading:false,
tasks:[],
localStorage:[],
error:null,

    } ,

    reducers:{
        showtasks:(state)=>state,

        addPost:(state,action)=>{
            state.tasks.push(action.payload);
            localStorage.setItem("data",JSON.stringify([...state.tasks,action.payload]) );
        },
        updatePost:(state,action)=>{
            const  {id,userId,title,body}=action.payload
         const isPostExist=   state.tasks.filter(post=>post.id==id);
         if(isPostExist){
            isPostExist[0].userId=userId;
            isPostExist[0].title=title;
            isPostExist[0].body=body;
         }
        },
        deletePost:(state,action)=>{
            const id= action.payload;
            state.tasks= state.tasks.filter(post=>post.id!=id);
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchtasks.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchtasks.fulfilled,(state,action)=>{
            state.isLoading=false;
            if(storedData.length===0)
       {   
            state.tasks=action.payload;
            localStorage.setItem("data",JSON.stringify([...state.tasks]) );
            state.error=null;
        }
        })
        builder.addCase(fetchtasks.rejected,(state,action)=>{
            state.isLoading=false;
            state.tasks=[];
            state.error=action.error.message;
        })
    },
});
export const {addPost,deletePost,updatePost,extraReducers}=TasksSlice.actions;
export default TasksSlice.reducer;