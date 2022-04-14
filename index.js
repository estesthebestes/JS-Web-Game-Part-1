function newImage(link, left, bottom) {
    let obj = document.createElement('img');
    obj.src = link;
    obj.style.position = 'fixed';
    obj.style.left = left + 'px';
    obj.style.bottom = bottom + 'px';
    document.body.append(obj);
    return obj;
}

function newItem(link, left, bottom) {
        let item = document.createElement('img');
        item.src = link;
        item.style.position = 'fixed';
        item.style.left = left + 'px';
        item.style.bottom = bottom + 'px'; 
        item.addEventListener('dblclick', function() { item.remove(); });
        document.body.append(item);
        return item;
  }
// images go here
newImage('./assets/pine-tree.png', 450, 200)
newImage( './assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage( './assets/well.png', 500, 425)

// items go here
newItem('/assets/shield.png', 165, 185)
newItem('/assets/sword.png', 500, 405)
newImage('assets/staff.png', 600, 100)


// this makes the sword disappear on click
  
