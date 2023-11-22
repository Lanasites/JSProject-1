export default {
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                ingredients: './ingredients.html',
                cocktails: './cocktails.html',
                "reg-form": './reg-form.html',
                "sign-in-form": './sign-in-form.html',
                "profile-and-favourites": './profile-and-favourites.html',
                "recipe-cocktail": './recipe-cocktail.html',
                404: './404.html',
                favourites: './favourites.html',
            },
        },
    },
};
