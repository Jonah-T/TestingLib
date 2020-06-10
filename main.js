(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
			<style>
				:host {
					display: block;
				} 
			</style> 
			<div id="chart_div"></div>
    `;

 


    customElements.define('com-sap-sample-testinglib', class TestingLib extends HTMLElement {

 

 

            constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
                    this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = 0;
           
            let GoogleSRC = "https://www.gstatic.com/charts/loader.js";
            $.ajax({
              url: GoogleSRC,
              dataType: "script",
              success: function(data) {
                console.log("Script loaded");
              },
              async: false
            });
            	var createDiv = document.createElement("div");
		createDiv.setAttribute("id", "div_test");
		createDiv.style.backgroundColor = "lightblue";
		createDiv.style.width='250px';
		createDiv.style.height='300px';


		document.getElementsByTagName('body')[0].appendChild(createDiv);
        }


 


        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this.redraw();
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
            //    this._firstConnection = 1;
            //    let GoogleSRC = "https://www.gstatic.com/charts/loader.js";
            //    async function LoadLibs() {
            //        try {
            //            await loadScript(GoogleSRC, _shadowRoot);
            //        } catch (e) {
            //            alert(e);
            //    }
            //}
            this.redraw();
        //}
        }
    //loadScript(src, shadowRoot) {
    //        return new Promise(function(resolve, reject) {
    //            let script = document.createElement('script');
    //            script.src = src;
//
    //            script.onload = () => {
    //                console.log("Load: " + src);
    //                resolve(script);
    //            }
    //            script.onerror = () => reject(new Error(`Script load error for ${src}`));
//
    //            shadowRoot.appendChild(script)
    //        });
    //}
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

 


        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        
        onCustomWidgetResize(width, height){
            this.redraw();
        }
       

 


        redraw(){

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart(this._shadowRoot));
        function drawChart(shadow) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
            var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};


		var div = shadow.getElementById('chart_div'); ;              
		 
            var chart = new google.visualization.PieChart(div);
            chart.draw(data, options);
 
        }
        }         
    });
}

    )();
