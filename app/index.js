const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        const questions = [
            {
                type: 'input',
                name: 'projectName',
                message: '输入项目名称',
                default: this.appname
            },
            {
                type: 'input',
                name: 'projectAuthor',
                message: '项目开发者',
                store: true,
                default: ''
            }, {
                type: 'input',
                name: 'projectVersion',
                message: '项目版本号',
                default: '0.0.1'
            }
        ]
        return this.prompt(questions).then(
            function (answers) {
                for (const item in answers) {
                    answers.hasOwnProperty(item) && (this[item] = answers[item]);
                }
            }.bind(this));
    }

    writing() {
        this.fs.copy(
            this.templatePath('module/'),
            this.destinationPath(''),
            { globOptions: { dot: true } }
        );
    }
}
