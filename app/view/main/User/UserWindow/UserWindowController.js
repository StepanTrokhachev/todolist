Ext.define('ToDo.view.main.User.UserWindow.UserWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userWindow',

    clickClose: function (button) {
        button.up('window').close();

    },
});
