require([
    'jquery',
    'jquery/ui'
], function ($) {
    $(document).ready(function () {
        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            // -- Dropdown Mobile Footer Empresa
            let buttondroppol = document.getElementsByClassName("drop-mobal-pool");
            let siteMappol = document.getElementsByClassName("footer-sitemap-pool");
            $(buttondroppol).click(function () {
                if ($(siteMappol).css('display') == 'none') {
                    $(siteMappol).css("display", "block");
                    $(buttondroppol).addClass('dropdown-down');
                } else {
                    $(siteMappol).css("display", "none");
                    $(buttondroppol).removeClass('dropdown-down');
                }
            });

            // -- Dropdown Mobile Footer Área Restrita
            let buttondropcent = document.getElementsByClassName("drop-mobile-ent");
            let siteMapcent = document.getElementsByClassName("footer-sitemap-cent");
            $(buttondropcent).click(function () {
                if ($(siteMapcent).css('display') == 'none') {
                    $(siteMapcent).css("display", "block");
                    $(buttondropcent).addClass('dropdown-down');
                } else {
                    $(siteMapcent).css("display", "none");
                    $(buttondropcent).removeClass('dropdown-down');
                }
            });

            // -- Dropdown Mobile Footer Atendimento
            let buttondropacess = document.getElementsByClassName("drop-mobal-ate");
            let siteMapacess = document.getElementsByClassName("footer-site-map-ate");
            $(buttondropacess).click(function () {
                if ($(siteMapacess).css('display') == 'none') {
                    $(siteMapacess).css("display", "block");
                    $(buttondropacess).addClass('dropdown-down');
                } else {
                    $(siteMapacess).css("display", "none");
                    $(buttondropacess).removeClass('dropdown-down');
                }
            });

            function sidebarContact() {

                let sidebar = document.querySelector(".sidebar-contact");

                if (sidebar) {
                    window.onload = function () {
                        sidebar.querySelectorAll("a").forEach(function (element) {
                            if (window.location.href.indexOf(element.href) > -1) {
                                element.classList.add("active");
                            }
                        })
                    }
                }
            }

            sidebarContact();
        }
    });
});
