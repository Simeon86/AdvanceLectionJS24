window.addEventListener('DOMContentLoaded', () => {

    function activateButton(selector) {

        var elements = document.querySelectorAll(selector);

        // Check if there is at Least one element
        if (!elements.length) {
            return null;
        }

        function activate(element) {
            element.addEventListener('click', event => {
                // console.log(new Date().getTime());
                if(!element.getAttribute('data-event')) {
                    return;
                }
                var customEvent = new Event(element.getAttribute('data-event'))
                document.dispatchEvent(customEvent);
            });

            element.addEventListener('mousedown', event => {
                element.classList.add('down')
            });
            

            element.addEventListener('mouseover', event => {
                console.log('over');
            });

            element.addEventListener('mouseup', event => {
                element.classList.remove('down')
            });
            
        }

        // Loop the elements
        elements.forEach(el => {
            activate(el);
        });
    }

    activateButton('button');


});