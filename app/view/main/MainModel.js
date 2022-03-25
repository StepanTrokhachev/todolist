/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ToDo.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'ToDo',
        loremIpsum: 'Инфа о пользователе'
    }

});
