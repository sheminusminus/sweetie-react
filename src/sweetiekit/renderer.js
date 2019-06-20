import ReactReconciler from 'react-reconciler';

import {
  appendChild,
  commitUpdate,
  createElement,
  createInstance,
  finalizeInitialChildren,
  insertBefore,
  prepareUpdate,
  removeChild,
} from './utils';


const hostConfig = {
  getRootHostContext(rootContainerInstance) {
    console.log('TODO: getRootHostContext');
    return {};
  },

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    return parentHostContext;
  },

  getPublicInstance(instance) {
    console.log('TODO: getPublicInstance');
  },

  prepareForCommit(containerInfo) {
    console.log('TODO: prepareForCommit');
  },

  resetAfterCommit(containerInfo) {
    console.log('TODO: resetAfterCommit');
  },

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle);
  },

  appendInitialChild(parentInstance, child) {
    appendChild(parentInstance, child);
  },

  finalizeInitialChildren(
    view,
    type,
    props,
    rootContainerInstance,
    hostContext
  ) {
    finalizeInitialChildren(view, type, props, rootContainerInstance, hostContext);
  },

  prepareUpdate(
    domElement,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) {
    return prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext);
  },

  shouldSetTextContent(type, props) {
    return false;
  },

  shouldDeprioritizeSubtree(type, props) {
    console.log('shouldDeprioritizeSubtree');
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return createElement.label({ text });
  },

  now: Date.now,

  isPrimaryRenderer: true,
  scheduleDeferredCallback() {},
  cancelDeferredCallback() {},

  // -------------------
  //     Mutation
  // -------------------

  supportsMutation: true,

  commitMount(domElement, type, newProps, internalInstanceHandle) {
    console.log('commitMount');
  },

  commitUpdate(
    view,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle
  ) {
    commitUpdate(view, updatePayload, type, oldProps, newProps, internalInstanceHandle);
  },

  resetTextContent(domElement) {},

  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
  },

  appendChild(parentInstance, child) {
    appendChild(parentInstance, child);
  },

  appendChildToContainer(container, child) {
    appendChild(container, child);
  },

  insertBefore(parentInstance, child, beforeChild) {
    insertBefore(parentInstance, child, beforeChild);
  },

  insertInContainerBefore(container, child, beforeChild) {
    console.log('insertInContainerBefore');
  },

  removeChild(parentInstance, child) {
    removeChild(parentInstance, child);
  },

  removeChildFromContainer(container, child) {
    removeChild(container, child);
  }
};

const SKRenderer = ReactReconciler(hostConfig);

let internalContainerStructure;

export default {
  render(elements, containerNode, callback) {
    if (!internalContainerStructure) {
      internalContainerStructure = SKRenderer.createContainer(
        containerNode,
        false,
        false,
      );
    }

    SKRenderer.updateContainer(elements, internalContainerStructure, null, callback);
  }
};
