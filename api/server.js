const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));


app.post('/upload', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req[0] === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req[0];
    const arrayName = file.name.split(".");
    const type = arrayName[arrayName.length - 1];
    let classify = "";
    if (validateImg(type)) {
        const name = randomName();
        //Change URL __dirname
        const path = `${__dirname}/client/public/uploads/${name}.${type}`; ñ
        await file.mv(`${__dirname}/client/public/uploads/${name}.${type}`, err => {

        });
        const process = spawn('python', ['classify.py', path]);
        await process.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...' + data.toString());
            classify = data.toString();
            res.json({ filePath: `/uploads/${name}.${type}`, typeResult: classify });
        })

    } else {
        return res.status(400).json({ msg: 'File type no valid' });
    }
})


const validateImg = (type) => {
    let result = false;
    if (type == 'jpeg' || type == 'jpg' || type == 'png') {
        result = true;
    }
    return result;
}

const randomName = () => {
    let name = '';
    const loop = Math.floor(Math.random() * (30 - 15)) + 15;
    for (let i = 0; i < loop; i++) {
        const number = Math.floor(Math.random() * (9 - 0));
        name += number;
    }
    return name
}

app.listen('8000', function () {
    console.log('Node server running on port 8000');
});