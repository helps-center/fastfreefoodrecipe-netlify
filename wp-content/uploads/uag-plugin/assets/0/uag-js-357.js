document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBTabs.init( '.uagb-block-3b659a35' );
	UAGBTabs.anchorTabId( '.uagb-block-3b659a35' );
});
window.addEventListener( 'hashchange', function() {
	UAGBTabs.anchorTabId( '.uagb-block-3b659a35' );
}, false );
				window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-c3da692d' );
					if ( ! blockScope ) {
						return;
					}

					const anchorElement = blockScope.querySelector('a');
					if (!anchorElement) {
						return;
					} 

					 
					blockScope.addEventListener('keydown', (event) => {
						if ( 13 === event.keyCode || 32 === event.keyCode ) {
							event.preventDefault();
							 
							anchorElement.click();	
						}
					} );
				} );
			 });