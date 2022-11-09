class StickersListView {
    $el = null;
    #config = null;

    static CLASSES = {
        STICKER_ITEM_CLASS: 'sticker-item',
        DELETE_BTN_CLASS: 'delete-btn',
    };

    static stickersListTemplate = `
        <div class="sticker-list u-full-width"></div>
    `;

    static stickerITemTemplate = `
             <div class="sticker-item " data-sticker-id="{{id}}">
                <span class="delete-btn">x</span>
                <textarea cols="10"> {{description}}</textarea>
            </div>
    `;

    static generateStickerItemHtml({ id, description}) {
        return StickersListView.stickerITemTemplate
            .replaceAll('{{description}}', description)
            .replaceAll('{{id}}', id);
    }

    static getStickerId(el) {
        const parent = el.closest('.' + StickersListView.CLASSES.STICKER_ITEM_CLASS);

        return parent ? parent.dataset.stickerId : null;
    }

    constructor(config) {
        this.#initView();
        this.#config = config;
    }

    #initView() {
        this.$el = $(StickersListView.stickersListTemplate);

        this.$el.on('click', (e) => {
            const stickerId = StickersListView.getStickerId(e.target);
                if( e.target.classList.contains(
                    StickersListView.CLASSES.DELETE_BTN_CLASS
                )){
                    return this.deleteSticker(stickerId);
                }
            });
        
        this.$el.on('change',(e)=>{
            const stickerDescription=e.target.value;
            const stickerId = StickersListView.getStickerId(e.target);
            return this.changeStickerDesc(stickerId,stickerDescription);
        });
    
     }
    
    renderList(list) {
        this.$el.html(list.map(StickersListView.generateStickerItemHtml).join(''));
    }
    changeStickerDesc(id,stickerDescription){
         this.#config.onUpdate(id,stickerDescription);
    }
    deleteSticker(id) {
        this.#config.onDelete(id); 
    }
}