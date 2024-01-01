import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
   
    UserName : "ritik"
}

IAM.createAccessKey(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("AccssKey Created " , data )
    }
})