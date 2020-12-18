const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storageMultiple = multer.diskStorage({
    destination: function (req, file, cb) {
        var dir = "public/images";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploadMultiple = multer({
    storage: storageMultiple,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).array("image", 12);

// set storage engine
const storage = multer.diskStorage({
    destination: "public/images",
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("image");

// check file Type
function checkFileType(file, cb) {
    // allowed ext
    const fileTypes = /jpeg|jpg|png|gif|svg/;
    // check ext
    const extName = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    // check mime
    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extName) {
        return cb(null, true);
    } else {
        cb("error: Images Only!!!");
    }
}

module.exports = { uploadMultiple, upload };
