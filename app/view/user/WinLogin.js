/*
 * File: app/view/user/WinLogin.js
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

Ext.define('Dobrobut.view.user.WinLogin', {
    extend: 'Ext.window.Window',
    alias: 'widget.winlogin',

    requires: [
        'Dobrobut.view.user.WinLoginViewModel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.button.Button',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Number',
        'Ext.form.Label'
    ],

    viewModel: {
        type: 'winlogin'
    },
    hideMode: 'visibility',
    id: 'winLogin',
    width: 444,
    layout: 'fit',
    closable: false,
    title: 'Авторизация',
    modal: true,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            id: 'fmLogin',
            width: 471,
            layout: 'fit',
            items: [
                {
                    xtype: 'fieldset',
                    height: 173,
                    html: '<IMG SRC="resources/css/images/home/logo.png" >',
                    style: 'background-color: #DCDCDC;',
                    layout: 'absolute',
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            x: 120,
                            y: 20,
                            frame: true,
                            id: 'login',
                            width: 250,
                            fieldLabel: 'Логин',
                            labelPad: 2,
                            name: 'login',
                            blankText: 'Логин не введен',
                            maxLength: 20,
                            maxLengthText: 'Не более 20 символов',
                            minLength: 3,
                            minLengthText: 'Не менее 3 символов',
                            listeners: {
                                change: 'onLoginChange'
                            }
                        },
                        {
                            xtype: 'textfield',
                            x: 120,
                            y: 60,
                            id: 'password',
                            width: 250,
                            fieldLabel: 'Пароль',
                            labelPad: 2,
                            name: 'password',
                            inputType: 'password',
                            blankText: 'Пароль не введен',
                            maxLength: 32,
                            maxLengthText: 'Не более 32 символов',
                            minLength: 3,
                            minLengthText: 'Не менее 3 символов'
                        },
                        {
                            xtype: 'button',
                            x: 250,
                            y: 110,
                            formBind: true,
                            cls: 'button',
                            disabled: true,
                            height: 30,
                            id: 'btninput',
                            width: 100,
                            allowDepress: false,
                            iconCls: 'icon-door-in',
                            text: 'Вход'
                        },
                        {
                            xtype: 'checkboxfield',
                            x: 80,
                            y: 120,
                            hidden: true,
                            fieldLabel: '',
                            name: 'remember',
                            boxLabel: 'запомнить',
                            inputValue: '1'
                        },
                        {
                            xtype: 'numberfield',
                            x: 145,
                            y: 125,
                            hidden: true,
                            width: 50,
                            fieldLabel: '',
                            name: 'attempt',
                            value: 0,
                            hideTrigger: true,
                            decimalPrecision: 0
                        },
                        {
                            xtype: 'label',
                            x: 80,
                            y: 150,
                            hidden: true,
                            id: 'chekLogin',
                            style: '{color: #D15706; text-shadow: -1px -1px white, 1px 1px #333;font-size:11pt;text-align:center;}',
                            width: 300,
                            text: 'Неверный логин или пароль. Попытка №'
                        },
                        {
                            xtype: 'button',
                            x: 30,
                            y: 120,
                            hidden: true,
                            id: 'info_remember',
                            icon: 'resources/css/images/ico/information.png',
                            text: '',
                            tooltip: 'Галочка в поле <Запомнить> - сохранит Ваш Логин и пароль на компьтере, что позволит Вам не заполнять поля  при следующей авторизации.'
                        }
                    ]
                }
            ]
        }
    ],

    onLoginChange: function(field, newValue, oldValue, eOpts) {
        var form = field.findParentByType('form');
        form.getForm().findField('remember').show();
        form.down('#info_remember').show();

    }

});