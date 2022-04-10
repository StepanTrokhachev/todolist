Ext.define('ToDo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    mask: function (el) {
        if (el.maskCount == null) {
            el.maskCount = 1;
        } else {
            el.maskCount++;
        }
        if (el.maskCount === 1 && (el.rendered || el === Ext.getBody())) {
            el.mask('Загрузка данных..');
        }
    },

    unmask: function (el) {
        if (el.maskCount == null) {
            return 0;
        } else if (el.maskCount === 0) {
            return 0;
        } else {
            el.maskCount--;
        }
        if (el.maskCount === 0 && (el.rendered || el === Ext.getBody())) {
            el.unmask(false);
        }
    }

});
