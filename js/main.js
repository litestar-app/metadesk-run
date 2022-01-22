$(function () {
	//Initialize wow js for animations
	new WOW().init({ mobile: true });

	$("#dialog").dialog({
		autoOpen: false,
		modal: true,
		width: 650,
		open: function (event, ui) {
			$(".ui-widget-overlay").on("click", function () {
				$("#dialog").dialog("close");
			});
		},
	});

	$(".open-dialog").on("click", function (e) {
		e.preventDefault();
		$("#dialog").dialog("open");
	});

	//Form Validation
	$("#messageForm").validate({
		submitHandler: function (form) {
			$(form).find("button").prop("disabled", true);
			$.ajax({
				url: "https://formsubmit.co/ajax/hello@litestar.app",
				type: form.method,
				data: $(form).serialize(),
				success: function (response) {
					$(form).find("button").prop("disabled", false);
					$(".user-email").text($("#messageForm").find("#inputEmail").val());
					$("#messageForm").hide("fast", function () {
						$(".thanks-message").show("fast");
					});
				},
			});
		},
	});

	$(".thanks-message .btn").on("click", function () {
		$("#dialog").dialog("close");
	});
});
