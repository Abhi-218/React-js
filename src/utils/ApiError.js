class ApiError extends Error{
    constructor(
        statuscode,
        message = "something went wrong",
        error = [],
        stack = "",
    ){
        super(message)
        this.statuscode = statuscode
        this.message = message
        this.errors =error
        this.data = null
        this.success = false

         if(stack){
            this.stack =stack
         }else{
            Error.captureStackTrace(this,this.constructor)
         }
    }
}
export {ApiError}