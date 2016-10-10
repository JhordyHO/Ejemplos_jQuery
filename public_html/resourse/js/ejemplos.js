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


});
