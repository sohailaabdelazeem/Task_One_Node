const fs= require("fs")
const yargs=require("yargs")
const app2=require("./app2")
// Task 1 : 

// 1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )
const person1={
     fname :"ahmed" ,
     lname :"hossam" , 
     age : 20 , 
     city :"alex",
}
// console.log(person1)
// 2) change obj to Json
const person1Json=JSON.stringify(person1) 
// 3) store in file 
fs.writeFileSync("data1.json",person1Json)
// 4) read file (json)
fs.readFileSync("data1.json").toString
// 5) Convert to obj 
const personObj=JSON.parse(person1Json)
// 6) Update data to ( adel ahmed , 40 , cairo) 
const person2={
    fname :"adel" ,
    lname :"ahmed" , 
    age : 40 , 
    city :"Cairo",
}
// 7) convert obj to Json 
const person2Json=JSON.stringify(person2) 
// 8) store in file (writeFileSync)
fs.writeFileSync("data1.json",person2Json)

///////////////////////////////////////////////////////////////

// Task 2 : 
// 1- to add 7 persons with ids from 1-7 

yargs.command({
    command:"Add",
    describe:"This is funtion to add Person",
    builder:{
        fname:{
            describe:"This is first Name",
            demandOption:true,
            type:"string",
        },
        lname:{
            describe:"This is last Name",
            demandOption:true,
            type:"string",
        }
    },
    handler:(x)=>{
        app2.Add(x.id ,x.fname ,x.lname,x.age,x.city)
    }
})

// 2- to delete id 4 - 6 
yargs.command ({
    command:"delate",
    describe:"this is function to delate an item",
    builder:{
        id:{
            describe:"this is ID Use to delate an item",
            demandOption:true,
            type:"string"
        }
    },
    handler :(x)=>{
        app2.delate(x.id)
    }
})

 // 3- to list fname & lname & city for all .
 yargs.command ({
    command:"ListData",
    describe:"this is function to show list of item ",
    handler :()=>{
        app2.ListData()
    }
 })
  
// 4- to read all data for only the 5th person . 
 yargs.command ({
    command:"ReadData",
    describe:"this is function to Read an item",
    builder:{
        id:{
            describe:"this is ID Use to show an item",
            demandOption:true,
            type:"string"
        }
    },
    handler :(x)=>{
        app2.ReadData(x.id)
    }
 })
yargs.parse()
 
