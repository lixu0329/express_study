var fs=require('fs')
var express=require('express')
var router=express.Router()
router.get('/',function(req,res){
    //读取json文件获取数据
    fs.readFile('./db.json','utf8',function(err,data){
        if(err){
            return res.status(500).send('server error')
            
        }else{
            res.render('index.html',{
                fruit:['一班','二班','三班'],
                students:JSON.parse(data).students
            })
            
        }
    })
   
})
router.get('/newstudent/',function(req,res){
        res.render('new.html')
})
module.exports=router
/*
var fs=require('fs')
module.exports=function(app){
    app.get('/',function(req,res){
        //读取json文件获取数据
        fs.readFile('./db.json','utf8',function(err,data){
            if(err){
                return res.status(500).send('server error')
                
            }else{
                res.render('index.html',{
                    fruit:['一班','二班','三班'],
                    students:JSON.parse(data).students
                })
                
            }
        })
       
    })
}
*/