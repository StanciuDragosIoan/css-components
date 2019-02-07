// tabs
const tab_btn = document.querySelectorAll('.tab');
const tabs = document.querySelectorAll('.tab-content');
tabs[0].style.display = "block";
 
 

// tab_btn.forEach(function(item){
//     item.addEventListener('click', function(){
//         console.log('test');
//     })
// });

tab_btn.forEach((item)=>{
    item.addEventListener('click', switchTab);
});



function switchTab(e){
    if(e.target.id === "tab-activator-1"){
        hideTabs();
        tabs[0].style.display = "block";
    } 
    else if(e.target.id === "tab-activator-2"){
        tabs.forEach((tab)=>{
            tab.style.display = "none";
        })
        
        tabs[1].style.display = "block";
    } else if(e.target.id === "tab-activator-3"){
        tabs.forEach((tab)=>{
            tab.style.display = "none";
        })
        
        tabs[2].style.display = "block";

    } else if(e.target.id === "tab-activator-4"){
        tabs.forEach((tab)=>{
            tab.style.display = "none";
        })
        
        tabs[3].style.display = "block";
    } else if(e.target.id === "tab-activator-5"){
        tabs.forEach((tab)=>{
            tab.style.display = "none";
        })
        
        tabs[4].style.display = "block";
    }
     
}

// function hideTabs(){
//     tabs.forEach((tab)=>{
//         tab.style.display = "none";
//     })

// }

const hideTabs = ()=>{
    tabs.forEach(tab => {
        tab.style.display = "none";
    });    
}
 

