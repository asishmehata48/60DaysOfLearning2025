const fs = require('fs');

const command = process.argv[2];
const input = process.argv.slice(3).join(' ');

const filePath = 'notes.txt';

if (command === 'add') {
    fs.appendFileSync(filePath, input + '\n');
    console.log(' Note added!');
} else if (command === 'read') {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log('All Notes:\n' + data);
    } else {
        console.log('No notes found.');
    }
} else if (command === 'clear') {
    if (fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '');
        console.log(' All notes cleared!');
    } else {
        console.log(' No notes file to clear.');
    }
} else {
    console.log(' Unknown command. Use: add, read, or clear');
}
