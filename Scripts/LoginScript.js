

let formsubmit=document.forms[0];
formsubmit.onsubmit=function(event)
{
    event.preventDefault();
    let Mail=document.getElementById("InputEmail").value;
    let Password=document.getElementById("InputPassword").value;
    fetch("../JSON/users.json").then(function(response)
    {
        if(!response.ok)
        {
            throw new Error('error')
        }
        
        return response.json()
    }
    ).then(function(responseText)
    {
        let usersdata=responseText;
        let login=false;
        for(let i in usersdata)
        {
            if(Mail==i && Password==usersdata[i].Password)
            {
                console.log("Login Successful")
                document.cookie=`usrname=${usersdata[i].username}`
                login=true;
                alert("Login Successful")
            }
        }
        if(login==false)
        {
            event.preventDefault();
            alert("Invalid Email or Password")
        }
    
        
    }
    ).catch(function(error)
    {
        console.log(error)
    }
    )
    
}
