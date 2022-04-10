Ext.define('ToDo.Application', {
    extend: 'Ext.app.Application',
    name: 'ToDo',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        'ToDo.store.UserWindowStore',
        'ToDo.store.TaskWindowStore'
    ],

});
