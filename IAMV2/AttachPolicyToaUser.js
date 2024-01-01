import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    PolicyArn :"pleae copy it from aws console" , 
    UserName : "ritik"
}

IAM.attachUserPolicy(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("policy attached" , data )
    }
})