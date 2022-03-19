'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const app_1 = require("./src/app");
const definitionProvider_1 = require("./src/definitionProvider");
const js_complete_1 = require("./src/js-complete");

/** 文件注释功能 */
const global = require('./src/FileComments/utils/CONST')
const createAnnotation = require('./src/FileComments/models/createAnnotation')
const ActiveHandle = require('./src/FileComments/models/activeHandle')
const handleError = require('./src/FileComments/utils/handleError')

const MenuItems = require('./src/webview/menuItems');
const defaultMenuItems = ['open bookmarks', 'open url'];

/** 日志打印 */
const js_1 = require("./src/logout/debug-message/js");
const js_2 = require("./src/logout/line-code-processing");

// 注册命令
function registerCommand (context) {
  // 注册命令
  const wszfileheader = vscode.commands.registerCommand(
    'wsz-vscode-plugin.wszfileheader',
    () => {
      const editor = vscode.editor || vscode.window.activeTextEditor // 每次运行选中文件
      createAnnotation.headerAnnotation(editor)
    }
  )
  const wszfilecursorTip = vscode.commands.registerCommand(
    'wsz-vscode-plugin.wszfilecursorTip',
    createAnnotation.functionAnnotation
  )
  context.subscriptions.push(wszfileheader)
  context.subscriptions.push(wszfilecursorTip)
}

// 注册log 输出
function registerTaurusConsoleLog () {
  const jsLineCodeProcessing = new js_2.JSLineCodeProcessing();
  const jsDebugMessage = new js_1.JSDebugMessage(jsLineCodeProcessing);
  // 插入
  vscode.commands.registerCommand("wsz-vscode-plugin.displayLogMessage", () =>{
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const tabSize = getTabSize(editor.options.tabSize);
    const document = editor.document;
    const config = vscode.workspace.getConfiguration("wsz-vscode-plugin");
    const properties = getExtensionProperties(config);
    for (let index = 0; index < editor.selections.length; index++) {
      const selection = editor.selections[index];
      const selectedVar = document.getText(selection);
      const lineOfSelectedVar = selection.active.line;
      // 检查选择行是否不是文档中的最后一行，所选变量是否为空
      if (selectedVar.trim().length !== 0) {
        editor.edit((editBuilder) => {
          jsDebugMessage.line(document, lineOfSelectedVar, selectedVar);
          jsDebugMessage.msg(editBuilder, document, selectedVar, lineOfSelectedVar, properties.wrapLogMessage, properties.logMessagePrefix, properties.quote, properties.addSemicolonInTheEnd, properties.insertEnclosingClass, properties.insertEnclosingFunction, properties.delimiterInsideMessage, properties.includeFileNameAndLineNum, tabSize);
        });
      }
    }
  });
  // 注释所有输出
  vscode.commands.registerCommand("wsz-vscode-plugin.commentAllLogMessages", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const tabSize = getTabSize(editor.options.tabSize);
    const document = editor.document;
    const config = vscode.workspace.getConfiguration("wsz-vscode-plugin");
    const properties = getExtensionProperties(config);
    const logMessages = jsDebugMessage.detectAll(document, tabSize, properties.delimiterInsideMessage, properties.quote);
    editor.edit((editBuilder) => {
      logMessages.forEach(({ spaces, lines }) => {
        lines.forEach((line) => {
          editBuilder.delete(line);
          editBuilder.insert(new vscode.Position(line.start.line, 0), `${spaces}// ${document.getText(line).trim()}\n`);
        });
      });
    });
  });
  // 展开所有注释
  vscode.commands.registerCommand("wsz-vscode-plugin.uncommentAllLogMessages", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const tabSize = getTabSize(editor.options.tabSize);
    const document = editor.document;
    const config = vscode.workspace.getConfiguration("wsz-vscode-plugin");
    const properties = getExtensionProperties(config);
    const logMessages = jsDebugMessage.detectAll(document, tabSize, properties.delimiterInsideMessage, properties.quote);
    editor.edit((editBuilder) => {
      logMessages.forEach(({ spaces, lines }) => {
        lines.forEach((line) => {
          editBuilder.delete(line);
          editBuilder.insert(new vscode.Position(line.start.line, 0), `${spaces}${document.getText(line).replace(/\//g, "").trim()}\n`);
        });
      });
    });
  });
  // 删除所有debug输出
  vscode.commands.registerCommand("wsz-vscode-plugin.deleteAllLogMessages", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const tabSize = getTabSize(editor.options.tabSize);
    const document = editor.document;
    const config = vscode.workspace.getConfiguration("wsz-vscode-plugin");
    const properties = getExtensionProperties(config);
    const logMessages = jsDebugMessage.detectAll(document, tabSize, properties.delimiterInsideMessage, properties.quote);
    editor.edit((editBuilder) => {
      logMessages.forEach(({ lines }) => {
        lines.forEach((line) => {
          editBuilder.delete(line);
        });
      });
    });
  });
}
// 注册文档提示
function registerElementTips(context){
  let app = new app_1.App();
  let completionItemProvider = new app_1.ElementCompletionItemProvider();
  let registrationHover = vscode.languages.registerHoverProvider('vue', new app_1.DocumentHoverProvider);
  let jsCompletionItemProvider = new js_complete_1.JsCompletionItemProvider();
  // 为标签、属性提示提供自动完成功能, 关闭标签功能
  let completion = vscode.languages.registerCompletionItemProvider(['vue', 'javascript', 'html'], completionItemProvider, '', ':', '<', '"', "'", '/', '@', '(', '>', '{');
  let vueLanguageConfig = vscode.languages.setLanguageConfiguration('vue', { wordPattern: app.WORD_REG });
  let jsCompletion = vscode.languages.registerCompletionItemProvider(['javascript', 'html', 'vue'], jsCompletionItemProvider, '.', '(');
  // 到达定义函数
  let vueHelperDefinition = vscode.languages.registerDefinitionProvider(['vue', 'javascript', 'html'], new definitionProvider_1.vueHelperDefinitionProvider());
  context.subscriptions.push(app, completion, vueLanguageConfig, registrationHover, vueHelperDefinition, jsCompletion);
}

// webview打开网页
function registerOpenInWebView(context){
  let disposable = vscode.commands.registerCommand(
    'wsz-vscode-plugin.openWebview',
    function() {
      let bookmarks = vscode.workspace.getConfiguration("wsz-vscode-plugin").webview;
      vscode.window.showQuickPick(defaultMenuItems).then(selectedMenuItem => {
        switch (selectedMenuItem) {
          case 'open bookmarks':
            new MenuItems('open bookmarks', bookmarks);
            break;
          case 'open url':
            new MenuItems('open URL', bookmarks);
            break;
        }
      });
    }
  );
  context.subscriptions.push(disposable);

}

// 扩展激活 默认运行
function activate (context) {
  

  try {
    // 文档提示
    registerElementTips(context)
    // 文件注释
    global.context = context
    registerCommand(context) // 注册命令
    new ActiveHandle().watch() // 监听事件
    //  debug输出
    registerTaurusConsoleLog()
    //注册webview打开网页
    registerOpenInWebView(context)

  } catch (err) {
    handleError.showErrorMessage('wszfileheader: activate context', err)
  }

}
exports.activate = activate;
// 扩展被禁用 调用
function deactivate () { }
exports.deactivate = deactivate;

function getExtensionProperties (workspaceConfig) {
  const wrapLogMessage = workspaceConfig.wrapLogMessage || false;
  const logMessagePrefix = workspaceConfig.logMessagePrefix
    ? workspaceConfig.logMessagePrefix
    : "";
  const addSemicolonInTheEnd = workspaceConfig.addSemicolonInTheEnd || false;
  const insertEnclosingClass = workspaceConfig.insertEnclosingClass;
  const insertEnclosingFunction = workspaceConfig.insertEnclosingFunction;
  const quote = workspaceConfig.quote || '"';
  const delimiterInsideMessage = workspaceConfig.delimiterInsideMessage || "~";
  const includeFileNameAndLineNum = workspaceConfig.includeFileNameAndLineNum || false;
  const extensionProperties = {
    wrapLogMessage,
    logMessagePrefix,
    addSemicolonInTheEnd,
    insertEnclosingClass,
    insertEnclosingFunction,
    quote,
    delimiterInsideMessage,
    includeFileNameAndLineNum,
  };
  return extensionProperties;
}
function getTabSize (tabSize) {
  if (tabSize && typeof tabSize === "number") {
    return tabSize;
  }
  else if (tabSize && typeof tabSize === "string") {
    return parseInt(tabSize);
  }
  else {
    return 4;
  }
}

//# sourceMappingURL=extension.js.map