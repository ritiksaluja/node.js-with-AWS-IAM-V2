import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
   
    UserName : "ritik1"
}

IAM.deleteUser(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("user Deleted" , data )
    }
})