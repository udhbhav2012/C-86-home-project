Name_Of_The_Guest_Array = [];

function submit()
{
   var  Guest_name = document.getElementById("Enter Name").value;
   Name_Of_The_Guest_Array.push(Guest_name);
   document.getElementById("Display_names").innerHTML = Name_Of_The_Guest_Array;
   console.log(Name_Of_The_Guest_Array);

}

    function Show list()
    {
        var i = Name_Of_The_Guest_Array.join("<br>");
        console.log(Name_Of_The_Guest_Array);
        document.getElementById("Show_names").innerHTML = i.testring();
    }
    function sorting()
    {
     Name_Of_The_Guest_Array.sort();
     var i = Name_Of_The_Guest_Array.join("<br>");
     console.log(Name_Of_The_Guest_Array);

     document.getElementById("Sorted_names").innerHTML = i.testring();

    }

    function Search()
    {
        var s = document.getElementById("Search_name").value;
        var found = 0;
        var j;
        for(j=0; j<Name_Of_The_Guest_Array; j++){
            if(s==Name_Of_The_Guest_Array[j]) {
                found + found + 1;
        }
    }