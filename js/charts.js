/**
 * Created with IntelliJ IDEA.
 * User: GSmirnoff
 * Date: 18.12.13
 * Time: 13:33
 * To change this template use File | Settings | File Templates.
 */
var charts = (function (configs) {
    var drawChart = function (config, placeholder) {
        d3.text(config.csv, function (csvText) {
            var parsed = d3.csv.parseRows(csvText.replace(/\s*;\s*/g, ","));

            //in 1st cell there is name of chart and names of cells
            if (parsed.length == 0) return null;

            var headers = parsed.shift();
            var colHeaders = headers.splice(headers.length + 1 - parsed[0].length);
            var legend = $.map(parsed, function (elem) {
                return elem.shift()
            });
            for (var i = 0; i < colHeaders.length; i++) colHeaders[i] = messages.get(colHeaders[i]);
            var header = messages.get(headers[0]);

            $(placeholder).parent().parent().prev().empty().append($('<span/>', {'class':'header-text', text:header}));

            var chartData = [];
            for (var i = 0; i < legend.length; i++) {
                var paramData = {
                    key: legend[i],
                    values: []
                }
                for (var j = 0; j < parsed[i].length; j++) {
                    paramData.values.push({x: colHeaders[j], y: parseFloat(parsed[i][j])});
                }
                chartData.push(paramData);
            }

            //todo move to separate method
            var lineChartData, line;
            if (config.withLineChart) {
                var planIdx = null;
                $.each(chartData, function (idx, elem) {
                    if (this.key == 'plan') {
                        planIdx = idx;
                    }
                });
                lineChartData = chartData.splice(planIdx, 1)[0].values;
                line = d3.svg.line()
                    .x(function (d, i) {
                        return x(d.x) + x.rangeBand() / 2;
                    })
                    .y(function (d) {
                        return y(d.y);
                    });
            }

            //then draw chart itself
            var margin = {top: 20, right: 10, bottom: 20, left: 25},
                width = config.width - margin.left - margin.right,
                height = config.height - margin.top - margin.bottom,
                keys = chartData[0].values.map(function (item) {
                    return item.x
                }),
                stack = d3.layout.stack().values(function (d) {
                    return d.values;
                }),
                layers = stack(chartData),
                yMax = d3.max(layers, function (layer) {
                    return d3.max(layer.values, function (d) {
                        return d.y0 + d.y;
                    });
                })

            //Calulate totals for each x value in the domain
            var totals = {};
            chartData.forEach(function (series) {
                series.values.forEach(function (item) {
                    totals[item.x] = (totals[item.x] || 0 ) + item.y
                })
            })

            var x = d3.scale.ordinal()
                .domain(keys)
                .rangeRoundBands([0, width], .22);

            var y = d3.scale.linear()
                .domain([0, yMax])
                .range([height, 0]);

            var color = d3.scale.ordinal()
                .domain([0, chartData.length - 1])
                .range(config.colorSet || ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

            var yAxis = d3.svg.axis()
                .scale(y)
                .tickSize(1)
                .tickPadding(2)
                .orient("left");

            var xAxis = d3.svg.axis()
                .scale(x)
                .tickSize(1)
                .tickPadding(6)
                .orient("bottom");

            var svg = d3.select(placeholder).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var layer = svg.selectAll(".layer")
                .data(layers)
                .enter().append("g")
                .attr("class", "layer")
                .style("fill", function (d, i) {
                    return color(i);
                });

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function (d) {
                    var tipValues = $.map(config.tips, function (param) {
                        return d[param]
                    });
                    return "<span style='color:gray'>" + tipValues.join(': ') + "</span>";
                });
            svg.call(tip);

            layer.selectAll("rect")
                .data(function (d) {
                    return d.values;
                })
                .enter().append("rect")
                .attr("width", x.rangeBand())
                .attr("x", function (d) {
                    return x(d.x);
                })
                .attr("y", function (d) {
                    return y(d.y0 + d.y);
                })
                .attr("height", function (d) {
                    return y(d.y0) - y(d.y0 + d.y);
                })
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

            if (config.withLineChart) {
                svg.append('path').attr('d', line(lineChartData))
                    .attr("stroke", config.lineColor)
                    .attr("stroke-width", 2)
                    .attr("fill", "none");
            }


            svg.selectAll('.x.axis').selectAll('.tick').selectAll('text')
                .style('font-size', config.hideX ? 0 : 10);
            svg.selectAll('.y.axis').selectAll('.tick').selectAll('text')
                .style('font-size', 10);
        })
    };

    var updateView = function (elems) {
        var placeHolders = elems || $('.chart').not('.empty-charts-add');
        for (var i = 0; i < placeHolders.length; i++) {
            var placeHolder = $(placeHolders.get(i));
            if (placeHolder.data('configid')) {
                var configId = placeHolder.data('configid');
                placeHolder = placeHolder.find('.grapholder-inner').empty();
                var config = $.extend({}, configs[configId], {width: placeHolder.width(), height: placeHolder.height()});
                if (config.csv) {
                    drawChart(config, placeHolder[0]);
                } else if (config.image) {
                    placeHolder.append($('<img/>', {src: config.image}).css({
                        width: placeHolder.width() - 10,
                        height: placeHolder.height() - 10,
                        padding: '5px'
                    }));
                    placeHolder.parent().parent().prev().empty().append($('<span/>', {'class':'header-text', text:config.header}));
                }
            }
        }
    }
    $(document).ready(function () {
        updateView();
    });
    return {
        updateCharts: updateView
    }
})(chartConfigs)
