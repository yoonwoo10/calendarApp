const fs=require("node:fs");

const tempJson={};
tempJson.todo=[];

const stringJson=JSON.stringify(tempJson);

const newJson=fs.writeFile("temp.json", stringJson, "utf-8", (err)=>{
    if (err) console.log(err);
    else console.log("success!!");
});
