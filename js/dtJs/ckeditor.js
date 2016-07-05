u.CkEditorAdapter = u.BaseAdapter.extend({
    mixins: [u.ValueMixin, u.EnableMixin,u.RequiredMixin, u.ValidateMixin],
    initialize: function (comp, options) {
        var self = this;
        u.EditorAdapter.superclass.initialize.apply(this, arguments);

        this.e_editor = this.id + "-ckeditor";
        this.render(this.options);
    },

    render: function(data){
        var cols = data.cols || 80;
        var rows = data.rows || 10;
        var self = this
        var tpls = '<textarea cols="' + cols + '" id="'+ this.e_editor +'" name="editor" rows="' + rows + '"></textarea>';
        $(this.element).append(tpls);
        $( '#'+this.e_editor ).ckeditor(); 
        var tmpeditor = CKEDITOR.instances[this.e_editor]
        this.tmpeditor = tmpeditor
        this.tmpeditor.on('blur',function(){
            self.setValue(tmpeditor.getData())
        });
        
        this.tmpeditor.on('focus',function(){
            self.setShowValue(self.getValue())
        });
    },

    modelValueChange: function(value) {
        if (this.slice) return
        value = value || ""
        this.trueValue = value
        this.showValue = value
        this.setShowValue(this.showValue)
    },

    setValue: function(value) {
        this.trueValue = value
        this.showValue = value
        this.setShowValue(this.showValue)
        this.slice = true
        this.dataModel.setValue(this.field, this.trueValue);
        this.slice = false
        this.trigger(Editor.EVENT_VALUE_CHANGE, this.trueValue)
    },

    getValue : function() {
        return this.trueValue
    },

    setShowValue : function(showValue) {
        this.showValue = showValue          
        this.element.value = showValue
        this.tmpeditor.setData(showValue)
    },

    getShowValue: function() {
        return this.showValue
    },

    getContent: function(){
        return $( '#'+this.e_editor ).html();
    },

    setContent: function(txt){
        $( '#'+this.e_editor ).html(txt);
    },

});

u.compMgr.addDataAdapter(
    {
        adapter: u.CkEditorAdapter,
        name: 'u-ckeditor'
    });




