const {promisify} = require('util')

// 引入工具模块
var ProgressBar = require('./progress-bar');
 
// 初始化一个进度条长度为 50 的 ProgressBar 实例
var pb = new ProgressBar('下载进度', 20);
 
// 这里只是一个 pb 的使用示例，不包含任何功能
var num = 0, total = 1000;
function downloading() {
  if (num <= total) {
    // 更新进度条
    pb.render({ completed: num, total: total });
 
    num++;
    setTimeout(function (){
       downloading();
    }, 100)
  }
}



module.exports.clone = async function(repo, desc){
    const download = promisify(require('download-git-repo'))
    // const ora = require('ora')
    // const process = ora('|-/下载......${repo}');
    // process.start()
    // const cliProgress = require('cli-progress');
    // const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    // bar1.start(200, 0);
    // bar1.update(100);
    // bar1.stop();
    // process.succeed();
    downloading();
    
    await download(repo,desc);
}





