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
})

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

})
