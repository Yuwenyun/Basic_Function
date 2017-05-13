//function is actually an object and
//function name is a reference variable
function addFive(num)
{
	return num + 5;
}
function addTen(func, num)
{
	return func(num) + 10;
}
//addFive refered to the function and addFive()
//get the result of the function
alert(addTen(addFive, addFive(4))); //24

/*
 *since function is an object,
 *there are several properties and functions for
 *every function
 *
 * arguments: store input args of func 
 * arguments.callee: point to the function itself
 * this: execution context
 * length: number of args(length of arguments)
 * 
 * apply(scope, args[])
 * call(scope, arg1, arg2, ..)
 */
var color = "red";
var object = { color : "blue" };
function getColor()
{
    return this.color;
}
alert(getColor()); //red
//apply() and call() are functions of function
//getColor(), every function has those two functions.
//the first arg is the scope of execution context.
//apply() takes an array of args as the second arg 
//while call() takes every arg after scope as args
alert(getColor.apply(this)); //red
alert(getColor.apply(object)); //blue


/*
 * several features used to describe properties.
 *
 * configurable: true/false. indicate whether property could be deleted
 * enumerable: true/false. indicate whether property could be in for-in
 * writable: true/false. indicate whether property value could be changed
 * vallue: value of the property
 */
var person = { name:"Owen", age:23, _gender:"male" };
Object.defineProperty(person, "name", { enumerable:true, writable:false });
person.name = "Ricy"; //no use since writable is false for property name
Object.defineProperty(person, "age", { enumerable:false });
for(var p in person)
{
    //property age won't be here since enumerable is false
    alert(p + ":" + person[p]);
}

//add setter/getter, this could only be added by defineProperty()
//setter is pretty like setter in c#
Object.defineProperty(person, "gender", 
{
    get:function(){ return this._gender; },
    set:function()
    {
        if(arguments[0] === "male" || arguments[0] === "female")
            this._gender = arguments[0];
    }
});
alert(person.gender);
person.gender = "female"; //set success
alert(person.gender);
person.gender = "owen"; //set fail
alert(person.gender);