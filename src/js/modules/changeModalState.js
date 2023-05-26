import checkNunInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWith = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');
    
    checkNunInputs('#width');
    checkNunInputs('#height');

    function bindActionsToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN': 
                        state[prop] = i;
                        break;
                    case 'INPUT': 
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT': 
                            state[prop] = item.value;                 
                        break;
                    default:
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionsToElems('click', windowForm, 'form');
    bindActionsToElems('input', windowHeight, 'height');
    bindActionsToElems('input', windowWith, 'width');
    bindActionsToElems('change', windowType, 'type');
    bindActionsToElems('change', windowProfile, 'profile');

}

export default changeModalState;