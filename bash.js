const pwdFunc = require('./pwd.js')
const lsFunc = require('./ls.js')
const catFunc = require('./cat.js')

process.stdout.write('prompt > ')

process.stdin.on('data', data => {
    const str = data.toString().trim().split(' ');
    const cmd = str[0];
    const arg = str[1];

    if (cmd === 'pwd'){
    pwdFunc();
    }
    else if (cmd === 'ls') {
    lsFunc();
    }
    else if (cmd === 'cat'){
        catFunc(arg);
    }
})

