import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    UserName : "ritik1"
}

IAM.getUser(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("User Information" , data )
    }
})