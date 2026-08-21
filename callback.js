
function sum1(x,y)
{
    return x+y;
}
function sumWithMsg(clbk,msg)
{
    const result=clbk(20,30);
    const fresult="HI"+msg+"your score is :"+result;
    console.log(fresult);
}
sumWithMsg(sum1,"Pratha");