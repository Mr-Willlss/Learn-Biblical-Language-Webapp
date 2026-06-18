
const path = require('path');
const fs = require('fs');
const {TwaManifest, TwaGenerator, JdkHelper, KeyTool, ConsoleLog, Config} = require('@bubblewrap/core');
const Color = require('color');
(async () => {
  try {
    const targetDirectory = path.resolve('twa');
    fs.mkdirSync(targetDirectory, { recursive: true });
    console.log('targetDirectory=', targetDirectory);
    const twaManifest = await TwaManifest.fromWebManifest('https://mr-willlss.github.io/Learn-Biblical-Language-Webapp/manifest.json');
    twaManifest.packageId = 'com.mrwillss.biblicallanguages';
    twaManifest.name = 'Biblical Languages';
    twaManifest.launcherName = 'Biblical Languages';
    twaManifest.display = 'standalone';
    twaManifest.orientation = 'default';
    twaManifest.themeColor = new Color('#7c5cfc');
    twaManifest.backgroundColor = new Color('#0f1117');
    twaManifest.signingKey = { path: 'android-keystore', alias: 'biblicallanguages' };
    const manifestPath = path.join(targetDirectory, 'twa-manifest.json');
    await twaManifest.saveToFile(manifestPath);
    console.log('saved twa-manifest.json');
    const generator = new TwaGenerator();
    await generator.createTwaProject(targetDirectory, twaManifest, new ConsoleLog('twa'));
    console.log('generated project');
    const config = new Config('C:\\Users\\Samuel Williams\\.bubblewrap\\jdk\\jdk-17.0.11+9', 'C:\\Users\\Samuel Williams\\.bubblewrap\\android_sdk');
    const jdkHelper = new JdkHelper(process, config);
    const keyTool = new KeyTool(jdkHelper);
    await keyTool.createSigningKey({
      path: path.join(targetDirectory, 'android-keystore'),
      alias: 'biblicallanguages',
      fullName: 'Samuel Williams',
      organizationalUnit: 'Dev',
      organization: 'Biblical Languages',
      country: 'US',
      password: 'Passw0rd123!',
      keypassword: 'Passw0rd123!'
    }, true);
    console.log('created signing key');
  } catch (e) {
    if (e instanceof Error) console.error('ERROR', e.stack || e.message);
    else console.error('ERROR', e);
    process.exitCode = 1;
  }
})();
