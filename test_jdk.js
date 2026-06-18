
const {JdkHelper, Config} = require('@bubblewrap/core');
const config = new Config('C:\\Users\\Samuel Williams\\.bubblewrap\\jdk\\jdk-17.0.11+9', 'C:\\Users\\Samuel Williams\\.bubblewrap\\android_sdk');
const helper = new JdkHelper(process, config);
console.log('javaHome=', helper.getJavaHome());
const env = helper.getEnv();
console.log('JAVA_HOME=', env.JAVA_HOME);
console.log('PATH includes java bin=', env.Path && env.Path.includes('\\jdk-17.0.11+9\\bin'));
