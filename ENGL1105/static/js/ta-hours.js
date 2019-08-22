$(document).ready(function() {
    doCalendar();
});

function doCalendar() {
    var calendar = $("#calendar-iframe");
    var calendarURL = calendar.attr("src");
    var mobileBreakpoint = 560;

    function setCalendarView() {
        var windowWidth = $(window).width();
        if (windowWidth > mobileBreakpoint && calendarURL.indexOf("mode=AGENDA") >= 0) {
            calendarURL = calendarURL.replace("mode=AGENDA", "mode=WEEK");
            calendar.attr("src", calendarURL);
        } else if (windowWidth < mobileBreakpoint && calendarURL.indexOf("mode=WEEK") >= 0) {
            calendarURL = calendarURL.replace("mode=WEEK", "mode=AGENDA");
            calendar.attr("src", calendarURL);
        }
    }

    /* On page load, set the appropriate calendar view */
    setCalendarView();

    /* On window resize, switch view if needed */
    $(window).resize(function() {
        setCalendarView();
    });
}
