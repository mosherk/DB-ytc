#!/usr/bin/env node
// console.log('open cli,hahahaha')

//订制命令行页面原理
const program = require('commander')
//策略模式
//实际想返回package里的版本
program.version(require('../package.json').version)
//有哪些选项和订制了哪些命令
program.command('init <name>')
    .description('init project')
    .action(require('../lib/init'))//订制命令的执行

program.command('refresh')
    .description('refresh router...')
    .action(require('../lib/refresh'))


program.parse(process.argv)


