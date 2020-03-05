//Half Pyramid
document.write("Half Pyramid");
document.write("<br/>");
for (var p = 0; p <= 10; p++) {
  for (var q = 0; q <= p; q++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br/>---------------------------------------------<br/>");

// reverse hlaf Pyramid
document.write("Reverse Half Pyramid");
document.write("<br/>");
document.write("<br/>");
for (var p = 10; p >= 0; p--) {
  for (var q = 0; q <= p; q++) {
    document.write("*");
  }
  document.write("<br/>");
}
document.write("<br/>---------------------------------------------<br/>");

// full Pyramid
document.write("Full Pyramid");
document.write("<br/>");
document.write("<center>");
for (var p = 0; p <= 10; p++) {
  for (var q = 0; q <= p; q++) {
    document.write("*");
  }
  document.write("<br/>");
}
document.write("</center>");
document.write("<br/>---------------------------------------------<br/>");

// reverse full Pyramid
document.write("Reverse Pyramid");
document.write("<br/>");
document.write("<center>");
for (var p = 10; p >= 0; p--) {
  for (var q = 0; q <= p; q++) {
    document.write("*");
  }
  document.write("<br/>");
}
document.write("</center>");
document.write("<br/>---------------------------------------------<br/>");


//-------------------------------
   
// full Diamond
var limit = 10;
document.write("Full Diamond in Serial Numbers");
document.write("<br/>");
document.write("<center>");
for (var p = 0; p <= limit; p++) {
  for (var q = 0; q <= p; q++) {
    document.write("*");
  }
  document.write("<br/>");
}
for (var p =limit-1; p >= 0; p--) {
  for (var q = 0; q <= p; q++) {
    document.write("*");
  }
  document.write("<br/>");
}
document.write("</center>");
document.write("<br/>---------------------------------------------<br/>");

//------------------------------------

document.write("Full Diamond in Serial Odd Nnumbers");
document.write("<br/>");
document.write("<center>");
var limit = 10;
for (var p = 0; p <= limit; p=p+2) {
  for (var q = 0; q <= p; q++) {
    document.write("*");
  }
  document.write("<br/>");
}
for (var p =limit-2; p >= 0; p=p-2) {
  for (var q = 0; q <= p; q++) {
    document.write("*");
  }
  document.write("<br/>");
}
document.write("</center>");
document.write("<br/>---------------------------------------------<br/>");

//-------------------------------------------------
document.write("Number pattern");
document.write("<br/>");
var no=5;
for(var m=1;m<=no;m++){
 for(var n=1;n<=m;n++){
   document.write(" "+n+" ");
 }
 document.write("<br />");
}
document.write("<br/>---------------------------------------------<br/>");

//-------------------------------------------------
 document.write("Number pattern");
 document.write("<br/>");
 var num=5;
 for(var m=1; m<=num; m++){
  for(var n=m;n > 0;n--){
   document.write(" "+n+" ");
 }
  document.write("<br />");
 }
 document.write("<br/>---------------------------------------------<br/>");

//-------------------------------------------------

 document.write("Number pattern");
 document.write("<br/>");
 var num=5;
 for(var m=num; m>=0; m--){
  for(var n=1; n<=m; n++){
   document.write(" "+n+" ");
 }
  document.write("<br />");
 }
 document.write("<br/>---------------------------------------------<br/>");

//-------------------------------------------------

 document.write("Number pattern");
 document.write("<br/>");
 var num=5;
 for(var m=num; m>=0; m--){
  for(var n=m; n>0; n--){
   document.write(" "+n+" ");
 }
  document.write("<br />");
 }
 document.write("<br/>---------------------------------------------<br/>");

//------------------------------------------

 document.write("Number pattern");
 document.write("<br/>");
 var num=5;
 for(var m=num; m>=0; m--){
  for(var n=m; n>0; n--){
   document.write(" "+n+" ");
 }
  document.write("<br />");
 }
 document.write("<br/>---------------------------------------------<br/>");

//------------------------------------------