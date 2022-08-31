module.exports.getAllServices = (req, res) => {
    
    const {ip, params , query , body,headers } = req;
    // console.log(ip, params , query , body,headers );
    res.download = (path, filename, callback) => {
        console.log('download');
    }
    res.status(200).json({
        message: "Service fetched successfully",
        ip,
        params,
        query,
        body,
        headers
    });
};
module.exports.createService = (req, res) => {
    res.status(200).json({
        message: "Service created successfully"
    });
}
module.exports.updateService = (req, res) => {
    res.status(200).json({
        message: "Service updated successfully"
    });
}
module.exports.deleteService = (req, res) => {
    res.status(200).json({
        message: "Service deleted successfully"
    });
}
module.exports.getService = (req, res) => {
    res.status(200).json({
        message: "Service fetched successfully"
    });
}
module.exports.getServiceById = (req, res) => {
    res.status(200).json({
        message: "Service fetched successfully"
    });
}