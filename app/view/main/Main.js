/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ToDo.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',


    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ToDo.view.main.MainController',
        'ToDo.view.main.MainModel',
        'ToDo.view.main.Task.Task',
        'ToDo.view.main.User.User' ,
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        style: 'background-color: grey;',
        border:0,
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        style: 'background-color: grey;',
        border:0,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {

        tall: {

            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,


        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {

                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{

        title: 'Task',
        glyph: "!",
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'task'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'user'
        }]
    }]
});
