import dangerouslyAtomicHtml from 'dangerously-atomic-html';
import visitor from './visitor';

export default class BlogPost {
  constructor(apiBlogPost) {
    const {title, content, published, id} = apiBlogPost;
    this.title = title, this.content = content, this.published = published, this.id = id, this.image = null;
    this.setImage();
  }

  setImage(){
    const findMainImage = (node) => {
      if (node.nodeName === 'IMG' && node.getAttribute('alt') === 'main_img') {
        this.image = node.getAttribute('src');
      }
    }
    dangerouslyAtomicHtml(this.content, findMainImage);
    console.log(this.image);
  }

  getReactComponent() {
    return dangerouslyAtomicHtml(this.content, visitor);
  }
}
