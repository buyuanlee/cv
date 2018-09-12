/*var view =View('')*/
window.View = function (selector) {
    return document.querySelector(selector)
}

/*
var model =Model({
    resourceName:'表名'
})
*/

window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'iQIAWaVsjCUyV7c0NFQI1ki7-gzGzoHsz';
            var APP_KEY = 'LgRhDl4pqwH4ic9fQXbGg8DX';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        fetch: function () {
            var query = new AV.Query('resourceName');
            return query.find()
        },
        save: function (object) {
            var x = AV.Object.extend('resourceName');
            var x = new x()
            return x.save(object)
        }
    }
}

/*
Controller({
    init: (){
    this.view
    this.model
    this.xxx()
    this.yyy()
},
xxx(){}
yyy(){}
})
*/

window.Controller = function (options) {
    var init = options.init

    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            init.call(this, view, model)
            this.bindEvents.call(this)
        },
    }
    for (let key in options) {
        if (key !== 'init') {
            object[key] = options[key]
        }
    }
    return object
}