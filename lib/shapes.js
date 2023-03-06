class ParentShape {
  constructor(text, textColor, backgroundColor) {
    this.text = text.substring(0, 3); // If user enters more the three chars, we only want to show the first 3
    this.textColor = textColor;
    this.backgroundColor = backgroundColor;
  }
}

class Triangle extends ParentShape {
  constructor(text, textColor, backgroundColor) {
    super(text, textColor, backgroundColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="50,150 150,50 250,150" fill=${this.backgroundColor} />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Circle extends ParentShape {
  constructor(text, textColor, backgroundColor) {
    super(text, textColor, backgroundColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill=${this.backgroundColor} />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Square extends ParentShape {
  constructor(text, textColor, backgroundColor) {
    super(text, textColor, backgroundColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="50" width="200" height="200" fill=${this.backgroundColor} />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = { ParentShape, Triangle, Circle, Square };
