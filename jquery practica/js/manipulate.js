// задаємо усім р червону рамку 
$(function(){
	$("p").css({
		"border":"2px solid red",
		"borderRadius":"10px",
		"padding":"10px",
});
	$("p:lt(3)").css("border","2px solid green");
	$("p:gt(3)").css("border","2px solid orange");
	$("p:eq(3)").css("border","2px solid blue");
	$("p:odd").css("backgroundColor","cyan");
	$("p:even").css("backgroundColor","magenta");
	$(".table tbody tr:nth-child(2n+2)").css("backgroundColor","magenta");
    $("p:contains('Lorem')").css("fontWeight","800");
    $(":text").css("border","2px solid red");
    $(":password").css("border","2px solid green");
    $(":submit").css("backgroundColor","orage");
    
});


