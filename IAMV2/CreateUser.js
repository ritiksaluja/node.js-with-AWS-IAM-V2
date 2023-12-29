import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    UserName : "ritik_saluja"
}


IAM.createUser(params , function(err , data){
    if(err){
        console.log(err)
    }
    else{
        console.log("userCreated" , data )
    }
})