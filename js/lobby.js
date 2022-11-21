const applyStyles = iframe => {  
    let styles = {   
        fontColor : "#333",   
        backgroundColor : "rgba(87, 41, 5)",   
        fontGoogleName : "Sofia",   
        fontSize : "20px",   
        hideIcons : false /*(or true)*/,   
        inputBackgroundColor : "red",   
        inputFontColor : "blue",   
        height : "700px",   
        memberListFontColor : "#ff00dd",   
        memberListBackgroundColor : "white"
    }    
    setTimeout(() => {   
        iframe.contentWindow.postMessage(JSON.stringify(styles), "*");  
    }, 100); 
}

function myAjax() {
    $.ajax({
         type: "GET",
         url: 'magix/ajax.php',
         data:{action:'call_this'},
         success:function(html) {
           alert(html);
         }

    });
}