Webcam.set({
    height:200,
    width:200,
    image_format:'png',
    png_property:90
});

the_camera = document.getElementById("camera");
Webcam.attatch('camera');

function snap_photo() {
    Webcam.snap(function (data_snap){
        document.getElementById("output").innerHTML = "<img id='output_img' src='"data_snap"'>"
    });
};