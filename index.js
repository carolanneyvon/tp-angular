import { Observable } from 'rxjs';

const observable = new Observable((observer) => { //fonction qui va manipuler l'observable
  const friends = ['coco', 'jaco', 'pedro'];
  setTimeout(() => {
    observer.next(friends);
    setTimeout(() => {
      observer.next(true);
    }, 2000);
  }, 2000);
});

// observable.subscribe(
//   (data) => console.log("Amis => ", data)
// );
const sub = observable.subscribe(console.log);

setTimeout(() => {
  sub.unsubscribe();
}, 10000);