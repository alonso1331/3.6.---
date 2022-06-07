let header = document.querySelector("header");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset !=0 ){
        header.style = "box-shadow: 3px 3px 5px 1px #757474;";
    }else{
        header.style= "box-shadow: none;";
    }
});

function atention(){
    document.getElementById("btn").onclick = function (){
        window.confirm("您確定送出？");
    };
};
atention();

// function atention(){
//     document.getElementById("btn").onclick = function (){
//         window.alert("我們將盡速為您處理");
//     };
// };
// atention();