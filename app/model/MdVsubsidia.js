/*
 * File: app/model/MdVsubsidia.js
 * Date: Sun May 24 2020 12:36:18 GMT+0300 (EEST)
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

Ext.define('Dobrobut.model.MdVsubsidia', {
    extend: 'Ext.data.Model',
    alias: 'model.mdvsubsidia',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Date',
        'Ext.data.field.Number'
    ],

    idProperty: 'rec_id',

    fields: [
        {
            type: 'int',
            name: 'rec_id'
        },
        {
            type: 'string',
            name: 'address'
        },
        {
            type: 'int',
            name: 'address_id'
        },
        {
            type: 'string',
            name: 'fio'
        },
        {
            type: 'date',
            name: 'data'
        },
        {
            type: 'date',
            name: 'sdate'
        },
        {
            type: 'date',
            name: 'fdate'
        },
        {
            type: 'float',
            name: 'zadol'
        },
        {
            type: 'float',
            name: 'nachisleno'
        },
        {
            type: 'float',
            name: 'subs'
        },
        {
            type: 'float',
            name: 'subsidia'
        },
        {
            type: 'float',
            name: 'oplacheno'
        },
        {
            type: 'float',
            name: 'dolg'
        },
        {
            type: 'float',
            name: 'vozvrat'
        },
        {
            type: 'float',
            name: 'koplate'
        },
        {
            type: 'int',
            name: 'gr'
        }
    ]
});