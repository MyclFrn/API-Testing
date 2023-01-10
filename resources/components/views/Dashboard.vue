<template>
    <div class="card" style="width: 18rem;">
        <div class="card" v-for="post in posts">
            <div class="card-body" >
                <h5 class="card-title">{{ post.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ post.created_at }}</h6>
                <a href="#" class="card-link">{{ post.author.name }}</a>
                <a href="#" class="card-link">Comentarios</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            posts: []
        };
    },
    async mounted(){
        try{
            const blog = await axios({
                method: 'post',
                url: 'http://blog.demo:8000/graphql',
                data:{
                    query: `
                    query{
                        posts(orderBy:[{column:CREATED_AT, order:DESC}]){
                            data{
                                id
                                title
                                created_at
                                author
                                {
                                    name
                                }
                            }
                        }
                    }`
                }
            });
        this.posts = blog.data.data.posts.data;
        } catch (error){
            console.erro(error);
        }
    }
}
</script>
