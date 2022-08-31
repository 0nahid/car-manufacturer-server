let count = 0;
module.exports.viewCountss = (req, res, next) => {
    count++;
    console.log(count);
    next();
}
