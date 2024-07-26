type SubscribeCallback<Type> = (data: Type) => void

export class EventSubject<Type> {
  private observer = new Observer<Type>()

  constructor(data: Type) {
    this.next(data)
  }

  asObservable() {
    return {
      subscribe: this.observer.subscribe.bind(this.observer),
    }
  }

  next(data: Type) {
    this.observer.emit(data)
  }
}

export class Observer<Type> {
  observers: SubscribeCallback<Type>[]

  constructor() {
    this.observers = []
  }

  emit(data: Type) {
    for (const observer of this.observers) {
      observer(data)
    }
  }

  subscribe(callback: SubscribeCallback<Type>) {
    const length = this.observers.push(callback)

    return () => {
      this.observers.splice(length - 1, 1)
    }
  }
}
