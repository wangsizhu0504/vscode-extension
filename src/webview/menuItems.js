const vscode = require('vscode');
const OpenURL = require('./openURL');
class MenuItems {
  constructor(key, bookmarks) {
    switch (key) {
      case 'open bookmarks':
        this.creatMenu(bookmarks);
        break;
      case 'open URL':
        this.creatInput('网址必须以http:// or https://开头，且可以被iframe嵌套');
        break;
    }
  }

  creatMenu (bookmarks) {
    let menuItems = Object.keys(bookmarks);
    vscode.window
      .showQuickPick(menuItems, {
        ignoreFocusOut: true
      })
      .then(selectedMenuItem => {
        this.nextMenu(selectedMenuItem, bookmarks);
      });
  }
  creatInput (prompts) {
    vscode.window
      .showInputBox({
        prompt: prompts,
        ignoreFocusOut: true
      })
      .then(val => {
        var reg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
        if (!reg.test(val)) {
          vscode.window.showErrorMessage('网址格式不正确', '请输入正确的网址！');
        }else {
          new OpenURL(val, val);
        }
      });
  }
  nextMenu (selected, val) {
    if (typeof selected === 'undefined') {
      return;
    }
    if (typeof val[selected] !== 'object') {
      new OpenURL(selected, val[selected]);
      return;
    }
    this.creatMenu(val[selected]);
  }
}
module.exports = MenuItems;
