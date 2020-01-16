const ejs = require('ejs');

class TestComponent {

    constructor(text) {
        this.text = text;
    }

    render() {
        var htmlString = "";
        ejs.renderFile("static/test.ejs", { text: this.text }, (err, str) => {
            if (err) console.error(err);
            htmlString = str;
        });
        return htmlString;
    }
}

module.exports = {
    TestComponent: TestComponent
};