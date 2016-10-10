/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (){
   //--ejem 01-------- añadir elemontos HTML -----------------
    var html = '<input type="text" class="form-control col-lg-2" placeholder="Apellido" ><hr>';
    $('#add_campo').click(function (){
        $('#add_1').append(html);
    });
    //--ejm 02 ----- remover elemento HTML --------------------
    $('#btn_nombre').click(function (){
        $('#input_1').remove();
    });
    $('#btn_apellido').click(function (){
        $('#input_2').remove();
    });
    //---ejem 03 añadir texto ---------------------------------
    $('#add_number').click(function (){
        var numero = $('#cell').val();
        var nombre = $('#nombre').val();
        
        var html = '<li>'+numero +'-'+nombre+'</li>';
        $('#list_number').append(html);
    });
    //-----------------------------------------------------------
    $('.input_tel').keypress(function(tecla) {
        if(tecla.charCode < 48 || tecla.charCode > 57) return false;
    });
    //-----------------------------------------------------------
    ////When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to
             //   identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
});
