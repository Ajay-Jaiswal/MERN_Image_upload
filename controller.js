const aws = require('aws-sdk')
const bookModel = require("./model")

aws.config.update({
    accessKeyId: "AKIAY3L35MCRUJ6WPO6J",
    secretAccessKey: "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",
    region: "ap-south-1"
})
let uploadFile= async ( file) =>{
   return new Promise( function(resolve, reject) {
    let s3= new aws.S3({apiVersion: '2006-03-01'}); 
    var uploadParams= {
        ACL: "public-read",
        Bucket: "classroom-training-bucket",  //HERE
        Key: "abc/" + file.originalname, //HERE 
        Body: file.buffer
    }
    s3.upload( uploadParams, function (err, data ){
        if(err) {
            return reject({"error": err})
        }
        console.log(data)
        console.log("file uploaded succesfully")
        return resolve(data.Location)
    })
   })
}


const createpost = async function(req,res){
    try {

        let bookData = req.body
        let { name , description, price,bookcover} = bookData

        let files= req.files
        if(! files && files.length>0){
            return res.status(400).send({msg: "file not present"})
        }
            let uploadedFileURL= await uploadFile( files[0])
            let uploadedFileURL1= await uploadFile( files[1])
            let uploadedFileURL2= await uploadFile( files[2])
            let uploadedFileURL3= await uploadFile( files[3])
            let uploadedFileURL4= await uploadFile( files[4])
            let uploadedFileURL5= await uploadFile( files[5])

            let arr = [uploadedFileURL,uploadedFileURL1,uploadedFileURL2,uploadedFileURL3,uploadedFileURL4,uploadedFileURL5 ]
        
            let newBookData = { name: name, description: description, price: price, bookcover:arr}   

            const newBook = await bookModel.create(newBookData)
            return res.status(201).send({ status: true, message: "New product created sucessfully", data: newBook })
    
    
        }
        catch (err) {
            return res.status(500).send({ status: false, error: "Error", message: err.message })
        }
}

const getapi = async function(req,res){
    let data = await bookModel.find()
    return res.send({status:true, data : data})
}

module.exports.createpost = createpost
module.exports.getapi = getapi