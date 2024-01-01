import AWS from 'aws-sdk'

const IAM = new AWS.IAM()

const params = {
    GroupName: "my_group"
}

IAM.CreateGroup(params , (err , data )=>{
    if (err){
        console.log(err)
    }
    else {
        console.log("Group Created" , data )
    }
})