Ext.define('ToDo.store.UserWindowStore', {
    extend: 'Ext.data.Store',
    model: 'ToDo.model.IdName',
    alias: 'store.ToDo.store.UserWindowStore',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Client&method=getClient',
        reader: {
            type: 'json',
        }
    },
    autoLoad: true
});