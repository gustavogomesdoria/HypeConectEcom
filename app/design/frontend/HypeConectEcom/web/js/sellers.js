require([
    'jquery',
    'jquery/ui'
], function ($) {
    $(document).ready(function () {

        //SELLERS
        $("#load-sellers").click(function(){
            $(".block-sellers").toggle();
          });

    });
});
