Ext.define('ToDo.view.main.Task.Task', {
    extend: 'Ext.panel.Panel',
    xtype: 'task',

    layout: 'vbox',
    width: "100%",
    requires: [
        'ToDo.view.main.Task.TaskController'
    ],
    controller: 'task',
    items: [
        {
            xtype: 'button',
            text: 'Create',
            scale: 'large',
            style: 'background-color: grey;',
            border: 0,
            handler: 'clickCraete',
            bind: {
                disabled: '{disabledButton}'
            } // допишу....
        },
        {
            xtype: 'button',
            text: 'Create PDF',
            scale: 'large',
            style: 'background-color: grey;',
            border: 0,
            handler: 'createPdf',
            margin: '5 0 5 0'
        },

        {
            xtype: 'taskGrid',
        }
    ]
});