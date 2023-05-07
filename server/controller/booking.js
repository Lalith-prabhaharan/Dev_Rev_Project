import Book from "../models/book.js"
export const addBook=async(req,res,next)=>{
    try{
        const newBook=new Book(req.body)
        await newBook.save();
        res.status(200).send(newBook); 
    }
    catch(err){
        next(err);
    }
}
export const getmyBook =async(req,res,next)=>{
    const response=await Book.find({})
    console.log(response);
    if(response.length>=1)
    {
        res.status(200).json({"msg":"sucess","data":response})
    }
    else
    {
        res.status(200).json({"msg":"failed"})
    }
}
