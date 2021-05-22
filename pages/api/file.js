import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) =>{
  const form = new formidable.IncomingForm();
  form.uploadDir= '/uploads';
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) =>{
    console.log(err, fields, files);
    let ruta = files.file.path.replace("public","");
    ruta = ruta.replace((String.fromCharCode(92)) ,(String.fromCharCode(47)) );
    ruta = ruta.replace((String.fromCharCode(92)) ,(String.fromCharCode(47)) );
    res.status(200).json({url: ruta})
  });
}

/*
const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    await saveFile(files.file);
    return res.status(201).send("");
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.path);
  fs.writeFileSync(`./public/${file.name}`, data);
  await fs.unlinkSync(file.path);
  return;
};*/


export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
