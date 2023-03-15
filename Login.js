var userId="jai@gmail.com"
var pass ="432"
function logintowebpage()
    {
        var userGivenID = document.getElementById("usid").value
        var userGivenPass = document.getElementById("pass").value
        if (userId==userGivenID && pass==userGivenPass)
        {
            var fom=document.forms
            fom[0].action="./index.html"
            fom[0].elements[2].type="submit"
        }
        else if(userId==userGivenID && pass!=userGivenPass)
        
        {
            document.getElementById("result").innerHTML="Wrong Password Entered"
            document.getElementById("passdiv").style.borderColor="red"
            document.getElementById("emaildiv").style.borderColor="royalblue"
            document.body.style.backgroundImage="linear-gradient(120deg,rgb(5, 29, 101),red)"
        }
        else if(userId!=userGivenID && pass==userGivenPass)
        {
            document.getElementById("result").innerHTML="wrong User Id Entered"
            document.getElementById("emaildiv").style.borderColor="red"
            document.getElementById("passdiv").style.borderColor="royalblue"
            document.body.style.backgroundImage="linear-gradient(120deg,red,rgb(226, 103, 123)"
        }
        else
        {
            document.getElementById("result").innerHTML="Wrong User Id and Password"
            document.getElementById("emaildiv").style.borderColor="red"
            document.getElementById("passdiv").style.borderColor="red"
            document.body.style.backgroundImage="none"
            document.body.style.backgroundColor="red"

        }
    }
    function passvis() 
    {
        document.getElementById("pass").removeAttribute("type")
        document.getElementById("visible").setAttribute("src","./images/SeekPng.com_monkey-png_362291.png")
        document.getElementById("visible").style.transform="rotateY(360deg)"
        document.getElementById("visible").style.transition="transform 0.3s"
    }
    function passhide() 
    {
     document.getElementById("pass").setAttribute("type","password")
     document.getElementById("visible").setAttribute("src","./images/See No Evil Monkey Emoji.png") 
     document.getElementById("visible").style.transform="rotateY(-360deg)"
     document.getElementById("visible").style.transition="transform 0.3s"  
    }
