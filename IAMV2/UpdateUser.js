import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    NewUserName:"ritik_slj" , 
    UserName : "ritik_saluja"
}


IAM.updateUser(params , function(err , data){
    if(err){
        console.log(err)
    }
    else{
        console.log("userCreated" , data )
    }
})