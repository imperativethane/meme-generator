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
        //Create the URL string
        const url=`https://api.imgflip.com/caption_image?username=${username}&password=${password}&template_id=${id}`;
                 
        const text0 = () => {
            if (topCaption) {
                return `&text0=${topCaption}`
            } else {
                return ''
            }
        }
        
        const text1 = () => {
            if (bottomCaption) {
                return `&text1=${bottomCaption}`
            } else {
                return ''
            }
        }

        const address = url + text0() + text1();

        //Sennd POST Request
        return fetch(address, {
            method: 'POST'
        })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if (!jsonResponse.success) {
                return [];
            }
            return jsonResponse
            })
    }
}
