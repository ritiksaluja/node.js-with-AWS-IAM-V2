import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    OldPassword :"Ritik@123" , 
    NewPassword : "...." , 
    UserName : "ritik1"
}

IAM.changePassword(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("password Changed" , data )
    }
})