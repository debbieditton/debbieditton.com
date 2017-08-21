export default function visitor(node) {
  // dont render the main image
  if (node.nodeName === 'IMG' && node.getAttribute('alt') === 'main_img') {
    return null;
  }

  // strip out styles
  if (node.getAttribute && node.getAttribute('style')) {
    return {
      type: 'node',
      Component: node.nodeName,
    }
  }
};