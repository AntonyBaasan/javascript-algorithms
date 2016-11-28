function User() {};
User.prototype.save = function(errorCallback) {
    // errorCallback("Test error");
    errorCallback(undefined);
    // return new Promise();
};

describe('User', function () {
    describe('#save()', function () {
        it('should save without error', function (done) {
            var user = new User('Luna');
            user.save(function (err) {
                if (err) done(err);
                else done();
            });
        });
    });
});