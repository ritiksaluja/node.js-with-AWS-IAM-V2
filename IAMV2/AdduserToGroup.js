import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
   GroupName:"" , 
    UserName : "ritik"
}

IAM.addUserToGroup(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("policy detached" , data )
    }
})