jQuery(document).ready( function( $ ) {
    jQuery(document).on('click', '#wpfresh5-accept-cookie', function(e) {
        e.preventDefault();
        jQuery.cookie( 'wpfresh5-cookie-pop', 'set5y' );
        jQuery( '.wpfresh5-cookie-pop' ).remove();
    });

    if( wpfresh5_vars.cookie_enabled && ( wpfresh5_vars.cookie_enabled != '0' )  ) {
        if ( 'set5y' !== jQuery.cookie( 'wpfresh5-cookie-pop' ) ) {
            var cookie_str = '<div class="wpfresh5-cookie-pop cookie-pos-'+wpfresh5_vars.cookie_pos+'">'+wpfresh5_vars.message+'<button id="wpfresh5-accept-cookie">'+wpfresh5_vars.button+
                '</button> <a class="wpfs5decline-btn" href="'+wpfresh5_vars.decline_url+'">'+wpfresh5_vars.decline_button+'</a> ';
                if( wpfresh5_vars.url != '' )
                    cookie_str += '<a href="'+wpfresh5_vars.url+'">Cookie Policy</a>';
                cookie_str += '</div>';
            jQuery( 'body' ).prepend(
                cookie_str
            );
        }
    }

    jQuery('#gdpraction').change(function(e) {
        e.preventDefault();
        var $this = jQuery(this);
        val = $this.val();
        jQuery('.wpgdprpanel').hide();
        if( val == 'gdprPDA' ) {
            jQuery('#gdprpda').show();
        }
        else if( val == 'gdprFM' ) {
            jQuery('#gdprfm').show();
        }
        else if( val == 'gdprDR' ) {
            jQuery('#gdprdr').show();
        }
        else if( val == 'gdprUR' ) {
            jQuery('#gdprur').show();
        }
    });
});