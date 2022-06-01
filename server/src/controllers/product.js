const {product} = require('../../models')

exports.addProduct = async (req,res)=>{
    try {
        const data = req.body
        const addData = await product.create(data)

        res.send({
            status:"success",
            addData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.getProducts = async (req,res)=>{
    try {
        const getData = await product.findAll()

        res.send({
            status:"success",
            getData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.getProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const getData = await product.findOne({
            where:{
                id:id
            }
        })

        res.send({
            status:"success",
            getData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.editProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const data = req.body
        const editData = await product.update(data,{
            where:{
                id:id
            }
        })

        res.send({
            status:"success",
            editData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const deleteData = await product.destroy({
            where:{
                id:id
            }
        })

        res.send({
            status:"success",
            deleteData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}