module.exports = {
    onRun: function(config, dependencies, jobCallback) {
        var project = config.name
        var options = {
            url: `https://api.travis-ci.org/repos/sshookman/${project}/builds`,
            headers: {
                'Authorization': config.globalAuth.travis.token
            }
        };

        dependencies.easyRequest.JSON(options, function (err, data) {
            if (!err) {
                var builds = [];
                for (index in data) {
                    if (index == 5) {
                        break;
                    }
                    var build = data[index];
                    builds.push({ number: build.number, state: build.state, result: build.result });
                }
                jobCallback(null, builds);
            } else {
                jobCallback(err);
            }
        });
    }
};
