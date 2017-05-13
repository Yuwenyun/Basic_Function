function showReverse(input)
{
    //split() convert the string to array,
    //reverse() reverse the array,
    //join() concate the array elements
    return input.split("").reverse().join("");
}
alert(showReverse("hello"));//olleh

//show every element of a string
//eg: dog
//eles: d,do, dog, o, og, g
function showElements(input)
{
    //convert to array
    var array = input.split("");
    var len = array.length;
    var result = new Array();

    for(var i = 0; i < len; i++)
    {
        for(var j = i + 1; j <= len; j++)
            result.push(input.substring(i, j));
    }
    return result;
}
alert(showElements("owen"));

//args from caller is stored in Array arguments
function testArgs(arg1, arg2)
{
    //arguments[n] will always be the same as the n th 
    //arg
    if(arguments[0] == arg1)
        alert("Hello");
    if(arguments[1] == arg2)
        alert("Owen");
    alert(arguments[2]); //true
}
testArgs("What", 3, true);

//check type
alert(typeof 3); //number
alert(typeof "Owen"); //string
alert(typeof true); //boolean
var owen = new Array();
alert(typeof owen); //object
//get specific object type
alert(owen instanceof Array); //true
alert(typeof function(){}); //function