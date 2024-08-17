class ApiRespone{
    constructor(StatusCode,data,message = "success"){
        this.data = data,
        this.message = message,
        this.StatusCode = StatusCode,
        this.success = StatusCode
    }
}

export {ApiRespone}