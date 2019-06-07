import ReactReconciler from 'react-reconciler';

import {
  appendChild,
  createElement,
  createInstance,
  removeChild,
} from '../web-utils';


const hostConfig = {
  getRootHostContext(rootContainerInstance) {
    console.log('TODO: getRootHostContext');
    return {}
  },

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    console.log('TODO: getChildHostContext');
    return {};
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
    const { children, ...otherProps } = props;
    Object.keys(otherProps).forEach(attr => {
      if (attr === 'target') {
        const [fn, events] = otherProps[attr];

        if (view.__ourVeryHackCacheOfEventListeners) {
          view.__ourVeryHackCacheOfEventListeners.push(fn);
        } else {
          view.__ourVeryHackCacheOfEventListeners = [fn];
        }

        view.addEventListener('click', fn);
      } else if (attr === 'title') {
        view.title = otherProps[attr];
      } else if (otherProps[attr]) {
        view[attr] = otherProps[attr];
      }
    });
  },

  prepareUpdate(
    domElement,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) {
    const propKeys = new Set(
      Object.keys(newProps).concat(
        Object.keys(oldProps)
      )
    ).values();

    const payload = [];

    for (let key of propKeys) {
      if (
        // text children are already handled
        key !== 'children' &&
        oldProps[key] !== newProps[key]
      ) {
        payload.push({ [key]: newProps[key] })
      }
    }

    return payload;
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
    return document.createTextNode(text);
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
    updatePayload.forEach(update => {
      Object.keys(update).forEach(key => {
        if (key === 'target') {
          view.__ourVeryHackCacheOfEventListeners.forEach(fn => { // To prevent leak
            view.removeEventListener('click', fn);
          });
          view.__ourVeryHackCacheOfEventListeners = [ update[key][0] ];
          view.addEventListener('click', update[key][0]);
        } else if (key === 'title' && view.setTitleForState) {
          view.setTitleForState(update[key], SweetieKitEnums.UIControlState.normal);
        } else if (key === 'titleColor' && view.setTitleColorForState) {
          view.setTitleColorForState(update[key], SweetieKitEnums.UIControlState.normal);
        } else if (key === 'layer' && view.layer) {
          const layerProps = update[key];
          Object.keys(layerProps).forEach(p => view.layer[p] = layerProps[p]);
        } else if (key === 'titleLabel' && view.titleLabel) {
          const labelProps = update[key];
          Object.keys(labelProps).forEach(p => view.titleLabel[p] = labelProps[p]);
        } else {
          view[key] = update[key];
        }
      });
    });
  },

  resetTextContent(domElement) {
  },

  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.textContent = newText;
  },

  appendChild(parentInstance, child) {
    appendChild(parentInstance, child);
  },

  appendChildToContainer(container, child) {
    appendChild(container, child);
  },

  insertBefore(parentInstance, child, beforeChild) {
    console.log('insertBefore');
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