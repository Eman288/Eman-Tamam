/* When we need to repeat a specific task until a condition becomes false, 
we use a while loop. The loop keeps executing the code until the condition is true.
Once the condition becomes false, the loop terminates and the program control moves to the next statement.
*/

var i = 10;
while (i) // once i == 0 the loop will stop. 0 means false and anyother number mean true
{
    console.log(i); // will not print the 0
    i--;
}

/*
Do-while loop is similar to a while loop,
except it executes the code block once before checking the condition.
*/

i = 10;
do // will execute the code then check on the condition
{
    console.log(i); // will not print the 0
    i--;
}
while (i);

function createObj(name, age, gender) // function to create the object
{
    var obj =
    {
        "Name": name,
        "Age": age,
        "Gender": gender
    }
    return (obj);
}


function Print(obj) // function to print the object in the page
{
    document.write(`<div><p>my name is ${obj.Name}, my age is ${obj.Age}, and my gender is ${obj.Gender}.</p></div>`)

}


function create()
{
    var name = window.prompt("enter the name:");
    var age = window.prompt("enter the age:");
    var gender = window.prompt("enter the gender:");
    
    Print(createObj(name, age, gender));
}
var arr = [
    createObj("Eman", 20, "Female"),
    createObj("Ahmed", 31, "male"),
    createObj("Aya", 8, "Female")
];

Print(arr[0]);

i = arr.length - 1;
while (i)
{
    Print(arr[i]);
    i--;
}