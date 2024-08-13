let myImage=document.querySelector("img");

myImage.onclick=()=>{
    let mySrc=myImage.getAttribute("src");
    if(mySrc==="images/lujingheshengri.jpg"){
        myImage.setAttribute("src","images/ljhgai.jpg");
    }else{
        myImage.setAttribute("src","images/lujingheshengri.jpg");
    }
    };

    let myButton=document.querySelector("button"); 
    let myHeading=document.querySelector("h1");

    function setUserName() {
        let myName = prompt("Please enter your name.");
        if(!myName){
            setUserName();
        }else{
            localStorage.setItem("name",myName);
            myHeading.innerHTML="LJH is cool,"+myName;
        }
        }

      if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        let storedName = localStorage.getItem("name");
        myHeading.innerHTML = `LJH is cool, `+storedName;
      }

      myButton.onclick = () => {
        setUserName();
      };
      