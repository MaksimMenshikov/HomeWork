class StickerController {
    #collection = null;
    #listView = null;
    #buttonView = null;

    constructor($container) {
        this.#buttonView = new ButtonView({
            onSave: (data) => this.createSticker(data),
        });
        $container.append(this.#buttonView.$el);
        this.#listView = new StickersListView({
            onUpdate: (id,description) => this.updateSticker(id,description),
            onDelete: (id) => this.deleteSticker(id),
        });

        $container.append(this.#listView.$el);

        this.#collection = new StickerCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    updateSticker(id,stickerDescription) {
        this.#collection.updateSticker(id,stickerDescription).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    deleteSticker(id) {
        this.#collection.deleteSticker(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    createSticker(data) {
        this.#collection.createSticker(data).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
}