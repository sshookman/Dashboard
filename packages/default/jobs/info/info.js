module.exports = {
    onRun: function(config, dependencies, jobCallback) {
        jobCallback(null, {name: config.displayName});
    }
};
