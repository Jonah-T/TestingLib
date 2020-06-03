(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1>Testing!!!</h1>
    `;

    customElements.define('com-sap-sample-testinglib', class TestingLib extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            		this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
			this._firstConnection = 0;
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
			//var that = this;
			//if (this._firstConnection === 0) {
			//	this._firstConnection = 1;
			//	let GoogleSRC = "https://www.gstatic.com/charts/loader.js";
			//	async function LoadLibs() {
			//		try {
			//			await loadScript(GoogleSRC, _shadowRoot);
			//		} catch (e) {
			//			alert(e);
			//	}
			//}
           // this.redraw();
        //}
		}
	//loadScript(src, shadowRoot) {
	//		return new Promise(function(resolve, reject) {
	//			let script = document.createElement('script');
	//			script.src = src;
//
	//			script.onload = () => {
	//				console.log("Load: " + src);
	//				resolve(script);
	//			}
	//			script.onerror = () => reject(new Error(`Script load error for ${src}`));
//
	//			shadowRoot.appendChild(script)
	//		});
	//}
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        }
        */

        redraw(){}
    });
}
 loadScript(src, shadowRoot) {
			return new Promise(function(resolve, reject) {
				let script = document.createElement('script');
				script.src = src;

				script.onload = () => {
					console.log("Load: " + src);
					resolve(script);
				}
				script.onerror = () => reject(new Error(`Script load error for ${src}`));

			shadowRoot.appendChild(script)
			});
	})();

