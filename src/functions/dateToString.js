const dayToString=require('./dayToString');
const necessaryAdd=require('./necessaryAdd');

function dateToString(date,dayMap)
{
    return "current time:"+dayToString(date.getDay(),dayMap)+" "+
		necessaryAdd(date.getDate())+"."+necessaryAdd(date.getMonth()+1)+"."+date.getFullYear()+" "+
		necessaryAdd(date.getHours())+":"+necessaryAdd(date.getMinutes())+":"+necessaryAdd(date.getSeconds());
}

module.exports=dateToString;