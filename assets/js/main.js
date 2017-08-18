$(document).ready(function($) {

    $('.more-link').on('click', function () {
        if(!alertify.errorAlert){
            //define a new errorAlert base on alert
            alertify.dialog('errorAlert',function factory(){
                return{
                    build:function(){
                        var errorHeader = 'Información de proyecto';
                        this.setHeader(errorHeader);
                    }
                };
            },true,'alert');
        }
//launch it.
// since this was transient, we can launch another instance at the same time.

//launch it.
        if($(this).attr('value') == 'gam'){
            alertify
                .errorAlert("<p>Desarrollo de una aplicación para <b>El Centro cultural de las artes, la cultura y las personas</b>. Esta aplicación esta compuesta por distitnos modulos los cuales son: Eventos, Mapas, Publicidad y su respectivo panel de administraciòn para la gestón de los eventos y el control de los tiempos de cada cartelera.</p>" +
                    "<p>Para el desarrollo de esta aplicación se usarón las siguientes herramientas: PHP, Jquery y Bootstrap. Para el desarrollo de la parte interactiva se usó Node.JS con la librería Socket.IO </p>" +
                    "");

        }else  if($(this).attr('value') == 'purepecha'){
            alertify
                .errorAlert("<p>Para el desarrollo de esta pagina web el cliente solicitó solo un sistema de reservaciones para clientes y pago con PayPal.</p>" +
                    "<p>El cliente suministró el template y las imágenes. Las tareas para el desarrollo de esta página web fué implementar el backend el cual fue en Laravel 5.4 y la administración de un servidor compartido.</p>" +
                    "");

        }else  if($(this).attr('value') == 'pollito'){
            alertify
                .errorAlert("<p>Desarrollo de un E-commerce para la venta de productos de bebés.</p>" +
                    "<p>Para el desarrollo de esta aplicación fui el encargado del desarrollo del backend el cual está implementado en Python - Django y Django Rest-framework. Se usó SCRUM como metodología ágil para el desarrollo</p>" +
                    "");

        }
    });
    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "IonicaBizau");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "caseyscarborough", selector: "#ghfeed" });


});