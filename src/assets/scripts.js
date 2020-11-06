window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Results"
        },
        axisY: {
            title: "Medals",
            includeZero: true
        },
        legend: {
            cursor:"pointer",
            itemclick : toggleDataSeries
        },
        toolTip: {
            shared: true,
            content: toolTipFormatter
        },
        data: [{
            type: "bar",
            showInLegend: true,
            name: "Correct Questions",
            color: "#2a8bf2",
            dataPoints: [
                { y: 243, label: "01-09-2020" },
                { y: 236, label: "01-09-2020" },
                { y: 243, label: "03-09-2020" },
                { y: 273, label: "01-09-2020" },
                { y: 269, label: "01-09-2020" },
                { y: 196, label: "01-09-2020" },
                { y: 1118, label: "01-09-2020" }
            ]
        },
        {
            type: "bar",
            showInLegend: true,
            name: "Wrong Questions",
            color: "red",
            dataPoints: [
                { y: 212, label: "01-09-2020" },
                { y: 186, label: "09-09-2020" },
                { y: 272, label: "03-09-2020" },
                { y: 299, label: "23-09-2020" },
                { y: 270, label: "01-09-2020" },
                { y: 165, label: "07-09-2020" },
                { y: 896, label: "27-09-2020" }
            ]
        }]
    });
    chart.render();

    function toolTipFormatter(e) {
        var str = "";
        var total = 0 ;
        var str3;
        var str2 ;
        for (var i = 0; i < e.entries.length; i++){
            var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
            total = e.entries[i].dataPoint.y + total;
            str = str.concat(str1);
        }
        str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
        str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
        return (str2.concat(str)).concat(str3);
    }

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    }