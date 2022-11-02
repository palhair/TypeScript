"use strict";
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Png"] = "png";
    ImageFormat["Jpeg"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addPng() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    }
    addJpeg() {
        if (this.formats.includes(ImageFormat.Jpeg)) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    }
    addResolution(width, height) {
        this.resolutions.push({ width: width, height: height });
        return this;
    }
    build() {
        let res = [];
        for (let r of this.resolutions) {
            for (let f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height
                });
            }
        }
        return res;
    }
}
console.log(new ImageBuilder()
    .addJpeg()
    .addPng()
    .addJpeg()
    .addResolution(500, 1000)
    .addResolution(700, 200)
    .addResolution(400, 300)
    .build());
