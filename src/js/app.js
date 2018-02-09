(function(){
    var app = window.app || {};
    var model = app.model() || {};
    var controller = app.controller(model) || {};
    var view = app.view(controller) || {};

    // render view
    view.init();
    view.renderAirportList();
    view.addEvents();

}())
