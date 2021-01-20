/*
 * File: app/view/sprav/WinEditDbfLgota.js
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

Ext.define('Dobrobut.view.sprav.WinEditDbfLgota', {
    extend: 'Ext.window.Window',
    alias: 'widget.wineditdbflgota',

    requires: [
        'Dobrobut.view.sprav.WinEditDbfViewModel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Number',
        'Ext.button.Button',
        'Ext.form.field.Hidden'
    ],

    viewModel: {
        type: 'wineditdbflgota'
    },
    height: 551,
    id: 'winEditDbfLgota',
    width: 461,
    title: 'Редактирование оплаты',
    modal: true,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            height: 598,
            id: 'fmEditDbfLgota',
            layout: 'fit',
            title: '',
            items: [
                {
                    xtype: 'fieldset',
                    height: 395,
                    style: 'background-color: #DCDCDC;',
                    width: 415,
                    layout: 'absolute',
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            x: 120,
                            y: 25,
                            width: 150,
                            fieldLabel: 'Запись_ид',
                            labelWidth: 80,
                            name: 'rec_id',
                            readOnly: true,
                            allowBlank: false,
                            editable: false
                        },
                        {
                            xtype: 'fieldset',
                            x: 5,
                            y: 235,
                            height: 235,
                            style: 'background-color: #F1EEEE ;',
                            width: 215,
                            layout: 'absolute',
                            title: 'Период начисления',
                            items: [
                                {
                                    xtype: 'datefield',
                                    x: 0,
                                    y: 5,
                                    width: 185,
                                    fieldLabel: 'дата',
                                    labelWidth: 50,
                                    name: 'data',
                                    allowBlank: false,
                                    format: 'd-m-Y',
                                    submitFormat: 'Ymd'
                                },
                                {
                                    xtype: 'textfield',
                                    x: 0,
                                    y: 40,
                                    formBind: false,
                                    width: 95,
                                    fieldLabel: 'Год',
                                    labelWidth: 35,
                                    name: 'yearin',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    x: 0,
                                    y: 180,
                                    formBind: false,
                                    width: 190,
                                    fieldLabel: 'Код услуги',
                                    labelWidth: 120,
                                    name: 'lgcode',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    x: 100,
                                    y: 40,
                                    formBind: false,
                                    width: 85,
                                    fieldLabel: 'мес',
                                    labelWidth: 35,
                                    name: 'monthin',
                                    allowBlank: false,
                                    hideTrigger: true
                                },
                                {
                                    xtype: 'datefield',
                                    x: 0,
                                    y: 75,
                                    width: 185,
                                    fieldLabel: 'Дата с',
                                    labelWidth: 60,
                                    name: 'data1',
                                    allowBlank: false,
                                    format: 'd-m-Y',
                                    submitFormat: 'Ymd'
                                },
                                {
                                    xtype: 'datefield',
                                    x: 0,
                                    y: 110,
                                    width: 185,
                                    fieldLabel: 'Дата по',
                                    labelWidth: 60,
                                    name: 'data2',
                                    allowBlank: false,
                                    format: 'd-m-Y',
                                    submitFormat: 'Ymd'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    x: 0,
                                    y: 145,
                                    fieldLabel: 'тип записи',
                                    labelAlign: 'right',
                                    labelWidth: 80,
                                    name: 'flag',
                                    boxLabel: 'начисление',
                                    inputValue: '1',
                                    uncheckedValue: '0',
                                    listeners: {
                                        change: 'onCheckboxfieldChange'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            x: 10,
                            y: 55,
                            height: 180,
                            style: 'background-color: #F1EEEE ;',
                            width: 405,
                            layout: 'absolute',
                            title: 'Реквизиты',
                            items: [
                                {
                                    xtype: 'textfield',
                                    x: 0,
                                    y: 40,
                                    width: 380,
                                    fieldLabel: 'ОСББ',
                                    labelWidth: 50,
                                    name: 'house',
                                    editable: false
                                },
                                {
                                    xtype: 'textfield',
                                    x: 0,
                                    y: 75,
                                    width: 260,
                                    fieldLabel: 'Адрес',
                                    labelWidth: 50,
                                    name: 'rs',
                                    editable: false
                                },
                                {
                                    xtype: 'textfield',
                                    x: 0,
                                    y: 110,
                                    width: 225,
                                    fieldLabel: 'Ф.И.О',
                                    labelWidth: 50,
                                    name: 'fio',
                                    editable: false
                                },
                                {
                                    xtype: 'textfield',
                                    x: 270,
                                    y: 75,
                                    formBind: false,
                                    width: 110,
                                    fieldLabel: 'кв_ид',
                                    labelWidth: 50,
                                    name: 'address_id',
                                    allowBlank: false,
                                    editable: false
                                },
                                {
                                    xtype: 'textfield',
                                    x: 190,
                                    y: 5,
                                    width: 190,
                                    fieldLabel: 'ЕДРПОУ',
                                    labelWidth: 60,
                                    name: 'cdpr',
                                    editable: false
                                },
                                {
                                    xtype: 'textfield',
                                    x: 235,
                                    y: 110,
                                    width: 145,
                                    fieldLabel: 'ИНН',
                                    labelWidth: 40,
                                    name: 'idcode'
                                },
                                {
                                    xtype: 'textfield',
                                    x: 0,
                                    y: 5,
                                    width: 160,
                                    fieldLabel: 'Льготник ид',
                                    labelWidth: 80,
                                    name: 'lgotnik_id'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            x: 230,
                            y: 235,
                            height: 215,
                            padding: '5 5 5 5',
                            style: 'background-color: #F1EEEE ;',
                            width: 185,
                            layout: 'absolute',
                            title: 'Начислено на бюджет',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    x: 0,
                                    y: 0,
                                    width: 170,
                                    fieldLabel: 'Кол-во льготников',
                                    labelWidth: 120,
                                    name: 'lgkol',
                                    value: 0,
                                    allowBlank: false,
                                    editable: false,
                                    hideTrigger: true
                                },
                                {
                                    xtype: 'numberfield',
                                    x: 0,
                                    y: 30,
                                    width: 80,
                                    fieldLabel: 'Кат',
                                    labelWidth: 30,
                                    name: 'lgkat',
                                    value: 0,
                                    editable: false,
                                    hideTrigger: true
                                },
                                {
                                    xtype: 'numberfield',
                                    x: 90,
                                    y: 30,
                                    width: 80,
                                    fieldLabel: '%',
                                    labelWidth: 25,
                                    name: 'lgprc',
                                    value: 0,
                                    editable: false,
                                    hideTrigger: true
                                },
                                {
                                    xtype: 'numberfield',
                                    x: 0,
                                    y: 65,
                                    width: 170,
                                    fieldLabel: 'Кол-во',
                                    labelWidth: 60,
                                    name: 'fact',
                                    value: 0,
                                    inputType: 'number',
                                    allowBlank: false,
                                    hideTrigger: true,
                                    decimalPrecision: 6
                                },
                                {
                                    xtype: 'numberfield',
                                    x: 0,
                                    y: 95,
                                    width: 170,
                                    fieldLabel: 'Тариф',
                                    labelWidth: 60,
                                    name: 'tarif',
                                    value: 0,
                                    inputType: 'number',
                                    allowBlank: false,
                                    hideTrigger: true,
                                    decimalPrecision: 7
                                },
                                {
                                    xtype: 'numberfield',
                                    x: 0,
                                    y: 125,
                                    width: 170,
                                    fieldLabel: 'Сумма',
                                    labelWidth: 60,
                                    name: 'summ',
                                    value: 0,
                                    inputType: 'number',
                                    allowBlank: false,
                                    hideTrigger: true
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var form = button.findParentByType('form').getForm();
                                        var tarif = form.findField('tarif').getValue();
                                        var qty = form.findField('fact').getValue();
                                        var percent = form.findField('lgprc').getValue();
                                        var people = form.findField('lgkol').getValue();

                                        var summa = 0;


                                        if (tarif===0) {

                                            Ext.MessageBox.show({
                                                title: 'Проверка тарифа',
                                                msg: 'Введите тариф ',
                                                buttons: Ext.MessageBox.OK,
                                                icon: Ext.MessageBox.INFO
                                            });
                                        } else {
                                            summa = Math.round((qty * tarif * percent / 100)*100)/100 ;
                                            form.findField('summ').setValue(summa);
                                        }
                                    },
                                    x: 5,
                                    y: 155,
                                    formBind: true,
                                    width: 155,
                                    icon: 'resources/css/images/ico/add.png',
                                    text: 'Просчитать'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                this.up('#winEditDbfLgota').close();
                            },
                            x: 10,
                            y: 25,
                            width: 80,
                            icon: 'resources/css/images/ico/delete.png',
                            text: 'Отмена'
                        },
                        {
                            xtype: 'button',
                            x: 230,
                            y: 450,
                            formBind: true,
                            id: 'btEditDbfLgota',
                            margin: '10 10 5 10',
                            width: 155,
                            icon: 'resources/css/images/ico/add.png',
                            scale: 'medium',
                            text: 'Записать'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var form = button.findParentByType('form').getForm();
                                var grOplata = Ext.getCmp('grDbfLgota');
                                var value  = grOplata.getView().getSelectionModel().getSelection()[0];
                                form.loadRecord(value);

                            },
                            x: 285,
                            y: 25,
                            formBind: true,
                            margin: '0 10 0 0',
                            width: 130,
                            icon: 'resources/css/images/ico/refresh.png',
                            text: 'восстановить',
                            tooltip: 'Восстановить'
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Label',
                    name: 'vibor'
                }
            ]
        }
    ],

    onCheckboxfieldChange: function(field, newValue, oldValue, eOpts) {
        if(newValue){
            field.setBoxLabel("перерасчет");
        }else{
            field.setBoxLabel("начисление");
        }
    }

});