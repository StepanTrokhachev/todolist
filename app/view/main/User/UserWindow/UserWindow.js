Ext.define('ToDo.view.main.User.UserWindow.UserWindow', {
    extend: 'Ext.window.Window',
    xtype: 'window',
    itemId: 'userWindow',
    layout: 'vbox',
    width: 500,
    height: 350,
    bodyPadding: 10,
    requires: [
        'ToDo.view.main.User.UserWindow.UserWindowController',
        'ToDo.view.main.User.UserWindow.UserWindowModel'
    ],
    bind:{
        title: '{action}' + ' User',
    },
    controller:'userWindow',
    viewModel:"viewUserWindow",
    closable:false,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'User',
            name: 'name',
            width: "100%" ,
            itemId: 'userName',
            bind:{
                value:"{UserWindow.name}" ,
            }


        },

    ],
    buttons:
        [
        {
            scale: 'large',
            style: 'background-color: grey;',
            border:0,
            handler: 'ClickCreateUser',
            bind: {
                text: "{action}"
            }

        },
        {
            text: 'Close',
            scale: 'large',
            style: 'background-color: grey;',
            border:0,
            handler: 'clickClose'

        }

    ],

});