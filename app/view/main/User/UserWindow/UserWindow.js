Ext.define('ToDo.view.main.User.UserWindow.UserWindow', {
    extend: 'Ext.window.Window',
    xtype: 'UserWindow',
    itemId: 'userWindow',
    layout: 'vbox',
    width: 500,
    height: 350,
    bodyPadding: 10,
    requires: [
        'ToDo.view.main.User.UserWindow.UserWindowController',
        'ToDo.view.main.User.UserWindow.UserWindowModel'
    ],
    bind: {
        title: '{action}' + ' User',
    },
    controller: 'userWindow',
    viewModel: 'UserWindow',
    closable: false,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'User',
            name: 'name',
            width: "100%",
            itemId: 'userName',
            bind: {
                value: "{userWindow.name}",
            },
            listeners:{
                change: function (w){
                    debugger
                    this.up('#userWindow').getViewModel().notify()
                }
            }
        },
    ],
    buttons:
        [
            {
                scale: 'large',
                style: 'background-color: grey;',
                border: 0,
                handler: 'clickCreateUser',
                bind: {
                    text: "{action}",
                    disabled: "{isDisabledCreatePurchaseButton}"
                }
            },
            {
                text: 'Close',
                scale: 'large',
                style: 'background-color: grey;',
                border: 0,
                handler: 'clickClose'
            }
        ],

});