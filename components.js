function accordionInit(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    if (e.nodeName === 'BUTTON') {
        var accordBtn = e.getAttribute('data-accordion');
        var accordPane = document.getElementsByClassName('accordion-pane');
        var parentElm = e.parentNode.parentNode;
        var groupParent = parentElm;
        var accordGroup = parentElm.dataset.accgroup;
        var tergetId;
        for(var i = 0; i < accordPane.length; i++) {
            if (accordPane[i].id == accordBtn) {
                tergetId = accordPane[i];
                break;
            }        
        }
        if (tergetId) {
            console.log(accordBtn);
            if (tergetId.classList.contains('active')) {
                tergetId.classList.remove('active');
                e.classList.remove('active');
            } else {
                if (accordGroup) {
                    for(var i = 0; i < groupParent.children.length; i++) {
                        if (groupParent.children[i].children[1].classList.contains('active')) {
                            groupParent.children[i].children[0].classList.remove('active');
                            groupParent.children[i].children[1].classList.remove('active');
                            break;
                        }        
                    }
                }
                tergetId.classList.add('active');
                e.classList.add('active');
            }
        }
    }
}