const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 767,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false
  })

  win.removeMenu()
  win.loadFile('index.html')

  // if you need dev tools...
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
