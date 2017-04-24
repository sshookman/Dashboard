module.exports = {
    onRun: function(config, dependencies, jobCallback) {
        var token = config.globalAuth.codecov.token;
        var project = config.name;
        var url = `https://codecov.io/api/gh/sshookman/${project}?access_token=${token}`;

        dependencies.easyRequest.JSON(url, function (err, data) {
            if (!err) {
                jobCallback(null, {name: data.repo.name, coverage: data.commit.totals.c});
            } else {
                jobCallback(err);
            }
        });
        
    }
};
