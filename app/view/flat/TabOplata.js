/*
 * File: app/view/flat/TabOplata.js
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

Ext.define('Dobrobut.view.flat.TabOplata', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.taboplata',

    requires: [
        'Dobrobut.view.flat.TabOplataViewModel',
        'Ext.grid.Panel',
        'Ext.grid.feature.GroupingSummary',
        'Ext.view.Table',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.grid.column.Action'
    ],

    viewModel: {
        type: 'taboplata'
    },
    id: 'tabOplata',
    scrollable: true,
    title: '',

    items: [
        {
            xtype: 'gridpanel',
            id: 'grOplata',
            margin: 10,
            width: 1066,
            title: 'Оплата',
            store: 'StOplata',
            features: [
                {
                    ftype: 'groupingsummary',
                    depthToIndent: 200,
                    groupByText: 'Группировать по этому полю',
                    showGroupsText: 'Показать в группе',
                    startCollapsed: true
                }
            ],
            viewConfig: {
                style: 'background-color: #C2D9C9;'
            },
            columns: [
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'rec_id',
                    format: '0'
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'address_id',
                    text: 'Address_id',
                    format: '0'
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'raion_id',
                    format: '0'
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'god',
                    text: 'Год',
                    format: '0'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 87,
                    dataIndex: 'address',
                    menuDisabled: true,
                    text: 'Адрес'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 87,
                    dataIndex: 'pr',
                    menuDisabled: true
                },
                {
                    xtype: 'datecolumn',
                    width: 80,
                    dataIndex: 'data',
                    menuDisabled: true,
                    text: 'Дата',
                    format: 'd-m-y',
                    editor: {
                        xtype: 'datefield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 75,
                    dataIndex: 'kvartplata',
                    menuDisabled: true,
                    text: 'Кварт',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 75,
                    dataIndex: 'remont',
                    menuDisabled: true,
                    text: 'Р.фонд',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 80,
                    dataIndex: 'otoplenie',
                    menuDisabled: true,
                    text: 'Отопл',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 65,
                    dataIndex: 'ptn',
                    menuDisabled: true,
                    text: 'ПТН',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 65,
                    dataIndex: 'podogrev',
                    menuDisabled: true,
                    text: 'Подог',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 70,
                    dataIndex: 'voda',
                    menuDisabled: true,
                    text: 'Вода',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 70,
                    dataIndex: 'stoki',
                    menuDisabled: true,
                    text: 'Стоки',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 65,
                    dataIndex: 'tbo',
                    menuDisabled: true,
                    text: 'ТБО',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryRenderer: function(val, params, data) {
                        var n =Ext.util.Format.number(val,'0,000.00');
                        if (val >= 0) {
                            return '<span style="color:#000; font-weight:bold;">' + n + '</span>';
                        } else  {
                            return '<span style="color:red; font-weight:bold;">' + n + '</span>';
                        }
                    },
                    summaryType: 'sum',
                    width: 85,
                    dataIndex: 'summa',
                    menuDisabled: true,
                    text: 'Сумма',
                    format: '0.00',
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 90,
                    dataIndex: 'prixod',
                    menuDisabled: true,
                    text: 'Приход',
                    editor: {
                        xtype: 'combobox'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 90,
                    dataIndex: 'kassa',
                    menuDisabled: true,
                    text: 'Касса',
                    editor: {
                        xtype: 'combobox'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'nomer',
                    text: 'Nomer',
                    editor: {
                        xtype: 'numberfield',
                        decimalPrecision: 0
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 90,
                    dataIndex: 'operator',
                    text: 'Оператор',
                    editor: {
                        xtype: 'combobox'
                    }
                },
                {
                    xtype: 'datecolumn',
                    hidden: true,
                    dataIndex: 'data_in'
                },
                {
                    xtype: 'actioncolumn',
                    width: 30,
                    menuDisabled: true,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var winEditOplata = Ext.ClassManager.instantiateByAlias('widget.wineditoplata');
                                var form = winEditOplata.down('#fmEditOplata');
                                var stUser = Ext.data.StoreManager.get("StUser");
                                var values =stUser.getAt(0);
                                var value = record;
                                //console.log(value);
                                view.getSelectionModel().select(rowIndex);
                                values.set({'vibor':'editOplata'});
                                stUser.sync();

                                form.loadRecord(value);
                                winEditOplata.show();
                            },
                            getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                                var tekd = r.get('data');
                                var dt = new Date();
                                var check_date=Ext.Date.format(dt, 'Y-m');
                                var tek_date=Ext.Date.format(tekd, 'Y-m');
                                if (check_date === tek_date ) {
                                    metaData = 'x-grid-center-icon';
                                } else {
                                    metaData = 'x-grid-center-icon';
                                }
                                return metaData;
                            },
                            icon: 'resources/css/images/ico/edit.png',
                            tooltip: 'Редактировать запись'
                        }
                    ]
                },
                {
                    xtype: 'actioncolumn',
                    width: 30,
                    menuDisabled: true,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                // in use
                                var me = this;
                                //STORE

                                var stUser = Ext.data.StoreManager.get("StUser");


                                //LOGIN & PASSWORD
                                var values =stUser.getAt(0);
                                var params = {
                                    login:values.get('login'),
                                    password:values.get('password'),
                                    address_id:values.get('address_id'),
                                    address:values.get('address'),
                                    what:"delOplataApp"
                                };

                                //GRID
                                var store = view.getStore();
                                var value = store.getAt(rowIndex).data;


                                //LOGIKA


                                Ext.Object.merge(value, params);
                                //console.log(value);

                                Ext.MessageBox.confirm({
                                    title: 'Удаление записи',
                                    msg: 'Вы удаляете запись об оплате  <br> Подтвердите или отмените свои действия.',
                                    buttons: Ext.MessageBox.OKCANCEL,
                                    icon: Ext.MessageBox.ERROR,
                                    buttonText:{
                                        ok:'подтвеждаю',
                                        cancel:'отмена'
                                    },
                                    fn:function(btn,newValue){
                                        if(btn=='ok'){
                                            QueryKassa.delOplata(value,function(results){
                                                if(results.success==="1"){
                                                    Ext.MessageBox.show({
                                                        title: 'Удаление записи об оплате ',
                                                        msg: results.msg,
                                                        buttons: Ext.MessageBox.OK,
                                                        icon: Ext.MessageBox.INFO
                                                    });
                                                    store.load({
                                                        params: {
                                                            what:'OplataApp',
                                                            address_id: values.get('address_id'),
                                                            login:values.get('login'),
                                                            password:values.get('password')
                                                        },
                                                        scope:this
                                                    });

                                                } else {
                                                    Ext.MessageBox.show({
                                                        title: 'Удаление записи об оплате',
                                                        msg: results.msg,
                                                        buttons: Ext.MessageBox.OK,
                                                        icon: Ext.MessageBox.ERROR
                                                    });
                                                }
                                            });
                                        }
                                    }
                                });
                            },
                            getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                                var tekd = r.get('data');
                                var dt = new Date();
                                var check_date=Ext.Date.format(dt, 'Y-m');
                                var tek_date=Ext.Date.format(tekd, 'Y-m');
                                if (check_date === tek_date ) {
                                    metaData = 'x-grid-center-icon';
                                } else {
                                    metaData = 'x-hide-display';
                                }
                                return metaData;
                            },
                            icon: 'resources/css/images/ico/no.png',
                            tooltip: 'Удалить  запись '
                        }
                    ]
                }
            ]
        }
    ]

});