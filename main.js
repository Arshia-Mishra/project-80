
comma_array=[];

function submit()
{
    var g_name=document.getElementById("name_1").value;
    comma_array.push(g_name);
    //var length_of_comma_array=comma_array.length;
    //console.log(length_of_comma_array);
    document.getElementById("display_comma_array").innerHTML= comma_array.toString();
} 


function sorting()
{
	comma_array.sort();
	var i= comma_array.join("<br>");	
	document.getElementById("sorted").innerHTML=i.toString();
	}

function show()
{
    var i= comma_array.join("<br>");
    document.getElementById("d_guest").innerHTML=i.toString();
    //document.getElementById("sort_button").style.display="block";
    }

function searching()
{
	var s= document.getElementById("name_2").value;
	var found=0;
	var j;
	for(j=0; j<comma_array.length; j++)
		{
			if(s==comma_array[j]){
				found=found+1;
			}	
		}
	document.getElementById("d_search").innerHTML="name found "+found+" time/s";
	//console.log("found name "+found+" time/s");
}
