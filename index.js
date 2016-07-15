window.onload = function() {
    var dustbin = document.querySelector(".dustbin");
    var liDrags = document.querySelectorAll("li");
    var isDrag = null;
    for (var i = 0; i < liDrags.length; i++) {
        liDrags[i].ondragstart = function(e) {
            e.dataTransfer.effectAllowed = "move";
            isDrag = e.target;
        };

        liDrags[i].ondragend = function(e) {
            dustbin.style.color = "black";
        };
    }

    dustbin.ondragenter = function(e) {
        dustbin.style.color = "blue";
    };

    dustbin.ondragover = function(e) {
        e.preventDefault();
    };

    dustbin.ondrop = function(e) {
        if (isDrag) {
            isDrag.parentNode.removeChild(isDrag);
        }
    };
};
