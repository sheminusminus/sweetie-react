import ReactReconciler from 'react-reconciler';
const SweetieKit = Require('std:sweetiekit.node');

import * as createElement from './createElement';
import * as enums from './enums';

const {
  UILabel,
  UIView,
  UIButton,
} = SweetieKit;

const hostConfig = {
  getRootHostContext(rootContainerInstance) {
    return {}
  },

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    return {};
  },

  getPublicInstance(instance) {
    console.log('getPublicInstance');
  },

  prepareForCommit(containerInfo) {
  },

  resetAfterCommit(containerInfo) {
  },

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    switch (type) {
      case 'ui-view-controller':
        return createElement.viewController(props);
      case 'ui-view':
        return createElement.view(props);
      case 'ui-button':
        return createElement.button(props);
      case 'ui-label':
        return createElement.label(props);
      default:
        return createElement.defaultType();
    }
    // let [prefix, ...rest] = type.split('-');
    // prefix = prefix.toUpperCase();
    // rest = rest.reduce((str, word) => {
    //   const next = word[0].toUpperCase() + word.substring(1);
    //   return `${str}${next}`;
    // }, '');
    // const component = `${prefix}${rest}`;
    //
    // return new SweetieKit[component]();
  },

  appendInitialChild(parentInstance, child) {
    // parentInstance.appendChild(child)
    if (parentInstance.addSubview) {
      parentInstance.addSubview(child);
    } else if (parentInstance.view && parentInstance.view.addSubview) {
      parentInstance.view.addSubview(child);
    }
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
          view.__ourVeryHackCacheOfEventListeners.push([fn, events]);
        } else {
          view.__ourVeryHackCacheOfEventListeners = [[fn, events]];
        }

        view.addTarget(fn, events);
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
        if (key === 'target') {
          view.__ourVeryHackCacheOfEventListeners.forEach(pair => { // To prevent leak
            view.removeTarget(pair[0], pair[1]);
          });
          view.__ourVeryHackCacheOfEventListeners = [ update[key] ];
          view.addTarget(update[key][0], update[key][1]);
        } else if (key === 'title' && view.setTitleForState) {
          view.setTitleForState(update[key], enums.UIControlState.normal);
        } else if (key === 'titleColor' && view.setTitleColorForState) {
          view.setTitleColorForState(update[key], enums.UIControlState.normal);
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
    if (parentInstance.addSubview) {
      parentInstance.addSubview(child);
    } else if (parentInstance.view && parentInstance.view.addSubview) {
      parentInstance.view.addSubview(child);
    }
  },

  appendChildToContainer(container, child) {
    console.log(container, child);
    if (container.addSubview) {
      container.addSubview(child);
    } else if (container.view && container.view.addSubview) {
      container.view.addSubview(child);
    }
  },

  insertBefore(parentInstance, child, beforeChild) {
    console.log('insertBefore');
  },

  insertInContainerBefore(container, child, beforeChild) {
    console.log('insertInContainerBefore');
  },

  removeChild(parentInstance, child) {
    console.log('removeChild');
    if (child.removeFromSuperview) {
      child.removeFromSuperview();
    }
  },

  removeChildFromContainer(container, child) {
    console.log('removeChildFromContainer');
    if (child.removeFromSuperview) {
      child.removeFromSuperview();
    }
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
