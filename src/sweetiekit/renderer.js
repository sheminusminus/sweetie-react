import ReactReconciler from 'react-reconciler';

import {
  appendChild,
  createElement,
  createInstance,
  is,
  removeChild,
} from './utils';


const hostConfig = {
  getRootHostContext(rootContainerInstance) {
    console.log('TODO: getRootHostContext');
    return {}
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
    const { children, ...otherProps } = props;
    Object.keys(otherProps).forEach(attr => {
      if (attr === 'target' && is.view(view)) {
        const [fn, events] = otherProps[attr];

        if (view.__eventListeners) {
          view.__eventListeners.push([fn, events]);
        } else {
          view.__eventListeners = [[fn, events]];
        }

        view.addTargetActionForControlEvents(fn, events);
      } else if (attr === 'target' && is.tapRecognizer(view)) {
        const fn = otherProps[attr];
        const handle = view.addTargetAction(fn);
        const obj = {
          handle,
          fn,
        };

        if (view.__eventListeners) {
          view.__eventListeners.push(obj);
        } else {
          view.__eventListeners = [obj];
        }
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
    updatePayload.forEach(update => {
      Object.keys(update).forEach(key => {
        if (key === 'target' && is.view(view)) {
          // for now we only allow one target per view
          view.__eventListeners.forEach(pair => { // To prevent leak
            view.removeTargetActionForControlEvents(pair[1]);
          });
          view.__eventListeners = [ update[key] ];
          view.addTargetActionForControlEvents(update[key][0], update[key][1]);
        } else if (key === 'target' && is.tapRecognizer(view)) {
          if (view.__eventListeners) {
            // for now we only allow one target per recognizer
            view.__eventListeners.forEach(({ handle }) => {
              view.removeTargetAction(handle);
            });
            const fn = update[key];
            const handle = view.addTargetAction(fn);
            view.__eventListeners = [{ fn, handle }];
          }
        } else if (key === 'title' && view.setTitleForState) {
          view.setTitleForState(update[key], UIControlStateNormal);
        } else if (key === 'titleColor' && view.setTitleColorForState) {
          view.setTitleColorForState(update[key], UIControlStateNormal);
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
    textInstance.text = newText;
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
