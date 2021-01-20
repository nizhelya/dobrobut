/*
 * File: app/store/StPrixodEdit.js
 * Date: Fri Dec 11 2020 12:01:58 GMT+0200 (EET)
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

Ext.define('Dobrobut.store.StPrixodEdit', {
    extend: 'Ext.data.Store',

    requires: [
        'Dobrobut.model.MdPrixod',
        'Ext.data.proxy.Direct',
        'Dobrobut.DirectAPI',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'StPrixodEdit',
            autoLoad: true,
            model: 'Dobrobut.model.MdPrixod',
            proxy: {
                type: 'direct',
                api: {
                    create: 'QuerySprav.createRecord',
                    read: 'QuerySprav.getResults',
                    update: 'QuerySprav.updateRecords',
                    destroy: 'QuerySprav.destroyRecord'
                },
                extraParams: {
                    what: 'getPrixod'
                },
                directFn: 'QuerySprav.getResults',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true
                }
            },
            listeners: {
                update: {
                    fn: me.onDirectstoreUpdate,
                    scope: me
                },
                remove: {
                    fn: me.onDirectstoreRemove,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onDirectstoreUpdate: function(store, record, operation, modifiedFieldNames, details, eOpts) {
        record.data.what = "getPrixod";

    },

    onDirectstoreRemove: function(store, records, index, isMove, eOpts) {
        records[0].data.what = "getPrixod";

    }

});