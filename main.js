var student_array=[];
function submit()
{
    var display_student_array=[];
    for(var i=1;i<=4;i++){
    var name=document.getElementById("stud_"+i).value;
    console.log(name);
    student_array.push(name);
    }
    console.log(student_array);
    var len=student_array.length;
    console.log(len);
    for(var j=0;j<len;j++){
display_student_array.push("<h4> Name - "+student_array[j]+"</h4>");
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    console.log(student_array);
    var display_student_array_sort=[];
    var len=student_array.length;
    console.log(len);
    for(var j=0;j<len;j++){
    display_student_array_sort.push("<h4> Name - "+student_array[j]+"</h4>");
    }
    console.log(display_student_array_sort);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array_sort;
    var remove_commas=display_student_array_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}