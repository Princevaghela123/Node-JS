require('./config/db.config');
const express = require('express');
const watch = require("./model/watch.model");
const multer = require('multer');
const path = require('path')
const fs = require('fs');

const PORT = 9000;
const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded());
app.use("/public",express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// table
app.get('/', async (req, res) => {

    // All watch Fetch
    const allwatch = await watch.find();

    // console.log(allwatch);

    return res.render('watch_details', { allwatch });
});

// Add watch Route (watch_form.ejs)
app.get('/addwatchpage', (req, res) => {
    return res.render('watch_form');
});

// Mullter
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Image Middleware
const upload = multer({ storage });

// Insert watch Logic
app.post('/addwatch', upload.single('watch_image'), async (req, res) => {

    console.log(req.body);

    // const watchData = req.body

    console.log(req.file);

    req.body.watch_image = req.file.path;

    const watchAdded = await watch.create(req.body);

    console.log(watchAdded);

    if (watchAdded) {
        console.log("Book inserted Successfully...");
    } else {
        console.log("Book insertion failed...");
    }
    return res.redirect('/');

});

// Edit Route
app.get('/editwatch/:watchId', async (req, res) => {
    console.log(req.params);

    const mywatch = await watch.findById(req.params.watchId);

    console.log(mywatch);

    if (mywatch) {
        return res.render('watch_edit', { mywatch });
    } else {
        return res.redirect('/');
    }
});

// Home Route
// app.get('/', (req, res) => {
//     res.render('index', {
//         user: null,
//         cartCount: 0,
//         wishlistCount: 0,
//         searchQuery: ''
//     });
// });


// Update watch Logic
app.post('/updatewatch', upload.single('watch_image'), async (req, res) => {
    console.log(req.body);

    console.log(req.file);

    if (req.file) {
        // Old Image delete
        const watchData = await watch.findById(req.body.id);

        fs.unlink(watchData.watch_image, (err) => { });

        // New Image insert (Path)
        req.body.watch_image = req.file.path;

        const updatedData = await watch.findByIdAndUpdate(req.body.id, req.body, { new: true });

        console.log("Update : ", updatedData);

    } else {
        const updatedData = await watch.findByIdAndUpdate(req.body.id, req.body, { new: true });

        console.log("Update : ", updatedData);
    }

    return res.redirect('/');
});

// Delete watch 
app.get('/deletewatch', async (req, res) => {
    console.log(req.query);

    const deletedwatch = await watch.findByIdAndDelete(req.query.watchId);

    console.log("Deleted watch : ", deletedwatch);

     fs.unlink(deletedwatch.watch_image, (err) => { });

    if (deletedwatch) {
        console.log("watch Data Successfully Deleted...");
    } else {
        console.log("watch Data Deletion Failed...");
    }
    return res.redirect('/');
});


// server
app.listen(PORT, (err) => {
    if (err) {
        console.log("Server Bandh Che Tara Baap Ne Jo Pela..🤦‍♂️ ", err);
        return;
    }
    console.log("Have Ker Moj😂🫡");
});