window.onload = (() => {
    let keys = document.getElementsByClassName("key")

    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", () => {
            console.log(keys[i].getHTML());
            const inputField = document.getElementById('input_field');

            if (keys[i].classList.contains('clear')) {
                inputField.value = '';
            } else if (keys[i].classList.contains('equals')) {
                const calculator = new Calculator();
                try {
                    const rpnExpression = calculator.infixToRPN(inputField.value);
                    const result = calculator.evaluateRPN(rpnExpression);
                    inputField.value = result;
                } catch (error) {
                    inputField.value = error.message;
                }
            } else {
                if (keys[i].textContent.trim() === 'e') {
                    inputField.value += '2.71';
                } else if (keys[i].textContent.trim() === 'π') {
                    inputField.value += '3.14';
                } else if (keys[i].classList.contains("number") || keys[i].classList.contains("dot")) { 
                    inputField.value += keys[i].textContent.trim();
                } else {
                    inputField.value += ` ${keys[i].textContent.trim()} `;
                }
            }
        });
    }
});

class Calculator {
    constructor() {
        this.operations = {};
        this.registerOperations();
    }

    registerOperations() {
        this.operations['+'] = new AddOperation();
        this.operations['-'] = new SubtractOperation();
        this.operations['*'] = new MultiplyOperation();
        this.operations['/'] = new DivideOperation();
        this.operations['^'] = new PowerOperation();
        this.operations['√'] = new SquareRootOperation();
        this.operations['sin'] = new SinOperation();
        this.operations['cos'] = new CosOperation();
        this.operations['tg'] = new TgOperation();
        this.operations['ctg'] = new CtgOperation();
    }

    evaluateRPN(expression) {
        const stack = [];
        const tokens = expression.split(' ');

        tokens.forEach(token => {
            if (!isNaN(token)) {
                stack.push(parseFloat(token));
            } else if (this.operations[token]) {
                const operation = this.operations[token];
                const argsCount = operation instanceof SquareRootOperation || 
                                  operation instanceof SinOperation || operation instanceof CosOperation || 
                                  operation instanceof TgOperation || operation instanceof CtgOperation ? 1 : 2;
                
                const args = [];
                for (let i = 0; i < argsCount; i++) {
                    args.unshift(stack.pop());
                }

                const result = operation.execute(...args);
                stack.push(result);
            } else {
                throw new Error(`Неизвестный оператор: ${token}`);
            }
        });

        return stack.pop();
    }

    infixToRPN(expression) {
        const outputQueue = [];
        const operatorStack = [];
        
        const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };

        let tokens = expression.split(/(\s+)/).filter(token => token.trim() !== '');
        
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];

            if (!isNaN(token)) {
                outputQueue.push(token);
            } else if (token === '-') {
                if (token[0] === '-') {
                    outputQueue.push('0');
                    outputQueue.push('-');
                }
                if (i === 0 || ['+', '-', '*', '/', '(', '^'].includes(tokens[i - 1])) { 
                    // Если это первый токен или предыдущий токен оператор/скобка
                    outputQueue.push('0'); // Добавляем ноль перед унарным минусом
                    outputQueue.push('-'); // Добавляем унарный минус как бинарный оператор
                } else { 
                    while (
                        operatorStack.length > 0 &&
                        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
                    ) {
                        outputQueue.push(operatorStack.pop());
                    }
                    operatorStack.push(token);
                }
            } else if (this.operations[token]) { // Если токен - оператор
                while (
                    operatorStack.length > 0 &&
                    precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
                ) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            } else if (token === '(') { // Если токен - открывающая скобка
                operatorStack.push(token);
            } else if (token === ')') { // Если токен - закрывающая скобка
                while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.pop(); // Убираем открывающую скобку из стека
            } else {
                throw new Error(`Неизвестный токен: ${token}`);
            }
        }

        while (operatorStack.length > 0) { // Добавляем оставшиеся операторы в выходную очередь
            outputQueue.push(operatorStack.pop());
        }

        return outputQueue.join(' ');
    }
}

class Operation {
   constructor() {
       if (this.constructor === Operation) {
           throw new Error("Cannot instantiate abstract class");
       }
   }

   execute(...args) {
       throw new Error("Method 'execute()' must be implemented.");
   }
}

class AddOperation extends Operation {
   execute(a, b) {
       return a + b;
   }
}

class SubtractOperation extends Operation {
   execute(a, b) {
       return a - b;
   }
}

class MultiplyOperation extends Operation {
   execute(a, b) {
       return a * b;
   }
}

class DivideOperation extends Operation {
   execute(a, b) {
       if (b === 0) throw new Error("Деление на ноль");
       return a / b;
   }
}

class PowerOperation extends Operation {
    execute(a, b) {
        return Math.pow(a, b);
    }
}

class SquareRootOperation extends Operation {
    execute(a) {
        if (a < 0) throw new Error("Невозможно извлечь квадратный корень из отрицательного числа");
        return Math.sqrt(a);
    }
}

class SinOperation extends Operation {
    execute(x) {
        return Math.sin(this.toRadians(x));
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}

class CosOperation extends Operation {
    execute(x) {
        return Math.cos(this.toRadians(x));
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}

class TgOperation extends Operation {
    execute(x) {
        return Math.tan(this.toRadians(x));
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}

class CtgOperation extends Operation {
    execute(x) {
        let tanValue = Math.tan(this.toRadians(x));
        if (tanValue === 0) throw new Error("Котангенс не определен для этого значения");
        return 1 / tanValue;
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}