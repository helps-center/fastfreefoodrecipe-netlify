document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-cddeb88a', {"layout":"number","heading":"Event Done","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":60,"totalNumber":100,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-072ef5d0', {"layout":"number","heading":"Year of Experience","numberPrefix":"0","numberSuffix":"+","startNumber":0,"endNumber":7,"totalNumber":1288,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-231ac69f', {"layout":"number","heading":"Happy Clients","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":189,"totalNumber":500,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-aaaa3899', {"layout":"number","heading":"Trusted Vendors","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":30,"totalNumber":100,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
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