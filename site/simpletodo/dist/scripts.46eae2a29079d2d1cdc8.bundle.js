function map(a,r){return(isArray(a)?arrayMap:baseMap)(a,baseIteratee(r,3))}var arrayMap=require("./_arrayMap"),baseIteratee=require("./_baseIteratee"),baseMap=require("./_baseMap"),isArray=require("./isArray");module.exports=map;