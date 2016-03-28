var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.nativeCamera = function () {
        var options = {
            quality: 50,
            allowEdit: false,
            encodingType: 1,
            targetWidth: 1980,
            targetHeight: 1080,
            mediaType: 0,
            correctOrientation: true,
            saveToPhotoAlbum: true,
            cameraDirection: 0,
            destinationType: 2
        };
        ionic_native_1.Camera.getPicture(options).then(function (imageData) {
            var base64Data = "data:image/jpeg;base64," + imageData;
            alert(base64Data);
        }, function (err) {
            alert(err);
        });
    };
    HomePage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomePage);
    return HomePage;
})();
exports.HomePage = HomePage;
