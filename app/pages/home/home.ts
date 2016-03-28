import {Page} from 'ionic-angular';
import {Camera} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  nativeCamera(){
    let options = {
      quality: 50, // quality of the taken picture
      allowEdit: false, // opens the the image editor after taking the picture
      encodingType: 1, // picture gets saved as PNG
      targetWidth: 1980, // sets width of the resulting image
      targetHeight: 1080, // sets the height of the resulting image
      mediaType: 0, // taking a picture, 1 for video
      correctOrientation: true, // rotate the camera view when rotating the device
      saveToPhotoAlbum: true, // saves the photo in the photo library after taking the picture
      cameraDirection: 0,
      destinationType: 2
    };

    Camera.getPicture(options).then(
      (imageData) => {
        let base64Data = "data:image/jpeg;base64," + imageData;
        alert(base64Data);
      },
      (err) => {
        alert(err);
      }
    )
  }
}
