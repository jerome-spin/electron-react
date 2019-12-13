const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function craeteWindow() {
  /**
   *  1920 * 1080의 FHD 풀스크린 앱을 실행시킵니다.
   */
  const win = new BrowserWindow({
    width: 1920,
    height: 1080
  });

  /**
   *  ELECTRON_START_URL을 직접 제공할 경우 해당 URL을 로드합니다.
   *  만일 URL을 따로 지정하지 않을 경우 (프로덕션빌드) React App이 빌드되는
   *  build 폴더의 index.html을 로드합니다.
   */
  const startURL =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true
    });

  /**
   *  startURL에 해당하는 url을 맨 위에서 생성한 BrowserWindow에서 실행시킵니다.
   */
  win.loadURL(startURL);
}

app.on("ready", craeteWindow);
