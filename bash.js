// output a prompt
process.stdout.write('prompt > ');

// the std 'data' event fires after a user types a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove newLine and other whitespace

  if (cmd === 'pwd') {
    process.stdout.write('You printed: ' + __dirname);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
