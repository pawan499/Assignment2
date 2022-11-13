const input_1=document.getElementById("input1");
const input_2=document.getElementById("input2")
const show=(event)=>{
    event.preventDefault();
   
    if(input_1.value=="" ||input_2.value.length==""){
        if(input_1.value=="")
        document.getElementById("err1").innerHTML="Please Enter A  Sentence";
        if(input_2.value=="")
        document.getElementById("err2").innerHTML="Please Enter only One Character"
        return;
    }else if(input_2.value.length>1){
        document.getElementById("err2").innerHTML="Please Enter only One Character"
        return;
    }else{
       let text1=input_1.value;
       let text2=input_2.value;
      let x= text1.search(text2);
     if(x!=-1)
      alert(input_1.value.substr(x+1));
      else
      alert("The letter does not exist in the sentence")
    }
}
function changeErr(){
   
    document.getElementsByTagName("span")[0].innerHTML=""
    document.getElementsByTagName("span")[1].innerHTML=""
}
