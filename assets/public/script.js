const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What\'s your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where do you live?',
            name: 'location',
        },
        {
        type: 'input',
        message: 'Please put in your bio.',
        name: 'bio',
        },
        {
            type: 'input',
            message: 'What\'s your LinkedIn URL?',
            name: 'linkedIn',
        },
        {
            type: 'input',
            message: 'What\'s your GitHub profile URL?',
            name: 'gitHub',
        }
    ])
    .then((data) => {
        fs.readFile('demo.html', "utf8", (err, html) => {
            if (err) {
                throw error;
            }
            console.log(typeof(html));
            const result = html.replace('${data.name}', data.name)
                .replace('${data.location}', data.location)
                .replace('${data.bio}', data.bio)
                .replace('${data.linkedIn}', data.linkedIn)
                .replace('${data.gitHub}', data.gitHub)

            fs.writeFile('demo.html', result, (err) =>
                err ? console.error(err) : console.log('success')
            );
        });
       
    });