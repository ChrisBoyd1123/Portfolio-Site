import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-illustration-gallery',
  templateUrl: './illustration-gallery.component.html',
  styleUrls: ['./illustration-gallery.component.css']
})
export class IllustrationBioComponent implements OnInit {

  constructor(private http: HttpClient,
    private renderer: Renderer2,
    private elem: ElementRef) {
  }

  ngOnInit(): void {
    this.http.get(`/api/Search/GalleryImage`)
    .subscribe((data: any) => {
      data.forEach((dataObj: any, dataIndex: number) => {
        console.log('data', data);
        console.log('curDataObj', dataObj);
        let newGalleryImage = this.renderer.createElement('img');
        this.renderer.listen(newGalleryImage, 'click', (e: any) => {
          this.onImgClick(e);
        })
        this.renderer.addClass(newGalleryImage, 'gallery-img');
        this.renderer.setProperty(newGalleryImage, 'src', dataObj.artLink);
        console.log('gallery main, 26',
        this.elem.nativeElement.querySelector('.gallery-main'))
        this.renderer.appendChild(
          this.elem.nativeElement.querySelector('.gallery-main'),
          newGalleryImage);
      })
    })

    //*//*//*//
    //LIGHTBOX
    //*//*//*//
    const lightbox = this.renderer.createElement('div');
    this.renderer.addClass(lightbox, 'inactive');
    this.renderer.setProperty(lightbox, 'id', 'lightbox');
    this.renderer.appendChild(document.body, lightbox);

    this.renderer.listen(lightbox, 'click', (e: any) => {
      if(e.target !== e.currentTarget){
        return;
      }
      console.log('become inactive')
      this.renderer.removeClass(lightbox, 'active');
      this.renderer.addClass(lightbox, 'inactive');
    })
  }

  onImgClick(e: any) {
    const lightbox = this.renderer.selectRootElement('#lightbox', true)
    console.log('lightbox, 47', lightbox);

    //LIGHTBOX EVENT
    //When an image is clicked, the lightbox appears.

    //NEXT: Add event listener to light box for exiting once clicking away from
    //chosenImg.
        console.log('become active');
        this.renderer.addClass(lightbox, 'active');
        this.renderer.removeClass(lightbox, 'inactive');

        const chosenImg = this.renderer.createElement('img');
        chosenImg.src = (e.target.attributes[2].nodeValue);
        while (lightbox.firstChild){
          this.renderer.removeChild(lightbox, lightbox.firstChild);
        }
        lightbox.appendChild(chosenImg);
  }

}
