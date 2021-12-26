"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "a-row": {
        "attributes": ["gutter", "type", "justify", "tag"],
        "subtags": ["a-col"],
        "description": "A row in grid system",
        "framework": "antdv-ui"
    },
    "a-col": {
        "attributes": ["span", "offset", "push", "pull", "xs", "sm", "md", "lg", "xl"],
        "defaults": [":span"],
        "description": "A column in grid system",
        "framework": "antdv-ui"
    },
    "a-button": {
        "attributes": ["type", "size", "loading", "disabled", "icon", "htmlType", "shape"],
        "defaults": ["type"],
        "description": "按钮.",
        "framework": "antdv-ui"
    },
    "a-radio": {
        "attributes": ["value", "disabled"],
        "defaults": ["value"],
        "description": "Single selection among multiple options.",
        "framework": "antdv-ui"
    },
    "a-radio-group": {
        "attributes": ["size", "value", "options", "change"],
        "defaults": ["v-model"],
        "subtags": ["a-radio"],
        "framework": "antdv-ui",
        "description": "radio group"
    },
    "a-checkbox": {
        "attributes": ["options","indeterminate", "disabled"],
        "defaults": ["options"],
        "description": "A group of options for multiple choices.",
        "framework": "antdv-ui"
    },
    "a-checkbox-group": {
        "attributes": ["disabled", "value", "change"],
        "defaults": ["v-model"],
        "subtags": ["a-checkbox"],
        "framework": "antdv-ui"
    },
    "a-checkbox-button": {
        "attributes": ["label"],
        "defaults": ["label"],
        "framework": "antdv-ui"
    },
    "a-input": {
        "attributes": ["type", "value", "maxLength", "placeholder", "disabled", "size", "prefix", "suffix","allowClear", "name", "click", "blur", "focus", "change", "clear"],
        "defaults": ["v-model", "placeholder"],
        "description": "Input data using mouse or keyboard.",
        "framework": "antdv-ui"
    },
    "a-autocomplete": {
        "attributes": ["value", "allowClear", "placeholder", "disabled", "prefix", "suffix"],
        "defaults": ["v-model", "placeholder"],
        "framework": "antdv-ui"
    },
    "a-input-number": {
        "attributes": ["value", "min", "max", "step", "size", "change"],
        "defaults": ["v-model", "placeholder"],
        "framework": "antdv-ui"
    },
    "a-select": {
        "attributes": ["mode", "disabled",  "size", "allowClear", "placeholder", "filterOption", "showSearch", "showArrow", "options", "clear", "blur", "focus"],
        "defaults": ["v-model", "placeholder"],
        "subtags": ["a-option"],
        "description": "下拉选择器.",
        "framework": "antdv-ui"
    },
    "a-select-option": {
        "attributes": ["value", "title", "disabled"],
        "defaults": [":title", ":value"],
        "framework": "antdv-ui"
    },
    "a-cascader": {
        "attributes": ["options", "allowClear", "placeholder", "disabled", "size", "change", "showSearch", "blur", "focus"],
        "defaults": [":options", "v-model"],
        "description": "If the options have a clear hierarchical structure, Cascader can be used to view and select them.",
        "framework": "antdv-ui"
    },
    "a-switch": {
        "attributes": ["disabled", "checked", "loading", "size", "unCheckedChildren", "checkedChildren","change"],
        "defaults": ["v-model"],
        "description": "Switch is used for switching between two opposing states.",
        "framework": "antdv-ui"
    },
    "a-slider": {
        "attributes": ["min", "max", "disabled", "step", "range", "vertical","change"],
        "defaults": ["v-model"],
        "description": "Drag the slider within a fixed range.",
        "framework": "antdv-ui"
    },
    "a-time-picker": {
        "attributes": ["clearText", "disabled", "allowClear", "size", "placeholder", "format", "change", "blur", "focus"],
        "defaults": ["v-model", "placeholder"],
        "framework": "antdv-ui"
    },
    "a-date-picker": {
        "attributes": ["allowClear", "disabled",  "size", "placeholder", "prefix", "inputReadOnly", "change"],
        "defaults": ["v-model", "placeholder"],
        "framework": "antdv-ui"
    },
    "a-upload": {
        "attributes": ["action", "headers", "multiple", "data", "name",  "accept", "previewFile",  "before-upload",  "file-list", "customRequest", "disabled"],
        "defaults": ["action"],
        "subtags": ["a-button"],
        "description": "Upload files by clicking or drag-and-drop",
        "framework": "antdv-ui"
    },
    "a-rate": {
        "attributes": ["count", "disabled", "allow-half", "allowClear", "change"],
        "defaults": ["v-model"],
        "description": "Used for rating",
        "framework": "antdv-ui"
    },
    "a-transfer": {
        "attributes": ["dataSource", "filterOption", "footer", "lazy", "listStyle", "locale", "operations", "render", "selectedKeys", "showSearch", "showSelectAll", "targetKeys", "titles"],
        "defaults": ["v-model", ":dataSource"],
        "framework": "antdv-ui"
    },
    "a-form": {
        "attributes": ["form", "hideRequiredMark", "labelAlign", "layout", "labelCol", "wrapperCol", "selfUpdate", "colon"],
        "defaults": [":form"],
        "subtags": ["a-form-item"],
        "description": "Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.",
        "framework": "antdv-ui"
    },
    "a-form-item": {
        "attributes": ["label", "help", "extra", "colon", "hasFeedback", "labelCol", "labelAlign", "wrapperCol"],
        "defaults": ["label"],
        "framework": "antdv-ui"
    },
    "a-table": {
        "attributes": ["dataSource", "columns", "loading", "bordered", "pagination", "rowSelection", "showHeader", "scroll", "size"],
        "defaults": [":dataSource",":columns"],
        "subtags": ["a-table-column"],
        "description": "Display multiple data with similar format. You can sort, filter, compare your data in a table.",
        "framework": "antdv-ui"
    },
    "a-table-column": {
        "attributes": ["title","key", "data-index", "align", "filterDropdown", "filterDropdownVisible", "filtered", "filteredValue", "fixed", "filterIcon"],
        "defaults": ["data-index"],
        "framework": "antdv-ui"
    },
    "a-tag": {
        "attributes": ["color", "visible", "close"],
        "defaults": ["color"],
        "description": "Used for marking and selection.",
        "framework": "antdv-ui"
    },
    "a-progress": {
        "attributes": ["percent", "type", "showInfo", "format", "status", "strokeLinecap", "strokeColor", "successPercent"],
        "defaults": ["percent"],
        "description": "Progress is used to show the progress of current operation, and inform the user the current status.",
        "framework": "antdv-ui"
    },
    "a-tree": {
        "attributes": ["treeData", "blockNode", "replaceFields", "autoExpandParent", "checkable", "checkedKeys", "checkStrictly", "defaultCheckedKeys","defaultExpandAll","defaultExpandedKeys","defaultExpandParent","defaultSelectedKeys","disabled","draggable","expandedKeys","filterTreeNode","loadData"],
        "defaults": [":treeData"],
        "description": "Display a set of data with hierarchies.",
        "framework": "antdv-ui"
    },
    "a-pagination": {
        "attributes": ["current", "defaultCurrent", "defaultPageSize", "disabled", "hideOnSinglePage", "itemRender", "pageSize", "pageSizeOptions", "showQuickJumper", "showSizeChanger", "showTotal", "simple", "size", "total"],
        "defaults": [":current", ":pageSize", "@showSizeChange", "showTotal"],
        "description": "If you have too much data to display in one page, use pagination.",
        "framework": "antdv-ui"
    },
    "a-badge": {
        "attributes": ["color", "count", "dot", "offset", "overflowCount", "showZero", "status", "text"],
        "defaults": ["count"],
        "description": "A number or status mark on buttons and icons.",
        "framework": "antdv-ui"
    },
    "a-menu": {
        "attributes": ["mode", "multiple", "defaultOpenKeys", "defaultSelectedKeys", "forceSubMenuRender", "theme", "inlineCollapsed", "inlineIndent", "selectable", "selectedKeys", "subMenuCloseDelay", "subMenuOpenDelay", "select", "open", "close"],
        "defaults": ["defaultOpenKeys"],
        "subtags": ["a-submenu", "a-menu-item"],
        "framework": "antdv-ui"
    },
    "a-submenu": {
        "attribute": ["key", "title",  "disabled"],
        "defaults": ["key"],
        "subtags": ["a-menu-item"],
        "framework": "antdv-ui"
    },
    "a-menu-item-group": {
        "attributes": ["title"],
        "subtags": ["a-menu-item"],
        "framework": "antdv-ui"
    },
    "a-menu-item": {
        "attributes": ["key", "title"],
        "defaults": ["key"],
        "framework": "antdv-ui"
    },
    "a-tabs": {
        "attributes": ["activeKey", "animated", "defaultActiveKey", "hideAdd", "size", "tabBarExtraContent", "tabBarStyle", "tabPosition", "type", "tabBarGutter"],
        "subtags": ["a-tab-pane"],
        "description": "Divide data collections which are related yet belong to different types.",
        "framework": "antdv-ui"
    },
    "a-tab-pane": {
        "attributes": ["tab", "key"],
        "framework": "antdv-ui"
    },
    "a-breadcrumb": {
        "attributes": ["itemRender", "params", "routes", "separator"],
        "defaults": ["separator"],
        "subtags": ["a-breadcrumb-item"],
        "description": "Displays the location of the current page, making it easier to browser back.",
        "framework": "antdv-ui"
    },
    "a-breadcrumb-item": {
        "attributes": ["href", "overlay"],
        "framework": "antdv-ui"
    },
    "a-dropdown": {
        "attributes": ["disabled", "destroyPopupOnHide", "getPopupContainer", "overlayœ", "placement", "trigger", "visible"],
        "subtags": ["a-menu"],
        "description": "Toggleable menu for displaying lists of links and actions.",
        "framework": "antdv-ui"
    },
    "a-steps": {
        "attributes": ["type", "current", "direction", "labelPlacement", "progressDot", "size", "status", "initial"],
        "defaults": [":current", ":direction"],
        "subtags": ["a-step"],
        "description": "Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.",
        "framework": "antdv-ui"
    },
    "a-step": {
        "attributes": ["description", "icon", "status", "title", "subTitle", "disabled"],
        "defaults": ["title"],
        "framework": "antdv-ui"
    },
    "a-modal": {
        "attributes": ["title", "closable", "visible", "confirmLoading", "destroyOnClose", "footer", "mask", "maskClosable", "okText", "okType", "dialogStyle",  "afterClose","close"],
        "defaults": ["title"],
        "description": "Informs users while preserving the current page state.",
        "framework": "antdv-ui"
    },
    "a-tooltip": {
        "attributes": ["arrowPointAtCenter", "autoAdjustOverflow", "defaultVisible", "placement", "trigger", "visible", "destroyTooltipOnHide", "align"],
        "defaults": ["visible", "placement"],
        "description": "Display prompt information for mouse hover.",
        "framework": "antdv-ui"
    },
    "a-popover": {
        "attributes": ["content", "title"],
        "defaults": ["title"],
        "framework": "antdv-ui"
    },
    "a-card": {
        "attributes": ["title", "body-style"],
        "description": "Integrate information in a card container.",
        "framework": "antdv-ui"
    },
    "a-carousel": {
        "attributes": ["dots", "afterChange", "autoplay", "beforeChange", "dotPosition", "dotsClass", "easing", "effect", "change"],
        "description": "Loop a series of images or texts in a limited space",
        "framework": "antdv-ui"
    },
    "a-collapse": {
        "attributes": ["activeKey", "bordered",  "accordion", "change"],
        "subtags": ["a-collapse-panel"],
        "description": "Use Collapse to store contents.",
        "framework": "antdv-ui"
    },
    "a-collapse-panel": {
        "attributes": ["key", "header",'showArrow'],
        "defaults": ["key", "header"],
        "framework": "antdv-ui"
    },
    "a-timeline": {
        "attributes": ["reverse"],
        "framework": "antdv-ui"
    },
    "a-timeline-item": {
        "attributes": ["color", "dot", "position"]
    },
    "a-divider": {
        "attributes": ["dashed", "orientation", "type"]
    },
    "a-calendar": {
        "attributes": ["v-model", "mode", "value", "select", "panelChange"]
    },
    "a-backtop": {
        "attributes": ["target", "visibility-height"]
    },
    "a-drawer": {
        "attributes": ["closable", "destroyOnClose", "maskClosable", "mask", "title", "visible", "placement", "afterVisibleChange"]
    }
};