widget = {
    onData: function (el, data) {
        var $title = $('.title', el);

        if (data) {
            $title.empty();
            $title.append(data.name);
        }
    }
};
