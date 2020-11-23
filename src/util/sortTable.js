module.exports = function sortTalble(field, sort) {
    const sortType = field === sort.column ? sort.type : 'default';

    // các type và icon nó ngược lại
    let icons = {
        default: `<i class="fas fa-sort"></i>`,
        desc: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sort-alpha-up-alt" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4 14a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11a.5.5 0 0 0 .5.5z" />
                <path fill-rule="evenodd"
                    d="M6.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L4 3.207l1.646 1.647a.5.5 0 0 0 .708 0z" />
                <path
                    d="M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z" />
             </svg>`,
        asc: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sort-alpha-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 14a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11a.5.5 0 0 0 .5.5z"/>
            <path fill-rule="evenodd" d="M6.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L4 3.207l1.646 1.647a.5.5 0 0 0 .708 0z"/>
            <path d="M9.664 7l.418-1.371h1.781L12.281 7h1.121l-1.78-5.332h-1.235L8.597 7h1.067zM11 2.687l.652 2.157h-1.351l.652-2.157H11zM9.027 14h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055l-2.578 3.719V14z"/>
        </svg>`,
    };

    const types = {
        default: 'asc',
        asc: 'desc',
        desc: 'asc',
    };

    let icon, type;
    if (sort.type === 'asc' || sort.type == 'desc') {
        icon = icons[sortType];
        type = types[sortType];
    } else {
        icon = icons.default;
        type = types.asc;
    }
    return `<a href="?_sort&column=${field}&type=${type}" style="font-size:20px"> 
        ${icon}
    </a>`;
};
