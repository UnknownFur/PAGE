var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function togglemenu(){
    
    if( menuList.style.maxHeight=="0px")
    {
        menuList.style.maxHeight="200px";
    }
    else
    {
        menuList.style.maxHeight="0px";
    }

}