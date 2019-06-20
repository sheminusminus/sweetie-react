```jsx static
<Button
  backgroundColor={{ red: 238/255, green: 118/255, blue: 103/255 }}
  frame={{
    x: 12,
    y: 100,
    width: view.frame.width - 24,
    height: 50,
  }}
  layer={{
    cornerRadius: 25,
    shadowColor: { red: 0, green: 0, blue: 0, alpha: 1 },
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
  }}
  title="Press Me :)"
  titleColor={{ red: 24/255, green: 26/255, blue: 27/255 }}
  titleLabel={{
    font: UIFont('Lato-Black', 17),
  }}
  target={[this.handleButtonTouch, UIControlEventTouchUpInside]}
/>
```
