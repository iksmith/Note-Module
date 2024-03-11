// Create a function that generates a form pop up in JS


// This function allows the text button to be clicked to add a text box in the create/section
function textStack() {
    $('#textCreator').click(function() {
        const inputBox = $('#myInput');
        if (inputBox.css('display') === 'none') {
            inputBox.css('display', 'block');
        } else {
            inputBox.css('display', 'none');
        }
    });
}

textStack();