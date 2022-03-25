Ext.define('ToDo.view.main.User.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',

    layout: 'vbox',
    width: "100%",
    requires: [
        'ToDo.view.main.User.UserController'
    ],
    controller: 'user',
    items: [
        {
            xtype: 'button',
            text: 'Create',
            scale: 'large',
            style: 'background-color: grey;',
            border: 0,
            handler: 'clickCraete',
        },
        {
            xtype: 'button',
            text: 'Create PDF',
            scale: 'large',
            style: 'background-color: grey;',
            border: 0,
            handler: '',
            margin: '5 0 5 0'
        },
        {
            xtype: 'userGrid',
        }
    ]
});