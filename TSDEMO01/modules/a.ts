export namespace A {
    interface Animal {
      name: string;
      eat(): void;
    }
  
    export class Dog implements Animal {
      name: string;
  
      constructor(name: string) {
        this.name = name;
      }
  
      eat(): void {
        console.log(`${this.name} 吃狗粮`);
      }
    }
  
    export class Cat implements Animal {
      name: string;
  
      constructor(name: string) {
        this.name = name;
      }
  
      eat(): void {
        console.log(`${this.name} 吃猫粮`);
      }
    }
  
  }