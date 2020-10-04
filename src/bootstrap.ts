import app from "./index"


try {
    app.listen(8080, () => {
        console.log('Server start on port 8080');
    })
} catch (e) {
    throw new Error(e);
}
