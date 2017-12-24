import React from 'react';
import dangerouslyAtomicHtml from 'dangerously-atomic-html';
import * as visitors from './visitor';

export default class BlogPost {
  constructor(apiBlogPost) {
    const {title, content, published, id, url} = apiBlogPost;
    this.title = title, this.content = content, this.published = published, this.id = id, this.image = null, this.url = url;
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

  processHtml(content, visitorType) {
    if (visitorType === 'noImage') {
      const div = document.createElement('div');
      div.innerHTML = content;
      [...div.getElementsByTagName('img')].forEach(img => img.style.display =  'none');
      return div.innerHTML;
    }
    return content;
  }

  getReactComponent(vistorType = 'visitor') {
    // return dangerouslyAtomicHtml(this.content, visitors[vistorType]);
    const content = this.processHtml(this.content, vistorType);
    return <div dangerouslySetInnerHTML={{ __html: content }} />
  }
}
