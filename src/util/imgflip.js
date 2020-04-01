export const Imgflip = {
    getMemes() {
        return fetch('https://api.imgflip.com/get_memes')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if (!jsonResponse.success) {
                return [];
            }
            return jsonResponse.data.memes.map(meme => ({
                id: meme.id,
                name: meme.name,
                url: meme.url,
            }))
        })
    },

    createMeme(username, password, id, topCaption, bottomCaption) {
        if (typeof username !== 'string' || typeof password !== 'string') {
            return;
        }

        const url=`https://api.imgflip.com/caption_image?username=${username}&password=${password}`;
        
        const template_id = () => {
            if (id) {
                return `&template_id=${id}`
                   }
        }
                   
        const text0 = () => {
            if (topCaption) {
                return `&text0=${topCaption}`
            }
        }
        
        const text1 = () => {
            if (bottomCaption) {
                return `&text1=${bottomCaption}`
            }
        }

        const address = url + template_id + text0 + text1;

        fetch(address, {
            method: 'POST'
        })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            console.log(jsonResponse)
        })
    }
}
