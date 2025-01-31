let gridBaseMock;

/* global jQuery */
if(typeof define === 'function' && define.amd) {
    define(function(require, exports, module) {
        gridBaseMock = require('./gridBaseMocks.js');

        window.treeListMocks = module.exports = gridBaseMock(
            require('jquery'),
            require('__internal/grids/tree_list/m_core').default,
            null,
            require('core/utils/dom'),
            require('core/utils/common'),
            require('core/utils/type'),
            require('data/array_store'),
            'TreeList'
        );
    });
} else {
    gridBaseMock = require('./gridBaseMocks.js');

    jQuery.extend(window, gridBaseMock(
        jQuery,
        DevExpress.require('__internal/grids/tree_list/m_core'),
        null,
        DevExpress.require('core/utils/dom'),
        DevExpress.require('core/utils/common'),
        DevExpress.require('core/utils/type'),
        DevExpress.require('data/array_store'),
        'TreeList'
    ));
}
