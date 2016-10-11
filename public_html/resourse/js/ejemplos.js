/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    //--ejem 01-------- añadir elemontos HTML -----------------
    var html = '<input type="text" class="form-control col-lg-2" placeholder="Apellido" ><hr>';
    $('#add_campo').click(function () {
        $('#add_1').append(html);
    });
    //--ejm 02 ----- remover elemento HTML --------------------
    $('#btn_nombre').click(function () {
        $('#input_1').remove();
    });
    $('#btn_apellido').click(function () {
        $('#input_2').remove();
    });
    //---ejem 03 añadir texto ---------------------------------
    $('#add_number').click(function () {
        var numero = $('#cell').val();
        var nombre = $('#nombre').val();

        var html = '<li>' + numero + ' - ' + nombre + '</li>';
        $('#list_number').append(html);
    });
    //-----------------------------------------------------------
    $('.input_tel').keypress(function (tecla) {
        if (tecla.charCode < 48 || tecla.charCode > 57)
            return false;
    });
    //-----------------------------------------------------------
    var lista = $('#show_img li').hide();
    $('#mostrar').click(function () {
        $('#show_img li').show(300);
    });
    $('#ocultar').click(function () {
        $('#show_img li').hide(300);
    });
    //-----------------------------------------------------------
    $(".leerMas").bind("click", function () {
        $(this).text($(this).text() == "Leer más" ? "Ocultar" : "Leer más");
        $(this).prev().slideToggle();
    });
    //-----------------------ejemplo con slideDown------------------
    $(".form input").hide();
    $("#mostrar_form").click(function () {
        $(".form input").show(400);
        $(".form input").slideDown(1000, function () {
            $(this).css("border", "2px red inset")
                    .focus();
        });
    });
    //-----------------envio de formularios 1 -----------------------
    $('#result').hide();
    $('#enviar_form').click(function () {
        var data = $('#form_prueba').serialize();
        $('#result').show();
        $('#result').text(data).css("border", "2px red inset");
    });
    //-----------------envio de formularios 1 -----------------------
    $('#result2').hide();
    $('#enviar_form2').click(function () {
        var data = $('#form_prueba2').serializeArray();
        $('#result2').show();
        $('#result2').text(data).css("border", "2px red inset");
    });
    //-------------animaciones------------------------------
    $(".logo").mouseover(function () {
        $(this).animate({height: '400px'}, 2000);
    });
    $(".logo").mouseout(function () {
        $(this).animate({height: '100px'});
    });
    //----------------Subir imagenes ----------------------------
    $("input[name='file']").on("change", function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagen_load').attr('src', e.target.result);
        }
        reader.readAsDataURL(this.files[0]);

    });
    //--------------------------------------------------------------
    $('#ejemplo_modal').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $('#mask').css({'width': 400, 'height': 400});
        //poner efecto de transicion      
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow", 0.8);
        //transition effect  
        $(id).fadeIn(2000);

    });
    //clik en para cerrar el modal (div #masck)   
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });
    //----------Efectos 01---------------------------
    $("#opacidad05").click(function (event) {
        $("#rectangulo").fadeTo("slow", 0.5);
    });
    $("#opacidad07").click(function (event) {
        $("#rectangulo").fadeTo("fast", 0.7, function () {
            alert('Efecto fadeTo terminado!');
        });
    });
    $("#alternar01").click(function (event) {
        $("#rectangulo").fadeToggle();
    });
    $("#alternar02").click(function (event) {
        $("#rectangulo").fadeToggle(4000);
    });
    $("#alternar03").click(function (event) {
        $("#rectangulo").fadeToggle("fast", function () {
            alert('Efecto fadeToggle terminado!');
        });
    });
    //----------Efectos 02-----------------------
    $("#mostrar").click(function (event) {
        $("#rectangulo2").fadeIn();
    });
    $("#mostrar2").click(function (event) {
        $("#rectangulo").fadeIn(4000);
    });
    $("#mostrar3").click(function (event) {
        $("#rectangulo2").fadeIn(4000, function () {
            alert('Efecto fadeIn terminado!');
        });
    });
    $("#ocultar").click(function (event) {
        $("#rectangulo2").fadeOut();
    });
    $("#ocultar2").click(function (event) {
        $("#rectangulo2").fadeOut(4000);
    });
    $("#ocultar3").click(function (event) {
        $("#rectangulo2").fadeOut(4000, function () {
            alert('Efecto fadeOut terminado!');
        });
    });
    ////----------------------------------------

});
