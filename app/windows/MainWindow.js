const path = require('path');
const { BrowserWindow } = require('electron');

class MainWindow {
  constructor() {

    let htmlPath = 'file://' + path.join(__dirname, '..') + '/pages/time_tracker_page.html'

    this.window = new BrowserWindow({
      show: false,
      width: 1300,
      height: 800,
      frame: false,
      minWidth: 800,
      minHeight: 600,
    })

    this.window.loadURL(htmlPath);

    this.window.webContents.on('did-finish-load', () => {
      // this.window.show();
    });
  }
}

module.exports = MainWindow;