(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
			<style>
				:host {
					display: block;
				} 
			</style> 
			<div id="chart_div"></div>
			<div id="chart_gauge"></div>
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
		google.charts.load('current', {'packages':['corechart']});
                console.log("Script loaded");
		
              },
              async: false
            });
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
		
	//////////////	
 	var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart_g = new google.visualization.Gauge(shadow.getElementById('chart_gauge'));

        chart_g.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart_g.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart_g.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart_g.draw(data, options);
        }, 26000);
		/////////////
        }
        }         
    });
}

    )();
