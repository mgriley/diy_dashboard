var widgetname = document.currentScript.dataset.widgetname;
FigureWidgets.add(widgetname, {
    getCurrentValue: function(name) {
        return $(name).is(':checked');
    }
});