require([
    'jquery',
    'jquery/ui'
], function ($) {
    $(document).ready(function () {

        //Data de Nascimento
        $('#dob').attr('placeholder', 'Digite sua data de nascimento');
        $('#dob').mask('00/00/0000');

    });
});
