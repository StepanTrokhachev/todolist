Ext.define('ToDo.view.main.Task.DeleteTask.DeleteWinTaskController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deleteWinTask',


    onclickCloseTask: function (button) {
        button.up('deleteWindowTask').close();
    },


    ClickDeleteTask: function (button) {
        let gridUsersStore = Ext.ComponentQuery.query('#taskGrid')[0].getStore();
        let params = {
            id: this.getViewModel().get('taskId')

        }
        Ext.Ajax.request({
            url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Task&method=deleteTask',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                gridUsersStore.reload()
                button.up("deleteWindowTask").close()
            },
            failure: function () {
                button.up("deleteWindowTask").close()
            }
        })

    }

})