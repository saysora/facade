import './facade.scss';
const version = "0.0.2";
 

const rootGet = getComputedStyle(document.body);
const rootSet = document.documentElement;
const debugBar = document.querySelector('.debug-bar');
const pulldown = document.querySelector('.pull-down');
const verElem = document.querySelector('.version');

if (pulldown) {
  pulldown.addEventListener('click', () => {
    if (debugBar) {
      if (debugBar.classList.contains('in')) {
        debugBar.classList.remove('in');
      } else {
        debugBar.classList.add('in');
      }
    }
  });
}

const ui = document.querySelector(".ui");
//const serverBar = document.querySelector(".server-bar");
const serverButton = document.querySelector(".server-button");

serverButton?.addEventListener("click", () => {
  if (ui?.classList.contains("server-open")) {
    ui?.classList.remove("server-open");
  } else {
    ui?.classList.add("server-open");
  }
});

const getColor = (prop: string): string => {
  return rootGet.getPropertyValue(prop);
}

const setColor = (prop: string, color: string): void => {
  rootSet.style.setProperty(prop, `#${color.replace('#', '')}`);
}

const updateColorEv = (e: any, prop: string) => {
  const val = e.target.value;
  switch (true) {
    case val.length === 4: {
    }
    case val.length === 7: {
      setColor(prop, e.target.value);
      break;
    }
    case val.length < 3: { };
    default: {
      return;
    }
  }
}

const colorEditor = (prop: string, label: string, element: string): HTMLElement => {
  const customProp = getColor(prop);

  const div = document.createElement('div');
  const input = document.createElement('input');
  input.type = "color";
  const relatedElement = document.querySelector(`.${element}`)

  if (!relatedElement) {
    throw new Error('Element could not be bound');
  }

  input.value = customProp;

  input.maxLength = 7;
  input.addEventListener('input', e => {
    updateColorEv(e, prop);
  });

  input.addEventListener('focusin', (e) => {
    const ui = document.querySelector('.ui');
    const bounds = relatedElement.getBoundingClientRect();

    const focDiv = document.createElement('div');

    focDiv.innerHTML = `<div class="focused" id="focused" style="position: fixed; z-index: 25; width: ${bounds.width}px; height: ${bounds.height}px; top: ${bounds.top}px; left: ${bounds.left}px; pointer-events: none;" related="${element}"></div>`;


    if (element === 'server-panel') {
      ui?.classList.add('server-open');
      setTimeout(() => {
        document.body.appendChild(focDiv);
      }, 300);
    } else {
      document.body.appendChild(focDiv);
    }
  });

  input.addEventListener('focusout', (e) => {
    const focused = document.querySelector('.focused');
    focused?.remove();
    if(element === 'server-panel') {
      ui?.classList.remove('server-open');
    }
  });

  div.innerHTML = `
<label>${label.charAt(0) + label.slice(1)}</label>
`;
  div.appendChild(input);
  return div;
}

window.addEventListener('load', () => {
  if (debugBar) {
    debugBar.appendChild(colorEditor('--server-bar-bg-color', 'Server BG', 'server-panel'));
    debugBar.appendChild(colorEditor('--group-bar-bg-color', 'Group BG', 'group-bar'));
    debugBar.appendChild(colorEditor('--channel-bar-bg-color', 'Channel BG', 'server-inside'));
    debugBar.appendChild(colorEditor('--main-header-bg-color', 'Header BG', 'main-panel__header'));
    debugBar.appendChild(colorEditor('--main-content-bg-color', 'Main BG', 'main-panel__content-primary'));
    // debugBar.appendChild(colorEditor('--main-panel-bg-color', 'Panel BG'));
  }
});

window.addEventListener('resize', () => {
  console.log('resized');
  const focused = document.getElementById('focused');
  if (!focused) return;
  const related = document.querySelector(`.${focused.getAttribute('related')}`);
  if (!related) return;
  const bounds = related.getBoundingClientRect();
  focused.style.top = `${bounds.top}px`;
  focused.style.left = `${bounds.left}px`;
  focused.style.height = `${bounds.height}px`;
  focused.style.width = `${bounds.width}px`;
});

if(verElem) {
  verElem.textContent += version;
}
