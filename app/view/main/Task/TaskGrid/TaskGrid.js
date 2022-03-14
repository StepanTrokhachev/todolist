Ext.define('ToDo.view.main.Task.TaskGrid.TaskGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskGrid',
    layout: 'column',
    width: "100%",
    requires: [
        'ToDo.view.main.Task.TaskGrid.TaskGridController'
    ],
    store: {
        type: 'TaskWindowStore'
    },

    columns: [
        {
            text: 'id',
            dataIndex: 'id'
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Users',
            dataIndex: 'user',
            flex: 1
        },
        {
            text: 'Date of Create',
            dataIndex: 'date',
            flex: 1
        },
        {
            text: 'Deadline',
            dataIndex: 'deadline',
            flex: 1
        },
        {
            align: 'center',
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'button',
                text: "Delete",
                style: 'background-color: grey;',
                defaultBindProperty: null, //important
                listeners: {
                    //delete row function
                }
            }
        }


    ],

    controller: 'taskgrid',
    listeners: {
        celldblclick: "onClickChange",

    }

});
