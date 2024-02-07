//your code here!
document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');
    
    // Function to add more list items
    function addMoreItems() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 2; i++) {
            const li = document.createElement('li');
            li.textContent = `Item ${list.children.length + 1}`;
            fragment.appendChild(li);
        }
        list.appendChild(fragment);
    }

    // Event listener for scroll event
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            addMoreItems();
        }
    });

    // Initially add about 10 list items
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i + 1}`;
        list.appendChild(li);
    }

});

