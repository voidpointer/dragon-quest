$(function(){
	// take sprite data from character-data.js and draw each sprite on a canvas
    createSprite(16, 16, hero_s1, "hero_s1", "hero_s");
    createSprite(16, 16, hero_s2, "hero_s2", "hero_s");
    createSprite(12, 16, hero_w1, "hero_w1", "hero_w");
    createSprite(12, 16, hero_w2, "hero_w2", "hero_w");
    createSprite(16, 16, hero_n1, "hero_n1", "hero_n");
    createSprite(16, 16, hero_n2, "hero_n2", "hero_n");
    createSprite(12, 16, hero_e1, "hero_e1", "hero_e");
    createSprite(12, 16, hero_e2, "hero_e2", "hero_e");
});

function createSprite(w, h, spriteData, canvasId, containerId)
{
    var scale = 8;
    var scaledWidth = w * scale;
    var scaledHeight = h * scale;

    var newCanvas = $("<canvas>").attr("id", canvasId).attr("width", scaledWidth).attr("height", scaledHeight)[0];
    var newContext = newCanvas.getContext("2d");

    // scale up sprite
    var imgd2 = newContext.createImageData(scaledWidth, scaledHeight);
    for(var y = 0; y < h; y++)
    {
    	var pixelLine = new Uint8ClampedArray(w * scale * 4);
	    for(var x = 0; x < w; x++)
	    {
	    	var sliceIndex = (x + y * w) * 4;
	    	var pixel = spriteData.slice(sliceIndex, sliceIndex + 4);
	    	for (var i = 0; i < scale; i++)
	    	{
	    		pixelLine.set(pixel, (x * scale + i) * 4);
	    	}
	    }
	    for(var i = 0; i < scale; i++)
	    {
	    	imgd2.data.set(pixelLine, ((y * scale) + i) * w * scale * 4);
	    }
    }

    newContext.putImageData(imgd2, 0, 0);
    $("#" + containerId).append(newCanvas);
}	