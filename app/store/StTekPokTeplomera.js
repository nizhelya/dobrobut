/*
 * File: app/store/StTekPokTeplomera.js
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

Ext.define('Dobrobut.store.StTekPokTeplomera', {
    extend: 'Ext.data.Store',
    alias: 'store.stTekPokTeplomera',

    requires: [
        'Dobrobut.model.MdPriborUcheta',
        'Ext.data.proxy.Direct',
        'Dobrobut.DirectAPI',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'stTekPokTeplomera',
            model: 'Dobrobut.model.MdPriborUcheta',
            proxy: {
                type: 'direct',
                directFn: 'QueryTeplomer.getResults',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});