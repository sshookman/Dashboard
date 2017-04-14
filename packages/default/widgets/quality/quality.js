widget = {
    onData: function (el, data) {
        var $content = $('.content', el);

        if (data) {
            var grade = data.grade;
            $content.empty();
            $content.append(`<p class='${grade}'>${grade}</p>`);
        }
    }
};
