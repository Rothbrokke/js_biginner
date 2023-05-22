function increment(holder)
{
    var initial=document.getElementById("count")
    var value=parseInt(document.getElementById("count").innerText) + holder
    initial.innerText=value
    if(value < 0)
    {
       document.getElementById("count").innerText = 0  
    }
    if(holder === 0)
    {
       document.getElementById("count").innerText = 0  
    }
}
function save()
{
   let reseter=document.getElementById("count").innerText
   let value = parseInt(document.getElementById("count").innerText)
   var save_el=value
   let save_display =" " + save_el + " -"
   document.getElementById("save_el").innerText += save_display
   // console.log("Previous: ",save_el)
   if (save_el != 0)
   {
      document.getElementById("count").innerText = 0
   }
}

