
    const map = document.querySelector(".map");
    

    const photo = document.querySelector("#photo");
    const zoom = document.querySelector("#zoom");

    function scaleMap() {

        var bredde = innerWidth;

        if(bredde <= 500) {
            map.scrollLeft = (945 / 2.5) / 2;
        }
        if(bredde > 500) {
            map.scrollLeft = 450;
        }

    }

     function scaleMap() {

    var bredde = innerWidth;

    if(bredde <= 1000) {
        map.scrollLeft = (945 / 2.5) / 2;
    }
    if(bredde > 1000) {
        map.scrollLeft = 450;
}

}

    scaleMap();
    onresize = scaleMap;

    photo.onmousemove = evt => {

        const bildeOmraade = photo.getBoundingClientRect();
        const bildeLeft = bildeOmraade.x;
        const bildeTop = bildeOmraade.y;
        const zoomLevel = 5;

        const x = - (evt.clientX * zoomLevel) + (bildeLeft * zoomLevel)  + 100 + "px";
        const y = - (evt.clientY * zoomLevel) + (bildeTop * zoomLevel) + 100 + "px";

        zoom.style.backgroundPosition = x + " " + y;

        zoom.style.left = -100 + evt.clientX + "px";
        zoom.style.top = -100 + evt.clientY + "px";
    }

    photo.onmouseout = evt => {
        zoom.style.left = "-10000px";
    }
    