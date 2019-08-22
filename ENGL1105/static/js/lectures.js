$(document).ready(function() {
    setNextLecture();
    setPageLinks();
});

var YEAR = 2017;
var HOUR = 13;
var READABLE_HOUR = "1:00 PM in MacMillan Hall 117.";

var PAGE_OFFSET = 8; // because textbook page numbers are different from PDF page numbers

function setNextLecture() {
    var lectures = $("table.lectures tbody tr");
    for(var i = 0; i < lectures.length; i++) {
        var lecture = lectures[i];
        var lectureDate = moment(lecture.children[0].innerHTML, "MMMM DD").year(YEAR).hours(HOUR);
	    var now = moment();

        if(lectureDate.isAfter(now)) {
            $(lecture).addClass("next-lecture");
            $(".next-lecture-title").html(lecture.children[1].innerHTML);
            $(".next-lecture-date").html(lectureDate.format("dddd, MMMM Do") + " at " + READABLE_HOUR);
            break;
        }
    }
}

function setPageLinks() {
    var links = $("table.lectures td a");
    for(var i = 0; i < links.length; i++) {
        var link = $(links[i]);
        if(link.attr("data-page")) {
            var pageNumber = parseInt(link.attr("data-page")) + PAGE_OFFSET; 
            var pageURL = "static/files/documents/CS22Book.pdf#page=" + pageNumber;

            link.attr("href", pageURL);
        }   
    }
}
