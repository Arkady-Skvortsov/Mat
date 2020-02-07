let arr = ['блять', "бля", 'ебать', 'ебта', 'нихуя', 'хуй', 'хуя', 'хуярить', 'захуярить', 'перехуярить', 'сука', 'ебашить', 'заебашить', 'переебашить', 'ебнуть', 'хуйнуть', 'пизда', 'пиздабол', 'пиздеть', 'пиздюк', 'пиздюшатина', 'пиздливый', 'запизделся', 'выебываться', 'выебнулся', 'пиздануть', 'пидор', 'пидорас', 'пидоры', 'пидрила', 'Блять', 'Ебать', 'Пидорас', 'Пидрила', 'Ебать', 'Нихуя', 'Хуй', 'Хуя', 'Хуярить', "Захуярить", "Сука"];

        let btn = document.querySelector('.btn');
        let contain = document.querySelector('.container');

        btn.addEventListener('click', function() {
           let text = document.querySelector('#inpt');
           let text_2 = text.value;

           arr.forEach(function(a) {
              while(text_2.indexOf(a) != -1) {
              	 text_2 = text_2.replace(a, Replace(a.length));
              }
           });

           Add(text_2);

           text.value = "";
        });

        function Replace(n) {
        	let out = '';

        	for(let i = 0; i < n; i++) {
        		out += '*';
        	}

        	return out;
        }

        function Add(T) {
            let block = document.createElement('div');
            let p = document.createElement('p');

            block.className = 'blck';
            p.className = 'Text';

            contain.appendChild(block);
            block.appendChild(p);

            p.textContent = T;        
        }