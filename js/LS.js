$('.cgj-che').mouseenter(function(){
	
	$('.cgj-che').children('.cgj-hidden,.cgj-dropdown').hide()
	$(this).children('.cgj-hidden,.cgj-dropdown').show()
	
     
})
$('.cgj-dropdown').mouseleave(function(){
	$('.cgj-hidden,.cgj-dropdown').hide()
})
//$('.cgj-che').hover(function(){
//	$(this).children('.cgj-hidden,.cgj-dropdown').toggle()
//})