const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';

class StickerCollection {
    list = [];
    #api = new RestApi(API_URL);

    fetchList() {
        return this.#api.getList().then((data) => (this.list = data));
    }

    updateSticker(id,stickerDescription) {
        const item = this.list.find((item) => item.id === id);
        const updatedItem = {
            ...item,
            description:stickerDescription ,
        };

        return this.#api.update(updatedItem).then((data) => {
            this.list = this.list.map((item) =>
                item.id === data.id ? data : item
            );
        });
    }

    deleteSticker(id) {
        return this.#api.delete(id).then(() => {
            this.list = this.list.filter((item) => item.id !== id);
        });
    }

    createSticker(data) {
        return this.#api
            .create(data)
            .then((newSticker) => (this.list = [...this.list, newSticker]));
    }
}