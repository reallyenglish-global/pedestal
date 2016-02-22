// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).foundation();

var modal = $("#skypeModal3"),
modalForm = modal.find("form"),
modalFormSubmit = modalForm.find("button[type='submit']"),
enableClose = function() {
	modal.foundation("close");
},
inputs = $("#skypeModal3 form input").get();

inputs.forEach(function(input) {
	$(input).on("change", function(e) {
		modalForm.foundation("validateForm");
	});
});

$(document)
.on("invalid.zf.abide", function(ev,elem) {
})
.on("valid.zf.abide", function(ev,elem) {
})
.on("forminvalid.zf.abide", function(ev,frm) {
	modalFormSubmit.addClass("disabled");
	modalFormSubmit.off("click", enableClose);
})
.on("formvalid.zf.abide", function(ev,frm) {
	modalFormSubmit.removeClass("disabled");
	modalFormSubmit.on("click", enableClose);
})
// to prevent form from submitting upon successful validation
.on("submit", function(ev) {
	ev.preventDefault();
	modalForm.foundation("resetForm");
})
.on("open.zf.reveal", function(ev, modal) {
	modalForm.foundation("resetForm");
	if(modal) {
		modal.find("[data-abide-error]").attr("style", "display: none;")
	}
});

$("#booked-lessons-button").on("click", function(e) {
	$("#study-tasks").hide();
	$("#booked-lessons").show();
	$("#booked-lessons-button").addClass("active");
	$("#study-tasks-button").removeClass("active");
});

$("#study-tasks-button").on("click", function(e) {
	$("#study-tasks").show();
	$("#booked-lessons").hide();
	$("#booked-lessons-button").removeClass("active");
	$("#study-tasks-button").addClass("active");
});

$("#current-bookings-button").on("click", function(e) {
	$("#current-bookings-panel").show();
	$("#completed-lessons-panel").hide();
	$("#incompleted-lessons-panel").hide();
	$("#cancelled-lessons-panel").hide();
	$("#current-bookings-button").addClass("active");
	$("#completed-lessons-button").removeClass("active");
	$("#incompleted-lessons-button").removeClass("active");
	$("#cancelled-lessons-button").removeClass("active");
});

$("#completed-lessons-button").on("click", function(e) {
	$("#current-bookings-panel").hide();
	$("#completed-lessons-panel").show();
	$("#incompleted-lessons-panel").hide();
	$("#cancelled-lessons-panel").hide();
	$("#current-bookings-button").removeClass("active");
	$("#completed-lessons-button").addClass("active");
	$("#incompleted-lessons-button").removeClass("active");
	$("#cancelled-lessons-button").removeClass("active");
});

$("#incompleted-lessons-button").on("click", function(e) {
	$("#current-bookings-panel").hide();
	$("#completed-lessons-panel").hide();
	$("#incompleted-lessons-panel").show();
	$("#cancelled-lessons-panel").hide();
	$("#current-bookings-button").removeClass("active");
	$("#completed-lessons-button").removeClass("active");
	$("#incompleted-lessons-button").addClass("active");
	$("#cancelled-lessons-button").removeClass("active");
});

$("#cancelled-lessons-button").on("click", function(e) {
	$("#current-bookings-panel").hide();
	$("#completed-lessons-panel").hide();
	$("#incompleted-lessons-panel").hide();
	$("#cancelled-lessons-panel").show();
	$("#current-bookings-button").removeClass("active");
	$("#completed-lessons-button").removeClass("active");
	$("#incompleted-lessons-button").removeClass("active");
	$("#cancelled-lessons-button").addClass("active");
});