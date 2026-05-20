// Функція створення лічильника
function createCounter(initial) {

  // Приватна змінна (доступна тільки всередині функції)
  let count = initial;

  // Повертаємо об'єкт з методами
  return {

    // Збільшує значення на 1
    increment() {
      count++;
      return count;
    },

    // Зменшує значення на 1
    decrement() {
      count--;
      return count;
    },

    // Повертає поточне значення
    getValue() {
      return count;
    },

    // Скидає значення до початкового
    reset() {
      count = initial;
      return count;
    }
  };
}

// Створення лічильника
const counter = createCounter(10);

// Перевірка роботи методів
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.getValue());  // 11
console.log(counter.reset());     // 10
console.log(counter.getValue());  // 10