
const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .reject((error)=> next(error))
    }
  
}

export {asyncHandler}

//const asyncHandler = (fn)=>{()=>{}} ////9
//const asyncHandler = (fn)=>()=>{} 

                                 //understand the above to understand the below code

// const asyncHandler = (fn)=> async (req,res,next)=>{

//     try{
//         fn(req,res,next);
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }

// } 


