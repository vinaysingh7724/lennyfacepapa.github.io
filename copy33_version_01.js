
function copythislennyface(el)
{

    if (document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
        textRange.execCommand("Copy");  
        tooltip(el, "Copied!"); 
    }
    else if (window.getSelection && document.createRange) {
        var editable = el.contentEditable; 
        var readOnly = el.readOnly; 
        el.contentEditable = false; 
        el.readOnly = true; 
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT")
            el.select(); 
        if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i))
            el.setSelectionRange(0, 999999); 
        el.contentEditable = editable; 
        el.readOnly = readOnly; 
        if (document.queryCommandSupported("copy"))
        {
            var successful = document.execCommand('copy'); 
            if (successful) $('body').append('<p class="copied"><input class = "text"  value="' + $(el).text() + '" /><span class="copybtn">👍 Copied!</span></p>'), setTimeout(function () {
            $('.copied')['remove']();
            }, 1000);
            else tooltip(el, "Press CTRL+C to copy");
        }
        else
        {
            if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
                tooltip(el, "Press CTRL+C to copy");   
        }
    }
} 





//Get the button
var mybutton = document.getElementById("topbtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}







  
  



 
