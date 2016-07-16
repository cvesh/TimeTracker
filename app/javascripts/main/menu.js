const electron = require('electron');

const {app, shell} = electron;

let Menu = function() {
  return [
    {
      label: 'Application',
      submenu: [
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: function () {
            app.quit()
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'About Hawkpass',
          click: function() {
            app.emit('show-about')
          }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click: function (item, focusedWindow) {
            focusedWindow.webContents.toggleDevTools();
          }
        }
      ]
    },
    {
      label: 'Help',
      role: 'help',
      submenu: [
        {
          label: 'View Licence',
          click: function() {
            shell.openExternal('https://github.com/kalpetros/hawkpass-desktop/blob/master/LICENSE');
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Version 1.0.0-alpha.6',
          enabled: 'FALSE'
        }
      ]
    }
  ]
}

module.exports = Menu
