// Task 2 : 

const fs=require("fs")

////////////LoadData///////////////
const loadData=()=>{
    try{
        const dataJson=fs.readFileSync("Data2.json").toString()
        return JSON.parse(dataJson)
    }catch{
      return []
    }
}
//////////////////SaveAllData////////////////
const saveAllData=(allData)=>{
       const saveAllData=JSON.stringify(allData)
       fs.writeFileSync("Data2.json",saveAllData)
}
////////////////////////Add///////////////////////
const Add=(id , fname , lname , age , city)=>{
    const allData=loadData()
    const DuplicationData=allData.filter((obj)=>{
        return obj.id==id
    })
    if(DuplicationData.length==0){
        allData.push({
            id,
            fname:fname,
            lname:lname,
            city:city,
            age:age,
        })
        saveAllData(allData)
    }else{
        console.log("Error ")
    }
}
///////////////////Delate/////
const delate=(id)=>{
    const allData=loadData()
    const KeepData=allData.filter((obj)=>{
        return obj.id !=id
    })
    saveAllData(KeepData)
}

 ///////////////ListData(fname & lname & city for all )/////////////
 const ListData=()=>{
    const allData=loadData()
    allData.forEach((obj)=>{
        console.log(obj.fname,obj.lname,obj.age)
    })
 }
 ///////////////////Read Data/////////
 const ReadData =(id)=>{
    const allData=loadData()
    const ItemNeed=allData.filter((obj)=>{
        return obj.id==id
    })
    console.log(ItemNeed)
 }

///////////////////////////////////
module.exports ={
    Add,
    delate,
    ListData,
    ReadData
}