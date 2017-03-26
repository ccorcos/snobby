// This is class represents an HTML DOM node and is supposed to hold all of the mutable state. VNodes have a .elm property that references a type like this and gets passed on from one VNode to the next.

export default class ComponentElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.parentNode = null;
    this.nextSibling = null;
    this.bag = {};
    this.listeners = {};
  }
  update() {
    Object.keys(this.listeners).forEach(key => this.listeners[key]());
  }
  insertBefore(newNode, referenceNode) {
    newNode.parentNode = this;
    newNode.nextSibling = referenceNode;
    this.children.splice(this.children.indexOf(referenceNode), 0, newNode);
  }
  removeChild(child) {
    child.parentNode = undefined;
    newNode.nextSibling = undefined;
    this.children.splice(this.children.indexOf(child), 1);
  }
  appendChild(child) {
    child.parentNode = this;
    newNode.nextSibling = undefined;
    this.children.push(child);
  }
}
