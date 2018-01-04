var electron = require("electron");
var {app, BrowserWindow} = electron;
var path = require("path");
var url = require("url");
var win;

function createWindow() {
    win = new BrowserWindow({width: 1200, height: 600});
    win.loadURL(url.format({
        pathname: path.join(__dirname, "./src/index.html"),
        protocol: "file",
        slashes: true
    }));
}

app.on("ready", createWindow);
