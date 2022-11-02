enum ImageFormat {
    Png = 'png',
    Jpeg = 'jpeg'
}

interface IResolution {
    width: number;
    height: number;
}

interface IImageConvertion extends IResolution{
    format: ImageFormat
}

class ImageBuilder {
    private formats: ImageFormat[] = [];
    private resolutions: IResolution[] = [];

    addPng(){
        if(this.formats.includes(ImageFormat.Png)){
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    }
    addJpeg(){
        if(this.formats.includes(ImageFormat.Jpeg)){
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    }

    addResolution(width: number, height: number){
        this.resolutions.push({width: width, height: height})
        return this
    }

    build(){
        let res: IImageConvertion[] = [];
        for(let r of this.resolutions){
            for (let f of this.formats){
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height
                })
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
.build()
)