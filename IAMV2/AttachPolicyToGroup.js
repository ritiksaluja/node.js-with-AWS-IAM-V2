import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    PolicyArn :"pleae copy it from aws console" , 
    GroupName : "ritik"
}

IAM.attachGroupPolicy(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("policy attached" , data )
    }
})