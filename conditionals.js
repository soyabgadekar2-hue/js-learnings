// Simple if-else Statement
console.log("Simple if-else Statement")
age = 18;
if (age >= 18)
{
    console.log("You can Vote")
}
else
{
    console.log("You are not eligible")
}

//if-else-if Statement
console.log("if-else-if Statement")
marks = 75;
if (marks >= 90)
{
    console.log("Grade A")
}
else if (marks >=70)
{
    console.log("Grade B")
}
else if (marks >= 50)
{
    console.log("Grade C")
}
else
{     
    console.log("Fail")
}

//Switch Statements
console.log("Switch Statements")
day = 4;
switch(day)
{
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Day")
}