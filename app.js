var express=require('express')
var fs=require('fs')
var router=require('./route.js')
var app=express()

//开放资源
app.use('/node_modules/',express.static('./node_modules'))
app.use('/public/',express.static('./public'))
//配置模板引擎
app.engine('html',require('express-art-template'))
//把路由容器挂载到app服务中
app.use(router)
//router(app)
app.listen(3000,function(){
    console.log('服务器已开启...')
})