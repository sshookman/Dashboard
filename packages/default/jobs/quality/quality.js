module.exports = {
    onRun: function(config, dependencies, jobCallback) {
        var project = config.name
        var options = {
            url: `https://api.codacy.com/2.0/sshookman/${project}`,
            headers: {
                'api_token': config.globalAuth.codacy.token
            }
        };

        dependencies.easyRequest.JSON(options, function (err, data) {
            if (!err) {
                var commit = data.commit.commit;
                jobCallback(null, {grade: commit.grade});
            } else {
                jobCallback(err);
            }
        });
        
    }
};
