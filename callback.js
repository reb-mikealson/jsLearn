
const username="Pratha";
const password="3hi45";
function usernamecheck(givenUN)
{
    if(givenUN==username)
    {
        return true;
    }
    return false;
}
function pwcheck(givenPW)
{
    if(givenPW==password)
    {
        return true;
    }
    return false;
}

function checker(clbk,msg)
{
    const result=clbk("Pratha");
    const fresult="HI"+msg+"your username is :"+result;
    console.log(fresult);
}
function pwchecker(clbk,msg)
{
    const result=clbk("12345");
    const fresult="HI"+msg+"your password is :"+result;
    console.log(fresult);
}
checker(usernamecheck,"Pratha");
pwchecker(pwcheck,"12345");