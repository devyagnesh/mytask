 const ErrorHandler = (statusCode,Message)=>{
    const error = new Error();
    error.statusCode = statusCode;
    error.message = Message;

    return error;
}

module.exports = ErrorHandler