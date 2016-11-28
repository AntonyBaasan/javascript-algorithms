function User() {};
User.prototype.save = function(errorCallback) {
    // errorCallback("Test error");
    errorCallback(undefined);
    // return new Promise();
};

exports.User = User;
