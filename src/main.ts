import './facade.scss';

const rootGet = getComputedStyle(document.body);
const rootSet = document.documentElement;
const debugBar = document.querySelector('.debug-bar');
const pulldown = document.querySelector('.pull-down');

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
    case val.length < 3: {
      return;
    };
    case val.length === 4: {
    }
    case val.length === 7: {
      setColor(prop, e.target.value);
    }
    default: {
      return;
    }
  }
}

const colorEditor = (prop: string, label: string): HTMLElement => {
  const customProp = getColor(prop);

  const div = document.createElement('div');
  const input = document.createElement('input');

  input.value = customProp;
  input.maxLength = 7;
  input.addEventListener('keyup', e => {
    updateColorEv(e, prop);
  });

  div.innerHTML = `
<label>${label.charAt(0) + label.slice(1)}</label>
`;
  div.appendChild(input);
  return div;
}

window.addEventListener('load', () => {
  if (debugBar) {
    debugBar.appendChild(colorEditor('--server-bar-bg-color', 'Server BG'));
    debugBar.appendChild(colorEditor('--group-bar-bg-color', 'Group BG'));
    debugBar.appendChild(colorEditor('--channel-bar-bg-color', 'Channel BG'));
    debugBar.appendChild(colorEditor('--main-header-bg-color', 'Header BG'));
    debugBar.appendChild(colorEditor('--main-content-bg-color', 'Main BG'));
    debugBar.appendChild(colorEditor('--main-panel-bg-color', 'Panel BG'));
  }
})
