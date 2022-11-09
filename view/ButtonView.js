class ButtonView {
    static buttonTemplate = `
            <div class="sticker-list u-full-width">
                    <button>Add Stiker</button>
            </div>
    `;

    #config = null;

    constructor(config) {
        this.#config = config;
        this.#initView();
    }

    #initView() {
        this.$el = $(ButtonView.buttonTemplate);

        this.$el.on('click', (e) => {
            e.preventDefault();
            this.#config.onSave();
        });
    }
}