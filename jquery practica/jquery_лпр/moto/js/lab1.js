// задаємо усім р червону рамку 
$(function(){
// 	$("p").css({ // 		"border":"2px solid red", //
		"borderRadius":"10px", // 		"padding":"10px", // }); //
	$("p:lt(3)").css("border","2px solid green"); //
	$("p:gt(3)").css("border","2px solid orange"); //
	$("p:eq(3)").css("border","2px solid blue"); //
	$("p:odd").css("backgroundColor","cyan"); //
	$("p:even").css("backgroundColor","magenta"); // 	$(".table tbody
tr:nth-child(2n+2)").css("backgroundColor","magenta"); //    
$("p:contains('Lorem')").css("fontWeight","800"); //    
$(":text").css("border","2px solid red"); //    
$(":password").css("border","2px solid green"); //    
$(":submit").css("backgroundColor","orage"); //      $("#div_for_img
img").css("border","1px solid red"); //       $("#div_for_img>
img").css("border","1px solid red"); //       
$("#div_for_img+p").css("border","1px solid green"); // });


/*


1. Отобрать в набор все ссылки, которые наход¤тс¤ внутри блока с id="my_links" 
и при этом значение атрибута href у них начинаетс¤ со слова "documents".

2. Отобрать в набор только те картинки, которые наход¤тс¤ внутри 
блока с id="forfooter" и в качестве значени¤ атрибута title имеют значение "ѕроизводители".
*/

$("#my_links a[href ^=documents]").css("border", "2px solid red");
$("#forfooter img[title *='Производители']").css("backgroundColor", "magenta");
$("#forheader img").css("border", "2px solid blue");
$("img[src $='logo.jpg']").css("border", "2px solid blue");
});


/*


наша же задача: сделать выборку этого же элемента двум¤ другими способами на наше усмотрение.
*/
