// 1. INTERFACES
// A base interface that guarantees any entity will have an ID
export interface IEntity {
  id: number;
}

// A specific interface for our About page extending the base entity
export interface TeamMember extends IEntity {
  name: string;
  role: string;
  expertise: string;
}

// 2. CUSTOM DECORATOR
// A method decorator that logs whenever a specific function is called
export function LogAction(message: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    // Override the original method
    descriptor.value = function (...args: any[]) {
      console.log(`[DECORATOR LOG] ${message} - Method: ${propertyKey}`);
      // Execute the original method
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

// 3. GENERICS (TypeScript Class-Based Model)
// A generic repository that can manage ANY type of data, as long as it extends IEntity
export class DataRepository<T extends IEntity> {
  private data: T[] = [];

  constructor(initialData: T[] = []) {
    this.data = initialData;
  }

  getAll(): T[] {
    return this.data;
  }

  add(item: T): void {
    this.data.push(item);
  }

  remove(id: number): void {
    this.data = this.data.filter(item => item.id !== id);
  }
}