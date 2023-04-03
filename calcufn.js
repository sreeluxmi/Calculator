function display(val){
document.getElementById('screen').value+=val
}

function calculate(){
  var input=document.getElementById('screen').value
  var result=eval(input)
  document.getElementById('screen').value=result
}
function clearss()
{
  document.getElementById('screen').value=""
}

