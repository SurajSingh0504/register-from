var Rate=[];
function Calculate(){
    
   var std=document.getElementById("st").value;
    var etd=document.getElementById("et").value;
    var rat=Number(document.getElementById("r").value);
    var rt=Number(document.getElementById("rt").value);
    var std=new Date("08 27 2023 "+std);
            var etd=new Date("08 27 2023 "+etd);
    var time=(etd-std)/1000/60;
    time=time-rt;
    var tts=((time/60)*rat).toFixed(1);
  var h=Math.floor(time/60);
 
  var m=(time%60); 
     document.getElementById("tot").value=h+":"+m; 
     document.getElementById("ta").value=tts;
   
      
 }
function  Clear(){
   var std=document.getElementById("st").value;
    var etd=document.getElementById("et").value;
    var rat=Number(document.getElementById("r").value="");
    var rt=Number(document.getElementById("rt").value="");
}
 function Add(){
    var std=document.getElementById("st").value;
    var etd=document.getElementById("et").value;
    var rat=Number(document.getElementById("r").value);
    var rt=Number(document.getElementById("rt").value);
    
    var jc={"std":std,"etd":etd,"rate":rat,"rt":rt};
alert("added sucessfully");
     Rate.push(jc);
     Clear();
     Display();

 }

 function Display(){
   var i;
   var data=" ";
   for(i=0;i<Rate.length;i++){
      var d=Rate[i];
var std=new Date("08 27 2023 "+d.std);
var etd=new Date("08 27 2023 "+d.etd);
var time=(etd-std)/1000/60;
time=time-d.rt;
var tts=((time/60)*d.rate).toFixed(1);
var h=Math.floor(time/60);

var m=(time%60); 

 data=data+"<tr><td>"+d.std+"</td><td>"+d.etd+"</td><td>"+d.rt+"</td><td>"+d.rate+"</td><td>"+h+":"+m+"</td><td>"+tts+"</td></tr>";
   }
   document.getElementById("d").innerHTML=data;
 }