widget = {
    onData: function (el, data) {
        var $content = $('.content', el);

        if (data.length > 0) {
            $content.empty();

            for (index in data) {

                var build = data[index];
                var statusClass = "progress";
                if (build.state == "finished") {
                    statusClass = (build.result == 0) ? "success" : "failure";
                }
                $content.append("<p class='" + statusClass + "'>" + build.number + "</p>");
            }
        }
    }
};
