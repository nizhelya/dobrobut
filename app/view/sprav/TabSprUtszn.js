/*
 * File: app/view/sprav/TabSprUtszn.js
 * Date: Sun May 24 2020 12:36:10 GMT+0300 (EEST)
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Dobrobut.view.sprav.TabSprUtszn', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tabsprutszn',

    requires: [
        'Dobrobut.view.sprav.TabSprUtsznViewModel',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.column.Action',
        'Ext.panel.Tool',
        'Ext.grid.plugin.RowEditing'
    ],

    viewModel: {
        type: 'tabsprutszn'
    },
    scrollable: true,
    layout: 'fit',
    closable: true,
    title: 'УТиСЗН',
    defaultListenerScope: true,

    initConfig: function(instanceConfig) {
        var me = this,
            config = {
                items: [
                    {
                        xtype: 'gridpanel',
                        id: 'grUtszn',
                        scrollable: true,
                        title: 'Ввод и редактированние видов льгот для актов УТиСЗН',
                        store: 'StSprUtszn',
                        columns: [
                            {
                                xtype: 'numbercolumn',
                                hidden: true,
                                dataIndex: 'rec_id',
                                text: 'Ид'
                            },
                            {
                                xtype: 'numbercolumn',
                                dataIndex: 'gr',
                                text: 'группа',
                                format: '0',
                                editor: {
                                    xtype: 'numberfield',
                                    allowDecimals: false,
                                    decimalPrecision: 0
                                }
                            },
                            {
                                xtype: 'gridcolumn',
                                width: 799,
                                dataIndex: 'lgota',
                                text: 'Вид льготы для акта сверки в УТиСЗН',
                                flex: 1,
                                editor: {
                                    xtype: 'textfield'
                                }
                            },
                            {
                                xtype: 'actioncolumn',
                                editRenderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                    var val="";
                                    return val;
                                },
                                width: 38,
                                menuDisabled: true,
                                tooltip: 'Удалить',
                                items: [
                                    {
                                        handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                            var grid = view.findParentByType('grid');
                                            var store = view.store;
                                            var plugin = grid.getPlugin('rowEditSprUtszn');
                                            plugin.cancelEdit();

                                            Ext.MessageBox.show({
                                                title: 'Внимание!',
                                                msg: 'Вы удаляете данные ! Подтвердите свои действия!',
                                                buttons: Ext.MessageBox.OKCANCEL,
                                                icon: Ext.MessageBox.WARNING,

                                                buttonText:{
                                                    ok: "Удалить!",
                                                    cancel: "Отмена"
                                                },
                                                fn:function(btn){
                                                    if(btn=='ok'){
                                                        store.remove(record);

                                                        store.sync({
                                                            success: function(){
                                                                Ext.MessageBox.show({title: 'Удаление записи',
                                                                    msg:"Запись удалена",
                                                                    buttons: Ext.MessageBox.OK,
                                                                    icon: Ext.MessageBox.INFO
                                                                });
                                                            },
                                                            failure: function(){
                                                                Ext.MessageBox.show({title: 'Удаление записи',
                                                                    msg:"Невозможно удалить: вид оплаты уже используется",
                                                                    buttons: Ext.MessageBox.OK,
                                                                    icon: Ext.MessageBox.ERROR
                                                                });

                                                            },
                                                            scope: this
                                                        });
                                                    }
                                                }

                                            });

                                        },
                                        icon: 'resources/css/images/ico/no.png'
                                    }
                                ]
                            }
                        ],
                        selModel: Ext.create('Ext.selection.CheckboxModel', {
                            selType: 'checkboxmodel',
                            mode: 'SINGLE'
                        }),
                        tools: [
                            {
                                xtype: 'tool',
                                callback: function(owner, tool, event) {
                                    var me = this;
                                    var grid = tool.findParentByType('grid');
                                    var store = grid.store;
                                    var plugin = grid.getPlugin('rowEditSprUtszn');

                                    plugin.cancelEdit();
                                    var newRecord = store.model.create();
                                    store.insert(0, newRecord);
                                    plugin.startEdit(0, 0);
                                },
                                tooltip: 'Добавить запись',
                                type: 'plus'
                            }
                        ],
                        plugins: [
                            Ext.create('Ext.grid.plugin.RowEditing', {
                                pluginId: 'rowEditSprUtszn',
                                listeners: {
                                    edit: 'onRowEditingEdit'
                                }
                            })
                        ]
                    }
                ]
            };
        if (instanceConfig) {
            me.getConfigurator().merge(me, config, instanceConfig);
        }
        return me.callParent([config]);
    },

    onRowEditingEdit: function(editor, context, eOpts) {

        var grid = editor.grid;
        var store = grid.getStore();
        var sm = store.getUpdatedRecords();
        var data = grid.getSelectionModel();

        if(sm.length) {
            store.sync({
                success: function(){

                    store.load();

                }
            });

        } else {
            store.sync({
                success: function(){
                    Ext.MessageBox.show({
                        title: 'Добавление записи',
                        msg: 'Запись добавлена',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });

                   store.load();
                }
            });

        }

    }

});