$(document).ready(function() {
    $("#changeQuote").on("submit", function(event) {

        // The whole point of Ajax is to send and response request to the server without refreshing the web page.
        // However, html forms refresh by default and the line below prevents that.
        event.preventDefault();

        // CREATE reference to the actual input
        let value = $('#valuename').val();

        // CREATE Ajax http request object
        $.ajax({
            url: "/ajax",
            method: "POST",
            cotentType: "application/json",
            data: {quote: value},
            success: function(res) {
                $("h1").html(`Quote: "${res.response}"`);
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
});