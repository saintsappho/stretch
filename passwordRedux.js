const password = process.argv.slice(2);
console.log('Your Password: ', password.join(' ')) 

const obfuscatePassword = function(password) {
    let leetOutput = '';
    for (i = 0; i < password.length; i++) { 
      for (k = 0; k < password[i].length; k++) {
        if (password[i][k] === 'a'){
            leetOutput += '4'
        }
        if (password[i][k] === 'e'){
            leetOutput += '3'
        }
        if (password[i][k] === 'o'){
            leetOutput += '0'
        }
        if (password[i][k] === 'l'){
            leetOutput += '1'
        } 
        if (password[i][k] === 't'){
          leetOutput += '7'
        }
        else if (password[i][k] !== 'a' && password[i][k] !== 'e' && password[i][k] !== 'o' && password[i][k] !== 'l'){leetOutput += password[i][k]
        }
      }
    } return `Suggested Password: ${leetOutput}`
};
console.log(obfuscatePassword(process.argv.slice(2)))