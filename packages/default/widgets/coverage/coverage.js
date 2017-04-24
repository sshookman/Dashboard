widget = {
    onData: function (el, data) {
        var $content = $('.content', el);

        if (data) {
            var status = "";
            var coverage = parseInt(data.coverage);

            if (coverage > 90) {
                status = "excellent";
            } else if (coverage > 70) {
                status = "decent";
            } else {
                status = "poor";
            }

            $content.empty();
            $content.append(`<p class='${status}'>${coverage}%</p>`);
        }
    }
};
