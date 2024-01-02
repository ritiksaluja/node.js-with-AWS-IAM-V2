import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    Password :"Ritik@123" , 
    PasswordResetRequired: true ,
    UserName : "ritik1"
}

IAM.createLoginProfile(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("profile Created" , data )
    }
})