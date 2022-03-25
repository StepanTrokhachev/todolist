Ext.define('ToDo.view.main.Task.DeleteTask.DeleteWinTaskController', {
    extend: 'ToDo.view.main.MainController',
    alias: 'controller.deleteWinTask',

    onclickCloseTask: function (button) {
        button.up('deleteWindowTask').close();
    },

    clickDeleteTask: function (button) {
        let me = this;
        const createNewRequest = this.getView();
        this.mask(createNewRequest);
        let gridTasksStore = Ext.ComponentQuery.query('#taskGrid')[0].getStore();
        let params = {
            id: this.getViewModel().get('taskId')
        }
        Ext.Ajax.request({
            url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Task&method=deleteTask',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                me.unmask(createNewRequest);
                gridTasksStore.reload()
                button.up("deleteWindowTask").close()
            },
            failure: function () {
                button.up("deleteWindowTask").close()
            }
        })
    }
})