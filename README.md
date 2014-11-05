jqueryImageUpload
=================

Image Upload creates an uploadbutton and an image preview with the ability to handle images which is out of ratio.

# How to use it
$("#uploadButton").imageUpload({id:"#imagePreviewCanvas"});

## Options
* string: id - ID of the DOM element holding the image preview (must be an img-tag)
* integer: requiredRatio - ie. 1 for a square
* function: wrongRatio - function to run if the ratio is wrong
* function: done - function to run when completed successfully

## wrongRatio function
The wrongRatio function is returned with an object containing:
* targetId - the ID of the preview DOM element
* width - width of the selected image
* height - height of the selected image
* object - the image object
* data - the image Base64 string
