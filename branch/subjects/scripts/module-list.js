const template = document.createElement('template');
template.innerHTML = `
<div class="sub" part="modules">
    <div part="modules-title">
        <slot name="section-name"></slot>
    </div>
    <div part="modules-content" class="list" style="max-height: 0">
        <ul part="modules__ul"></ul>
    </div>
</div>
`
class ModuleList extends HTMLElement {
    constructor() {
        super();
        this
            .attachShadow({ mode: "open" })
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const toggler = this.shadowRoot.querySelector('div[part=modules-title]');
        toggler.addEventListener('click', () => {
            const content = this.shadowRoot.querySelector('div[part=modules-content]');
            const style = content.getAttribute('style');
            const maxHeight = `${content.scrollHeight}px`;
            content.setAttribute('style', `max-height: ${style === `max-height: ${maxHeight}` ? '0' : maxHeight}`);
        });

        const modules = JSON.parse(this.dataset.list);
        const list = this.shadowRoot.querySelector('ul');
        if (modules?.length) {
            for (let index = 0; index < modules.length; index++) {
                const item = document.createElement('li');
                item.setAttribute('part', 'module__li');
                item.innerHTML = `
                <a target="_blank" rel="noopener noreferrer" part="module__li__a" href="${typeof modules[index] === 'string' ? modules[index] : modules[index].href}">
                    ${modules[index].title || `Module ${index + 1}`}
                </a>`
    
                list.appendChild(item);
            }
        }
    }

    disconnectedCallback() {
        const toggler = this.shadowRoot.querySelector('div[part=modules-title]');
        toggler.removeEventListener('click');
    }
}

window.customElements.define('module-list', ModuleList);