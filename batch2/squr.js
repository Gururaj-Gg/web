document.write("square are")
var n=prompt("enter no");
m="";
s=0;
for(i=1;i<=n;i++)
{

     s=i*i;
     document.write("<table border=1><tr><td>"+i+ "</td><td>"+s+"</td>");
     m = m + " " + i + " | "+ i + " = " + s + "\n";  
} 
alert( "squre is \n " +m);