module.exports = {
    posts: [
        {
            id: "dgdfgr",
            title: "Teste do Mural",
            description: "Descricao teste"
        },
    ],
    getAll() {
        return this.posts;
    },
    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description })
    },
    deletePost(id) {
        
    }
}
