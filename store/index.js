export const state = () => ({
    pictureOfTheDay: "",
    totalItems: 0,
    cart: {
            
    }
})

export const mutations = {
    updatePictureOfTheDay:(state, payload) =>{
        state.pictureOfTheDay = payload
    },

    addToCart:(state, payload) =>{
        console.log(payload.exhibit);
        if(state.cart[payload.exhibit] == null){
            state.cart[payload.exhibit] = 1
        }else{
            state.cart[payload.exhibit] += Number(1);    
        }        
        state.totalItems += 1;
        console.log(state.cart);
    }
}

export const actions = {
    async getPictureOfTheDay ({state, commit}) {
        if (state.pictureOfTheDay.length){
            return
        }
        let url = "https://api.nasa.gov/planetary/apod?api_key=7IICMqaX15yv81N5cnnzFdD7SL0rqtUw4Jzw1pXC"
        try{
            let pictureOfTheDay = await fetch(
                "https://api.nasa.gov/planetary/apod?date=2017-11-05&api_key=7IICMqaX15yv81N5cnnzFdD7SL0rqtUw4Jzw1pXC"
            ).then(res => res.json())

            console.log(pictureOfTheDay);
            commit("updatePictureOfTheDay", pictureOfTheDay);
        }catch(err){
            console.log("error while fetching: " + err)
        }
    }


}