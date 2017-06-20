$('#widgetform').ready(function() {
    $('#widgetform').on("submit", function(formEvent) {
        // prevent default action of get request
        formEvent.preventDefault();
        // accumulate the values of all widgets
        valueMap = FigureWidgets.getValues();
        console.log('form values: ' + JSON.stringify(valueMap));
        var currentPath = window.location.pathname;
        var callback = function(data) {
            console.log(data);
            $('#figure').html(data);
        }
        $.ajax({
            url: currentPath,
            type: "POST",
            data: JSON.stringify(valueMap),
            contentType: "application/json",
            success: callback
        });
    });
});
