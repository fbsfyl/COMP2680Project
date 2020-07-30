/*
script.js
7/20/2020
Course Schedule Maker
Developed by: Yuxuan Feng and  Chizitere Ogbonna-Onugha
COMP2680 Web Project
*/
var oDay=document.getElementById("day");
var oHour=document.getElementById("hour");
var oMinute=document.getElementById("minute");
var oMeridiem=document.getElementById("meridiem");
var oCourse=document.getElementById("course");
var oLocation=document.getElementById("location");
function generate()
{
    var col = 0;
    var row = 1;
    var table = document.getElementById("table"); //find table

    //find column
    switch(oDay.value)
    {
        case "Monday":
            col = 0;
            break;
        case "Tuesday":
            col = 1;
            break;
        case "Wednesday":
            col = 2;
            break;
        case "Thursday":
            col = 3;
            break;
        case "Friday":
            col = 4;
            break;
    }

    //find row
    while(table.rows[row].cells[col].innerHTML != "")
    {
        row++;
        if(row >= table.rows.length)
            break;
    }

    //report message
    console.log("row = " + row);
    console.log("length = " + table.rows.length);

    //row full check
    if(row >= table.rows.length)
    {
        newLine();
        console.log("Full! New row generated! length = " + table.rows.length)
    }

    //generate data to table
    table.rows[row].cells[col].innerHTML = oHour.value+":"+oMinute.value+" "+oMeridiem.value
        +"<br/>"+oCourse.value
        +"<br/>"+oLocation.value;
}
function newLine()
{
    var table = document.getElementById("table"); //find table
    var newRow = table.insertRow(table.rows.length)//add a new row
    var i;
    for(i = 0; i <= 4; i++)
    {
        newRow.insertCell(i)//add new cells
    }
}