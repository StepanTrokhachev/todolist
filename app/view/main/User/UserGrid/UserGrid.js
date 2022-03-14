Ext.define('ToDo.view.main.User.UserGrid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'userGrid',
    layout: 'column',
    width: "100%",
    requires: [
        'ToDo.view.main.User.UserGrid.UserGridController'
    ],
    store: {
        type: 'UserWindowStore'
    },

    columns: [
        {
            text: 'id',
            dataIndex: 'id'
        },
        {
            text: 'Users',
            dataIndex: 'user',
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

    controller: 'usergrid',
    listeners: {
        celldblclick: "onClickChange",

    }

});
