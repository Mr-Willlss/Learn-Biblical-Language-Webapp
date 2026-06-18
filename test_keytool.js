
const path = require('path');
const {JdkHelper, Config, KeyTool} = require('@bubblewrap/core');
const config = new Config('C:\\Users\\Samuel Williams\\.bubblewrap\\jdk\\jdk-17.0.11+9', 'C:\\Users\\Samuel Williams\\.bubblewrap\\android_sdk');
const helper = new JdkHelper(process, config);
const keyTool = new KeyTool(helper);
(async () => {
  try {
    await keyTool.createSigningKey({
      path: path.join(process.cwd(), 'twa', 'android-keystore'),
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
    console.error('ERROR', e.stack || e.message || e);
    process.exitCode = 1;
  }
})();
